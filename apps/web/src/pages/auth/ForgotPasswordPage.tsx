import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement password reset request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <AuthLayout title="Check your email">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            We've sent you an email with instructions to reset your password.
            Please check your inbox and follow the link provided.
          </p>
          <Button variant="outline" fullWidth as={Link} to="/auth/login">
            Return to login
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email address and we'll send you a link to reset your password"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email address"
          type="email"
          autoComplete="email"
          required
        />

        <div className="space-y-4">
          <Button type="submit" fullWidth isLoading={isLoading}>
            Send reset link
          </Button>

          <div className="text-center text-sm">
            <Link
              to="/auth/login"
              className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary)]/90"
            >
              Return to login
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
