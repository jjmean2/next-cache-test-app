import { LocalTime } from "./LocalTime";

export default async function Page() {
  return (
    <div>
      <h1>LocalTime</h1>
      <LocalTime date={new Date()} />
    </div>
  );
}
