import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, LogIn } from "lucide-react";

const Header = () => {
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
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">Tally Expert</h1>
              <p className="text-xs text-muted-foreground">Education Center</p>
            </div>
          </Link>
          
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

          <div className="flex items-center space-x-3">
            <Link to="/verify-certificate">
              <Button variant="outline" size="sm">
                <Award className="h-4 w-4 mr-2" />
                Verify Certificate
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="professional" size="sm">
                <LogIn className="h-4 w-4 mr-2" />
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;