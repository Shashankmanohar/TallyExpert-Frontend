import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, LogIn, Menu, X } from "lucide-react";
import TallyExpertLogo from '../../src/assets/TallyExpertLogo.png';
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm">
            <span className="inline-block mx-2">Reg.No-188/1996-1997</span>
            <span className="inline-block mx-2">UDYAM-BR-26-0100887AN ISO 9001-2015 Certified</span>
            <span className="inline-block mx-2">Reg.No-QMS/092020/19192</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src={TallyExpertLogo} alt="Logo" className="lg:w-[7vw] w-[20vw]" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/courses" className="text-foreground hover:text-primary transition-colors">
                Courses
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:block flex items-center space-x-3">
              <Link to="/verify-certificate">
                <Button variant="outline" size="sm">
                  <Award className="h-4 w-4 mr-2" />
                  Verify Certificate
                </Button>
              </Link>
              <Link to="/admin">
                <Button size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Admin Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsLogin(!isLogin)} className="focus:outline-none">
                {isLogin ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isLogin && (
              <div className="absolute top-16 left-0 w-full bg-[#FFFFFF] shadow-lg py-4 flex flex-col items-center space-y-4 lg:hidden">
                <Link to="/" onClick={() => setIsLogin(false)} className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsLogin(false)} className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link to="/courses" onClick={() => setIsLogin(false)} className="text-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
                <Link to="/contact" onClick={() => setIsLogin(false)} className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link to="/verify-certificate" onClick={() => setIsLogin(false)}>
                  <Button variant="outline" size="sm">
                    <Award className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </Button>
                </Link>
                <Link to="/admin" onClick={() => setIsLogin(false)}>
                  <Button size="sm">
                    <LogIn className="h-4 w-4 mr-2" />
                    Admin Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
