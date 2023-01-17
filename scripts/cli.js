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

/**
 * 
 * @param {string} framework the UI framework to build (angular, react, vue)
 * @param {string} wrapper the wrapper to use (capacitor, cordova)
 * @param {string} platform the platform to run (android, ios)
 */
function prepare(framework, wrapper, /*platform*/) {
  // const wrapperBin = wrapper === 'capacitor' ? 'npx cap' : 'cordova' 
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

  execSync('npm run build', { cwd: `${rootPath}/packages/app-${framework}` });
  execSync(`cp ${source}/* ${dest}`);
  // execSync(`${wrapperBin} run ${platform}`, { cwd: `${rootPath}/packages/${wrapper}` });
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

// Main process
const [action, ...args] = params;
const actions = { prepare, run };
const actionFn = actions[action];

if (!actionFn) {
  process.exit(-1);
}

// Run the action
actionFn.apply(null, args);