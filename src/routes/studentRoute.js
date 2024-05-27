const express = require('express');
const StudentController = require('../controllers/studentController');
const router = express.Router();

router.get('/', StudentController.getAll.bind(StudentController));
router.get('/:id', StudentController.getById.bind(StudentController));
router.post('/', StudentController.create.bind(StudentController));
router.put('/:id', StudentController.update.bind(StudentController));
router.delete('/:id', StudentController.delete.bind(StudentController));

module.exports = router;