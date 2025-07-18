
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export const StaffingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navigationItems = [
    { label: "Staffing Services", target: "staffing-hero" },
    { label: "Our Solutions", target: "staffing-solutions" },
    { label: "Services", target: "staffing-services" },
    { label: "Our Process", target: "staffing-process" },
    { label: "Benefits", target: "staffing-benefits" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('staffing-hero')}
            className="text-xl font-bold text-black"
          >
            Simple.
          </button>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Button 
            size="sm" 
            className="hidden md:block bg-blue-600 hover:bg-blue-700"
            onClick={() => scrollToSection('contact')}
          >
            Get Quote
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <button 
                    key={item.label}
                    onClick={() => scrollToSection(item.target)}
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 mt-4"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
