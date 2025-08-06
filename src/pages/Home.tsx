import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  BookOpen, 
  CheckCircle, 
  Computer, 
  Calculator,
  PenTool,
  Code,
  FileText,
  Image,
  Keyboard,
  GraduationCap
} from "lucide-react";

const Home = () => {
  const courses = [
    {
      id: "account",
      title: "ACCOUNT",
      description: "Master the Fundamentals of Financial Accounting",
      details: "Learn journal entries, ledger, trial balance, balance sheet, and GST billing with practical training in Tally ERP. Ideal for commerce students, job-seekers, and business owners who want to manage accounts independently.",
      icon: Calculator,
      color: "text-blue-600"
    },
    {
      id: "cca",
      title: "CCA",
      description: "Your First Step into the World of Computers",
      details: "This beginner-level course covers the basics of computer operations, MS Office (Word, Excel, PowerPoint), internet usage, and file management. Perfect for students and job aspirants in clerical and office roles.",
      icon: Computer,
      color: "text-green-600"
    },
    {
      id: "cfa",
      title: "CFA",
      description: "Specialized Course for Financial Career Seekers",
      details: "An advanced accounting course including manual & computerized accounting, Tally ERP, GST, TDS, payroll, and financial statements. Suitable for commerce graduates, accountants, and small business owners.",
      icon: FileText,
      color: "text-purple-600"
    },
    {
      id: "cpp",
      title: "C & C++",
      description: "Programming Fundamentals for Beginners",
      details: "Learn the core concepts of structured programming with C and object-oriented programming using C++. Best for students pursuing IT/Engineering or preparing for technical interviews.",
      icon: Code,
      color: "text-red-600"
    },
    {
      id: "adca",
      title: "ADCA",
      description: "Complete Computer Diploma with Job-Ready Skills",
      details: "Covers computer basics, MS Office, internet, Tally, HTML, Photoshop, and more. ADCA is a comprehensive 1-year program ideal for students after 10th/12th for entry-level IT jobs.",
      icon: GraduationCap,
      color: "text-indigo-600"
    },
    {
      id: "dtp",
      title: "DTP",
      description: "Design & Print Like a Pro",
      details: "Master publishing tools like CorelDRAW, Photoshop, PageMaker, and InDesign to create brochures, banners, ID cards, wedding cards, and book layouts. A creative course for designers and print media aspirants.",
      icon: Image,
      color: "text-pink-600"
    },
    {
      id: "steno",
      title: "STENO",
      description: "Become a Government-Ready Stenographer",
      details: "Learn shorthand writing, accurate typing skills (English & Hindi), grammar, and dictation practice. This course is designed for students preparing for stenographer government job exams.",
      icon: PenTool,
      color: "text-yellow-600"
    },
    {
      id: "dca-typing",
      title: "DCA TYPING",
      description: "Diploma in Computer Application + Typing Mastery",
      details: "Combines DCA (basic computer operations, MS Office, internet) with Hindi & English typing training. Ideal for those aiming for office assistant, clerk, and data entry jobs.",
      icon: Keyboard,
      color: "text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              2025 BEST TALLY EXPERT<br />
              <span className="text-secondary">EDUCATION CENTER</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Learn. Excel. Get Certified.
            </p>
            <p className="text-lg mb-12 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Welcome to Tally Expert education Center. IT Courses require proper Guidance & Teaching procedure, 
              which will be based on Regular Classes / Training with Highly qualified instructors and fully equipped computer labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify-certificate">
                <Button variant="secondary" size="lg" className="text-lg px-8">
                  <Award className="mr-2 h-5 w-5" />
                  Verify Certificate
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
            <div className="bg-gradient-card p-8 rounded-lg shadow-card">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">12,000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="bg-gradient-card p-8 rounded-lg shadow-card">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">240+</div>
              <div className="text-muted-foreground">Courses Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                IT Courses require proper Guidance & Teaching procedure, which will be based on – Regular Classes / Training. 
                Highly qualified instructor / Faculty. Provide material for Lab. Assist. / Self Study. Counselor available at study centre 
                to provide required guidance for selection of their courses and students progress. Fully equipped computer lab for training.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As per different national language used in school & colleges, course materials will be provided in English to cover 
                maximum benefits to students. Basically the entire course materials are designed in English for state in the English region, 
                and Hindi course material for other states and regional language.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Quality Education</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Highly qualified instructors with proven teaching methodologies and industry experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Computer className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Modern Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Fully equipped computer labs with latest software and hands-on training facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>ISO Certified</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  ISO 9001-2015 certified institute with trust under The Indian Trust Act 21-1860.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Courses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive courses designed to make you job-ready with practical training and industry-relevant skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => {
              const IconComponent = course.icon;
              return (
                <Card key={course.id} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${course.color}`} />
                    <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                    <p className="text-sm font-semibold text-secondary">{course.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {course.details}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of successful students who have built their careers with Tally Expert Education Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/verify-certificate">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                <Award className="mr-2 h-5 w-5" />
                Verify Your Certificate
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;