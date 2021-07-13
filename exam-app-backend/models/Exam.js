const mongoose = require("mongoose")
mongoose.set("debug", true);
const OptionSchema= mongoose.Schema(
    {
        number: Number,
        text: String,
        isCorrect: Boolean
    }

)

const QuestionSchema = mongoose.Schema(
    {
       number:{
           type:Number,
           required:false
       },
       text: {
           type: String,
           required: true
       },
       options:
       {
           type: [{type: OptionSchema}],
           required:true
       },


    }
)

const ExamSchema = mongoose.Schema(
    {
        questions: [{type: QuestionSchema}],
        marks: Number,
        negMarks: Number,
        subject: String,
        setBy: String,
        pattern: String



    }
);
module.exports=mongoose.model("Exams",ExamSchema);