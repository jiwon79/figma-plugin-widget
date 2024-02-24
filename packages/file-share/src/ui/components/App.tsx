import "@won-types";
import { useEffect, useState } from "react";
import { UIBus } from "../domains";
import { downloadFile, getNameFromFile } from "../utils";
import { DropFileInput } from "./DropFileInput";
import { If } from "./If";

const UNDEFINED = "UNDEFINED";

export function App() {
  const initFileName: string = "__MACRO__fileName";
  const initFileExtension: string = "__MACRO__fileExtension";

  const [file, setFile] = useState<{ name: string; extension: string }>({
    name: initFileName,
    extension: initFileExtension,
  });
  const [internalFileName, setInternalFileName] = useState("");

  const isEmptyFile = file.name === UNDEFINED && file.extension === UNDEFINED;

  useEffect(() => {
    UIBus.addListener("DOWNLOAD_FILE", downloadFile);
    return () => {
      UIBus.removeListener("DOWNLOAD_FILE", downloadFile);
    };
  }, []);

  const onFilesChange = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length !== 1) {
      UIBus.send({
        type: "OPEN_TOAST",
        payload: "You can only upload one file at a time",
      });
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content !== "string") {
        UIBus.send({
          type: "OPEN_TOAST",
          payload: "Check your file content and try again",
        });
        return;
      }
      if (content.length > 50 * 1024 * 1024) {
        UIBus.send({
          type: "OPEN_TOAST",
          payload: "File size should be less than 50MB",
        });
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

  const deleteFile = () => {
    setFile({ name: UNDEFINED, extension: UNDEFINED });
    UIBus.send({
      type: "DELETE_FILE",
      payload: void 0,
    });
  };

  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setInternalFileName(name);
  };

  const onSubmitFileName = () => {
    setFile({ ...file, name: internalFileName });
    UIBus.send({
      type: "CHANGE_FILE_NAME",
      payload: internalFileName,
    });
  };

  return (
    <div className="flex flex-col max-w-md px-4 py-2 h-full">
      <h1 className="text-2xl font-bold">File Upload</h1>
      <p className="text-sm text-gray-600">Upload and manage your files</p>
      <div className="mt-1 flex flex-col flex-1">
        <If is={!isEmptyFile}>
          <div className="flex items-center justify-between">
            <span className="text-lg pl-1">
              File : {file.name}.{file.extension}
            </span>
            <button
              className="w-8 h-8 inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-sm bg-transparent hover:bg-gray-100 text-red-500 p-1 rounded"
              onClick={() => deleteFile()}
            >
              X
            </button>
          </div>
          <div className="mt-2 flex gap-2">
            <input
              className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none"
              placeholder="Change file name"
              value={internalFileName}
              onChange={handleFileNameChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onSubmitFileName();
                }
              }}
            />
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-4 py-2 border border-blue-500 hover:bg-blue-100"
              onClick={onSubmitFileName}
            >
              Save
            </button>
          </div>
        </If>
        <If is={isEmptyFile}>
          <DropFileInput onFilesChange={onFilesChange} />
        </If>
        <div className="flex-1"></div>
        <div className="mt-1">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
            onClick={() => notifyDownloadFile()}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
