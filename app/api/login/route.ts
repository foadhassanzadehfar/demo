// app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, password } = data;
  console.log("ik");
  if (username === "sex")
    // پردازش درخواست POST و بازگرداندن داده‌های دریافتی
    return NextResponse.json({ username, password }, { status: 200 });

  return NextResponse.json(
    { error: "credentials didn't match" },
    { status: 405 }
  );
}
