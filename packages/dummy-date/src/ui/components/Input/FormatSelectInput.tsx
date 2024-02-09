import {
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@won-dummy-date-ui/@";

interface FormatSelectInputProps {
  format: string;
  onChange: (format: string) => void;
}

export function FormatSelectInput({
  format,
  onChange,
}: FormatSelectInputProps) {
  const formatOptions = [
    "yyyy-mm-dd",
    "yyyy/mm/dd",
    "yyyy.mm.dd",
    "dd-mm-yyyy",
    "dd/mm/yyyy",
    "dd.mm.yyyy",
    "mm-dd",
    "mm/dd",
    "dd",
    "custom",
  ];

  return (
    <Select value={format} onValueChange={onChange}>
      <SelectTrigger className="w-full h-8">
        <SelectValue placeholder="Select a Date Format" />
      </SelectTrigger>
      <SelectContent>
        <ScrollArea className="h-24">
          <SelectGroup>
            {formatOptions.map((formatOption) => (
              <SelectItem key={formatOption} value={formatOption}>
                {formatOption}
              </SelectItem>
            ))}
          </SelectGroup>
        </ScrollArea>
      </SelectContent>
    </Select>
  );
}
