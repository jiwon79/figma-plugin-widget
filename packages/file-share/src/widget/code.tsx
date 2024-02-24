import "@won-types";
import { WidgetBus } from "./WidgetBus";
import { FileObject } from "@won-file-share/common";

const { widget } = figma;
const { useEffect, useSyncedState, Text, AutoLayout, Image, SVG } = widget;

const UNDEFINED = "UNDEFINED";

function Widget() {
  const [file, setFile] = useSyncedState<FileObject>("file", {
    name: UNDEFINED,
    extension: UNDEFINED,
    content: UNDEFINED,
  });

  const isEmptyFile =
    file.name === UNDEFINED &&
    file.extension === UNDEFINED &&
    file.content === UNDEFINED;

  const saveFile = (file: FileObject) => {
    setFile(file);
  };

  const notifyDownloadFile = () => {
    WidgetBus.send({
      type: "DOWNLOAD_FILE",
      payload: {
        name: file.name,
        extension: file.extension,
        content: file.content,
      },
    });
  };

  useEffect(() => {
    figma.ui.onmessage = WidgetBus.on;
    WidgetBus.addListener("SAVE_FILE", saveFile);
    WidgetBus.addListener("NOTIFY_DOWNLOAD_FILE", notifyDownloadFile);

    return () => {
      WidgetBus.removeListener("SAVE_FILE", saveFile);
      WidgetBus.removeListener("NOTIFY_DOWNLOAD_FILE", notifyDownloadFile);
    };
  });

  const openUI = async () =>
    new Promise((_) => {
      figma.showUI(
        __html__
          .replaceAll("__MACRO__fileName", file.name)
          .replaceAll("__MACRO__fileExtension", file.extension)
      );
    });

  return (
    <AutoLayout verticalAlignItems="center" spacing={12} overflow="visible">
      <AutoLayout
        width={64}
        height={64}
        fill={"#FFF"}
        cornerRadius={20}
        stroke={isEmptyFile ? "#FF6E6E" : undefined}
        strokeWidth={isEmptyFile ? 2 : 0}
        effect={{
          type: "drop-shadow",
          color: "#00000040",
          offset: {
            x: 0,
            y: 4,
          },
          blur: 12,
        }}
        horizontalAlignItems={"center"}
        verticalAlignItems={"center"}
        onClick={openUI}
      >
        <SVG
          width={48}
          height={48}
          src={`
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M57 35H74.5147L57 17.4853V35ZM51 37V16H26C24.9528 16 24.04 16.8745 24.04 18L24 82L24 82.0014C24.0008 83.1263 24.9132 84 25.96 84H74C75.0863 84 76 83.0863 76 82V41H55C52.7909 41 51 39.2091 51 37ZM18 82L18.04 18C18.04 13.6 21.6 10 26 10H57.5858C57.851 10 58.1054 10.1054 58.2929 10.2929L81.7071 33.7071C81.8946 33.8946 82 34.149 82 34.4142V82C82 86.4 78.4 90 74 90H25.96C21.56 90 18 86.4 18 82Z" fill="#2E2E2E"/>
</svg>`}
        ></SVG>
      </AutoLayout>
      <AutoLayout>
        <Text
          fontSize={40}
          fontFamily="Roboto"
          letterSpacing={-0.5}
          fill="#1A1A1A"
        >
          {isEmptyFile ? "Upload File" : `${file.name}.${file.extension}`}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(Widget);
