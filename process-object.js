const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

console.log('🌍 Environment:', ENV);
console.log('🚪 Port:', PORT);
console.log(process.cwd());// aa current working directory batave che
console.log(process.pid);// aa current process id batave che
console.log(process.env.DB_HOST);// aa db kayu host te batave