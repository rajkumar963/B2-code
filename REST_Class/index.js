const express=require('express');
const app=express();

const port = 8080;
const path=require('path');

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')))

let posts=[
{
    username:"Rajkumar",
    content: "This is my first post"
},
{
    username:"Pammi",
    content:"This is my second post",
},
{
    username:"sonu ",
    content:"This is my third post"
},
];

app.get('/posts',(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get('/posts/new',(req,res)=>{
    res.render("new.ejs");
});

app.post('/posts',(req,res)=>{
   let {username,content}=req.body;
    posts.push({username,content});
    res.send("post request created");
})

app.listen(port,()=>{
    console.log(`listering on port ${port}`);
});