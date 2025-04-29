"use client";

import Link from "next/link";
import { ReactElement } from "react";

export default function ClientPage(): ReactElement {
  return (
    <div>
      <hr />
      <h1>Client Page</h1>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>Client </p>
      <p>
        <Link href="flight/cache-test/static-route">Do Not Have</Link>
      </p>
      {/* <Link href="http://localhost:3000/flight/cache-test/static-route">
        Client Search Result
      </Link> */}
    </div>
  );
}
