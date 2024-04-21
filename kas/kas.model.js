const mongoose = require("mongoose");

const KasObject = {
    nomor: {type: String, unique:true, require:true},
    jumlahkeluar: {type: Number, require:true},
    jumlahmasuk: {type: Number, require:true},
    tanggal: { type: Date }
}

const KasSchema = new mongoose.Schema(KasObject);

const KasModel = mongoose.model("Kas",KasSchema);

module.exports = { 
    KasObject,
    KasSchema,
    KasModel
}