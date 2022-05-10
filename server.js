const express = require('express');
const mongoose = require('mongoose');
const articelRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser : true, useUnifiedTopology : true
});

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    const articles = [{
        title: 'Test Article 1',
        createdAt: new Date(),
        description: 'Test Desctiprtion 1',
    },{
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Desctiprtion 2',
    },
    ];
    res.render('articles/index',{articles});
})

app.use('/articles',articelRouter);

app.listen(5000);