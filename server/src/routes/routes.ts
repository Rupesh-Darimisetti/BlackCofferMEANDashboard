import express from "express";
import dashboardController from "../controllers/dashboard";

const router = express.Router();

// Dashboard routes from controllerr
router.get("/getData", dashboardController.getAllData);
router.post("/users", dashboardController.uploadData);

export default router;