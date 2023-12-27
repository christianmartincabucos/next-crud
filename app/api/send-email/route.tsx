import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    resend.emails.send({
        from: '...',
        to: 'christianamrtincabucos@gmail.com',
        subject: 'This is a test',
        react: <WelcomeTemplate  name="Christian"/>
    })
    return NextResponse.json({});
}