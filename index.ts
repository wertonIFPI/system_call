import * as fs from 'node:fs';


function createFileWithPhrase(phrase: string, fileName:string){
    const fileNameFormatter = fileName.split(" ").join("_")
    const path = "./"+ fileNameFormatter + ".txt"

    fs.writeFile(path, phrase, (err)=>{
        if(err){
            console.log(err)
        }

        console.log(`file created in ${path}`)
    });
}


createFileWithPhrase("Só alegria hahaha", "so_alegria");
