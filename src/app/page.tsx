"use client";

import QRCodeScan from "@/components/qrCodeScan";
import { useState } from "react";

export default function Home() {
  const [scanResult, setScanResult] = useState<string | null>(null);

  return (
    <main className="flex flex-col">
      <QRCodeScan onScan={setScanResult} />
      <span>{scanResult}</span>
    </main>
  );
}
