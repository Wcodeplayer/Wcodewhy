const program = require("commander");

const help_option =()=>{
    //add my option
    program.option("-first -f","the first option for help");
    program.option("--create",'clone the project')


    program.on("--help",function(){
        console.log("------x---x------");
        console.log("Help list upside");
    })
}

module.exports = help_option