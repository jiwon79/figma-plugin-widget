import { useDropzone } from "react-dropzone";

interface DropFileInputProps {
  onFilesChange: (files: File[]) => Promise<void>;
}

export function DropFileInput({ onFilesChange }: DropFileInputProps) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onFilesChange,
  });

  return (
    <div className="w-full h-20 p-2" {...getRootProps()}>
      <div className="border-dashed border-2 border-gray-300 rounded-lg w-full h-20 items-center justify-center p-6">
        <input {...getInputProps()} />
        <p>Drop file to upload</p>
      </div>
    </div>
  );
}
