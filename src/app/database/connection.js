import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "bdcopa",
});

connection.connect();

/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} values valores a serem passados para o sql
 * @param {string} messageReject mensagem a ser exibida
 * @returns Objeto da Promisse
 */
export const consult = (sql, values = "", messageReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, result) => {
      if (error) {
        return reject(messageReject);
      } else {
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      }
    });
  });
};

export default connection;
