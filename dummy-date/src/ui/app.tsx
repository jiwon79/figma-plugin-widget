import { useState } from "react";
import { UINetwork } from "./UINetwork";
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
import "./app.css";

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleStartDate = (newStartDate: Date) => {
    setStartDate(newStartDate);
  };

  const handleButtonClick = () => {
    UINetwork.send({
      type: "CHANGE_SELECTION_TEXT_TO_DATE",
      payload: {
        startDate: startDate.toISOString().split("T")[0],
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
            value={startDate}
            onChange={(startDate) => handleStartDate(startDate)}
          />
        </Form.Row>
        <Form.Row label={"Gap"}>
          <Input className="h-full" type="number" />
        </Form.Row>
        <Form.Row label={"Format"}>
          <Select>
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
          className="w-full bg-green-500 hover:bg-green-600"
          onClick={() => handleButtonClick()}
        >
          <p className="text-lg text-gray-100">Change</p>
        </Button>
      </div>
    </div>
  );
}

export default App;
