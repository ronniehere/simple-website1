
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const Footer = () => {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Simple.</h3>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staffing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why Choose Simple.</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-300">
              Follow us for updates and cleaning tips
            </p>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
          <p>&copy; 2025 Simple. Commercial Cleaning. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            
            {/* Authentication buttons */}
            {user ? (
              <>
                <Button size="sm" variant="outline" onClick={signOut} className="text-gray-300 border-gray-600 hover:text-white hover:border-white">
                  <User className="w-4 h-4 mr-1" />
                  Sign Out
                </Button>
                {isAdmin && (
                  <Link to="/admin" className="hover:text-white transition-colors text-sm">
                    Admin Dashboard
                  </Link>
                )}
              </>
            ) : (
              <Link to="/auth">
                <Button size="sm" variant="outline" className="text-gray-300 border-gray-600 hover:text-white hover:border-white">
                  <User className="w-4 h-4 mr-1" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
