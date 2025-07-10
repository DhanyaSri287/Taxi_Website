
import Car from './Car';
import { useEffect, useState } from 'react';
import FadeInSection from '../FadeInSection';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Contact from './Contact'
function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setShow(true), 100);
  }, []);



  const features = [
    {
      icon: "🕒",
      title: "24/7 Availability",
      desc: "We’re here for you anytime, day or night.",
    },
    {
      icon: "🛡️",
      title: "Safety First",
      desc: "Insured rides and verified drivers ensure peace of mind.",
    },
    {
      icon: "🚗",
      title: "Modern Fleet",
      desc: "Clean, GPS-enabled, and air-conditioned vehicles.",
    },
    {
      icon: "👨‍✈️",
      title: "Professional Drivers",
      desc: "Experienced, courteous, and background-checked drivers.",
    },
  ];
  const reviews = [
    {
      name: "Aisha R.",
      rating: 5,
      rev: "Super smooth experience! From booking to drop-off, everything was easy and stress-free. My driver was polite, the AC worked perfectly, and the car was in great condition."
    },
    {
      name: "Karan M.",
      rating: 4,
      rev: "Always reliable and professional I’ve booked several rides and they’re consistently early, the cars are spotless, and I feel safe every time. My top choice for getting around Pollachi!"
    },
    {
      name: "Sneha T.",
      rating: 5,
      rev: "Booking was a breeze and the driver was super friendly. The AC worked perfectly and the car was super clean—felt more premium than expected."
    }
  ];
  const driver = [
    {
      desc: "Trained in safety, routes, and service excellence.",
    },
    {
      desc: "Fully background-verified and identity-checked.",
    },
    {
      desc: "Punctual and committed to on-time rides.",
    },
    {
      desc: "Polite, friendly, and customer-focused.",
    },
  ];
 const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fleets = [
  {
    id: 1,
    count: 200,
    desc: "Professional Drivers"
  },
  {
    id: 3,
    count: 3000,
    desc: "Satisfied Customers"
  },
  {
    id: 4,
    count: 50,
    desc: "Cities Covered"
  },
  
  {
    id: 6,
    count: 150000,
    desc: "Kilometers Driven Safely"
  },
];

  const renderStars = (count) => {
    return (
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < count ? "text-yellow-400 text-xl" : "text-gray-300 text-xl"}>
            ★
          </span>
        ))}
      </div>
    );
  };


  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <h1 className="font-bold text-red-900 text-4xl text-center py-10">
        ABOUT US
      </h1>
       <div className="relative">
      <FadeInSection className="px-4 sm:px-8 md:px-16">
        
        <div className="relative w-full sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl shadow-lg">
          <img
            className="w-full h-full object-cover "
            src="https://t4.ftcdn.net/jpg/06/37/71/29/360_F_637712935_DqKmkACFBSawe5MGY633UXeavV9XFgnt.jpg"
            alt="taxiimg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="sm:text-4xl md:text-5xl font-bold">Your Journey, Our Priority</h1>
            <p className="sm:text-xl md:text-2xl mt-2">
              Safe, reliable, and affordable taxi services at Your fingertips.
            </p>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection className="bg-white py-16 px-4 sm:px-8 md:px-16 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img className="w-full rounded-xl shadow-lg object-cover h-80" src="https://live.staticflickr.com/8345/8203690933_0659ac1f28_b.jpg" alt="taxis" />
          <div>
            <h2 className="text-4xl font-bold mb-4 mt-1 text-red-900">Who We Are ?</h2>
            <h2 className="text-3xl font-semibold mb-4 mt-1 ">Driven by Passion, Powered by Purpose</h2>
            <p className="text-gray-700 text-lg leading-relaxed font-semibold">
              We are a locally-owned taxi service with over 10 years of experience providing fast and friendly rides. Our mission is to deliver safety, comfort, and affordability—every time you ride with us.
            </p> </div>


        </div></FadeInSection>
      </div>
      
      <div className="relative">
      <FadeInSection className="bg-white py-20  px-4 sm:px-8 md:px-16 md:px-20">
        <div className="max-w-7xl mt-4 mx-auto grid md:grid-cols-2 gap-x-10 items-center">
          <div className='p-4'>
            <h2 className="text-4xl font-bold mb-4 mt-1 text-red-900">Our Mission And Vision</h2>
            <h2 className="text-3xl font-semibold mb-4 mt-1 ">Connecting People, One Ride at a Time</h2>
            <p className="text-gray-700 text-lg leading-relaxed font-semibold">
              To provide reliable, secure, and comfortable travel solutions for everyone—bridging distances with trust, technology, and top-notch service. We aim to set the benchmark in urban mobility by combining modern vehicles, trained professionals, and a commitment to punctuality.</p> </div>
          <div className='p-4 flex justify-center justify-end'>

            <img className="w-80 h-auto object-cover rounded-xl " src="https://i.pinimg.com/736x/02/7b/d6/027bd604aaeddca1dd0c884d29bd4adb.jpg" alt="location" />
          </div>

        </div></FadeInSection></div>

        <div className="relative">
      <FadeInSection className="bg-white py-16 px-4 sm:px-8 md:px-16 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <img className="w-full rounded-xl shadow-lg object-cover h-80" src="https://media.istockphoto.com/id/1191909007/photo/smiling-taxi-driver-with-woman-passenger-pointing-on-road.jpg?s=612x612&w=0&k=20&c=yzY9aKM6CDMFlPcz2QMCRYXKPqM9G8VKd7G4Vt5cARo=" alt="taxis" />

          <div>
            <h2 className="text-4xl font-bold mb-4 mt-1 text-red-900">Meet Our Drivers</h2>
            <h2 className="text-3xl font-semibold mb-4 mt-1 ">
              Behind every smooth ride is a dedicated professional. </h2>
            <div className="text-red-900">
              <div className="flex flex-row mx-auto">
                {driver.map((driver, index) => (
                  <div key={index} className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 mr-2 text-cente ring-grey-200">
                    <p className="text-black">{driver.desc}</p>
                  </div>
                ))}
              </div></div>
          </div>


        </div></FadeInSection></div>


      <div className="relative">
      <FadeInSection className="px-4 sm:px-8 md:px-16 sm:px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center py-3 text-red-900">Our Fleets</h2>
       
          <div ref={ref}  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto px-4 sm:px-8 md:px-16 py-4">
         { fleets.map((fleet)=>(
              <div key={fleet.id} className="bg-red-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 mr-2 text-center  ring-red-900 border-1 border-red-900" >
              <h1 className="text-3xl font-bold text-red-900">
 {inView ? (
                <CountUp start={0} end={fleet.count} duration={2} />
              ) : (
                0
              )}+
              </h1>
              <h1 className="mt-2 text-lg">{fleet.desc}</h1>
         
              </div>
        ))
        }
            </div>

      </FadeInSection></div>

       <div className="relative">
      <FadeInSection className="px-4 sm:px-8 md:px-16 sm:px-8 md:px-16">

        <h2 className="text-3xl font-bold text-center py-3 text-red-900">Why Chose Us?</h2>
        <div className="px-16 py-6 mx-20 md:px-20 text-red-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto px-4 sm:px-8 md:px-16 py-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 mr-2 text-center  ring-blue-900 border-2 border-blue-100">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection></div>

      <div className="relative">
       <FadeInSection>
        <h2 className="text-3xl font-bold text-center py-3 text-red-900">Our Journey</h2>
      <Car/>
     </FadeInSection></div>

       <div className="relative">
      <FadeInSection className="px-4 sm:px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center text-red-900">Customer Reviews</h2>
        <div className=" px-16 py-6 md:px-20 text-red-900">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 md:px-16 py-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 mr-2 text-center  border-2 border-blue-100">
                <div className="font-bold text-red-800 text-lg mb-1">{review.name}</div>
                {renderStars(review.rating)}
                <p className="text-gray-600">{review.rev}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
       </div>

      <footer className="text-red-900 py-10 px-4 sm:px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-8">


          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="text-sm space-y-2">
              <li>📍 123 Main Street, Your City</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@yourtaxi.com</li>
              <li>🕒 Available 24/7</li>
            </ul>
          </div>

        
         <Contact/>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} YourTaxi. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default About;
