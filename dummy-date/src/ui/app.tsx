import { useState } from "react";
import { UINetwork } from "./UINetwork";
import { DatePicker } from "./components/DatePicker";
import "./app.css";

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setStartDate(date);
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
      <label htmlFor="start-date">
        <p className="bg-slate-200">Start Date</p>
        <DatePicker />
      </label>

      <div>
        <label htmlFor="change-random">
          <input
            type="radio"
            id="change-random"
            name="change-type"
            value="random"
          />
          <p>random</p>
        </label>
        <label htmlFor="change-auto-increament">
          <input
            type="radio"
            id="change-auto-increament"
            name="change-type"
            value="auto-increament"
          />
          <p>auto-increament</p>
        </label>
      </div>

      <button onClick={handleButtonClick}>Change</button>
    </div>
  );
}

export default App;
