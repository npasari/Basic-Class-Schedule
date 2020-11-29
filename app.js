const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Course = require('./models/course');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/scheduleBuild', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MONGO CONNECTION WORKS");
    })
    .catch((err => {
        console.log("OH NO MONGO ERROR");
        console.log(err);
    }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));


//displays all the courses on the page
app.get('/courses', async (req, res)=>{
    const courses = await Course.find({})
    console.log(courses)
    res.render('courses/index', { courses })
})

//gives info of the course on clicking the url 
app.get('/courses/:id', async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id)
    res.render('courses/show', { course })
});

//gets the course id
app.get('/courses/schedule/:id', async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id)
    res.render('courses/schedule', { course })
})


//I want to add a course to the schedule page
app.post('/courses/addToSchedule/:id', async (req, res) => { 
    const { id } = req.params;
    const course = await Course.findById(id)
    res.render('courses/schedule', { course })  
})

//Deleting the course
app.delete('/courses/:id', async (req, res) => {
    const { id } = req.params;
    const delCourse = await Course.findByIdAndDelete(id);
    res.redirect('/courses');
})

app.listen(3000, () => {
    console.log('Server started!!!')
});