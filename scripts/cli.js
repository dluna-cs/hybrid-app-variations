const { execSync } = require('child_process');

// Get params
const [nodePath, cliPath, sh, ...params] = process.argv;
const rootPath = cliPath.replace('/scripts/cli.js', '');


const buildAssets = {
  angular: `${rootPath}/packages/app-angular/dist/app-angular`,
  react: `${rootPath}/packages/app-react/build`,
  // vue: `${rootPath}/packages/app-react/build`,
};
const wrapperSrc = {
  capacitor: `${rootPath}/packages/capacitor/dist`,
  cordova: `${rootPath}/packages/cordova/www`,
};

function validateFramework(framework) {
  const frameworkKeys = Object.keys(buildAssets);

  if (frameworkKeys.indexOf(framework) === -1) {
    console.error(`UI framework ${framework} unknown. Available ones are ${frameworkKeys}`);
    process.exit(-1);
  }
}
function validateWrapper(wrapper) {
  const wrapperKeys = Object.keys(wrapperSrc);

  if (wrapperKeys.indexOf(wrapper) === -1) {
    console.error(`Native wrapper ${wrapper} unknown. Available ones are ${wrapperKeys}`);
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
 * @param {string} framework the UI framework to build (angular, react, vue)
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 * @param {string} platform the platform to build for (android, ios)
 */
function build(framework, wrapper, platform) {
  // Validations
  validateFramework(framework);
  validateWrapper(wrapper);
  if (platform !== 'android' && platform !== 'ios') {
    console.error(`Platform ${platform} unknown. Available ones are android & ios`);
    process.exit(-1);
  }

  const source = buildAssets[framework];
  const dest = wrapperSrc[wrapper];
  const wrapperCli = wrapper === 'cordova' ? 'cordova' : 'npx cap';

  console.log(`Preparing ${framework} project for ${wrapper} wrapper.`)
  execute('npm run build', { cwd: `${rootPath}/packages/app-${framework}` });
  execute(`cp -r ${source}/* ${dest}`);
  execute(`${wrapperCli} build ${platform}`, { cwd: `${rootPath}/packages/${wrapper}` });
}

/**
 * Installs plugins on the given wrapper
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 */
function install(wrapper) {
  // Fail fast
  if (wrapper !== 'cordova') {
    console.error(`Install of ${wrapper} plugins not supported.`);
    process.exit(-1);
  }

  const output = execSync(`ls | grep ${wrapper}-plugin`, { cwd: `${rootPath}/packages` }).toString();
  const plugins = output.split('\n').filter(p => !!p);
  
  for (const p of plugins) {
    execute(`cordova plugin add ../${p}`, { cwd: `${rootPath}/packages/${wrapper}`})
  }
}

/**
 * 
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 */
function restore(wrapper) {
  const wrapperKeys = Object.keys(wrapperSrc);

  if (wrapperKeys.indexOf(wrapper) === -1) {
    console.error(`Native wrapper ${wrapper} unknown. Available ones are ${wrapperKeys}`);
    process.exit(-1);
  }

  const wrapperPath = `${rootPath}/packages/${wrapper}`
  execute(`git clean -xdf`, { cwd: wrapperPath });
  execute(`git restore -s@ -SW  -- packages/${wrapper}`, { cwd: rootPath });
  execute(`npm i`, { cwd: wrapperPath });
}


// Main process
const [command, ...args] = params;
const commands = { build, install, restore };
const commandFn = commands[command];

if (!commandFn) {
  console.log(`CLI command ${command} does not exist.`)
  process.exit(-1);
}

// Run the action
console.log(`Running command ${command} with arguments ${args}`)
commandFn.apply(null, args);