import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@ui/@/lib/utils";
import { Button } from "@ui/@/components/ui/button";
import { Calendar } from "@ui/@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui/@/components/ui/popover";
import { useState } from "react";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const closeDatePicker = () => setOpen(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          size={"sm"}
          className={cn(
            "w-full h-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          {value ? format(value, "yyyy-MM-dd") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0"
        style={{ transform: "translateX(-0.5rem)" }}
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            date && onChange && onChange(date);
            closeDatePicker();
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
