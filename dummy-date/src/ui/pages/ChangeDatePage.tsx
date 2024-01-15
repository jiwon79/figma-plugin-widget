import { DatePicker, Form } from "@ui/components";
import {
  Button,
  Input,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/@/components";
import { useState } from "react";
import { UINetwork } from "@ui/UINetwork";

interface DummyDateForm {
  startDate: Date;
  gap: number;
  format: string;
}

export function ChangeDatePage() {
  const [dummyDateForm, setDummyDateForm] = useState<DummyDateForm>({
    startDate: new Date(),
    gap: 1,
    format: "yyyy-MM-dd",
  });

  const handleDummyDateForm =
    <T extends keyof DummyDateForm>(key: T) =>
    (value: DummyDateForm[T]) => {
      setDummyDateForm((prev) => ({ ...prev, [key]: value }));
    };

  const handleButtonClick = () => {
    UINetwork.send({
      type: "CHANGE_SELECTION_TEXT_TO_DATE",
      payload: {
        startDate: dummyDateForm.startDate.toISOString().split("T")[0],
        format: "YYYY-MM-DD",
        gap: 1,
      },
    });
  };

  return (
    <div>
      <Form>
        <Form.Row label={"Start Date"}>
          <DatePicker
            value={dummyDateForm.startDate}
            onChange={handleDummyDateForm("startDate")}
          />
        </Form.Row>
        <Form.Row label={"Gap"}>
          <Input
            className="h-full"
            type="number"
            value={dummyDateForm.gap}
            onChange={(e) => handleDummyDateForm("gap")(Number(e.target.value))}
          />
        </Form.Row>
        <Form.Row label={"Format"}>
          <Select
            value={dummyDateForm.format}
            onValueChange={handleDummyDateForm("format")}
          >
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
          <Input className="h-8" type="text" />
        </Form.Row>
      </Form>

      <div className="w-full px-2">
        <Button
          className="w-full border bg-white border-blue-400 hover:bg-blue-100 text-gray-600 hover:text-gray-800"
          onClick={() => handleButtonClick()}
        >
          <p className="text-base">Change</p>
        </Button>
      </div>
    </div>
  );
}
