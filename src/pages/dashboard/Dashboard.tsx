
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { ArrowUp, ArrowDown, Percent, DollarSign, Users, Clock, CheckCircle, AlertCircle } from "lucide-react";

const Dashboard = () => {
  // Mock data for the dashboard
  const stats = {
    totalApplicants: 124,
    approvedLoans: 98,
    pendingLoans: 26,
    totalDisbursed: 258960,
    dueThisMonth: 42785,
    repaymentRate: 94.3,
  };

  // Mock data for charts
  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Applications",
        data: [18, 23, 26, 21, 19, 17],
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 2,
      },
      {
        label: "Approvals",
        data: [15, 19, 22, 18, 16, 14],
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "rgba(16, 185, 129, 1)",
        borderWidth: 2,
      },
    ],
  };

  const repaymentData = {
    labels: ["Paid On Time", "Paid Late", "Defaulted", "Upcoming"],
    datasets: [
      {
        data: [75, 15, 5, 5],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(59, 130, 246, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const performanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Disbursements",
        data: [42000, 48500, 52000, 49800, 53400, 58500],
        borderColor: "rgba(79, 70, 229, 1)",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Repayments",
        data: [32000, 38500, 42000, 44800, 47400, 52500],
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-loan-primary">Dashboard Overview</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Applicants</p>
                <h3 className="text-2xl font-bold text-loan-primary mt-1">{stats.totalApplicants}</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" /> 12% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-loan-accent/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-loan-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Approved Loans</p>
                <h3 className="text-2xl font-bold text-loan-primary mt-1">{stats.approvedLoans}</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" /> 8% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Loans</p>
                <h3 className="text-2xl font-bold text-loan-primary mt-1">{stats.pendingLoans}</h3>
                <p className="text-xs text-amber-500 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" /> Avg. 3 days to approval
                </p>
              </div>
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-amber-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Repayment Rate</p>
                <h3 className="text-2xl font-bold text-loan-primary mt-1">{stats.repaymentRate}%</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" /> 2.1% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Percent className="h-6 w-6 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Amount Disbursed</p>
                <h3 className="text-2xl font-bold text-loan-primary mt-1">
                  ${stats.totalDisbursed.toLocaleString()}
                </h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" /> 15% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Due This Month</p>
                <h3 className="text-2xl font-bold text-loan-primary mt-1">
                  ${stats.dueThisMonth.toLocaleString()}
                </h3>
                <p className="text-xs text-amber-500 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" /> Next payment due in 5 days
                </p>
              </div>
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Loan Applications & Approvals</CardTitle>
              <CardDescription>Monthly trend of loan applications and approvals</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <BarChart data={monthlyData} />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Repayment Status</CardTitle>
              <CardDescription>Distribution of loan repayment statuses</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <PieChart data={repaymentData} />
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Monthly disbursements vs. repayments</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <LineChart data={performanceData} />
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Loan #LN-7829 Approved</p>
                  <p className="text-sm text-gray-500">A loan application for $12,500 was approved</p>
                  <p className="text-xs text-gray-400">Today at 10:30 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Payment Received</p>
                  <p className="text-sm text-gray-500">$2,350 payment received for Loan #LN-6541</p>
                  <p className="text-xs text-gray-400">Yesterday at 3:45 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">Payment Reminder Sent</p>
                  <p className="text-sm text-gray-500">Payment reminder sent to 15 borrowers</p>
                  <p className="text-xs text-gray-400">Yesterday at 9:00 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">New Application Received</p>
                  <p className="text-sm text-gray-500">Loan application #LN-7830 received for review</p>
                  <p className="text-xs text-gray-400">Oct 18, 2023 at 2:15 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
