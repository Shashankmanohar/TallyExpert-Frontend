import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Award, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Tally Prime Fundamentals",
      duration: "2 Months",
      level: "Beginner",
      students: "500+",
      features: [
        "Basic Accounting Concepts",
        "Tally Prime Installation & Setup",
        "Company Creation & Management",
        "Voucher Entry & Processing",
        "Basic Reports Generation"
      ]
    },
    {
      title: "Advanced Tally Prime",
      duration: "3 Months", 
      level: "Intermediate",
      students: "300+",
      features: [
        "Advanced Accounting Features",
        "Inventory Management",
        "Payroll Processing",
        "TDS & GST Management",
        "Banking & Financial Reports"
      ]
    },
    {
      title: "Tally Prime with GST",
      duration: "2.5 Months",
      level: "Professional",
      students: "400+",
      features: [
        "Complete GST Implementation",
        "GST Returns Filing",
        "E-way Bill Generation",
        "GST Compliance",
        "Advanced Tax Management"
      ]
    },
    {
      title: "Computer Fundamentals",
      duration: "1 Month",
      level: "Beginner",
      students: "800+",
      features: [
        "Basic Computer Operations",
        "MS Office Suite",
        "Internet & Email",
        "File Management",
        "Digital Literacy"
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Professional":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-accent/30 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional IT courses designed to enhance your career prospects with industry-relevant skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                  </div>
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} Enrolled
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Course Features:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full" variant="professional">
                    <Award className="h-4 w-4 mr-2" />
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="shadow-elegant max-w-4xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Our Courses?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Expert Instructors</h4>
                  <p className="text-sm text-muted-foreground">Learn from highly qualified and experienced faculty</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Comprehensive Materials</h4>
                  <p className="text-sm text-muted-foreground">Complete study materials and lab assistance provided</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Certification</h4>
                  <p className="text-sm text-muted-foreground">Receive industry-recognized certificates upon completion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;