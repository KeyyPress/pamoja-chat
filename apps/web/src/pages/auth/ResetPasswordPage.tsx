import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement password reset
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (!token) {
    return (
      <AuthLayout title="Invalid or expired link">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            This password reset link is invalid or has expired. Please request a
            new one.
          </p>
          <Button
            variant="outline"
            fullWidth
            as={Link}
            to="/auth/forgot-password"
          >
            Request new link
          </Button>
        </div>
      </AuthLayout>
    );
  }

  if (isSubmitted) {
    return (
      <AuthLayout title="Password reset successful">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Your password has been reset successfully. You can now log in with
            your new password.
          </p>
          <Button variant="outline" fullWidth as={Link} to="/auth/login">
            Sign in
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Set new password"
      subtitle="Please enter your new password below"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="New password"
          type="password"
          autoComplete="new-password"
          required
        />

        <Input
          label="Confirm new password"
          type="password"
          autoComplete="new-password"
          required
        />

        <div className="space-y-4">
          <Button type="submit" fullWidth isLoading={isLoading}>
            Reset password
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
