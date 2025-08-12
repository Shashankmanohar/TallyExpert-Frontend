import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, Users } from "lucide-react";

interface Certificate {
  _id: string;
  studentName: string;
  fatherName: string;
  dateOfBirth: string;
  certificateNumber: string;
  rollNo: string;
  passingYear: string;
  courseOfDuration: string; // Added
  courseName: string;       // Added
  createdAt: string;
}

interface CertificateListProps {
  certificates: Certificate[];
  onEdit: (certificate: Certificate) => void;
  onDelete: (id: string) => void;
}

const ITEMS_PER_PAGE = 10;

const CertificateList = ({
  certificates,
  onEdit,
  onDelete,
}: CertificateListProps) => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id: string, studentName: string) => {
    if (
      window.confirm(
        `Are you sure you want to delete the certificate for ${studentName}?`
      )
    ) {
      onDelete(id);
      toast({
        title: "Certificate Deleted",
        description: `Certificate for ${studentName} has been deleted.`,
      });
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCertificates = certificates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (certificates.length === 0) {
    return (
      <Card className="shadow-elegant">
        <CardContent className="text-center py-8">
          <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            No certificates found. Add your first certificate to get started.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-5 w-5" />
          Student Certificates ({certificates.length})
        </CardTitle>
        <p className="text-muted-foreground">
          Manage all student certificate records
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 text-center">S.No.</TableHead>
                <TableHead className="w-16">Photo</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead className="hidden md:table-cell">
                  Father's Name
                </TableHead>
                <TableHead className="hidden sm:table-cell">
                  Certificate No.
                </TableHead>
                <TableHead className="hidden lg:table-cell">Roll No.</TableHead>
                <TableHead className="hidden lg:table-cell">Year</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Course Duration</TableHead>
                <TableHead className="w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCertificates.map((certificate, index) => (
                <TableRow key={certificate._id}>
                  <TableCell className="text-center">
                    {startIndex + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    <div>
                      <p className="font-semibold">{certificate.studentName}</p>
                      <p className="text-sm text-muted-foreground md:hidden">
                        {certificate.certificateNumber}
                      </p>
                      <p className="text-sm text-muted-foreground md:hidden">
                        Course: {certificate.courseName} ({certificate.courseOfDuration})
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {certificate.fatherName}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {certificate.certificateNumber}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {certificate.rollNo}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {certificate.passingYear}
                  </TableCell>
                  <TableCell>
                    {certificate.courseName}
                  </TableCell>
                  <TableCell>
                    {certificate.courseOfDuration}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEdit(certificate)}
                        className="h-8 w-8 p-0"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          handleDelete(certificate._id, certificate.studentName)
                        }
                        className="h-8 w-8 p-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
            >
              Next
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateList;
