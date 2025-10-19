// src/pages/user/Order.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/ui/navbar";
import PrimaryButton from "../../components/ui/primarybutton";

function OrderPage() {
  const location = useLocation();
  const { car } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    car: car || "",
    quantity: 1,
    address: "",
    paymentType: "paypal",
  });

  useEffect(() => {
    if (car && !formData.car) {
      setFormData((prev) => ({ ...prev, car }));
    }
  }, [car, formData.car]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    alert(`Order placed! Details: ${JSON.stringify(formData)}`);
  };

  const isDisabled =
    !formData.name || !formData.email || !formData.car || !formData.address;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Navbar />

      {/* Fullscreen Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(0, 180, 216, 0.9), rgba(72, 202, 228, 0.85), rgba(173, 232, 244, 0.9)), url("https://images.unsplash.com/photo-1602080858428-57174f9431b3?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Centered Content */}
      <div className="flex justify-center items-center min-h-screen px-4">
        <div
          className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-cyan-200"
          style={{
            boxShadow:
              "0 10px 25px rgba(0, 0, 0, 0.25), 0 0 25px rgba(72, 202, 228, 0.3)",
          }}
        >
          <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">
            Place Your Order
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-cyan-900">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-cyan-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                required
              />
            </div>

            {/* Car Selection */}
            {car ? (
              <div>
                <label className="block text-lg font-semibold mb-2 text-cyan-900">
                  Car
                </label>
                <input
                  type="text"
                  name="car"
                  value={formData.car}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                />
              </div>
            ) : (
              <div>
                <label className="block text-lg font-semibold mb-2 text-cyan-900">
                  Select Car
                </label>
                <select
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                  required
                >
                  <option value="">Choose a car</option>
                  <option value="Sports Car">Sports Car</option>
                  <option value="SUV">SUV</option>
                  <option value="Electric Car">Electric Car</option>
                  <option value="Luxury Sedan">Luxury Sedan</option>
                  <option value="Truck">Truck</option>
                </select>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-cyan-900">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-cyan-900">
                Shipping Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200 h-24 resize-none"
                required
              />
            </div>

            {/* Payment Type */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-cyan-900">
                Payment Type
              </label>
              <select
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                required
              >
                <option value="paypal">PayPal</option>
                <option value="debit">Debit Card</option>
              </select>
            </div>

            {/* Button */}
            <div className="text-center">
              <PrimaryButton
                label="Submit Order"
                type="primary"
                disabled={isDisabled}
                onClick={handleSubmit}
                className="w-full mt-6"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
