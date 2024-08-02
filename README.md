Node.js Course
This is a backend application project developed in Node.js, using Express and MySQL for managing a table called "selecoes". The application includes CRUD (Create, Read, Update, Delete) operations for the selections table.

Technologies Used
Node.js: JavaScript runtime environment.
Express: Framework for creating the server and defining routes.
MySQL2: Library for connecting to and manipulating a MySQL database.
Nodemon: Tool for automatically restarting the server during development.
Installation
Clone the repository:

bash

    git clone https://github.com/your-username/curso-node-2.git
Navigate to the project directory:

Install dependencies:

    npm install  
Database Setup:
      Ensure that your MySQL database is running and that you have a table called selecoes. You can use the following SQL code to create the table:

sql:

    CREATE TABLE selecoes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL
    );
    
Update the connection credentials in src/database/connection.js with your database information:

javascript

    const connection = mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "bdcopa",
    });
    Scripts
    
Development:

To start the server in development mode with nodemon, use:

    npm run dev
API Endpoints:

    GET /selecoes: Returns all selections.
    GET /selecoes/
    : Returns a specific selection by ID.
    POST /selecoes: Creates a new selection.
    PUT /selecoes/
    : Updates an existing selection by ID.
    DELETE /selecoes/
    : Deletes a selection by ID.
    
Usage Examples:

Create a Selection:

    curl -X POST http://localhost:3000/selecao -H "Content-Type: application/json" -d '{"nome": "Selection A"}'
    
Get All Selections:

    
    curl -X GET http://localhost:3000/selecao
Update a Selection:

    curl -X PUT http://localhost:3000/selecao/1 -H "Content-Type: application/json" -d '{"nome": "Updated Selection"}'
    
Delete a Selection:

    curl -X DELETE http://localhost:3000/selecao/1
    Contributing
    
If you would like to contribute to the project, please submit a pull request or open an issue to discuss changes.

License
This project is licensed under the ISC License - see the LICENSE file for details.

