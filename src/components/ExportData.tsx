
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Download, FileSpreadsheet } from "lucide-react";
import * as XLSX from 'xlsx';

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

interface ExportDataProps {
  certificates: Certificate[];
}

const ExportData = ({ certificates }: ExportDataProps) => {
  const { toast } = useToast();

  const exportToExcel = () => {
    if (certificates.length === 0) {
      toast({
        title: "No Data to Export",
        description: "There are no certificates to export.",
        variant: "destructive",
      });
      return;
    }

    // Prepare data for Excel export (including course information)
    const exportData = certificates.map((cert, index) => ({
      'Sr. No.': index + 1,
      'Student Name': cert.studentName,
      'Father Name': cert.fatherName,
      'Date of Birth': new Date(cert.dateOfBirth).toLocaleDateString('en-IN'),
      'Certificate Number': cert.certificateNumber,
      'Roll Number': cert.rollNo,
      'Passing Year': cert.passingYear,
      'Course Name': cert.courseName,
      'Course Duration': cert.courseOfDuration,
      'Created Date': new Date(cert.createdAt).toLocaleDateString('en-IN')
    }));

    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Set column widths
    const columnWidths = [
      { wch: 8 },  // Sr. No.
      { wch: 25 }, // Student Name
      { wch: 25 }, // Father Name
      { wch: 15 }, // Date of Birth
      { wch: 18 }, // Certificate Number
      { wch: 15 }, // Roll Number
      { wch: 12 }, // Passing Year
      { wch: 20 }, // Course Name
      { wch: 18 }, // Course Duration
      { wch: 15 }  // Created Date
    ];
    worksheet['!cols'] = columnWidths;

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Certificates');

    // Generate filename with current date
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `Tally_Expert_Certificates_${currentDate}.xlsx`;

    // Export file
    XLSX.writeFile(workbook, filename);

    toast({
      title: "Export Successful",
      description: `${certificates.length} certificates exported to ${filename}`,
    });
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileSpreadsheet className="mr-2 h-5 w-5" />
          Export Data
        </CardTitle>
        <p className="text-muted-foreground">
          Download all certificate data as an Excel file
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Total Certificates: {certificates.length}</p>
                <p className="text-sm text-muted-foreground">
                  Export includes all student details except photo files
                </p>
              </div>
              <Button 
                onClick={exportToExcel}
                variant="professional"
                disabled={certificates.length === 0}
              >
                <Download className="mr-2 h-4 w-4" />
                Export to Excel
              </Button>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p><strong>Export includes:</strong></p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Student name and father's name</li>
              <li>Date of birth and certificate details</li>
              <li>Roll number and passing year</li>
              <li>Creation date and photo status</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExportData;
