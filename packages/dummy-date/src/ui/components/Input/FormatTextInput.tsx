import { Input } from "@won-dummy-date-ui/@";

interface FormatTextInputProps {
  format: string;
  onChange: (format: string) => void;
}

export function FormatTextInput({ format, onChange }: FormatTextInputProps) {
  return (
    <Input
      className="h-8"
      type="text"
      value={format}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
