import { useState } from "react";
import DocumentCamera from "@/components/feat/DocumentCamera";
import styles from "./DocumentCamera.module.css";
import Button from "@/components/ui/Button";

type DocumentType = "Qr" | "Passport" | "ThaiId";

export default function DocumentCameraDemo() {
  const [open, setOpen] = useState(false);
  const [documentType, setDocumentType] = useState<DocumentType | null>(null);

  function handleOpen(type: DocumentType) {
    setDocumentType(type);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setDocumentType(null);
  }

  function handleConfirm(image: string) {
    console.log("Captured image:", image);
    handleClose();
  }

  return (
    <div className={styles.DemoContainer}>
      <Button className={styles.Button} onClick={() => handleOpen("Qr")}>
        Capture QR Code
      </Button>
      <Button className={styles.Button} onClick={() => handleOpen("ThaiId")}>
        Capture ID Card
      </Button>
      <Button className={styles.Button} onClick={() => handleOpen("Passport")}>
        Capture Passport
      </Button>
      {documentType && (
        <DocumentCamera
          documentType={documentType}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
