import { Input } from "@won-dummy-date-ui/@";

interface GapInputProps {
  gap: number;
  onChange: (gap: number) => void;
}

export function GapInput({ gap, onChange }: GapInputProps) {
  return (
    <Input
      className="h-full"
      type="number"
      value={gap}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}
