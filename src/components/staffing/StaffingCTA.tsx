
import { Button } from "@/components/ui/button";

export const StaffingCTA = () => {
  return (
    <section id="staffing-cta" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Workforce?</h2>
        <p className="text-xl text-gray-600 mb-12">
          Contact us today to discuss your staffing needs and discover how Simple. can provide the reliable workers your business requires.
        </p>
        
        <Button 
          size="lg" 
          className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};
