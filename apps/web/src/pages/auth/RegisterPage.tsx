import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import PhoneInputComponent from "../../components/PhoneInput";

export const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement registration
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <AuthLayout title="Join ZipChat now!">
      <form onSubmit={handleSubmit} className="space-y-6">
        <PhoneInputComponent setPhoneNumber={setPhoneNumber} />
        <Input
          label="Username"
          type="text"
          autoComplete="username"
          placeholder="@"
          required
          value={username}
          onChange={(e) => setUsername(() => e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="•"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(() => e.target.value)}
        />
        <Input
          label="Re-type Password"
          type="password"
          autoComplete="new-password"
          required
          value={password2}
          onChange={(e) => setPassword2(() => e.target.value)}
        />

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-gray-300 text-green-500"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-green-900">
            I agree to the{" "}
            <Link
              to="/terms"
              className="font-medium text-green-500 hover:text-green-600"
            >
              Terms and Conditions
            </Link>
          </label>
        </div>

        <div className="space-y-4">
          <Button
            disabled={
              !phoneNumber ||
              !(password === password2) ||
              !(password.length > 3)
            }
            type="submit"
            fullWidth
            isLoading={isLoading}
          >
            Create account
          </Button>
        </div>

        <div className="text-center text-sm">
          <Link
            to="/auth/login"
            className="font-medium text-green-500 hover:text-green-600"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
