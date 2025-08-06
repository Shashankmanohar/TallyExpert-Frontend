
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LogIn, LogOut } from "lucide-react";
import CertificateList from "@/components/CertificateList";
import CertificateForm from "@/components/CertificateForm";
import ExportData from "@/components/ExportData";
import { authAPI, certificateAPI } from "@/lib/api";

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

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Load certificates from backend on component mount
  useEffect(() => {
    if (isLoggedIn) {
      loadCertificates();
    }
  }, [isLoggedIn]);

  const loadCertificates = async () => {
    try {
      setIsLoading(true);
      const response = await certificateAPI.getAll();
      setCertificates(response.data.certificates);
    } catch (error) {
      console.error('Error loading certificates:', error);
      toast({
        title: "Error",
        description: "Failed to load certificates",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await authAPI.login(loginForm);
      localStorage.setItem('adminToken', response.data.token);
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
      });
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: error.response?.data?.message || "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    setCertificates([]);
    setEditingCertificate(null);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };

  const handleSubmitCertificate = async (formData: CertificateData) => {
    try {
      setIsLoading(true);
      if (editingCertificate) {
        // Update existing certificate (you'll need to add update endpoint to backend)
        toast({
          title: "Update Not Implemented",
          description: "Certificate update functionality will be added soon",
          variant: "destructive",
        });
        setEditingCertificate(null);
      } else {
        // Add new certificate
        const response = await certificateAPI.create(formData);
        const newCertificate = response.data.certificate;
        setCertificates(prev => [...prev, newCertificate]);
        toast({
          title: "Certificate Added",
          description: `Certificate for ${formData.studentName} has been added successfully.`,
        });
      }
    } catch (error: any) {
      console.error('Error submitting certificate:', error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to submit certificate",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditCertificate = (certificate: Certificate) => {
    setEditingCertificate(certificate);
  };

  const handleDeleteCertificate = async (id: string) => {
    try {
      setIsLoading(true);
      await certificateAPI.delete(id);
      setCertificates(prev => prev.filter(cert => cert._id !== id));
      toast({
        title: "Certificate Deleted",
        description: "Certificate has been deleted from the database",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to delete certificate",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingCertificate(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent/30 px-4">
        <Card className="w-full max-w-md shadow-elegant">
          <CardHeader className="text-center">
            <LogIn className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <p className="text-muted-foreground">Access the certificate management system</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" variant="professional" disabled={isLoading}>
                <LogIn className="mr-2 h-4 w-4" />
                {isLoading ? "Logging in..." : "Login to Admin Panel"}
              </Button>
            </form>
            <div className="mt-4 p-3 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground">
                <strong>Demo Credentials:</strong><br />
                Email: admin@tallyexpert.com<br />
                Password: Tallyexpert@2025
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-accent/30 py-4 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage student certificates</p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="self-start sm:self-auto"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="space-y-6">
          {/* Certificate Form */}
          <CertificateForm 
            editingCertificate={editingCertificate}
            onSubmit={handleSubmitCertificate}
            onCancel={handleCancelEdit}
          />

          {/* Export Data */}
          <ExportData certificates={certificates} />

          {/* Certificate List */}
          <CertificateList 
            certificates={certificates}
            onEdit={handleEditCertificate}
            onDelete={handleDeleteCertificate}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
