"use client";

import { useRef, useState } from "react";

import { IKImage, IKUpload, ImageKitProvider } from "imagekitio-next";
import { Upload } from "lucide-react";

import { toast } from "@/hooks/use-toast";
import config from "@/lib/config";

import { Button } from "./ui/button";

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

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
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleError = (error: any) => {
    console.log("UPLOAD_ERROR", error);

    toast({
      title: "Image upload failed",
      description: "Your image could not be uplaoded. Please try again",
      variant: "destructive",
    });
  };

  const handleSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    toast({
      title: "Image uploaded successfully",
      description: `${res.filePath} uploaded successfully!`,
    });
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
            // @ts-ignore
            ref.current?.click();
          }
        }}
      >
        <Upload />
        <p>Upload a File</p>

        {file && <p>{file.filePath}</p>}
      </Button>
      {file && (
        <div className="relative aspect-auto h-[400px] w-full">
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            fill
            className="object-cover object-center"
          />
        </div>
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
