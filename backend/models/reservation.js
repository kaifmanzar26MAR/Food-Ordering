import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  doneBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  id:{
    type:Number,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
    default:100
  },
  category:{
    type:String,
    required:true
  },
  quantity:{
    type:Number,
    required:true,
    default:1
  }
},{timestamps:true});

export const Reservation = mongoose.model("Reservation", reservationSchema);
