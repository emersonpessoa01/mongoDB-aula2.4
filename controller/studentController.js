//para tratamento e persistencia de dados
import { db } from "../models/index.js";

//criando objeto global
const Student = db.student;

//função create(metodo post) do CRUD
const create = async (req, res) => {
  const {name, subject, type,value} = req.body
  const student = new Student({
    name,
    subject,
    type,
    value,
  });

  try {
    const data = await student.save();

    res.send(data);
  } catch (err) {
    res.status(400).send({ message: `Erro ao inserir student ${error}` });
  }
};

//BUSCAR TUDO(método get)
const findAll = async (req, res) => {
  try {
    const data = await Student.find({});

    res.send(data);
  } catch (err) {
    res.status(400).send({ message: `Erro ao buscar todos students ${error}` });
  }
};

//BUSCAR PELO ID(metodo get)
const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Student.findById({ _id: id });

    res.send(data);
  } catch (err) {
    res
      .status(400)
      .send({ message: `Erro ao buscar student id ${id} ${error}` });
  }
};

//Atualizar dados(metodo put)
const update = async (req, res) => {
  try {
    const data = await Student.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!data) {
      res.send(`Student id ${id} not found`);
    } else {
      res.send("Student atualizado com sucesso");
    }
  } catch (err) {
    res
      .status(400)
      .send({ message: `Erro ao atualizar o Student id ${id} ${error}` });
  }
};

//deletar documentos(metodo delete)
const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Student.findOneAndDelete({ _id: id });

    if (!data) {
      res.send(`Student id ${id} not found`);
    } else {
    res.send(`Student excluido com sucesso - ${data}`);
    }
  } catch (err) {
    res
      .status(400)
      .send({ message: `Erro ao excluir o Student id ${id} ${error}` });
  }
};

export default { create, findAll, findOne, update, remove };
