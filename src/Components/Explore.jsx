import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const cityData = {
  chennai: {
    bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIaSPJIZtyQ5Z0xS3lUo5YaJ1UJKjQc8BONQ&s',
    history: 'Chennai, the capital of Tamil Nadu, is known for its rich culture and heritage.',
    places: [
      {
        name: 'Marina Beach',
        image: 'https://www.redtaxi.co.in/images/marina-beach.webp',
      },
      {
        name: 'Kapaleeshwarar Temple',
        image: 'https://plus.unsplash.com/premium_photo-1661963629241-52c812d5c7f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S2FwYWxlZXNod2FyYXIlMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D',
      },
      {
        name: 'Mahabalipuram',
        image: 'https://plus.unsplash.com/premium_photo-1697730409114-ff9db6cc8277?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1haGFiYWxpcHVyYW18ZW58MHx8MHx8fDA%3D',
      },
    ],
  },
  delhi: {
    bgImage: 'https://media.istockphoto.com/id/184085544/photo/indian-parliament-in-new-delhi-the-politic-government-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZeDiKQGs3CzSvsXYGQUcga4TdRtPv9nzMajOcGMTgcQ=',
    history:
      'Delhi, the capital of India, is a city steeped in history and culture, renowned for its vibrant markets, iconic monuments, and rich heritage.',
    places: [
      {
        name: 'India Gate',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWElMjBnYXRlfGVufDB8fDB8fHww',
      },
      {
        name: 'Qutub Minar',
        image: 'https://images.unsplash.com/photo-1686294137296-9f8a37300dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UXV0dWIlMjBNaW5hcnxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        name: 'Lotus Temple',
        image: 'https://images.unsplash.com/photo-1688257609244-3f2a893f19d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG90dXMlMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D',
      },
    ]
  },
  mumbai:{
    bgImage:'https://media.istockphoto.com/id/1390163309/photo/beautiful-gateway-of-india-near-taj-palace-hotel-on-the-mumbai-harbour-with-many-jetties-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=bEMo0pOTW9Ksg5ybFwQQmL6GhR3CQsBXty_nei4yImY=',
    history:'Historically, it was a Portuguese settlement, then a British trading hub, and ultimately became Indias financial capital. ',
    places:[
    {
      name:'Marine Drive',
      image:'https://images.unsplash.com/photo-1725561282012-5c4d302d7f69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWFyaW5lJTIwZHJpdmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      name:'Siddhivinayak Temple',
      image:'https://plus.unsplash.com/premium_photo-1697730116501-72f5749dffce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2lkZGhpdmluYXlhayUyMFRlbXBsZS4lMjAuLi58ZW58MHx8MHx8fDA%3D',
    },
    {
      name:'Juhu Beach',
      image:'https://plus.unsplash.com/premium_photo-1669018130044-1a5c168d20ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SnVodSUyMEJlYWNoLiUyMC4uLnxlbnwwfHwwfHx8MA%3D%3D'
    }
    ]
  },
  pollachi: {
  bgImage: 'https://media.istockphoto.com/id/1321289501/photo/scenic-landscape-of-kadamparai-dam-backwaters-near-pollachi-in-tamilnadu.webp?a=1&b=1&s=612x612&w=0&k=20&c=8wYRYcYOt52QhtOidSAN4veHqrA3v4q6Mjpwr5velNo=',
  history: 'Pollachi, a serene town in Tamil Nadu, is renowned for its picturesque landscapes, coconut groves, and proximity to wildlife sanctuaries.',
  places: [
    {
      name: 'Parambikulam Tiger Reserve',
      image:'https://tamilnadutourisminfo.com/wp-content/uploads/2018/01/Parambikulam_Tiger_Reserve.webp',
    },
    {
      name: 'Topslip',
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Thirumoorthy Hills',
      image: 'https://media.istockphoto.com/id/1295996221/photo/smooth-and-silky-flow-of-water-in-thirumoorthy-falls-udumalpet-tamil-nadu-india-selective.webp?a=1&b=1&s=612x612&w=0&k=20&c=_4Acahzn6KP-mEPQSuNLmkwBckbEg6Iiq_BYnKOTvFc=',
    },
  ],
},

};

