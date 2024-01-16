import { FormRow } from "./FormRow";

interface FormProps {
  children: React.ReactNode;
}

export function Form({ children }: FormProps) {
  return <div className="flex flex-col">{children}</div>;
}

Form.Row = FormRow;
