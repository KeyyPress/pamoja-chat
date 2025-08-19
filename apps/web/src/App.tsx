import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { ForgotPasswordPage } from "./pages/auth/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/auth/ResetPasswordPage";
import { TermsPage } from "./pages/TermsPage";
import LandingPage from "./pages/LandingPage";

// Temporary auth check - replace with real auth context later
const isAuthenticated = false;

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
        <Route path="/terms" element={<TermsPage />} />

        {/* Protected Routes */}
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <div className="min-h-screen bg-[var(--color-background)]">
                {/* Main App Shell - will move to separate component */}
                <div className="flex h-screen">
                  {/* Sidebar */}
                  <aside className="w-80 bg-white border-r border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                      <input
                        type="text"
                        placeholder="Search chats..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50"
                      />
                    </div>
                    <div className="overflow-y-auto h-[calc(100vh-73px)]">
                      {/* Chat list will go here */}
                    </div>
                  </aside>

                  {/* Main Content */}
                  <main className="flex-1 flex flex-col bg-gray-50">
                    <div className="p-4 border-b border-gray-200 bg-white">
                      <h2 className="text-lg font-semibold">
                        Select a chat to start messaging
                      </h2>
                    </div>
                    <div className="flex-1 p-4">
                      {/* Chat messages will go here */}
                    </div>
                  </main>
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
