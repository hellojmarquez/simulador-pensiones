import axios from 'axios';

import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  body.ID = uuidv4();

  const urlGoogleSheet = process.env.GOOGLE_APPS_SCRIPT_URL || '';

  try {
    const response = await fetch(`${urlGoogleSheet}?endpoint=simulacion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log(responseData);

    return NextResponse.json({
      statusCode: 200,
      message: 'Save in Google Sheet',
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({});
  }
}
