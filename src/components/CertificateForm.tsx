
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
    passingYear: ""
  });
  const { toast } = useToast();

 

  useEffect(() => {
    if (editingCertificate) {
      setFormData({
        studentName: editingCertificate.studentName,
        fatherName: editingCertificate.fatherName,
        dateOfBirth: editingCertificate.dateOfBirth,
        certificateNumber: editingCertificate.certificateNumber,
        rollNo: editingCertificate.rollNo,
        passingYear: editingCertificate.passingYear
      });
    } else {
      setFormData({
        studentName: "",
        fatherName: "",
        dateOfBirth: "",
        certificateNumber: "",
        rollNo: "",
        passingYear: ""
      });
    }
  }, [editingCertificate]);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    
    if (!editingCertificate) {
      setFormData({
        studentName: "",
        fatherName: "",
        dateOfBirth: "",
        certificateNumber: "",
        rollNo: "",
        passingYear: ""
      });
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
            : 'Fill in the student details to generate a new certificate entry'
          }
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="studentName">Student Name</Label>
              <Input
                id="studentName"
                value={formData.studentName}
                onChange={(e) => setFormData(prev => ({ ...prev, studentName: e.target.value }))}
                placeholder="Enter student's full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="fatherName">Father's Name</Label>
              <Input
                id="fatherName"
                value={formData.fatherName}
                onChange={(e) => setFormData(prev => ({ ...prev, fatherName: e.target.value }))}
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
                onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="certificateNumber">Certificate Number</Label>
              <Input
                id="certificateNumber"
                value={formData.certificateNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, certificateNumber: e.target.value }))}
                placeholder="e.g., TEC2025001"
                required
              />
            </div>
            <div>
              <Label htmlFor="rollNo">Roll Number</Label>
              <Input
                id="rollNo"
                value={formData.rollNo}
                onChange={(e) => setFormData(prev => ({ ...prev, rollNo: e.target.value }))}
                placeholder="Enter roll number"
                required
              />
            </div>
            <div>
              <Label htmlFor="passingYear">Passing Year</Label>
              <Input
                id="passingYear"
                value={formData.passingYear}
                onChange={(e) => setFormData(prev => ({ ...prev, passingYear: e.target.value }))}
                placeholder="e.g., 2025"
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
