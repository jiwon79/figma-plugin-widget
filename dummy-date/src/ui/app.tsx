import * as Networker from "monorepo-networker";
import { NetworkMessages } from "@common/network/messages";

import { Button } from "@ui/components/Button";
import "@ui/styles/main.scss";

function App() {
  return (
    <div className="homepage">
      <div className="card">
        <Button
          onClick={async () => {
            const response = await NetworkMessages.PING.request({});
            console.log("Response:", response);
          }}
          style={{ marginInlineStart: 10 }}
        >
          ping the other side
        </Button>
        <Button
          onClick={() =>
            NetworkMessages.CREATE_RECT.send({
              width: 100,
              height: 100,
            })
          }
          style={{ marginInlineStart: 10 }}
        >
          create square
        </Button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more <br />
        <span>(Current logical side = {Networker.Side.current.getName()})</span>
      </p>
    </div>
  );
}

export default App;
