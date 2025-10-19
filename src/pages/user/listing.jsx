// src/pages/user/Listing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';

function ListingPage() {
  const navigate = useNavigate(); // Initialize navigate
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3;

  // Dummy car data with pictures, types, and prices
  const cars = [
    { id: 1, name: 'Sports Car', type: 'Coupe', price: '$75,000', image: 'https://tse3.mm.bing.net/th/id/OIP.P7CI5ckbYN2wOfw3O1vD_AHaEK?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 2, name: 'SUV', type: 'SUV', price: '$45,000', image: 'https://file.kelleybluebookimages.com/kbb/base/house/2024/2024-Kia-Seltos-FrontSide_KTSELTOS2401_640x480.jpg' },
    { id: 3, name: 'Electric Car', type: 'Sedan', price: '$60,000', image: 'https://thvnext.bing.com/th/id/OIP.c1t1vwz7WObnI4C0RoVFBQHaHa?w=164&h=180&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3&ucfimg=1' },
    { id: 4, name: 'Luxury Sedan', type: 'Sedan', price: '$90,000', image: 'https://thvnext.bing.com/th/id/OIP.CemT7dkDpazPWgEF4pgu_QHaEL?w=290&h=180&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3&ucfimg=1' },
    { id: 5, name: 'Truck', type: 'Pickup', price: '$50,000', image: 'https://tse4.mm.bing.net/th/id/OIP.cUenk-6zidhlBgZwBBtm0wHaEK?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
  ];

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handleOrder = (car) => {
    navigate('/order', { state: { car: car.name } }); // Navigate to Order page with car name
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="pt-20 h-screen w-full flex flex-col" style={{ backgroundColor: '#f9f9f9' }}>
      <Navbar />
      <div className="flex-grow w-full flex flex-col items-center justify-start p-0 overflow-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Car Listings</h1>
        <div className="w-full flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by name or type..."
            className="px-4 py-2 border rounded-lg w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 mb-6">
          {currentCars.map(car => (
            <div key={car.id} className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <img src={car.image} alt={`${car.name} - ${car.type}`} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-gray-600">Type: {car.type}</p>
                <p className="text-green-600 font-semibold">Price: {car.price}</p>
                <div className="mt-4">
                  <PrimaryButton label="Order" onClick={() => handleOrder(car)} type="primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="w-full flex justify-center items-center space-x-4 mb-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition duration-200"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-lg ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingPage;