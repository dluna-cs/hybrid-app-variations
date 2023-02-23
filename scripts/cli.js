const { execSync } = require('child_process');

// Get params
const [nodePath, cliPath, sh, ...params] = process.argv;
const rootPath = cliPath.replace('/scripts/cli.js', '');


const buildAssets = {
  pokemon: `${rootPath}/packages/app-angular/dist/PokeApp`,
  angular: `${rootPath}/packages/app-angular/dist/app-angular`,
  react: `${rootPath}/packages/app-react/build`,
  // vue: `${rootPath}/packages/app-react/build`,
};
const wrapperSrc = {
  capacitor: `${rootPath}/packages/capacitor-testing/dist`,
  cordova: `${rootPath}/packages/cordova-testing/www`,
};

function usage(erroMsg) {
  if (erroMsg) {
    console.error(`Error::${erroMsg}\n\n`);
  }
  console.log([
    'Hybrid Apps Variatoins CLI:',
    'This utility helps you build and try different frameworks with x-platform frameworks.',
    '',
    'Supported x-platform Frameworks: capacitor | cordova',
    '',
    'Usage: npm run cli <command> <arguments>',
    '',
    'Available Commands:',
    '  - build: builds for the given frameworks and platform. Params are',
    '    * app: the UI Application to use for the build (pokemon|angular|react)',
    '    * frameworkNavite: the native framework to use for the build (capacitor|cordova)',
    '    * platform: the mobile platform you like to build for (android|ios)',
    '',
    '  - install: installs plugins defined for the native framework passed. Params are',
    '    * frameworkNavite: the native framework where to install the plugins',
    '',
    '  - restore: resets all changes on the given native framework folder. Params are',
    '    * frameworkNavite: the native framework where to reset',
    '',
  ].join('\n'));
}

function validateApp(app) {
  const appKeys = Object.keys(buildAssets);

  if (appKeys.indexOf(app) === -1) {
    usage(`UI App ${app} unknown. Available ones are ${appKeys}`);
    process.exit(-1);
  }
}
function validateWrapper(wrapper) {
  const wrapperKeys = Object.keys(wrapperSrc);

  if (wrapperKeys.indexOf(wrapper) === -1) {
    usage(`Native wrapper ${wrapper} unknown. Available ones are ${wrapperKeys}`);
    process.exit(-1);
  }
}

/**
 * Runs the command adding console output as default stio
 *
 * @param {String} command 
 * @param {ExecOptions} options 
 * @returns 
 */
function execute(command, options) {
  return execSync(command, { stdio: 'inherit', ...options });
}

/**
 * Does the build of UI and wrapper for the platform
 * @param {string} app the UI app to build (angular, react, pokemon)
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 * @param {string} platform the platform to build for (android, ios)
 */
function build(app, wrapper, platform) {
  // Validations
  validateApp(app);
  validateWrapper(wrapper);
  if (platform !== 'android' && platform !== 'ios') {
    console.error(`Platform ${platform} unknown. Available ones are android & ios`);
    process.exit(-1);
  }

  // Make sure platform is there
  if (wrapper === 'cordova') {
    console.log(`Ensuring ${platform} for ${wrapper} is present.`)
    execute(`cordova platform add ${platform} || true`, { cwd: `${rootPath}/packages/${wrapper}-testing` });
  }

  const source = buildAssets[app];
  const dest = wrapperSrc[wrapper];
  const wrapperCli = wrapper === 'cordova' ? 'cordova' : 'npx cap';

  console.log(`Preparing ${app} project for ${wrapper} wrapper.`)
  execute('npm run build', { cwd: `${rootPath}/packages/app-${app}` });
  execute(`cp -r ${source}/* ${dest}`);
  execute(`${wrapperCli} build ${platform}`, { cwd: `${rootPath}/packages/${wrapper}-testing` });
}

/**
 * Installs plugins on the given wrapper
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 */
function install(wrapper) {
  // Fail fast
  if (wrapper !== 'cordova') {
    usage(`Install of ${wrapper} plugins not supported.`);
    process.exit(-1);
  }

  const output = execSync(`ls | grep ${wrapper}-plugin`, { cwd: `${rootPath}/packages` }).toString();
  const plugins = output.split('\n').filter(p => !!p);
  
  for (const p of plugins) {
    execute(`cordova plugin add ../${p}`, { cwd: `${rootPath}/packages/${wrapper}-testing`})
  }
}

/**
 * 
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 */
function restore(wrapper) {
  // Fail fast
  validateWrapper(wrapper);
  
  const wrapperPath = `${rootPath}/packages/${wrapper}-testing`
  execute(`git clean -xdf`, { cwd: wrapperPath });
  execute(`git restore -s@ -SW  -- packages/${wrapper}-testing`, { cwd: rootPath });
  execute(`npm i`, { cwd: wrapperPath });
}


// Main process
const [command, ...args] = params;
const commands = { build, install, restore };
const commandFn = commands[command];

if (!commandFn) {
  usage(`CLI command ${command} does not exist.`)
  process.exit(-1);
}

// Run the action
console.log(`Running command ${command} with arguments ${args}`)
commandFn.apply(null, args);