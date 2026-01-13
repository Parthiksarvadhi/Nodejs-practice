import fs from 'fs';
import { buffer } from 'stream/consumers';
// const readfile=fs.readFileSync('data.txt');
// console.log(readfile);

// buffer.toString('utf8');
// console.log(readfile);
//** differrent encoder to read bytes file that have store on disk */
// console.log(fs.readFileSync('data.txt','utf-8'))
// console.log(fs.readFileSync('data.txt','utf16le'))
// console.log(fs.readFileSync('data.txt','hex'))
// console.log(fs.readFileSync('data.txt','base64'))
// console.log(fs.readFileSync('data.txt','ascii'))
// console.log(fs.readFileSync('data.txt','latin1'))

//** write file  method */
// const data=fs.readFile('data.txt','utf-8');
// console.log(data); // aa ma erroe throw kare karean ke readfile e asynchrnous che
//  to tene handle karva mate callback function ni jarur pade
//** aa old method che je ma callback funtion pass kareiye  */
// const data=fs.readFile('data.txt','utf-8',(err,data)=>{
    
//     console.log(data);
// })

//** aa new method che je ma promise ne try catch with async and wait  */
// async function readFileData(){
// try{
//     const data=await fs.promises.readFile('data.txt','utf-8');
//     console.log(data.toString());
// }catch(err){
//     console.log(err);
// }}
// readFileData();


// const data2=fs.readFile('data.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });


const newfile=await fs.promises.writeFile('data2.txt','hello Parthik')// created file 
const updatefile=await fs.promises.appendFile('data2.txt','rohit!!')

const deletefile=await fs.promises.writeFile('data3.csv','name')
const deletenow=await fs.promises.unlink('data3.csv')

const renamefile=await fs.promises.rename('data2.txt','datanew.txt')

const readfile=await fs.promises.readFile('datanew.txt','utf8')// promise ni sathe await lakh vu pade 

// const filepath=fs.stat('datanew.txt',(err,stats)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(stats);
//     }
// })  
//console.log(filepath);
console.log(readfile);
console.log(process.cwd());

console.log( fs.readdirSync('./Git-practice'));// directory ma je file che te batave che
//console.log(fs.resolve('./Git-practice'));// aa file no absolute path batave che
