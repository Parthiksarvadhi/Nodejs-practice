import path from 'path';

/* 
path.join()	A combined path string	folder/file.txt
path.extname()	The file extension	.png
path.basename()	The filename + extension	script.js
path.dirname()	The folder name only	/users/projects
path.parse()	A full object with all parts	{ root: '/', dir: ... } */


const filepath=path.join('/node234js','/path-module.js');
console.log(filepath);
const extname=path.extname('path-module.jd');// aa file no extension batave che used when we 
//want to chek file type perfect che ke nai like image upload karva ma .jpg j joye ....
console.log(extname);

const basename=path.basename('file:///Users/sarvadhisolution/Desktop/Node-js/node-practice1/path-module.js');// aa file no name batave che 
console.log(basename);

console.log(path.dirname('/node-practice1/path-module.js'));// aa file no directory batave che

console.log(path.parse('/node-practice1/path-module.js'));// aa file no full object batave che