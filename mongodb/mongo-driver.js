import { MongoClient } from "mongodb";
 // 1) import the mongodb 
 // 2) create an instance 
 //3) connect to mongoDb
 // 4) create an DB
const client=new MongoClient("mongodb://localhost:27017") // created an instance 
await client.connect(); // then connect
const db= client.db("mongodb_nodejs_db");
const userCollection=db.collection("users");

// userCollection.insertOne({ name:"sush", 
//     age:21,
//     course:"data science",
//     degree:" Bachelors of engineering "
// })

// userCollection.insertMany([
//     { name:"sush", 
//     age:51,
//     course:"ai and ml",
//     degree:" Bachelors of engineering "
// },
// { name:"sush", 
//     age:21,
//     course:"data science",
//     degree:" Bachelors of engineering "
// },
// { name:"sush", 
//     age:24,
//     course:"computer science and engineering ",
//     degree:" Bachelors of engineering "
// }
// ]);


// Read operation 
// const usersCursor=userCollection.find();
// console.log(usersCursor);

// for  await (const user of usersCursor){
//     console.log(user);
// }
// const usersCursor=await userCollection.find().toArray();
// console.log(usersCursor);

// Find one colletion

// const users= await userCollection.findOne({ age:51});
// console.log(users.name);
// console.log(users._id.toHexString());

// update 
//await userCollection.updateOne({course:"ai and ml"},{$set:{age:22}});

// delete

await userCollection.deleteOne({course:"ai and ml"});