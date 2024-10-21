const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

//db cofiguration
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

const bookstoreSchema = new mongoose.Schema({
    bookTitle: String,
    authorName: String,
    imageUrl: String,
    category: String,
    description: String,
    bookPdfUrl: String,
    price:Number
  });

const bookModel = mongoose.model('book', bookstoreSchema);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload-book',async(req,res)=>{
    const data = req.body;
    await bookModel.create(data)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
//gat-all-books
app.get('/all-books',async(req,res)=>{
    await bookModel.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
//get-single-book
app.get('/book/:id',async(req,res)=>{
  const id = req.params.id;

  const result = await bookModel.findById({_id:id})
    if(!result){
      return res.json({message:"Book id is not found"});
    }
    res.json(result);
    // .then(result=>res.json(result))
    // .catch(err=>res.json(err))
})

//get book by category
app.get('/books-by-category/:category',async(req,res)=>{
  const category = req.params.category;
  await bookModel.find({category:category})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

//update book
app.put('/update-book/:id',async(req,res)=>{
  const id = req.params.id;
  const data = req.body;
  await bookModel.findByIdAndUpdate({_id:id}, data, {new: true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

//delete book
app.delete('/book/:id',async(req,res)=>{
  const id = req.params.id;
  // if(id !== _id){
  //   return res.err("Book id is not found");
  // }
  await bookModel.findByIdAndDelete({_id:id})
    .then(message=>res.json({message:"record deleted"}))
    .catch(err=>res.json(err))
})


app.listen(port, () => {
  console.log(`Book Store app listening on port ${port}`)
})