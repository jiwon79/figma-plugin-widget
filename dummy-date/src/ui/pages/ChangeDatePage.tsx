import { DatePicker, Form } from "@ui/components";
import { Button } from "@ui/@/components";
import { useState } from "react";
import { UINetwork } from "@ui/UINetwork";
import {
  FormatSelectInput,
  FormatTextInput,
  GapInput,
  StartDateInput,
} from "@ui/components/Input";

interface DummyDateForm {
  startDate: Date;
  gap: number;
  format: string;
  customFormat: string;
}

export function ChangeDatePage() {
  const [dummyDateForm, setDummyDateForm] = useState<DummyDateForm>({
    startDate: new Date(),
    gap: 1,
    format: "yyyy-MM-dd",
    customFormat: "yyyy-MM-dd",
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
        format:
          dummyDateForm.format === "custom"
            ? dummyDateForm.customFormat
            : dummyDateForm.format,
        gap: 1,
      },
    });
  };

  return (
    <div>
      <Form>
        <Form.Row label={"Start Date"}>
          <StartDateInput
            startDate={dummyDateForm.startDate}
            onChange={handleDummyDateForm("startDate")}
          />
        </Form.Row>
        <Form.Row label={"Gap"}>
          <GapInput
            gap={dummyDateForm.gap}
            onChange={handleDummyDateForm("gap")}
          />
        </Form.Row>
        <Form.Row label={"Format"}>
          <FormatSelectInput
            format={dummyDateForm.format}
            onChange={handleDummyDateForm("format")}
          />
          {dummyDateForm.format === "custom" && (
            <FormatTextInput
              format={dummyDateForm.customFormat}
              onChange={handleDummyDateForm("customFormat")}
            />
          )}
        </Form.Row>
      </Form>

      <div className="w-full px-2 mt-4">
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
