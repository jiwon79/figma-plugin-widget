import { Input } from "@ui/@/components";

interface FormatTextInputProps {
  format: string | undefined;
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
