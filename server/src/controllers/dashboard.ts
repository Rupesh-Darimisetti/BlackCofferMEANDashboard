import { Request, Response } from "express";
import dashboard from "../models/dashboard";

const dashboardController = {
    getAllData: async (req: Request, res: Response) => {
        try {
            const data = await dashboard.find({});
            res.json(data);
        } catch (error) {
            console.error('Error fetching data: ', error)
            res.status(500).json({ error: "Internal server Error" });
        }
    },
    uploadData: async (req: Request, res: Response) => {
        const body = req.body;
        if (!body ||
            !body.intensity) {
            return res.status(400).json({ msg: "All fields are req..." });
        } {
            res.send(body);
        }
    }
};

export default dashboardController;