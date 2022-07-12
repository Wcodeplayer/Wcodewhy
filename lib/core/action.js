const { promisify } = require('util');
const download = promisify(require("download-git-repo"));
const { myRepo } = require("../config/repo-config.js");
const { commandSpawn } = require("../utils/terminal");

const createProjectAction = async (project) =>{
    //1.clone project
    
    await download(myRepo,project,{clone: true});

    //2.npm install

    await commandSpawn("npm",["install"],{cwd:`./${project}`})
    //3.npm run serve

    //4.open it in the chrome
}


module.exports = {
    createProjectAction
}