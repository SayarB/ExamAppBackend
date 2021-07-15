const express = require("express");
const Exam = require("../models/Exam");
const router = express.Router();
const getExam = (id)=>
{
    return {...exam, id: id}
}

router.get("/exam/:id",async (req, res)=>
{
    const id = req.params.id
    const data=await Exam.findById(id)
    res.status(200).send(data);
})
router.post("/exam", (req,res)=>
{
    
    const examData = req.body.exam
    
    
    const exam=new Exam(examData);
    exam.save().then((data)=>
    {
        res.status(200).send(data._id);
    }).catch(err=>
        {
            console.log(err);
            res.status(500).send("Internal Errors")
        })
    

})

router.get("/exam", async(req,res)=>
{
    try{
    const allExams= await Exam.find({});
    res.status(200).json(allExams);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})
module.exports=router;

