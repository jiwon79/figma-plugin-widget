import { NetworkMessages } from "@common/network/messages";

import { Button } from "@ui/components/Button";
import { useState } from "react";

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setStartDate(date);
  };

  const handleButtonClick = () => {
    console.log("handleButtonClick");
    console.log(startDate);
    NetworkMessages.CHANGE_SELECTION_TEXT.send({
      startDate: startDate.toISOString(),
      type: { type: "auto-increment", gap: 2 },
      format: "YYYY-MM-DD",
    });
  };

  return (
    <div>
      <label htmlFor="start-date">
        <p>Start Date</p>
        <input
          type="date"
          id="start-date"
          value={startDate.toISOString().split("T")[0]}
          onChange={handleStartDate}
        />
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

      <Button onClick={handleButtonClick}>Change</Button>
    </div>
  );
}

export default App;
