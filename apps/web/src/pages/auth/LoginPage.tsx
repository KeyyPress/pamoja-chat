import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import PhoneInputComponent from "../../components/PhoneInput";
import metadata from "libphonenumber-js/metadata.full";

import {
  parsePhoneNumber,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  getCountryCallingCode,
  getCountries,
  isSupportedCountry,
  PhoneNumber,
} from "libphonenumber-js/min";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  console.log(metadata.countries.RW?.length);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement login
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  return (
    <AuthLayout title="Login | Zip Chat" subtitle="">
      <form onSubmit={handleSubmit} className="space-y-6">
        <PhoneInputComponent
          phoneNumber={formData.phone}
          setPhoneNumber={(value) => handleInputChange("phone", value)}
          editPhone={true}
        />

        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
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
          <Button type="submit" fullWidth isLoading={isLoading}>
            Sign in
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
