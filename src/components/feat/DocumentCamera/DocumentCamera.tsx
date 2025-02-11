import { useState, useRef, useEffect, useCallback } from "react";
import {
  Camera,
  X as XIcon,
  Image as ImageIcon,
  ArrowsClockwise as CameraRotateIcon,
  Lightning as LightningIcon,
  LightningSlash as LightningSlashIcon,
  Check as CheckIcon,
  XCircle as XCircleIcon,
} from "@phosphor-icons/react";
import styles from "./DocumentCamera.module.css";
import clsx from "clsx";

type DocumentType = "Qr" | "Passport" | "ThaiId";

type DocumentCameraProps = {
  documentType: DocumentType;
  onConfirm: (image: string) => void;
  onClose: () => void;
};

export default function DocumentCamera({
  documentType,
  onConfirm,
  onClose,
}: DocumentCameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [torchOn, setTorchOn] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">(
    "environment"
  );
  const [cameraSwitching, setCameraSwitching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      streamRef.current = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
      setErrorMessage("Camera access denied.\nPlease enable permissions.");
    }
  }, [facingMode]);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  const captureImage = useCallback(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (videoRef.current && context) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setCapturedImage(canvas.toDataURL("image/png"));
      videoRef.current.pause();
    }
  }, []);

  const toggleTorch = useCallback(() => {
    if (!streamRef.current) return;
    const videoTrack = streamRef.current.getVideoTracks()[0];
    const capabilities = videoTrack.getCapabilities();

    if ("torch" in capabilities) {
      videoTrack
        .applyConstraints({
          advanced: [{ torch: !torchOn } as MediaTrackConstraintSet],
        })
        .then(() => setTorchOn((prev) => !prev))
        .catch((err) => console.error("Torch error:", err));
    }
  }, [torchOn]);

  const switchCamera = useCallback(() => {
    setCameraSwitching(true);
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
    setTimeout(() => setCameraSwitching(false), 300);
  }, []);

  const handleConfirm = useCallback(() => {
    if (capturedImage) {
      onConfirm(capturedImage);
    }
    stopCamera();
  }, [capturedImage, onConfirm, stopCamera]);

  const handleRetake = useCallback(() => {
    setCapturedImage(null);
    videoRef.current?.play();
  }, []);

  // handle escape key

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (capturedImage) {
          handleRetake();
        } else {
          stopCamera();
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [capturedImage, handleRetake, onClose, stopCamera]);

  return (
    <div className={styles.DocumentCamera}>
      {errorMessage && (
        <div className={styles.ErrorMessage}>{errorMessage}</div>
      )}

      <video
        ref={videoRef}
        autoPlay
        playsInline
        className={styles.VideoContainer}
      />
      {!capturedImage && !errorMessage && (
        <div className={styles.GuidanceText}>
          Position your document within the frame for a clear capture.
        </div>
      )}
      <div className={styles.TopControls}>
        <button className={styles.IconButton} onClick={onClose}>
          <XIcon size={24} />
        </button>
        {!capturedImage && !errorMessage && (
          <button className={styles.IconButton} onClick={toggleTorch}>
            {torchOn ? (
              <LightningIcon size={24} />
            ) : (
              <LightningSlashIcon size={24} />
            )}
          </button>
        )}
      </div>
      <div className={`${styles.Frame} ${styles[documentType]}`}>
        <div className={`${styles.Corner} ${styles.TopLeft}`} />
        <div className={`${styles.Corner} ${styles.TopRight}`} />
        <div className={`${styles.Corner} ${styles.BottomLeft}`} />
        <div className={`${styles.Corner} ${styles.BottomRight}`} />
      </div>

      {!errorMessage && (
        <div className={styles.BottomControls}>
          {capturedImage ? (
            <>
              <button className={styles.IconButton} onClick={handleRetake}>
                <XCircleIcon size={24} />
              </button>
              <button className={styles.IconButton} onClick={handleConfirm}>
                <CheckIcon size={24} />
              </button>
            </>
          ) : (
            <>
              <button className={styles.IconButton}>
                <ImageIcon size={24} />
              </button>
              <button
                className={clsx(styles.IconButton, styles.CaptureButton)}
                onClick={captureImage}
              >
                <Camera size={24} />
              </button>

              <button
                className={clsx(styles.IconButton, {
                  [styles.Switching]: cameraSwitching,
                })}
                onClick={switchCamera}
              >
                <CameraRotateIcon size={24} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
