"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data");
const routes = (0, express_1.default)();
routes.use(body_parser_1.default.json());
routes.get("/transactions", (req, res) => {
    res.json({
        trackers: data_1.trackers,
    });
});
routes.get("/transactions/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const tracker = data_1.trackers.find((p) => p.id === id);
    if (tracker) {
        res.json({
            tracker,
        });
    }
    else {
        res.status(404).json({
            message: "Transaksi tidak ditemukan",
        });
    }
});
routes.post("/transactions", (req, res) => {
    data_1.trackers.push(req.body);
    res.status(201).json({
        trackers: data_1.trackers,
    });
});
routes.put("/transactions/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const tracker = data_1.trackers.findIndex((p) => p.id === id);
    if (tracker !== -1) {
        const updatedTracker = {
            id: req.body.id,
            type: req.body.type,
            name: req.body.name,
            amount: req.body.amount,
            date: req.body.date,
            details: req.body.details,
        };
        data_1.trackers[tracker] = updatedTracker;
        res.json(updatedTracker);
    }
    else {
        res.status(404).json({
            message: "Transaksi tidak ditemukan"
        });
    }
});
routes.patch("/transactions/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const tracker = data_1.trackers.findIndex((p) => p.id === id);
    if (tracker !== -1) {
        const updatedTracker = Object.assign(Object.assign({}, data_1.trackers[tracker]), req.body);
        data_1.trackers[tracker] = updatedTracker;
        res.json(updatedTracker);
    }
    else {
        res.status(404).json({
            message: "Transaksi tidak ditemukan"
        });
    }
});
routes.delete("/transactions/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const tracker = data_1.trackers.findIndex((p) => p.id === id);
    if (tracker !== -1) {
        const deletedTracker = data_1.trackers.splice(tracker, 1)[0];
        res.json(deletedTracker);
    }
    else {
        res.status(404).json({
            message: "Transaksi tidak ditemukan"
        });
    }
});
exports.default = routes;
