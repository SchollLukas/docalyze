// src/app/anfrage/page.tsx
import { Suspense } from "react";
import AnfrageClient from "./AnfrageClient";

export default function AnfragePage() {
  return (
    <Suspense fallback={null}>
      <AnfrageClient />
    </Suspense>
  );
}
