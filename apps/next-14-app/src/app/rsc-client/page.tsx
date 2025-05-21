import Content from "./Content";

export const dynamic = "force-dynamic";

export default function Page() {
  console.log("🖌️ render [Page]");
  return (
    <div>
      <Content />
    </div>
  );
}
