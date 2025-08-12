import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, UserPlus, X } from "lucide-react";

interface CertificateData {
  studentName: string;
  fatherName: string;
  dateOfBirth: string;
  certificateNumber: string;
  rollNo: string;
  passingYear: string;
  courseOfDuration: string;
  courseName: string;
}

interface Certificate extends CertificateData {
  _id: string;
  createdAt: string;
}

interface CertificateFormProps {
  editingCertificate?: Certificate | null;
  onSubmit: (data: CertificateData) => void;
  onCancel: () => void;
}

const CertificateForm = ({ editingCertificate, onSubmit, onCancel }: CertificateFormProps) => {
  const [formData, setFormData] = useState<CertificateData>({
    studentName: "",
    fatherName: "",
    dateOfBirth: "",
    certificateNumber: "",
    rollNo: "",
    passingYear: "",
    courseOfDuration: "",
    courseName: ""
  });
  

  const { toast } = useToast();

  const generateUniqueCertificateNumber = () => {
    const timestamp = Date.now();
    return `TC-${timestamp}`;
  };

  useEffect(() => {
    if (editingCertificate) {
      const newFormData = {
        studentName: editingCertificate.studentName,
        fatherName: editingCertificate.fatherName,
        dateOfBirth: editingCertificate.dateOfBirth,
        certificateNumber: editingCertificate.certificateNumber,
        rollNo: editingCertificate.rollNo,
        passingYear: editingCertificate.passingYear,
        courseOfDuration: editingCertificate.courseOfDuration,
        courseName: editingCertificate.courseName
      };
      setFormData(newFormData);
    } else {
      const emptyFormData = {
        studentName: "",
        fatherName: "",
        dateOfBirth: "",
        certificateNumber: generateUniqueCertificateNumber(),
        rollNo: "",
        passingYear: "",
        courseOfDuration: "",
        courseName: ""
      };
      setFormData(emptyFormData);
    }
  }, [editingCertificate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check all required fields
    const requiredFields = ['studentName', 'fatherName', 'dateOfBirth', 'certificateNumber', 'rollNo', 'passingYear', 'courseOfDuration', 'courseName'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof CertificateData] || formData[field as keyof CertificateData] === '');
    
    if (missingFields.length > 0) {
      toast({
        title: "Validation Error",
        description: `Please fill in all required fields: ${missingFields.join(', ')}`,
        variant: "destructive",
      });
      return;
    }
    
    // Create a deep copy of the form data to prevent any interference
    const submissionData = {
      studentName: formData.studentName,
      fatherName: formData.fatherName,
      dateOfBirth: formData.dateOfBirth,
      certificateNumber: formData.certificateNumber,
      rollNo: formData.rollNo,
      passingYear: formData.passingYear,
      courseOfDuration: formData.courseOfDuration,
      courseName: formData.courseName
    };
    

    
    // Call onSubmit with the prepared data
    onSubmit(submissionData);

    // Reset form after submission (will be overridden if editing)
    if (!editingCertificate) {
      setTimeout(() => {
        const emptyFormData = {
          studentName: "",
          fatherName: "",
          dateOfBirth: "",
          certificateNumber: generateUniqueCertificateNumber(),
          rollNo: "",
          passingYear: "",
          courseOfDuration: "",
          courseName: ""
        };
        setFormData(emptyFormData);
      }, 100); // Small delay to ensure data is sent
    }
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <UserPlus className="mr-2 h-5 w-5" />
            {editingCertificate ? 'Edit Certificate' : 'Add New Certificate'}
          </CardTitle>
          {editingCertificate && (
            <Button variant="outline" size="sm" onClick={onCancel}>
              <X className="h-4 w-4 mr-1" />
              Cancel
            </Button>
          )}
        </div>
        <p className="text-muted-foreground">
          {editingCertificate
            ? 'Update the student certificate details'
            : 'Fill in the student details to generate a new certificate entry'}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" id="certificateForm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="studentName">Student Name</Label>
              <Input
                id="studentName"
                value={formData.studentName}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({ ...prev, studentName: value }));
                }}
                placeholder="Enter student's full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="fatherName">Father's Name</Label>
              <Input
                id="fatherName"
                value={formData.fatherName}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({ ...prev, fatherName: value }));
                }}
                placeholder="Enter father's name"
                required
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({ ...prev, dateOfBirth: value }));
                }}
                required
              />
            </div>
            <div>
              <Label htmlFor="certificateNumber">Certificate Number</Label>
              <div className="flex gap-2">
                <Input
                  id="certificateNumber"
                  value={formData.certificateNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData(prev => ({ ...prev, certificateNumber: value }));
                  }}
                  placeholder="e.g., TEC2025001"
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, certificateNumber: generateUniqueCertificateNumber() }))}
                  className="whitespace-nowrap"
                >
                  Generate New
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="rollNo">Roll Number</Label>
              <Input
                id="rollNo"
                value={formData.rollNo}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({ ...prev, rollNo: value }));
                }}
                placeholder="Enter roll number"
                required
              />
            </div>
            <div>
              <Label htmlFor="passingYear">Passing Year</Label>
              <Input
                id="passingYear"
                value={formData.passingYear}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({ ...prev, passingYear: value }));
                }}
                placeholder="e.g., 2025"
                required
              />
            </div>
            <div>
              <Label htmlFor="courseOfDuration">Course Duration</Label>
              <Input
                id="courseOfDuration"
                value={formData.courseOfDuration}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({ ...prev, courseOfDuration: value }));
                }}
                placeholder="e.g., 3 Months"
                required
              />
            </div>
            <div>
              <Label htmlFor="courseName">Course Name</Label>
              <Input
                id="courseName"
                value={formData.courseName}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({ ...prev, courseName: value }));
                }}
                placeholder="e.g., Tally"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" variant="professional" size="lg">
            <Upload className="mr-2 h-4 w-4" />
            {editingCertificate ? 'Update Certificate' : 'Add Certificate to Database'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CertificateForm;
