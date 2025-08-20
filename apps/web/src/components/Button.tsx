import type { ButtonHTMLAttributes, ElementType } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
  fullWidth?: boolean;
  as?: ElementType;
  to?: string; // For React Router Link
}

export const Button = ({
  children,
  variant = "primary",
  isLoading,
  fullWidth,
  className = "",
  disabled,
  as: Component = "button",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";

  const variants = {
    primary:
      "border-transparent text-white bg-green-500 hover:bg-green-600 focus:ring-green-500/50",
    secondary:
      "border-transparent text-white bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/90 focus:ring-[var(--color-secondary)]/50",
    outline:
      "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-[var(--color-primary)]/50",
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </>
      ) : (
        children
      )}
    </Component>
  );
};
