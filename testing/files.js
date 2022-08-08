const fs = require('fs')

// // reading file 
// fs.readFile('./files/flyer.png', (err, data)=>{
//     if (err) {
//         console.log(err);
//     }
// })

// // writing file 
// fs.writeFile('./files/text2.txt', 'hello node js', ()=>{
//     console.log('file was written');
// })

// // folders
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// } else {
//     fs.rmdir('./assets', (err)=>{
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }


// deleting files 
if (fs.existsSync('./files/text2.txt')) {
    fs.unlink('./files/text2.txt', (err)=>{
        if (err) {
            console.log(err);
        }
        console.log('deleted');
    })
}