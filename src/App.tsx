
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// Main Pages
import Landing from "./pages/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import LoanApplications from "./pages/loans/LoanApplications";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Protected Routes (in a real app, these would be protected with auth) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loan-applications" element={<LoanApplications />} />
          <Route path="/profile" element={<Profile />} />

          {/* These routes would be implemented in future iterations */}
          <Route path="/manage-loans" element={<Dashboard />} />
          <Route path="/track-loans" element={<Dashboard />} />
          <Route path="/reminders" element={<Dashboard />} />
          <Route path="/disbursement" element={<Dashboard />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
