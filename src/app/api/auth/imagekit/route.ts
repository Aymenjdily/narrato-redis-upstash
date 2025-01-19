import { NextResponse } from "next/server";

import ImageKit from "imageKit";

import config from "@/lib/config";

const imageKit = new ImageKit({
  publicKey: config.env.imagekit.publicKey,
  privateKey: config.env.imagekit.privateKey,
  urlEndpoint: config.env.imagekit.urlEndpoint,
});

export async function GET() {
  return NextResponse.json(imageKit.getAuthenticationParameters());
}
