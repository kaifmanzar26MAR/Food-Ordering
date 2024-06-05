import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const send_reservation = asyncHandler(async (req, res)=> {
  const { element } = req.body;
// console.log(req.body)

  if (!element.title || !element.category || !element.image) {
    throw new ApiError(500, "Somethis is missing!");
  }

   const reservationInstance= await Reservation.create({
      doneBy:req.user._id,
      title: element.title,
      category: element.category,
      image: element.image,
      price:element.price,
      id:element.id
    });

    if(!reservationInstance) throw new ApiError(500, "Something went worng in the creation of Reservation!!")

    req.user.reservations.push(reservationInstance._id);

    await req.user.save();

    // console.log(req.user)

    res.status(201).json(new ApiResponse(200,reservationInstance, "Reservtion done successfully!!" ));
 
});
const remove_reservation = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  // Ensure the reservation ID is provided
  if (!_id) {
    throw new ApiError(400, "Reservation ID is missing!");
  }

  // Find the reservation instance
  const reservationInstance = await Reservation.findById(_id);

  // Check if the reservation exists and belongs to the user
  if (!reservationInstance || reservationInstance.doneBy.toString() !== req.user._id.toString()) {
    throw new ApiError(404, "Reservation not found or you do not have permission to remove it!");
  }

  // Remove the reservation from the user's reservations array
  const reservationIndex = req.user.reservations.indexOf(_id);
  if (reservationIndex > -1) {
    req.user.reservations.splice(reservationIndex, 1);
  } else {
    throw new ApiError(404, "Reservation not found in user's reservations!");
  }

  // Delete the reservation instance
   Reservation.findByIdAndDelete(_id);

  // Save the updated user document
  await req.user.save();

  // Respond with success
  res.status(200).json(new ApiResponse(200, null, "Reservation removed successfully!"));
});

const update_quantity = asyncHandler(async (req, res) => {
  const { _id, quantity } = req.body;
  console.log(_id, quantity)
  // Ensure the reservation ID and quantity are provided
  if (!_id || !quantity) {
    throw new ApiError(400, "Reservation ID and quantity are required!");
  }

  // Find the reservation instance
  const reservationInstance = await Reservation.findById(_id);

  // Check if the reservation exists and belongs to the user
  if (!reservationInstance || reservationInstance.doneBy.toString() !== req.user._id.toString()) {
    throw new ApiError(404, "Reservation not found or you do not have permission to update it!");
  }

  // Update the quantity
  reservationInstance.quantity = quantity;

  // Save the updated reservation instance
  await reservationInstance.save();

  // Respond with success
  res.status(200).json(new ApiResponse(200, reservationInstance, "Quantity updated successfully!"));
});
export  {send_reservation, remove_reservation, update_quantity};
