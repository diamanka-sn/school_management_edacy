const Class = require('../schema/class');
const CrudService = require('../services/crudService');

class ClassController extends CrudService {
  constructor() {
    super(Class);
  }
  async getAll(req, res) {
    try {
      const classes = await this.model.find({}).populate('students');
      res.json(classes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getStudents(req, res) {
    try {
      const classId = req.params.id;
      const classData = await this.model.findById(classId).populate('students', 'name');

      if (!classData) {
        return res.status(404).json({ message: 'Class not found' });
      }

      const students = classData.students.map(student => ({
        id: student._id,
        name: student.name
      }));

      res.json(students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

}

module.exports = new ClassController();