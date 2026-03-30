import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

// Landing
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

// Dashboard Layout
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const DashboardHome = lazy(() => import("./pages/dashboard/DashboardHome"));
const DocumentUpload = lazy(() => import("./pages/dashboard/DocumentUpload"));
const DocumentList = lazy(() => import("./pages/dashboard/DocumentList"));
const DocumentDetails = lazy(() => import("./pages/dashboard/DocumentDetails"));
const OCRScan = lazy(() => import("./pages/dashboard/OCRScan"));
const Classification = lazy(() => import("./pages/dashboard/Classification"));
const SmartSearch = lazy(() => import("./pages/dashboard/SmartSearch"));
const Verification = lazy(() => import("./pages/dashboard/Verification"));
const AccessControl = lazy(() => import("./pages/dashboard/AccessControl"));
const Profile = lazy(() => import("./pages/dashboard/Profile"));
const SettingsPage = lazy(() => import("./pages/dashboard/SettingsPage"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="documents" element={<DocumentList />} />
              <Route path="documents/upload" element={<DocumentUpload />} />
              <Route path="documents/:id" element={<DocumentDetails />} />
              <Route path="ai/ocr" element={<OCRScan />} />
              <Route path="ai/classify" element={<Classification />} />
              <Route path="ai/search" element={<SmartSearch />} />
              <Route path="verification" element={<Verification />} />
              <Route path="access" element={<AccessControl />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
