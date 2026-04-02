import axios from 'axios';

import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  console.log('POST /api/questions');

  const body = await request.json();
  body.id = uuidv4();

  const urlGoogleSheet =
    'https://script.google.com/macros/s/AKfycbzqIzAMd-DpvjPajVfMtbN9umCVIrL94Qv2h9KHddQAOxCrOWOISBCyoWqmvLK8Fg7a/exec';

  try {
    const response = await fetch(`${urlGoogleSheet}?endpoint=evaluacion`, {
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
      message: 'Evaluation save in Google Sheet',
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({});
  }
}
