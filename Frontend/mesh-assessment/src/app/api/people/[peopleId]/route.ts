import { NextResponse } from "next/server";
import data from "@/app/data.json";

// Define the expected context type
interface Context {
  params: {
    peopleId: string;
  };
}

export async function POST(request: Request, context: Context) {
  const { params } = context;
  const { peopleId } = params;

  // Filter data
  const filteredPeople = data.data.filter((x) => x.id?.toString() === peopleId);

  return NextResponse.json({
    data: filteredPeople,
  });
}

// Optional: Handle unsupported methods
export async function handler(request: Request, context: Context) {
  if (request.method === "POST") {
    return POST(request, context);
  }

  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405 }
  );
}
