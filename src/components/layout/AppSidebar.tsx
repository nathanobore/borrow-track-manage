
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  FileText, 
  Clock, 
  Bell, 
  DollarSign, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({ to, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start mb-1 font-normal",
          isActive ? "bg-loan-accent text-white" : "hover:bg-gray-100 hover:text-loan-accent"
        )}
      >
        <Icon className="mr-2 h-5 w-5" />
        {!isCollapsed && <span>{label}</span>}
      </Button>
    </Link>
  );
};

const AppSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={cn(
        "h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="text-xl font-bold text-loan-primary">LoanMaster</div>
        )}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="ml-auto">
          {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
        </Button>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div>
            <h3 className={cn("text-sm font-medium text-gray-500 mb-2", isCollapsed && "sr-only")}>
              Dashboard
            </h3>
            <SidebarLink to="/dashboard" icon={Home} label="Overview" isCollapsed={isCollapsed} />
          </div>
          
          <div>
            <h3 className={cn("text-sm font-medium text-gray-500 mb-2", isCollapsed && "sr-only")}>
              Loan Management
            </h3>
            <SidebarLink to="/loan-applications" icon={Users} label="Applicants" isCollapsed={isCollapsed} />
            <SidebarLink to="/manage-loans" icon={FileText} label="Manage Loans" isCollapsed={isCollapsed} />
            <SidebarLink to="/track-loans" icon={Clock} label="Track Loans" isCollapsed={isCollapsed} />
            <SidebarLink to="/reminders" icon={Bell} label="Reminders" isCollapsed={isCollapsed} />
            <SidebarLink to="/disbursement" icon={DollarSign} label="Disbursement" isCollapsed={isCollapsed} />
          </div>
          
          <div>
            <h3 className={cn("text-sm font-medium text-gray-500 mb-2", isCollapsed && "sr-only")}>
              Account
            </h3>
            <SidebarLink to="/profile" icon={Settings} label="Profile & Settings" isCollapsed={isCollapsed} />
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="mr-2 h-5 w-5" />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
};

export default AppSidebar;
