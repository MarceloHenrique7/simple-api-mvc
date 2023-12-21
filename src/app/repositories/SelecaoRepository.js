import connection from "../database/connection.js";

class SelecaoRepository {
  //CRUD
  create(data) {
    const sql = "INSERT INTO selecoes SET ?";
    return new Promise((resolve, reject) => {
      connection.query(sql, data, (error, result) => {
        if (error) {
          return reject("Not was possible register");
        } else {
          // Fazer o parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM selecoes";
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) {
          return reject("Unable to locate");
        } else {
          // Fazer o parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?";
    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) {
          return reject("Unable to locate");
        } else {
          // Fazer o parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }

  update(data, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?";

    return new Promise((resolve, reject) => {
      connection.query(sql, [data, id], (error, result) => {
        if (error) {
          return reject("Not was possible update");
        } else {
          // Fazer o parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?";

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) {
          return reject("Not was possible Delete");
        } else {
          // Fazer o parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }
}

export default new SelecaoRepository();
