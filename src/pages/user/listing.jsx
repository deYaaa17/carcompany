// src/pages/user/ListingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';

function ListingPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3;

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

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handleOrder = (car) => {
    navigate('/order', { state: { car: car.name } });
  };

  return (
    <div className="pt-20 min-h-screen w-full bg-gray-100">
      <Navbar />

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
          <div key={car.id} className="bg-white rounded-xl shadow hover:shadow-xl transition">
            <img src={car.image} alt="" className="w-full h-48 object-cover rounded-t-xl" />
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

      {/* Pagination */}
      <div className="flex justify-center space-x-3 mb-8">
        <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 bg-gray-300 rounded">Prev</button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
            {i + 1}
          </button>
        ))}

        <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          className="px-4 py-2 bg-gray-300 rounded">Next</button>
      </div>
    </div>
  );
}

export default ListingPage;
