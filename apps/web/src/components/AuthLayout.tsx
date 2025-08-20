import type { ReactNode } from "react";
import Navbar from "./shared/Navbar";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <>
      <Navbar showSections={false} />

      <div className="min-h-screen bg-[var(--color-background)] flex flex-col justify-center px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-2xl font-semibold text-[var(--color-text)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
