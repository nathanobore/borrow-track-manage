
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MoreHorizontal, FileText, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";

// Mock data for loan applicants
const applicants = [
  {
    id: "LA-1001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    amount: 5000,
    purpose: "Home Renovation",
    date: "2023-10-18",
    status: "Pending"
  },
  {
    id: "LA-1002",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "(555) 234-5678",
    amount: 10000,
    purpose: "Business Expansion",
    date: "2023-10-17",
    status: "Approved"
  },
  {
    id: "LA-1003",
    name: "Robert Davis",
    email: "robert.davis@example.com",
    phone: "(555) 345-6789",
    amount: 7500,
    purpose: "Education",
    date: "2023-10-16",
    status: "Rejected"
  },
  {
    id: "LA-1004",
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    phone: "(555) 456-7890",
    amount: 15000,
    purpose: "Debt Consolidation",
    date: "2023-10-15",
    status: "Pending"
  },
  {
    id: "LA-1005",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "(555) 567-8901",
    amount: 25000,
    purpose: "Business Startup",
    date: "2023-10-14",
    status: "Approved"
  },
];

const LoanApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredApplicants = applicants.filter(applicant => {
    const searchLower = searchTerm.toLowerCase();
    return (
      applicant.name.toLowerCase().includes(searchLower) ||
      applicant.email.toLowerCase().includes(searchLower) ||
      applicant.id.toLowerCase().includes(searchLower)
    );
  });

  const handleViewDetails = (id: string) => {
    toast.info(`Viewing details for application ${id}`);
    // In a real app, this would navigate to a details page or open a modal
  };

  const handleApprove = (id: string) => {
    toast.success(`Application ${id} approved successfully`);
    // In a real app, this would update the status in the database
  };

  const handleReject = (id: string) => {
    toast.error(`Application ${id} has been rejected`);
    // In a real app, this would update the status in the database
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-loan-primary">Loan Applications</h1>
          <Button className="bg-loan-accent hover:bg-loan-accent/90">
            <Plus className="mr-2 h-4 w-4" /> Add New Application
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>All Applications</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search applications..."
                    className="pl-10 w-[250px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplicants.length > 0 ? (
                    filteredApplicants.map((applicant) => (
                      <TableRow key={applicant.id}>
                        <TableCell>{applicant.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{applicant.name}</p>
                            <p className="text-sm text-gray-500">{applicant.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>${applicant.amount}</TableCell>
                        <TableCell>{applicant.purpose}</TableCell>
                        <TableCell>{applicant.date}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              applicant.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : applicant.status === "Rejected"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {applicant.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleViewDetails(applicant.id)}>
                                <FileText className="mr-2 h-4 w-4" /> View Details
                              </DropdownMenuItem>
                              {applicant.status === "Pending" && (
                                <>
                                  <DropdownMenuItem onClick={() => handleApprove(applicant.id)}>
                                    <CheckCircle className="mr-2 h-4 w-4" /> Approve
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleReject(applicant.id)}>
                                    <XCircle className="mr-2 h-4 w-4" /> Reject
                                  </DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-4">
                        No applications found matching your search.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LoanApplications;
