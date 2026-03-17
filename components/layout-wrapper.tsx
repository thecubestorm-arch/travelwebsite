import { ReactNode } from "react";

type LayoutWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function LayoutWrapper({
  children,
  className = "",
}: LayoutWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
