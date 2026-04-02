import axios from 'axios';

import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  body.ID = uuidv4();

  const urlGoogleSheet =
    'https://script.google.com/macros/s/AKfycbx5-e2YMPZT3RZCdqj2Clybf_ncHjLCWDFWoqMwGV5mPniBWEmd9aj5gCr4jSYv8_M2/exec';

  try {
    const response = await fetch(`${urlGoogleSheet}?endpoint=opinion`, {
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

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({});
  }
}
