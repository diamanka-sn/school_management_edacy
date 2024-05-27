## 🚀 Lycée d'Excellence de Dakar - School Management Application - EDACY

### Introduction

Welcome to the Lycée d'Excellence de Dakar's School Management Application. This project aims to streamline the administrative processes of the school, providing a robust system for managing classes, students, and their respective enrollments. This application is designed to ensure efficiency and transparency for the administration, students, and parents.

### Features

- **Class Management**: Add, modify, and delete classes.
- **Student Enrollment**: Register students and assign them to specific classes.
- **Data Listing**: View a comprehensive list of all students and classes.

### Technologies Used

- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Version Control**: Git and GitHub

### Prerequisites

Ensure you have the following installed on your system:
- Node.js
- npm 
- Docker - MongoDB

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/diamanka-sn/school_management_edacy.git
   cd school_management_edacy
   ```

2. **Run**

   Navigate to the `school_management_edacy` directory and install the required dependencies.

   ```bash
   cd school_management_edacy
   npm install
   ```

   Create a `.env` file in the `school_management_edacy` directory and add your MongoDB connection string.

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   ```

   Start server.

   ```bash
   npm start
   ```

### 🔖 API Endpoints

- **Classes**
  - `GET /api/classes` - List all classes
  - `POST /api/classes` - Create a new class
  - `PUT /api/classes/:id` - Update a class
  - `DELETE /api/classes/:id` - Delete a class

- **Students**
  - `GET /api/students` - List all students
  - `GET /api/classes/:id/students` - List of all students in a class
  - `POST /api/classes/:id/students/` - Register a new student
  - `PUT /api/students/:id` - Update student information
  - `DELETE /api/students/:id` - Delete a student


### Documentation 

[Link to technical documentation](https://www.postman.com/elite-tech-innovation/workspace/api-school-management/collection/34504049-1a5b952e-fe43-4d02-8432-ec9e4b41bbfc?action=share&creator=34504049)

### Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.


### Contact

For any inquiries or support, please contact.
