import { Loader2 as LucideLoader } from "lucide-react";
import { cn } from "@/lib/utils";

interface Loader2Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
}

export default function Loader2({ className, size = "default", ...props }: Loader2Props) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-8 w-8",
    lg: "h-12 w-12"
  };

  return (
    <div {...props} className={cn("flex items-center justify-center", className)}>
      <LucideLoader className={cn("animate-spin text-muted-foreground", sizeClasses[size])} />
    </div>
  );
}
