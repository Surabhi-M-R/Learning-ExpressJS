import { MongoClient } from "mongodb";
 // 1) import the mongodb 
 // 2) create an instance 
 //3) connect to mongoDb
 // 4) create an DB
const client=new MongoClient("mongodb://localhost:27017") // created an instance 
await client.connect(); // then connect
const db= client.db("mongodb_nodejs_db");
const userCollection=db.collection("users");

userCollection.insertOne({ name:"sush", 
    age:21,
    course:"data science",
    degree:" Bachelors of engineering "
})

