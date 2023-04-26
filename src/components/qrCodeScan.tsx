import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

interface QRCodeScanProps {
  onScan: (result: string) => void;
}
export default function QRCodeScan(props: QRCodeScanProps) {
  const video = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const detectCodeFromStream = async () => {
      if (!video?.current) return;
      const reader = new BrowserMultiFormatReader();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      reader.decodeFromStream(stream, video.current, (result) => {
        if (result == null) return;
        console.log(result);
        props.onScan(result.getText());
      });
    };
    detectCodeFromStream();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);

  return <video ref={video} className="w-full h-auto max-w-lg"></video>;
}
