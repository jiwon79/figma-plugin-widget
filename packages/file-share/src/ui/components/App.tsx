import "@won-types";
import { useEffect, useState } from "react";
import { UIBus } from "../domains";
import { IconFile } from "../assets";
import { downloadFile, getNameFromFile } from "../utils";
import { DropFileInput } from "./DropFileInput";

const UNDEFINED = "UNDEFINED";

export function App() {
  const initFileName: string = "__MACRO__fileName";
  const initFileExtension: string = "__MACRO__fileExtension";

  const [file, setFile] = useState<{ name: string; extension: string }>({
    name: initFileName,
    extension: initFileExtension,
  });

  const isEmptyFile = file.name === UNDEFINED && file.extension === UNDEFINED;

  useEffect(() => {
    UIBus.addListener("DOWNLOAD_FILE", downloadFile);
    return () => {
      UIBus.removeListener("DOWNLOAD_FILE", downloadFile);
    };
  }, []);

  const onFilesChange = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length !== 1) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content !== "string") {
        return;
      }
      const { name, extension } = getNameFromFile(file);
      setFile({ name, extension });

      UIBus.send({
        type: "SAVE_FILE",
        payload: { name, extension, content },
      });
    };

    const file = acceptedFiles[0];
    fileReader.readAsDataURL(file);
  };

  const notifyDownloadFile = () => {
    UIBus.send({
      type: "NOTIFY_DOWNLOAD_FILE",
      payload: void 0,
    });
  };

  return (
    <>
      <p>
        File : {file.name}.{file.extension}
      </p>
      <IconFile />
      <DropFileInput onFilesChange={onFilesChange} />

      <button onClick={() => notifyDownloadFile()}>Download</button>
    </>
  );
}
