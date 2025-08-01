import Student from "../models/student.js"

export function createStudent(req, res) {

    if(req.user == null){
        res.status(403).json({
            message : "Please login to create a student"
        })
        return
    }
    if(req.user.role != "admin"){
        res.status(403).json({
            message : "Please login as an admin to create a student"
        })
        return
    }

    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })
    student.save().then(
        ()=>{
            res.json({
                massage: "Student saved successfully"
            })
            console.log("Student saved successfully")
        
    }).catch(()=>{
        console.log("Student save is failed")
    })
}


export function getStudent(req, res) {
    Student.find().then(
        (students)=>{
            res.json(students)
            
            console.log("Student data fetch successfully")
        }
    ).catch(
        ()=>{
            res.json({
                message: "Failed to fetch students"
            })
        }
    )
}