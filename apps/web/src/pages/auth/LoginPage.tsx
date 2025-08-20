import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import PhoneInputComponent from "../../components/PhoneInput";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <AuthLayout title="Sign In">
      <form onSubmit={handleSubmit} className="space-y-6">
        <PhoneInputComponent setPhoneNumber={setPhoneNumber} />
        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)]"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              to="/auth/forgot-password"
              className="font-medium text-green-500 hover:text-green-600"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <Button
            disabled={!phoneNumber || !(password.length >= 3)}
            type="submit"
            fullWidth
            isLoading={isLoading}
          >
            Sign in
          </Button>
        </div>
        <div className="text-center text-sm">
          <Link
            to="/auth/register"
            className="font-medium text-green-500 hover:text-green-600"
          >
            Create an account
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
