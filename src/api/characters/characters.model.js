const mongoose = require('mongoose');

const Schema = mongoose.Schema;//mayúscula pq es una clase dentro de mongoose

const characterSchema = new Schema(
    {
        name: { type: String, required:true },
        race: { type: String, enum: ["human", "saiyan", "android", "namekian", "unknown"], required: true, default: "unknown"},
        universe: { type: Number, min:0, max:12 },
        transform: { type: Boolean, default: false },
        genre: { type: String, enum: ["male", "female", "namekian", "angel", "genderless"], default: "genderless"},
    },
    {
        timestamps: true,
    }
);

const Character = mongoose.model('characters', characterSchema);//creamos el esquema y el modelo

module.exports = Character;