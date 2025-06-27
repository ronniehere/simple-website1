
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const StaffingCTA = () => {
  return (
    <section id="staffing-cta" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Workforce?</h2>
        <p className="text-xl text-gray-600 mb-12">
          Contact us today to discuss your staffing needs and discover how Simple. can provide the reliable workers your business requires.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700"
          >
            Get Started
          </Button>
          
          <a 
            href="https://calendly.com/abe-sshift/15-minute-meeting-for-simple"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a call
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
