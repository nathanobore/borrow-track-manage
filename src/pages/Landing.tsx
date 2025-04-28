
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-loan-primary to-loan-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Streamline Your Loan Management Process
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                An all-in-one solution to manage loan applications, track repayments, and automate reminders.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="text-loan-primary bg-white hover:bg-gray-100">
                    Get Started
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-loan-primary">Key Features</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage your loan operations efficiently
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-loan-accent/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-loan-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-loan-primary">Loan Applications</h3>
                  <p className="text-gray-600 mb-4">
                    Easily manage new loan applications with customizable forms and approval workflows.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-loan-accent/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-loan-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-loan-primary">Loan Tracking</h3>
                  <p className="text-gray-600 mb-4">
                    Monitor repayments, outstanding balances, and loan performance with detailed analytics.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-loan-accent/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-loan-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-loan-primary">Automated Reminders</h3>
                  <p className="text-gray-600 mb-4">
                    Send automatic reminders via SMS and email for upcoming and overdue payments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-loan-accent/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-loan-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-loan-primary">Disbursement</h3>
                  <p className="text-gray-600 mb-4">
                    Streamline loan disbursement with integrated payment systems and detailed records.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-loan-accent/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-loan-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-loan-primary">Reporting</h3>
                  <p className="text-gray-600 mb-4">
                    Generate comprehensive reports for loan performance, risk assessment, and financial analysis.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-loan-accent/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-loan-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-loan-primary">Security</h3>
                  <p className="text-gray-600 mb-4">
                    Enterprise-grade security with role-based access controls and data encryption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-loan-primary">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Choose a plan that works best for your loan management needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 hover:border-loan-accent hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-loan-primary">Starter</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-loan-primary">$49</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Perfect for small lenders just starting out.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Up to 50 active loans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Email reminders</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Basic reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Link to="/signup">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-loan-accent shadow-lg relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-loan-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-loan-primary">Professional</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-loan-primary">$99</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Ideal for growing lending operations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Up to 200 active loans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Email and SMS reminders</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Advanced reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Document management</span>
                    </li>
                  </ul>
                  <Link to="/signup">
                    <Button className="w-full bg-loan-accent hover:bg-loan-accent/90">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 hover:border-loan-accent hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-loan-primary">Enterprise</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-loan-primary">$249</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Complete solution for large lending operations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Unlimited active loans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>All communication channels</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Custom reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>API access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>White labeling</span>
                    </li>
                  </ul>
                  <Link to="/signup">
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-loan-primary">What Our Clients Say</h2>
              <p className="mt-4 text-xl text-gray-600">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg">
                        JD
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">John Doe</h4>
                      <p className="text-gray-600">MicroFinance Inc.</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "LoanMaster has transformed how we handle our loan portfolio. The automated
                    reminders alone have improved our repayment rates by 30%!"
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg">
                        AS
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Alice Smith</h4>
                      <p className="text-gray-600">Community Credit Union</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The reporting features have given us insights we never had before. We've been
                    able to optimize our loan products based on actual performance data."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg">
                        RJ
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Robert Johnson</h4>
                      <p className="text-gray-600">First Capital Bank</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The customer support team is exceptional. They helped us customize the system
                    to match our unique workflow and regulatory requirements."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-loan-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your loan management?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of financial institutions and lenders who've improved their efficiency and
              reduced defaults with LoanMaster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="text-loan-primary bg-white hover:bg-gray-100">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
