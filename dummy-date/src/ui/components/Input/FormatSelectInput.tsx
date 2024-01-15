import {
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/@/components";

interface FormatSelectInputProps {
  format: string;
  onChange: (format: string) => void;
}

export function FormatSelectInput({
  format,
  onChange,
}: FormatSelectInputProps) {
  return (
    <Select value={format} onValueChange={onChange}>
      <SelectTrigger className="w-full h-8">
        <SelectValue placeholder="Select a Date Format" />
      </SelectTrigger>
      <SelectContent>
        <ScrollArea className="h-40">
          <SelectGroup>
            <SelectItem value="yyyy-MM-dd">yyyy-MM-dd</SelectItem>
            <SelectItem value="yyyy/MM/dd">yyyy/MM/dd</SelectItem>
            <SelectItem value="MM-dd">MM-dd</SelectItem>
            <SelectItem value="MM/dd">MM/dd</SelectItem>
            <SelectItem value="dd">dd</SelectItem>
            <SelectItem value="custom">custom</SelectItem>
          </SelectGroup>
        </ScrollArea>
      </SelectContent>
    </Select>
  );
}
