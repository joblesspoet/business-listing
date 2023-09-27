import { GOOGLE_API_KEY } from "@/utils/const";
import { NextRequest, NextResponse } from "next/server";

const BASE_URL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?key=" +
  GOOGLE_API_KEY;

export async function GET(request: NextRequest) {
  const palce = request.nextUrl.searchParams.get("placeInfo");
  if (!palce) {
    return NextResponse.json(
      { message: "Missing place Info param" },
      { status: 400 }
    );
  }

  const apiurl =
    BASE_URL +
    `&query=${encodeURI(
      request.nextUrl.searchParams.get("placeInfo") as string
    )}`;

  const res = await fetch(apiurl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resp = await res.json();

  if (resp?.status === "ZERO_RESULTS") {
    return NextResponse.json({ message: "No Record found" }, { status: 400 });
  }

  return NextResponse.json({
    data: resp.results,
  });
}
