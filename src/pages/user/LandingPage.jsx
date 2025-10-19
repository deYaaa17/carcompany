// src/pages/user/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/ui/primarybutton';
import FeatureCard from '../../components/ui/card';
import Navbar from '../../components/ui/navbar';

function LandingPage() {
  const navigate = useNavigate();

  // Function for "Get Started" button
  const handleGetStarted = () => {
    console.log('Get Started clicked');
    navigate('/listing'); // Navigates to Car Listing page
  };

  // Function for "Explore Now" button
  const handleExploreNow = () => {
    console.log('Explore Now clicked');
    navigate('/listing'); // Navigates to Car Listing page
  };

  // Function for "Order Now" button
  const handleOrderNow = () => {
    console.log('Order Now clicked');
    navigate('/order'); // Navigates to Order page
  };

  return (
   <div
  className="pt-20 h-screen w-full flex flex-col"
  style={{
    background:
      'linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url("https://images.unsplash.com/photo-1517949908114-7202b63df6a0?auto=format&fit=crop&w=1500&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',

    }}>
      <Navbar />
      <div className="w-full h-full flex flex-col items-center justify-between p-0">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Car Company</h1>
          <div className="flex justify-center space-x-4 mb-12">
            <PrimaryButton label="Get Started" onClick={handleGetStarted} type="primary" />
            <PrimaryButton label="Explore Now" onClick={handleExploreNow} type="secondary" />
            <PrimaryButton label="Order Now" onClick={handleOrderNow} type="outline" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full px-4">
            <FeatureCard
              icon={<img src="https://tse3.mm.bing.net/th/id/OIP.kkpuFskxOlg7MKosEnHIjAHaEU?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Performance Car" className="w-full h-48 object-cover rounded-t-lg" />}
              title="Performance"
              description="High-speed engines for ultimate thrill."
            />
            <FeatureCard
              icon={<img src="https://thvnext.bing.com/th/id/OIP.ddF62nWcTa4uKN26JVa8nQHaFE?w=248&h=180&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3&ucfimg=1" alt="Design Car" className="w-full h-48 object-cover rounded-t-lg" />}
              title="Design"
              description="Sleek, modern aesthetics."
            />
            <FeatureCard
              icon={<img src="https://s1.cdn.autoevolution.com/images/news/bmw-m8-with-custom-wheels-looks-like-a-need-for-speed-car-141194-7.jpg" alt="Custom Car" className="w-full h-48 object-cover rounded-t-lg" />}
              title="Customization"
              description="Tailor your car to perfection."
            />
          </div>
          <div className="bg-white bg-opacity-90 py-12 px-6 rounded-lg shadow-md w-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)' }}>About Us</h2>
            <p className="text-lg text-gray-700 mb-4 text-center">We are a dedicated team passionate about delivering top-quality vehicles and exceptional customer service. Founded in 2015, our mission is to simplify the car-buying process while offering a wide range of options to suit every lifestyle.</p>
            <p className="text-lg text-gray-700 mb-4 text-center">From high-performance sports cars to eco-friendly electric models, we pride ourselves on our diverse inventory and expert guidance. Our goal is to ensure you drive away with a car that matches your dreams and needs.</p>
            <p className="text-lg text-gray-700 text-center">Visit us today or contact our team to learn more about how we can assist you on your automotive journey!</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;