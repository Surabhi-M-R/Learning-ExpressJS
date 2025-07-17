
    // import express from 'express';
    // import { PORT } from './env.js';
    // import path from 'path';
    // import { fileURLToPath } from 'url';

    // // Convert import.meta.url to __filename and __dirname
    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = path.dirname(__filename);

    // const app = express();

    // // console.log("Outside route:");
    // // console.log("__filename:", __filename);
    // // console.log("__dirname:", __dirname);

    // // const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // // const json=await response.json();
    // // console.log(json);

    // // In newer version of node.js you can use top-level await without needing to wrap it in an async function.



    // const staticPath=path.join(import.meta.dirname,"public");

    // app.use(express.static(staticPath));


    // // app.get("/product",(req,res)=>{
    // //     console.log(req.query);
    // //     res.send(`<h1> My product page and user search for the product ${req.query.search}</h1>`);
    // // });

    // // app.get("/profile/:username/article/:slug", (req, res) => {
    // //       console.log(req.params);
    // //       //res.send(`<h1> My user name is ${req.params.username}</h1>`)  ;
    // //       const formatedSlug=req.params.slug.replace(/-/g," ");
    // //       res.send(`<h1> Article ${req.params.username} by ${formatedSlug}</h1>`)  ;
    // //     //res.sendFile(staticPath);
    // // });

    // // app.get("/contact",(req,res)=>{
    // //     res.send("hi");
    // // })

    // app.get("/contact",(req, res)=>{
    //     console.log(req.query);
    //     res.redirect("/");
    // })

    // app.listen(PORT, () => { 
    //     console.log(`Server is running at PORT: ${PORT}`);
    // });

import express from 'express';
import { PORT } from './env.js';
import path from 'path';
import { fileURLToPath } from 'url';

// ✅ Properly define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Correct way to serve static files from "public" folder
const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

// ✅ Handle GET form submission from /contact
app.get("/contact", (req, res) => {
    console.log("Query parameters from contact form:", req.query);
    res.redirect("/"); // redirect back to home page after submission
});

// ✅ Optional: Handle home page (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(PORT, () => { 
    console.log(`Server is running at PORT: ${PORT}`);
});

