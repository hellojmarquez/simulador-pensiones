import axios from 'axios';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('POST /api/questions');

  const body = await request.json();
  const param1 = body.param1;
  const param2 = body.param2;

  console.log('param1', param1);
  console.log('param2', param2);

  const urlGoogleSheet = '';

  try {
    const response = await axios.post(
      `${urlGoogleSheet}`,
      {
        // TODO: aca va el body
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({
      statusCode: 200,
      message: 'Save in Google Sheet',
    });
  } catch (error: any) {
    return NextResponse.json({});
  }
}
