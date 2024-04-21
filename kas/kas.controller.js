const { Pagination } = require("../libs/lib.common");
const { ExceptionHandler } = require("../libs/lib.exception");
const { KasModel } = require("./kas.model");


async function KasList ( req, res) {
    try {
        const result =  KasModel.find();
        const paging = await Pagination(req, res, result);
        return res.status(200).json(paging);
    } catch (error) {
        console.log(error);
        return ExceptionHandler(error, res)
    }
}

async function KasCreate(orderData) {
    try {
      //console.log(orderData)
      // Buat kas baru berdasar model
    const kasEntry = new KasModel({
        nomor: orderData.nomor, // Nomor referensi dari order
        jumlahmasuk: orderData.dibayar,
        jumlahkeluar: 0,
        tanggal: orderData.tanggal
    });
    
      // Simpan kas
    await kasEntry.save();
  
    return kasEntry;
    } catch (error) {
    throw error;
    }
   }

module.exports = {
    KasList,
    KasCreate
}