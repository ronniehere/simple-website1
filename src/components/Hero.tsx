
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 text-6xl mb-8">
          <span>🧹</span>
          <span>🧽</span>
          <span>✨</span>
          <span>🧼</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Clean Spaces. Simple Results.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Commercial cleaning that is modern, professional, and reliable.
        </p>
        
        <Button 
          size="lg" 
          className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get a Quote
        </Button>
      </div>
    </div>
  );
};
