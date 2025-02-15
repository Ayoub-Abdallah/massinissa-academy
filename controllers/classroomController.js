const Classroom = require('../models/classroom');

// Example controller functions
exports.renderAllClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.render('classrooms', {classrooms});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createClassroom = async (req, res) => {
  try {
    let classroomData = req.body
    const classroom = new Classroom(classroomData);
    await classroom.save();
    res.json({ state: true, msg: "Classroom Created Successefully" })
    console.log('classroom created successfully:', classroom);
  } catch (error) {
    console.error('Error creating classroom:', error);
  }
};

exports.getClassById = async (req, res) => {
  try {
    const _id = req.params.id
    const classes = await Classroom.find({_id});
    console.log(classes)
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editClass = async (req, res) => {
  try {
    let _id = req.params.id
    
    const updatedClassroom = await Classroom.findByIdAndUpdate(_id, req.body, {new: true})
    console.log("updated teacher ")
    console.log(updatedClassroom )
    res.json({ state: true, msg: "Classroom Updated Successefully" })
  } catch (error) {
    console.error('Error updateing Classroom:', error);
  }
};

exports.deleteClass = async (req, res) => {
  try {
    let _id = req.params.id
    const deletedClass = await Classroom.findByIdAndDelete(_id);
    res.json({ state: true, msg: "Classroom Deleted Successefully" })
  } catch (error) {
    console.error('Error deleting classroom:', error);
  }
};



// Implement other controller functions similarly
