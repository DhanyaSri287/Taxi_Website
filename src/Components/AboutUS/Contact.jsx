 import { Link } from "react-router-dom";
 function Contact(){
 return (
 <div >
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm text-red-900 space-y-2">
              <Link to="/home"><li className="hover:text-red-400">Home</li></Link>
              <Link to="/cities"><li className="hover:text-red-400">Cities</li></Link>
              <Link to="/trip"><li className="hover:text-red-400">Book a Trip</li></Link>
              
            </ul>
          </div>
 );
 }
 export default Contact;