const fareData = {
  chennai: [
    {
      route: 'Chennai to Pondicherry',
      distance: '155 Kms',
      time: '3 Hrs',
      price1: '₹1200/-',
      price2: '₹1500/-',
      image: 'https://images.unsplash.com/photo-1706183677959-9c3fc48a8b35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UG9uZGljaGVycnklMjBmYW1vdXMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      route: 'Chennai to Mahabalipuram',
      distance: '60 Kms',
      time: '2 Hrs',
      price1: '₹600/-',
      price2: '₹800/-',
      image: 'https://images.unsplash.com/photo-1661503703672-d811183fd657?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      route: 'Chennai to Vellore',
      distance: '140 Kms',
      time: '3 Hrs',
      price1: '₹1100/-',
      price2: '₹1300/-',
      image: 'https://images.unsplash.com/photo-1673368546039-8169c052849d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  delhi: [
    {
      route: 'Delhi to Agra',
      distance: '230 Kms',
      time: '4 Hrs',
      price1: '₹2500/-',
      price2: '₹3000/-',
      image: 'https://media.istockphoto.com/id/124688183/photo/taj-mahal-and-its-reflection-in-pool-hdr.webp?a=1&b=1&s=612x612&w=0&k=20&c=9e8_7WK6l7ZaQJsdCrOIFv5VNyvzRigos8Vq-nV-sV0=',
    },
    {
      route: 'Delhi to Jaipur',
      distance: '270 Kms',
      time: '5 Hrs',
      price1: '₹3200/-',
      price2: '₹4000/-',
      image: 'https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ausNfONQx818Ho_We73hmVrNRdFJ9nVfrnN4Iq5eXGk=',
    },
    {
      route: 'Delhi to Chandigarh',
      distance: '250 Kms',
      time: '4.5 Hrs',
      price1: '₹2800/-',
      price2: '₹3400/-',
      image: 'https://images.unsplash.com/photo-1707981705961-1d63895ba795?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8WmFraXIlMjBIdXNzYWluJTIwUm9zZSUyMEdhcmRlbiUyMGluJTIwY2hhbmRpZ2FyaHxlbnwwfHwwfHx8MA%3D%3D',
    },
  ],
    mumbai: [
    
  {
    route: 'Mumbai to Pune',
    distance: '150 Kms',
    time: '3 Hrs',
    price1: '₹2000/-',
    price2: '₹2500/-',
    image: 'https://media.istockphoto.com/id/464475196/photo/put.webp?a=1&b=1&s=612x612&w=0&k=20&c=pGIfAN_UEg_2JS3Wkz6guFuSKAiQgQwyx7kP00_ATb8=',
  },
  {
    route: 'Mumbai to Nashik',
    distance: '167 Kms',
    time: '3.5 Hrs',
    price1: '₹2200/-',
    price2: '₹2800/-',
    image: 'https://plus.unsplash.com/premium_photo-1664283661426-c0daf3c67c6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFzaGlrJTIwaW1hZ2UlMjB0b3VyaXN0JTIwcGxhY2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    route: 'Mumbai to Lonavala',
    distance: '83 Kms',
    time: '2 Hrs',
    price1: '₹1500/-',
    price2: '₹1800/-',
    image: 'https://images.unsplash.com/photo-1744779929754-5650ec2012bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExvbmF2YWxhJTIwaW1hZ2UlMjB0b3VyaXN0JTIwcGxhY2V8ZW58MHx8MHx8fDA%3D',
  },
],
pollachi: [
  {
    route: 'Pollachi to Monkey Falls',
    distance: '40 Kms',
    time: '1 Hr',
    price1: '₹500/-',
    price2: '₹700/-',
    image: 'https://images.unsplash.com/photo-1719244376021-b30f5a3860c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9ua2V5JTIwZmFsbHN8ZW58MHx8MHx8fDA%3D',
  },
  {
    route: 'Pollachi to Valparai',
    distance: '65 Kms',
    time: '2 Hrs',
    price1: '₹800/-',
    price2: '₹1000/-',
    image: 'https://images.unsplash.com/photo-1596295357308-b9ff1d2fe788?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    route: 'Pollachi to Aliyar Dam',
    distance: '30 Kms',
    time: '45 Mins',
    price1: '₹400/-',
    price2: '₹600/-',
    image: 'https://media.istockphoto.com/id/988853656/photo/when-nature-meets-the-humans-need.webp?a=1&b=1&s=612x612&w=0&k=20&c=FE-3s9p9Cjv6wuNppWrrPNig9dxVSztIGKKm80Cr3io=',
  },
],
};
const Explore = () => {
  const { cityName } = useParams();
  const normalizedCityName = cityName?.toLowerCase();
  const cityInfo = cityData[normalizedCityName];
  const cityFares = fareData[normalizedCityName] || [];
  const [selectedImage, setSelectedImage] = useState(null);
  if (!cityInfo) {
    return (
      <div className="text-center font-sans px-4">
        <h1 className="text-3xl font-bold mb-6">City Not Found</h1>
        <Link to="/cities" className="text-blue-600 hover:underline">
          ← Back to Cities
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div
        className="relative bg-cover bg-center text-white h-[70vh]"
        style={{ backgroundImage: `url(${cityInfo.bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold mb-4">{`Explore ${cityName}`}</h1>
          <p className="text-lg max-w-2xl">{cityInfo.history}</p>
        </div>
      </div>
      <div className="bg-gray-100 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Top Places to Visit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cityInfo.places.map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{place.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-8">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Fare List</h2>
        <motion.div
          className="space-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {cityFares.map((fare, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow p-4 flex justify-between items-center hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-bold text-red-500">{fare.route}</h3>
                <p className="text-gray-600">{`${fare.distance} | ${fare.time}`}</p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <button
                    className="text-red-500 font-bold hover:underline"
                    onClick={() => setSelectedImage(fare.image)}
                  >
                    {fare.price1}
                  </button>
                  <button
                    className="text-gray-600 hover:underline"
                    onClick={() => setSelectedImage(fare.image)}
                  >
                    {fare.price2}
                  </button>
                </div>
                <img
                  src={fare.image}
                  alt={fare.route}
                  className="w-24 h-16 rounded-lg"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Fare Image"
            className="max-w-full max-h-full rounded-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        </motion.div>
      )}
      <div className="text-center mt-6">
        <Link to="/cities" className="text-blue-600 hover:underline">
          ← Back to Cities
        </Link>
      </div>
    </div>
  );
};
export default Explore;