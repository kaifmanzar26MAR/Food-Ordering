import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../cartContest";
import axios from "axios";
import toast from "react-hot-toast";

const CartItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    let quantNum = Number(e.target.value);
    setQuantity(quantNum);
    // handleCartUpdate(cartItem, quantNum);
  };

  const handleAddSingular = () => {
    // handleCartAdd(cartItem, 1);
    setQuantity(quantity + 1);
  };

  const handleRemoveSingular = () => {
    if (quantity > 1) {
      // handleCartAdd(cartItem, -1);
      setQuantity(quantity - 1);
    } else if (quantity === 1) {
      // handleCartAdd(cartItem, -1);
      setQuantity(1);
    }
  };

  const removeToCart = async (_id) => {
    try {
      console.log(_id);

      const res = await axios.post(
        "http://localhost:5000/api/v1/reservation/deletereservation",
        { _id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      toast.success(res.data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const updateQuantity = async () => {
    try {
      
      console.log(quantity)
      const res = await axios.post(
        "http://localhost:5000/api/v1/reservation/update_quantity",
        { _id: cartItem._id, quantity },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      toast.success(res.data.message);
      // window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    setQuantity(cartItem.quantity);
  }, [cartItem]);

  useEffect(() => {
    let timmer = setTimeout(() => {
      if(cartItem.quantity!= quantity)
        updateQuantity()
    }, 500);

    // timmer();
    return () => {
      clearTimeout(timmer);
    };
  }, [quantity]);

  return (
    <div
      style={{
        display: "grid",
        gap: "2rem",
        padding: "1rem 0",
        gridTemplateColumns: "1fr 2fr",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "1rem",
          gap: "6rem",
        }}
      >
        <img
          src={cartItem.image}
          alt={cartItem.title}
          style={{ maxWidth: "100px" }}
        />
        <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          {" "}
          {cartItem.title}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <div
            aria-label="remove one product"
            style={{ fontWeight: "bold", fontSize: "2rem", cursor: "pointer" }}
            onClick={handleRemoveSingular}
          >
            -
          </div>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            aria-label="insert custom quantity"
            style={{
              borderRadius: "0.25rem",
              height: "2.5rem",
              width: "2.5rem",
              border: "1px solid",
              textAlign: "center",
              padding: "0.25rem",
            }}
            onChange={handleQuantityChange}
          />
          <div
            aria-label="add one product"
            style={{ fontWeight: "bold", fontSize: "2rem", cursor: "pointer" }}
            onClick={handleAddSingular}
          >
            +
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontStyle: "italic",
            color: "brown",
            fontSize: "1.125rem",
            width: "120px",
          }}
        >
          {cartItem.price * quantity}.00
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.25rem",
            cursor: "pointer",
          }}
          onClick={() => removeToCart(cartItem._id)}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default CartItem;
