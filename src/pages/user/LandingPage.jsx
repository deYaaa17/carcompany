// src/pages/user/LandingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Correct component imports
import PrimaryButton from "../../components/ui/primarybutton.jsx";
import FeatureCard from "../../components/ui/card.jsx";
import Navbar from "../../components/ui/navbar.jsx";
import Modal from "../../components/ui/modal.jsx";
import SidePanel from "../../components/ui/SidePanel.jsx";

function LandingPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handleGetStarted = () => navigate("/listing");
  const handleExploreNow = () => navigate("/listing");
  const handleOrderNow = () => navigate("/order");

  return (
    <div
      className="pt-20 h-screen w-full flex flex-col relative"
      style={{
        background:
          'linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url("https://images.unsplash.com/photo-1517949908114-7202b63df6a0?auto=format&fit=crop&w=1500&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
      }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-100">
          Welcome to Car Company
        </h1>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <PrimaryButton label="Get Started" onClick={handleGetStarted} type="primary" />
          <PrimaryButton label="Explore Now" onClick={handleExploreNow} type="secondary" />
          <PrimaryButton label="Order Now" onClick={handleOrderNow} type="outline" />
        </div>

        <div className="flex justify-center space-x-4 mb-10">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Open Modal
          </button>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => setIsSidePanelOpen(true)}
          >
            Open Side Panel
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full px-4">
          <FeatureCard
            icon={<img src="https://tse3.mm.bing.net/th/id/OIP.kkpuFskxOlg7MKosEnHIjAHaEU" alt="Performance" className="w-full h-48 object-cover rounded-t-lg" />}
            title="Performance"
            description="High-speed engines for ultimate thrill."
          />
          <FeatureCard
            icon={<img src="https://th.bing.com/th/id/OIP.ddF62nWcTa4uKN26JVa8nQHaFE" alt="Design" className="w-full h-48 object-cover rounded-t-lg" />}
            title="Design"
            description="Sleek, modern aesthetics."
          />
          <FeatureCard
            icon={<img src="https://s1.cdn.autoevolution.com/images/news/bmw-m8-with-custom-wheels-looks-like-a-need-for-speed-car-141194-7.jpg" alt="Customization" className="w-full h-48 object-cover rounded-t-lg" />}
            title="Customization"
            description="Tailor your car to perfection."
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">About Us</h2>
          <p className="text-gray-700 text-center mb-2">
            We are a dedicated team passionate about delivering top-quality vehicles and exceptional customer service.
          </p>
        </Modal>
      )}

      {isSidePanelOpen && (
        <SidePanel onClose={() => setIsSidePanelOpen(false)}>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
          <div className="flex flex-col space-y-3">
            <button className="bg-blue-600 text-white py-2 rounded" onClick={handleGetStarted}>Get Started</button>
            <button className="bg-gray-700 text-white py-2 rounded" onClick={handleExploreNow}>Explore Now</button>
            <button className="bg-green-600 text-white py-2 rounded" onClick={handleOrderNow}>Order Now</button>
          </div>
        </SidePanel>
      )}

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around py-3 z-50">
        <button onClick={handleGetStarted} className="flex flex-col items-center">🚗 <span className="text-xs mt-1">Start</span></button>
        <button onClick={handleExploreNow} className="flex flex-col items-center">🔍 <span className="text-xs mt-1">Explore</span></button>
        <button onClick={handleOrderNow} className="flex flex-col items-center">🛒 <span className="text-xs mt-1">Order</span></button>
        <button onClick={() => setIsSidePanelOpen(true)} className="flex flex-col items-center">☰ <span className="text-xs mt-1">Menu</span></button>
      </div>
    </div>
  );
}

export default LandingPage;
