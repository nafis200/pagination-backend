const express = require('express')
const app = express()
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())
app.use(express.json())


console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.f8w8siu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri);


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // Send a ping to confirm a successful connection
    const coffeeCollection = client.db('emaJohnDB').collection('products')
    app.get('/products',async(req,res)=>{
       const cursor = coffeeCollection.find()
       const result = await cursor.toArray()
       res.send(result)
    })
   

    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('Hello World! it s me how are you')
  })



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  
