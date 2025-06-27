
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const StaffingHero = () => {
  return (
    <div className="min-h-screen flex flex-col text-center px-4 bg-gradient-to-b from-slate-50 to-white">      
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 text-6xl mb-8">
            <span className="animate-bounce">👷</span>
            <span className="animate-bounce delay-100">🔧</span>
            <span className="animate-bounce delay-200">🏗️</span>
            <span className="animate-bounce delay-300">👨‍🔧</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Staffing Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional staffing solutions for all types of businesses requiring manual labor
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById('staffing-cta')?.scrollIntoView({ behavior: 'smooth' })}
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
      </div>
    </div>
  );
};
