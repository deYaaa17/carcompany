// src/pages/user/OrderPage.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/ui/navbar";
import PrimaryButton from "../../components/ui/primarybutton";

function OrderPage() {
  const location = useLocation();
  const car = location?.state?.car || ""; 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    car: car,
    quantity: 1,
    address: "",
    paymentType: "paypal",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-400 to-blue-500">
      <Navbar />

      <div className="flex justify-center items-center min-h-screen px-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Place Your Order</h1>

          <label>Name</label>
          <input name="name" className="w-full p-2 border rounded mb-3" required onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" className="w-full p-2 border rounded mb-3" required onChange={handleChange} />

          <label>Car</label>
          <input name="car" className="w-full p-2 border rounded mb-3 bg-gray-100" readOnly value={formData.car} />

          <label>Quantity</label>
          <input type="number" name="quantity" min="1" className="w-full p-2 border rounded mb-3" onChange={handleChange} />

          <label>Address</label>
          <textarea name="address" className="w-full p-2 border rounded mb-3" required onChange={handleChange}></textarea>

          <label>Payment Type</label>
          <select name="paymentType" className="w-full p-2 border rounded mb-6" onChange={handleChange}>
            <option value="paypal">PayPal</option>
            <option value="debit">Debit Card</option>
          </select>

          <PrimaryButton label="Submit Order" type="primary" />
        </form>
      </div>
    </div>
  );
}

export default OrderPage;
