import { useDropzone } from "react-dropzone";

interface DropFileInputProps {
  onFilesChange: (files: File[]) => Promise<void>;
}

export function DropFileInput({ onFilesChange }: DropFileInputProps) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onFilesChange,
  });

  return (
    <div className="w-full p-2" {...getRootProps()}>
      <div className="p-2 flex flex-col items-center gap-1 border-dashed border-2 border-gray-300 rounded-md text-center">
        <input {...getInputProps()} />
        <p className="text-gray-500">Drag and drop your file here</p>
        <span className="text-gray-500 text-sm">or</span>
        <button className="border py-1 px-2 rounded border-gray-300 hover:bg-gray-50 w-fit text-gray-900">
          Select File
        </button>
      </div>
    </div>
  );
}
