function About() {
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
        <>
            <h1 className="font-bold text-red-900 text-base sm:text-lg md:text-2xl text-4xl text-center py-10">ABOUT US</h1>
            <section className="px-4 sm:px-8 md:px-16">
                <div className="relative w-full h-[400px]">
                    <img className="w-full h-full object-cover" src="https://t4.ftcdn.net/jpg/06/37/71/29/360_F_637712935_DqKmkACFBSawe5MGY633UXeavV9XFgnt.jpg" alt="taxiimg" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
                        <h1 className="text-5xl font-bold">Your Journey, Our Priority</h1>
                        <p className="text-2xl mt-2">
                            Safe, reliable, and affordable taxi services at Your fingertips.
                        </p>
                        {/* <button className="mt-4 bg-yellow-500 text-white px-4 sm:px-8 md:px-16 py-2 rounded">
                            Book Now
                        </button> */}
                    </div>
                </div>
            </section>
            <section className="bg-white py-16 px-4 sm:px-8 md:px-16 md:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <img className="w-full rounded-xl shadow-lg object-cover h-80" src="https://live.staticflickr.com/8345/8203690933_0659ac1f28_b.jpg" alt="taxis" />
                    <div>
                        <h2 className="text-4xl font-bold mb-4 mt-1 text-red-900">Who We Are</h2>
                        <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                            We are a locally-owned taxi service with over 10 years of experience providing fast and friendly rides. Our mission is to deliver safety, comfort, and affordability—every time you ride with us.
                            <br /><br />
                            We believe in building lasting relationships with our passengers by offering transparent pricing, punctual service, and a warm local touch.</p>
                    </div>


                </div></section>

            <section className="px-4 sm:px-8 md:px-16 sm:px-8 md:px-16">
                <div className=" bg-red-50 px-16 py-6 md:px-20 text-red-900">
                    <h2 className="text-3xl font-bold text-center">Why Chose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-8 md:px-16 py-4">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 mr-2 text-center">
                                <div className="text-6xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-8 md:px-16">
                <div className=" bg-red-50 px-16 py-6 md:px-20 text-red-900">
                    <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 md:px-16 py-4">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 mr-2 text-center">
                                <div className="font-bold text-red-800 text-lg mb-1">{review.name}</div>
                                {renderStars(review.rating)}
                                <p className="text-gray-600">{review.rev}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

                    {/* Quick Links or Social Media (Optional) */}
                    <div >
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="text-sm text-red-900 space-y-2">
                            <li><a href="#home" className="hover:text-red-400">Home</a></li>
                            <li><a href="#aboutus" className="hover:text-red-400">About</a></li>
                            <li><a href="#booking" className="hover:text-red-400">Cities</a></li>
                            <li><a href="#contact" className="hover:text-red-400">Book a ride</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} YourTaxi. All rights reserved.
                </div>
            </footer>


        </>

    );
}

export default About;