const { readdirSync, writeFileSync } = require('fs');
const { execSync } = require('child_process');

function main(version) {
  const pkgs = getKamiappPkgs();

  Object.keys(pkgs).forEach(key => {
    const pkg = pkgs[key];
  
    if (!pkg.dependencies) {
      return;
    }
  
    pkg.dependencies = updateKamiappDep(pkg.dependencies, version);
    writeFileSync(`./packages/${key}/package.json`, JSON.stringify(pkg, null, 2));
  });
}

function getKamiappPkgs() {
  return readdirSync('./packages').reduce((pkgs, name) => {
    if (name) {
      pkgs[name] = require(`../packages/${name}/package.json`);
    }
  
    return pkgs;
  }, {});
}

function updateKamiappDep(deps, version) {
  return Object.keys(deps).reduce((d, name) => {
    const [namespace] = name.split('/');

    if (namespace === '@kamiapp') {
      d[name] = version;
    }

    return d;
  }, deps)
}

const version = process.argv.at(2); 

if (!version) {
  throw new Error('Missing version !');
}

main(version)
execSync(`chan release ${version}`);
execSync(`npm version ${version} --workspaces`);
execSync(`git add .`);
execSync(`npm version ${version} --force`);