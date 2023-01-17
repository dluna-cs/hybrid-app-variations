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

function execute(command, options) {
  return execSync(command, { stdio: 'inherit', ...options });
}

/**
 * 
 * @param {string} framework the UI framework to build (angular, react, vue)
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 */
function prepare(framework, wrapper) {
  const source = buildAssets[framework];
  const dest = wrapperSrc[wrapper];

  if (!source) {
    console.error(`UI framework ${framework} unknown. Available ones are ${Object.keys(buildAssets)}`);
    process.exit(-1);
  }
  if (!dest) {
    console.error(`Native wrapper ${wrapper} unknown. Available ones are ${Object.keys(wrapperSrc)}`);
    process.exit(-1);
  }

  console.log(`Preparing ${framework} project for ${wrapper} wrapper.`)
  execute('npm run build', { cwd: `${rootPath}/packages/app-${framework}` });
  execute(`cp -r ${source}/* ${dest}`);
}

/**
 * 
 * @param {string} framework the UI framework to build (angular, react, vue)
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 * @param {string} platform the platform to run (android, ios)
 */
function run(framework, wrapper, platform) {
  console.log('run', arguments)
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
const commands = { prepare, run, restore };
const commandFn = commands[command];

if (!commandFn) {
  console.log(`CLI command ${command} does not exist.`)
  process.exit(-1);
}

// Run the action
console.log(`Running command ${command} with arguments ${args}`)
commandFn.apply(null, args);