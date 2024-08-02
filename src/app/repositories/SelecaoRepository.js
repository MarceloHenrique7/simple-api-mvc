import {consult} from "../database/connection.js";

class SelecaoRepository {
  //CRUD
  create(data) {
    const sql = "INSERT INTO selecoes SET ?";
    return consult(sql, data, "Não foi possivel inserir!!");
  }

  findAll() {
    const sql = "SELECT * FROM selecoes";
    return consult(sql, "Não foi possivel fazer essa consulta");
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?";
    return consult(sql, id, "Não foi possivel fazer essa consulta");
  }

  update(data, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?";
    return consult(sql, [data, id], "Não foi possivel atualizar!");
  }

  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?";

    return consult(sql, id, "Não foi possivel deletar");
  }
}

export default new SelecaoRepository();
