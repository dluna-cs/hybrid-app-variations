const { execSync } = require('child_process');

/**
 * Pre-commit hook which stops the process if there are changes into cordova/capacitor folders
 * @param {String} cwd path the the root of the project
 */
function preCommit(root) {
  const output = execSync('git status', { cwd: root }).toString();
  const changes = output.split('\n').filter((line) => {
    return line.includes('packages/cordova') || line.includes('packages/capacitor');
  });

  if (changes.length) {
    console.error([
      'Your commit has changes to the native projects!!!',
      '  - revert changes or additions into capacitor or cordova projects and commit',
      '  - if you wish to proceed use the --no-verify flag to your commit command',
    ].join('\n'));
    process.exit(-1);
  }
}


// Get params
const [nodePath, cliPath, sh, hook] = process.argv;
const rootPath = cliPath.replace('/scripts/hooks.js', '');

// Main process
const hooks = { preCommit };
const hookFn = hooks[hook];

if (!hookFn) {
  console.error(`CLI hook ${hook} does not exist.`)
  process.exit(-1);
}

// Run the action
console.log(`Running hook ${hook}`)
hookFn.apply(null, [rootPath]);