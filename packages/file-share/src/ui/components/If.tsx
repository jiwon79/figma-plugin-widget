interface IfProps {
  is: boolean;
  children: React.ReactNode;
}

export function If({ is, children }: IfProps) {
  return is ? <>{children}</> : null;
}
