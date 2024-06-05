import express from "express";
import {remove_reservation, send_reservation, update_quantity} from "../controller/reservation.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/createreservation",verifyJWT, send_reservation);
router.post("/deletereservation",verifyJWT, remove_reservation);
router.post("/update_quantity", verifyJWT, update_quantity)

export default router;
