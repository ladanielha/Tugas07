const express = require("express");
const { BarangRouter } = require("./barang/barang.router");
const { ROUTER_BASE_BARANG } = require("./barang/barang.config");
const { MongoDBConnection } = require("./libs/lib.database");
const { ROUTER_BASE_USER } = require("./user/user.config");
const { UserRouter } = require("./user/user.router");
const { ROUTER_BASE_CUSTOMER } = require("./customer/customer.config");
const { CustomerRouter } = require("./customer/customer.router");
const { ROUTER_BASE_ORDER } = require("./order/order.config");
const { OrderRouter } = require("./order/order.router");
const cors = require("cors");
const { ROUTER_BASE_KAS } = require("./kas/kas.config");
const { KasRouter } = require("./kas/kas.router");
const app = express();

MongoDBConnection();

app.use(express.json());
app.use(cors({
  origin:"*"
}));

app.use(ROUTER_BASE_BARANG, BarangRouter);
app.use(ROUTER_BASE_USER, UserRouter);
app.use(ROUTER_BASE_CUSTOMER, CustomerRouter);
app.use(ROUTER_BASE_ORDER, OrderRouter);
app.use(ROUTER_BASE_KAS, KasRouter);

module.exports = {
  app
}