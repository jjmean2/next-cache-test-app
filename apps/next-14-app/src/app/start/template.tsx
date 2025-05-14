import { ReactElement, type ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Template(props: Props): ReactElement {
  const { children } = props;
  return (
    <div>
      <h1>Template</h1>
      {children}
    </div>
  );
}
