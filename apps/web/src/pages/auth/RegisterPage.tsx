import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement registration
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Already have an account? Sign in instead"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input label="Full name" type="text" autoComplete="name" required />

        <Input
          label="Email address"
          type="email"
          autoComplete="email"
          required
        />

        <Input
          label="Password"
          type="password"
          autoComplete="new-password"
          required
        />

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)]"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{" "}
            <Link
              to="/terms"
              className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary)]/90"
            >
              Terms and Conditions
            </Link>
          </label>
        </div>

        <div className="space-y-4">
          <Button type="submit" fullWidth isLoading={isLoading}>
            Create account
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" fullWidth>
              Google
            </Button>
            <Button variant="outline" fullWidth>
              GitHub
            </Button>
          </div>
        </div>

        <div className="text-center text-sm">
          <Link
            to="/auth/login"
            className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary)]/90"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
