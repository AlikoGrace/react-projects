import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantiy, increaseItemQuantity } from "./CartSlice";

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantiy(pizzaId))}>
        -
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
