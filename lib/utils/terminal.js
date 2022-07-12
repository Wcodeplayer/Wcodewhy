//terminal commander
const { rejects } = require("assert")
const {exec,spawn} = require("child_process")
const { resolve } = require("path")

const commandSpawn = async (...args) =>{
    return new Promise((resolve,rejects) =>{
        const childProcess = spawn(...args);
        //返回进程
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        //将该进程的输出和错误反馈到父进程
        childProcess.on("close",()=>{
            resolve();
        })
    })
}

module.exports={
    commandSpawn
}