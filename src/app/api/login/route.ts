import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email && password) {
    const response = NextResponse.json({ success: true });

    // seta cookie "auth"
    response.cookies.set({
      name: "auth",
      value: "true",
      httpOnly: true,
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}

