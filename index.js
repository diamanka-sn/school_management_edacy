const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization,multipart/form-data"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/school_management_db')
  .then(() => {
    console.log('Connexion reussie');
  })
  .catch((err) => {
    console.error('Echec', err);
  });

const classesRouter = require('./src/routes/classRoute');
const studentsRouter = require('./src/routes/studentRoute');

app.use('/api/classes', classesRouter);
app.use('/api/students', studentsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Lycée d\'Excellence de Dakar API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});