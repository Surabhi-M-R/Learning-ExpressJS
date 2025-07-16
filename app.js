
import express from 'express';
import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from 'url';

// ✅ Convert import.meta.url to __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

console.log("Outside route:");
console.log("__filename:", __filename);
console.log("__dirname:", __dirname);

app.get("/", (req, res) => {
    

    console.log("Inside route:");
    console.log("__filename:", __filename);
    console.log("__dirname:", __dirname);

    const homePagePath=path.join(import.meta.dirname,"public","index.html");
    res.sendFile(homePagePath);
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});

