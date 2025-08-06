import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Tally Expert</h3>
                <p className="text-primary-foreground/80">Education Center</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              IT Courses require proper Guidance & Teaching procedure. We provide highly qualified 
              instructors, fully equipped computer labs, and comprehensive study materials to ensure 
              maximum benefits to our students.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold">12,000+</div>
                <div className="text-sm text-primary-foreground/70">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">240+</div>
                <div className="text-sm text-primary-foreground/70">Courses</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/courses" className="hover:text-white transition-colors">Our Courses</a></li>
              <li><a href="/verify-certificate" className="hover:text-white transition-colors">Verify Certificate</a></li>
              <li><a href="/admin" className="hover:text-white transition-colors">Admin Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@tallyexpert.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Tally Expert Education Center<br />Main Road, City Center</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2025 Tally Expert Education Center. All rights reserved. | ISO 9001-2015 Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;