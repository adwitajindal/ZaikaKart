import { Button, Card } from "@mui/material";
import React from "react";

export const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg"
          alt="biryani image"
        />
        <div>
          <p>Biryani</p>
          <p>$399</p>
        </div>
      </div>
      <div>
        <Button  className="cursor-not-allowed">completed</Button>
      </div>
    </Card>
  );
};
