import "@won-types";
import { useCallback, useState } from "react";
import { UIBus } from "../domains";
import { useDropzone } from "react-dropzone";
import { FileObject } from "@won-file-share/common";
import { IconFile } from "../assets";

const UNDEFINED = "UNDEFINED";

export function App() {
  const initFileName: string = "__MACRO__fileName";
  const initFileExtension: string = "__MACRO__fileExtension";
  const initFileUrl: string = "__MACRO__fileContent";

  const [file, setFile] = useState<FileObject>({
    name: initFileName,
    extension: initFileExtension,
    content: initFileUrl,
  });

  const isEmptyFile =
    file.name === UNDEFINED &&
    file.extension === UNDEFINED &&
    file.content === UNDEFINED;

  const downlaodFile = () => {
    const link = document.createElement("a");
    const { name, extension, content } = file;
    link.href = content;
    link.download = name + "." + extension;
    link.click();
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length !== 1) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === "string") {
        const lastDotIndex = file.name.lastIndexOf(".");
        const name =
          lastDotIndex !== -1
            ? file.name.substring(0, lastDotIndex)
            : file.name;
        const extension =
          lastDotIndex !== -1
            ? file.name.substring(lastDotIndex + 1).toLowerCase()
            : "";
        setFile({ name, extension, content });

        UIBus.send({
          type: "SAVE_FILE",
          payload: { name, extension, content },
        });
      }
    };

    const file = acceptedFiles[0];
    fileReader.readAsDataURL(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <p>
        File : {file.name}.{file.extension}
      </p>
      <IconFile />
      <div className="w-full h-20 p-2" {...getRootProps()}>
        <div className="h-full border-4 border-blue-400 border-dashed rounded-2xl">
          <input {...getInputProps()} />
          {isEmptyFile ? (
            <p>Drop file to upload</p>
          ) : (
            <p>
              {file.name}.{file.extension}
            </p>
          )}
        </div>
      </div>
      <button onClick={downlaodFile}>Download</button>
    </>
  );
}
