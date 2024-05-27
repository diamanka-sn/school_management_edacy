const express = require('express');
const classController = require('../controllers/classController');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/', classController.getAll.bind(classController));
router.get('/:id', classController.getById.bind(classController));
router.post('/', classController.create.bind(classController));
router.post('/:id/students', studentController.create.bind(studentController));
router.get('/:id/students', classController.getStudents.bind(classController));
router.put('/:id', classController.update.bind(classController));
router.delete('/:id', classController.delete.bind(classController));

module.exports = router;