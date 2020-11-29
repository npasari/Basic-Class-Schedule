const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    subject: {
        type: String,
        uppercase: true,
        required: true
    },
    course: {
        type: Number,
        required: true
    },
    component: {
        type: String,
        required: true
    },
    section: {
        type: Number,
        required: true
    },
    days: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
    },
    from:{
        type: String,
        required: true
    },
    till: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    instructionMode: {
        type: String,
        required: true
    },
    building: {
        type: String,
    },
    room: {
        type: String,
    },
    instructor:{
        type: String,
        required: true
    },
    enrlCap:{
        type: Number,
        required: true
    },
    waitCap: {
        type: Number,
    }
})

// const scheduleSchema = new mongoose.Schema({
//     subject: {
//         type: String,
//         uppercase: true,
//         required: true
//     },
//     course: {
//         type: Number,
//         required: true
//     },
//     component: {
//         type: String,
//         required: true
//     },
//     section: {
//         type: Number,
//         required: true
//     },
//     days: {
//         type: String,
//         required: true
//     },
//     instructionMode: {
//         type: String,
//         required: true
//     }
// })

const Course = mongoose.model('Course', courseSchema);
// const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Course;