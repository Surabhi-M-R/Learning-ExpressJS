
import express from 'express';
import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

console.log("Outside route:");
console.log("__filename:", __filename);
console.log("__dirname:", __dirname);

const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json=await response.json();
console.log(json);

// In newer version of node.js you can use top-level await without needing to wrap it in an async function.



const staticPath=path.join(import.meta.dirname,"public","index.html");
app.use(express.static(staticPath));

app.get("/", (req, res) => {

    res.sendFile(staticPath);
});

app.listen(PORT, () => { 
    console.log(`Server is running at PORT: ${PORT}`);
});

