"use client";

import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<"button">;

export function SubmitButton(props: Props) {
  const { disabled, type = "submit", children, ...rest } = props;
  const { pending } = useFormStatus();

  return (
    <button disabled={pending || disabled} type={type} {...rest}>
      {pending ? "pending..." : children}
    </button>
  );
}
