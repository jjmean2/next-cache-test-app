import { format } from "date-fns";
import { ReactElement, useSyncExternalStore } from "react";

interface Props {
  title: string;
  date: Date;
}

const emptySubscribe = () => () => {};
export default function Time(props: Props): ReactElement {
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true
  );
  if (isServer) {
    throw new Error("Time component is not supported on the server");
  }
  const { title, date } = props;
  return (
    <time dateTime={new Date(date).toLocaleString()}>
      {title}: {format(date, "yyyy-MM-dd HH:mm:ss.SSS")}
    </time>
  );
}
