const Class = require("../schema/class");
const Student = require("../schema/student");
const CrudService = require("../services/crudService");

class StudentController extends CrudService {
  constructor() {
    super(Student);
  }
  async create(req, res) {
    try {
      const { name } = req.body;
      const student = new Student({ name, class: req.params.id });
      const newStudent = await student.save();

      await Class.findByIdAndUpdate(req.params.id , { $push: { students: newStudent } });

      res.status(201).json(newStudent);
    } catch (err) {
      console.log(err)
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new StudentController();