import { DatePicker } from "@ui/components";

interface StartDateInputProps {
  startDate: Date;
  onChange: (date: Date) => void;
}

export function StartDateInput({ startDate, onChange }: StartDateInputProps) {
  return <DatePicker value={startDate} onChange={onChange} />;
}
