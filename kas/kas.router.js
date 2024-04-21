const express = require("express");
const { KasList, KasCreate } = require("./kas.controller");
const { IsAuthenticated, Validate } = require("../libs/lib.middleware");
const { KasNomorValidator, KasTanggalValidator, KasJumlahKeluarValidator, KasJumlahMasukValidator } = require("./kas.validation");

const KasRouter = express.Router();

KasRouter.get("/",[IsAuthenticated], KasList)
// KasRouter.post("",[IsAuthenticated, 
//     Validate([
//         KasNomorValidator(),
//         KasJumlahKeluarValidator(),
//         KasJumlahMasukValidator(),
//         KasTanggalValidator(),
//     ])], KasCreate)

module.exports = {
    KasRouter
}