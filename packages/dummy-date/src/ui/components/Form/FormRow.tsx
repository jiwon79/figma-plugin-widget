import { Children } from "react";
import { cn } from "@won-dummy-date-ui/utils";

interface FormRowProps {
  label: string;
  children: React.ReactNode;
}

export function FormRow({ label, children }: FormRowProps) {
  const count = Children.count(children);

  return (
    <div
      className={cn("grid grid-cols-2 gap-2 mx-2 my-1")}
      style={{
        gridTemplateColumns: "60px 1fr",
      }}
    >
      <label
        className={cn(
          `row-span-${count}`,
          "text-xs text-gray-800 leading-8 h-8"
        )}
      >
        {label}
      </label>
      <div className={cn("gap-2 w-auto grid", `grid-rows-${count}`)}>
        {children}
      </div>
    </div>
  );
}
