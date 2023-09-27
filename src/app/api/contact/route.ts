import { NextResponse } from "next/server";
import transporter from "@service/nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    /** Send Email Configurations */
    await transporter.sendMail({
      from: body.email, // Customer Email
      to: email, // Customer/Admin Support Email
      subject: `${body.name} (${body.email}) - ${new Date().getTime()}`,
      html: `
      <div>
        <p><b>From:</b> ${body.email}</p>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Message:</b> ${body.message}</p>
      </div>
      `,
    });

    return NextResponse.json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    const response = {
      status: 400,
      message: "Failed to submit form",
    };

    return NextResponse.json(
      response, // Response body
      { status: response.status } // HTTP Request status
    );
  }
}
