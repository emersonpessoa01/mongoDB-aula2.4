//colocando as configurações de banco de dados
import mongoose from "mongoose";
import studentModel from "../models/studentModel.js";

const db = {};
//db = informações de banco
//url, mongoose e podcast = modelo
// db.url = process.env.MONGOURL;
db.mongoose = mongoose;
db.student = studentModel(mongoose);

export { db };
