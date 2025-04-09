import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [quantity, setQuantity] = useState<{ [key: string]: number }>({
    makeup: 1,
    cushion: 1,
    lipstick: 1,
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleIncrease = (item: string) => {
    setQuantity((prev) => ({ ...prev, [item]: prev[item] + 1 }));
  };

  const handleDecrease = (item: string) => {
    if (quantity[item] > 1) {
      setQuantity((prev) => ({ ...prev, [item]: prev[item] - 1 }));
    }
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const total =
    300000 * (quantity.makeup + quantity.cushion + quantity.lipstick);

  return (
    <div className="payment-container">
      <header className="payment-header">
        <h2>Method Payment</h2>
      </header>

      <section className="payment-options">
        <h3>Choose Payment</h3>
        <div className="payment-methods">
          <button
            className={`payment-method ${
              paymentMethod === "momo" ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodChange("momo")}
          >
            <img src="momo_logo.png" alt="Momo" className="payment-logo" />
            Momo
          </button>
          <button
            className={`payment-method ${
              paymentMethod === "viettel" ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodChange("viettel")}
          >
            <img
              src="viettel_money_logo.png"
              alt="Viettel Money"
              className="payment-logo"
            />
            Viettel Money
          </button>
        </div>
      </section>

      <section className="cart-items">
        <div className="cart-item">
          <p>Make up</p>
          <div className="item-quantity">
            <button onClick={() => handleDecrease("makeup")}>-</button>
            <span>{quantity.makeup}</span>
            <button onClick={() => handleIncrease("makeup")}>+</button>
          </div>
          <p>300.000vnd</p>
        </div>

        <div className="cart-item">
          <p>FOCALLURE Cushion</p>
          <div className="item-quantity">
            <button onClick={() => handleDecrease("cushion")}>-</button>
            <span>{quantity.cushion}</span>
            <button onClick={() => handleIncrease("cushion")}>+</button>
          </div>
          <p>300.000vnd</p>
        </div>

        <div className="cart-item">
          <p>Rom&nd Matte Lipstick</p>
          <div className="item-quantity">
            <button onClick={() => handleDecrease("lipstick")}>-</button>
            <span>{quantity.lipstick}</span>
            <button onClick={() => handleIncrease("lipstick")}>+</button>
          </div>
          <p>300.000vnd</p>
        </div>

        <div className="total">
          <p>Total: {total.toLocaleString()}vnd</p>
        </div>
      </section>

      <button className="pay-now-btn">Pay now</button>
    </div>
  );
};

export default Payment;
