import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Monitor } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-accent/30 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Tally Expert Education Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading provider of professional IT courses with comprehensive guidance and quality education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-6 w-6 text-primary" />
                Our Teaching Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Regular Classes & Training Sessions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Highly Qualified Instructors & Faculty</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Comprehensive Study Materials for Lab Assistance</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" />
                Student Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Dedicated Counselors at Study Centers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Course Selection Guidance</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Student Progress Monitoring</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-elegant mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-center justify-center">
              <BookOpen className="mr-2 h-6 w-6 text-primary" />
              Course Materials & Language Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center leading-relaxed">
              As per different national languages used in schools & colleges, course materials are provided in English to cover maximum benefits to students. The entire course materials are designed in English for states in the English region, and Hindi course material for other states and regional languages to ensure comprehensive understanding across diverse linguistic backgrounds.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Monitor className="mr-2 h-6 w-6 text-primary" />
              Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Our training centers are equipped with state-of-the-art facilities to ensure the best learning experience for all students.
              </p>
              <div className="inline-flex items-center justify-center bg-primary/10 px-6 py-3 rounded-lg">
                <Monitor className="mr-2 h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Fully Equipped Computer Labs for Training</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;