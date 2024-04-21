const { body } = require("express-validator");
const { KasModel } = require("./kas.model");

const KasNomorValidator = (target="nomor") => {
    return body(target)
    .exists()
    .withMessage("Field harus tersedia!")
    .bail()
    .notEmpty()
    .withMessage("Field tidak boleh kosong.")
    .bail()
    .isLength({ min: 6, max: 6 })
    .withMessage("Field hanya menerima tepat 6 karakter.")
    .bail()
    .custom(async (nomor) => {
      const kas = await KasModel.findOne({nomor});
      if (kas) {
        throw new Error("Nomor sudah digunakan")
      }
    })
    .bail()
  }

  const KasTanggalValidator = (target="tanggal") => {
    return body(target)
      .exists()
      .withMessage("Field harus tersedia!")
      .bail()
      .notEmpty()
      .withMessage("Field tidak boleh kosong.")
      .bail()
      .isDate({format: "YYYY-MM-DD"})
      .withMessage("Format harus YYYY-MM-DD")
      .bail()
  }

  const KasJumlahKeluarValidator = (target="jumlahkeluar") => {
    return body(target)
      .exists()
      .withMessage("Field harus tersedia!")
      .bail()
      .notEmpty()
      .withMessage("Field tidak boleh kosong.")
      .bail()
      .isInt()
      .withMessage("Field harus bilangan bulat.")
      .bail()
  }

  const KasJumlahMasukValidator = (target="jumlahmasuk") => {
    return body(target)
      .exists()
      .withMessage("Field harus tersedia!")
      .bail()
      .notEmpty()
      .withMessage("Field tidak boleh kosong.")
      .bail()
      .isInt()
      .withMessage("Field harus bilangan bulat.")
      .bail()
  }

  module.exports ={
    KasJumlahKeluarValidator,
    KasJumlahMasukValidator,
    KasNomorValidator,
    KasTanggalValidator
  }