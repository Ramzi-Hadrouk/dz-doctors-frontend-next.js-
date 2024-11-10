/*import { Resend } from 'resend';
import { Email } from './email';
import { NextResponse } from 'next/server';


const resend = new Resend(process.env.RESEND_API_KEY);


export  async function Post( req) {
    const response= await req.json()

  try {

    const data =await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'user@gmail.com',
        subject: 'hello world',
        react: <Email url="https://example.com" />,
      });
    
    return NextResponse.json({data })
  } catch (error) {
     return NextResponse.json({error})
  }

 
}

export default Email;
*/

import { Resend } from 'resend';
//import { Email } from './email';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const response = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [response.data.Email],  // This can be customized or passed via the request body
      subject: 'Appointment Booking Confurmation',
      react:EmailTemplate( ),
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error sending email:', error);  // Log the error for debugging
    return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 });
  }
}

//export default Email;
