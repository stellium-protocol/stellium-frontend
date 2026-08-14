import type { ButtonHTMLAttributes, ReactNode } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-5 w-5 border-2",
  lg: "h-6 w-6 border-[3px]",
};

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full border-current border-t-transparent ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  children: ReactNode;
}

export function LoadingButton({
  loading = false,
  loadingText,
  children,
  disabled,
  className = "",
  ...props
}: LoadingButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {loading && <LoadingSpinner size="sm" />}
      {loading && loadingText ? loadingText : children}
    </button>
  );
}
