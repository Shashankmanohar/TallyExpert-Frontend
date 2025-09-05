import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Search, Award, CheckCircle, XCircle, User, Calendar, Hash, BookOpen, Clock } from "lucide-react";
import { certificateAPI } from "@/lib/api";

interface Certificate {
  _id: string;
  studentName: string;
  fatherName: string;
  dateOfBirth: string;
  certificateNumber: string;
  rollNo: string;
  passingYear: string;
  courseOfDuration: string; 
  courseName: string;       
  createdAt: string;
}

const VerifyCertificate = () => {
  const [searchForm, setSearchForm] = useState({
    studentName: "",
    fatherName: "",
    dateOfBirth: "",
    certificateNumber: ""
  });
  const [searchResult, setSearchResult] = useState<Certificate | null>(null);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSearched(false);

    try {
      const response = await certificateAPI.getOne(searchForm);
      setSearchResult(response.data.certificate);
      setIsSearched(true);
      
      toast({
        title: "Certificate Found!",
        description: `Certificate verified for ${response.data.certificate.studentName}`,
      });
    } catch (error: any) {
      console.error('Search error:', error);
      setSearchResult(null);
      setIsSearched(true);
      
      toast({
        title: "Certificate Not Found",
        description: error.response?.data?.message || "Please check your details and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setSearchForm(prev => ({ ...prev, [field]: value }));
    setIsSearched(false);
    setSearchResult(null);
  };

  return (
    <div className="min-h-screen bg-accent/30 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Certificate Verification</h1>
          <p className="text-xl text-muted-foreground">
            Verify the authenticity of Tally Expert certificates
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Search Certificate
              </CardTitle>
              <p className="text-muted-foreground">
                Enter the certificate number to verify its authenticity
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input
                      id="studentName"
                      value={searchForm.studentName}
                      onChange={(e) => handleInputChange('studentName', e.target.value)}
                      placeholder="Enter student's full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fatherName">Father's Name</Label>
                    <Input
                      id="fatherName"
                      value={searchForm.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      placeholder="Enter father's name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={searchForm.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="certificateNumber">Certificate Number</Label>
                    <Input
                      id="certificateNumber"
                      value={searchForm.certificateNumber}
                      onChange={(e) => handleInputChange('certificateNumber', e.target.value)}
                      placeholder="e.g., TEC2025001"
                      required
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="professional" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Verify Certificate
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {isSearched && (
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {searchResult ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                      <span className="text-green-600">Certificate Verified</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="mr-2 h-5 w-5 text-red-600" />
                      <span className="text-red-600">Certificate Not Found</span>
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {searchResult ? (
                  <div className="space-y-6">
                    {/* Certificate Header */}
                    <div className="text-center border-b pb-6">
                      <div className="bg-gradient-hero text-white p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">TALLY EXPERT COMPUTER EDUCATION CENTER</h2>
                        <p className="text-lg">Certificate of Completion</p>
                        <div className="flex items-center justify-center mt-4">
                          <Award className="h-8 w-8 mr-2" />
                          <span className="text-xl font-semibold">Verified Authentic</span>
                        </div>
                      </div>
                    </div>

                    {/* Student Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary flex items-center">
                          <User className="mr-2 h-5 w-5" />
                          Student Information
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Student Name:</span>
                            <span>{searchResult.studentName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Father's Name:</span>
                            <span>{searchResult.fatherName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Date of Birth:</span>
                            <span>{new Date(searchResult.dateOfBirth).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary flex items-center">
                          <Hash className="mr-2 h-5 w-5" />
                          Certificate Details
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-medium">Certificate No:</span>
                            <span className="font-mono">{searchResult.certificateNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Roll Number:</span>
                            <span>{searchResult.rollNo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Passing Year:</span>
                            <span>{searchResult.passingYear}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Course Name:</span>
                            <span>{searchResult.courseName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Course Duration:</span>
                            <span>{searchResult.courseOfDuration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Verification Details */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-800">Verification Status: AUTHENTIC</span>
                      </div>
                      <p className="text-sm text-green-700 mt-2">
                        This certificate has been issued by Tally Expert Computer Education Center and is hereby declared valid.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Certificate Not Found</h3>
                    <p className="text-muted-foreground mb-4">
                      The certificate with the provided details was not found in our database.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
                      <h4 className="font-medium text-red-800 mb-2">Please check:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Certificate number is entered accurately</li>
                        <li>• Certificate number format is correct</li>
                        <li>• Certificate exists in our database</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
