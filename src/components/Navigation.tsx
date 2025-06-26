
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { user, signOut } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navigationItems = [
    { label: t("nav.home"), type: "link", to: "/" },
    { label: t("nav.about"), type: "scroll", target: "about" },
    { label: t("nav.services"), type: "scroll", target: "services" },
    { label: t("nav.whyChoose"), type: "scroll", target: "why-choose" },
    { label: t("nav.staffing"), type: "link", to: "/staffing" },
    { label: "Blog", type: "link", to: "/blog" },
    { label: t("nav.contact"), type: "scroll", target: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-black">
            Simple. ✨
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              item.type === "link" ? (
                <Link 
                  key={item.label}
                  to={item.to!} 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.target!)}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Desktop Auth and Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            
            {user ? (
              <Button size="sm" variant="outline" onClick={signOut}>
                <User className="w-4 h-4 mr-1" />
                Sign Out
              </Button>
            ) : (
              <Link to="/auth">
                <Button size="sm" variant="outline">
                  <User className="w-4 h-4 mr-1" />
                  Sign In
                </Button>
              </Link>
            )}
            
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => scrollToSection('contact')}
            >
              {t("nav.getQuote")}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="mb-4">
                  <LanguageToggle />
                </div>
                
                {navigationItems.map((item) => (
                  item.type === "link" ? (
                    <Link 
                      key={item.label}
                      to={item.to!} 
                      className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      key={item.label}
                      onClick={() => scrollToSection(item.target!)}
                      className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-lg text-left"
                    >
                      {item.label}
                    </button>
                  )
                ))}
                
                {user ? (
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button className="w-full" variant="outline">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                )}
                
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 mt-4"
                  onClick={() => scrollToSection('contact')}
                >
                  {t("nav.getQuote")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
