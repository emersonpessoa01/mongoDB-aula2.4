//responsavel por chamar o Banco de Dados
import mongoose from "mongoose";
import mongooseDateFormat from "mongoose-date-format";

const leftPad = (value, count = 2, char = "0") => {
  let stringValue = value.toString();
  let newValue = stringValue;

  if (stringValue.length < count || stringValue.length % 10 === 0) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
};

const now = new Date();
const timer = `${leftPad(now.getDate())}/${leftPad(
  now.getMonth() + 1
)}/${leftPad(now.getFullYear())}`;
const hours = leftPad(now.getHours());
const minutes = leftPad(now.getMinutes());
const seconds = leftPad(now.getSeconds());
const formatted = `${hours}:${minutes}:${seconds}`;
const display = `${timer} - ${formatted}`;

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0)
        throw new Error("Valor negativo para a nota não permitifo ");
    },
  },
  lastModified: {
    type: Date,
    default: new Date,
  },
});

const studentModel = mongoose.model("student", studentSchema, "student"); //para criar student no singular
studentSchema.plugin(mongooseDateFormat)
export { studentModel };
