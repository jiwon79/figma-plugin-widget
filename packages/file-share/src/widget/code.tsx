import "@won-types";
import { WidgetBus } from "./WidgetBus";

const { widget } = figma;
const { useEffect, useSyncedState, Text, AutoLayout } = widget;

function Widget() {
  const [number, setNumber] = useSyncedState<number>("number", 6);

  useEffect(() => {
    WidgetBus.addListener("SET_NUMBER", (payload) => {
      setNumber(payload.number);
    });
  });

  return (
    <AutoLayout>
      <Text
        fontSize={24}
        onClick={async () =>
          new Promise((_) => {
            figma.showUI(
              __html__.replaceAll("__MACRO__number", number.toString())
            );
          })
        }
      >
        Open IFrame
      </Text>
      <Text>number: {number}</Text>
    </AutoLayout>
  );
}

widget.register(Widget);
