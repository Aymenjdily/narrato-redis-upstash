/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useRef, useState } from "react";

import { IKImage, IKUpload, ImageKitProvider } from "imagekitio-next";
import { Upload } from "lucide-react";

import config from "@/lib/config";

import { Button } from "./ui/button";

/* eslint-disable @typescript-eslint/ban-ts-comment */

const authenticater = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(`Request failed ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: unknown | undefined) {
    throw new Error("Authentication required", error!);
  }
};

type ImageUpload = {
  onFileChange: (filePath: string) => void;
};

const ImageUpload = ({ onFileChange }: ImageUpload) => {
  const ref = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const handleError = () => {};
  const handleSuccess = (res) => {
    setFile(res);
    onFileChange(res.filePath);
  };

  return (
    <ImageKitProvider
      publicKey={config.env.imagekit.publicKey}
      urlEndpoint={config.env.imagekit.urlEndpoint}
      authenticator={authenticater}
    >
      <IKUpload
        ref={ref}
        className="hidden"
        onError={handleError}
        onSuccess={handleSuccess}
        fileName="test-upload.png"
      />
      <Button
        onClick={(e) => {
          e.preventDefault();

          if (ref.current) {
            // @ts-expect-error
            ref.current?.click();
          }
        }}
      >
        <Upload />
        <p>Upload a File</p>

        {file && <p>{file.filePath}</p>}
      </Button>
      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
