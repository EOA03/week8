import express, {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {trackers} from "./data";

const routes:Express = express();
routes.use(bodyParser.json());

routes.get("/transactions", (req, res)=>{
    res.json({
        trackers,
    })
})

routes.get("/transactions/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const tracker = trackers.find((p)=> p.id===id);
    if(tracker){
        res.json({
            tracker,
        });
    }
    else{
        res.status(404).json({
            message:"Transaksi tidak ditemukan",
        });
    }
})

routes.post("/transactions", (req, res)=>{
    trackers.push(req.body);
    res.status(201).json({
        trackers,
    })
})

routes.put("/transactions/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const tracker = trackers.findIndex((p)=>p.id === id);
    if(tracker!==-1){
        const updatedTracker = {
            id: req.body.id,
            type: req.body.type,
            name: req.body.name,
            amount: req.body.amount,
            date: req.body.date,
            details: req.body.details,
        };
        trackers[tracker] = updatedTracker;
        res.json(updatedTracker);
    }
    else{
        res.status(404).json({
            message: "Transaksi tidak ditemukan"
        })
    }
})

routes.patch("/transactions/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const tracker = trackers.findIndex((p)=>p.id === id);
    if(tracker!==-1){
        const updatedTracker = {
            ...trackers[tracker],
            ...req.body,
        };
        trackers[tracker] = updatedTracker;
        res.json(updatedTracker);
    }
    else{
        res.status(404).json({
            message: "Transaksi tidak ditemukan"
        })
    }
})

routes.delete("/transactions/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const tracker = trackers.findIndex((p)=>p.id === id);
    if(tracker!==-1){
        const deletedTracker = trackers.splice(tracker, 1)[0];
        res.json(deletedTracker);
    }
    else{
        res.status(404).json({
            message: "Transaksi tidak ditemukan"
        })
    }
})

export default routes;