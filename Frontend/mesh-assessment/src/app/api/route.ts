// /app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch('https://mesh-1-1.onrender.com/mesh/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Forward the request body to the external API
    });

    const data = await response.json();

    if (!response.ok) {
      // Forward error response from external API
      return NextResponse.json({ error: data.error || 'Registration failed' }, { status: response.status });
    }

    // Return success response to the frontend
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
