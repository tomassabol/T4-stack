"use client";

import { use } from "react";
import { api } from "trpc-api";

export function ClientGreeting() {
  const greeting = use(api.greeting.query({ text: "from client" }));

  return <>{greeting ? greeting : "not implemented"}</>;
}
