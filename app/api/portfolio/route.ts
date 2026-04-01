import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Portfolio } from "@/lib/models/Portfolio";

export async function GET() {
  try {
    await connectDB();
    const portfolio = await Portfolio.findOne({}).lean();

    if (!portfolio) {
      return NextResponse.json(
        { success: false, error: "No portfolio data found. Please seed the database first." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: portfolio });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}