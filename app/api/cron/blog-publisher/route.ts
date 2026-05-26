import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const triggeredAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    await resend.emails.send({
      from: 'info@sitecraf.com',
      to: 'pramodvermabroken@gmail.com',
      subject: '⏰ Sitecraf Blog Cron Triggered — 9:00 AM IST',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
          <h2 style="color:#1a1a1a;">📝 Daily Blog Publisher Started</h2>
          <p>Triggered at: <strong>${triggeredAt}</strong></p>
          <p>The Antigravity blog agent has been queued to run 
          the full 7-step blog workflow.</p>
          <p>You will receive a second email with the blog preview 
          and GitHub PR link once the blog is ready for your approval.</p>
          <hr style="border:1px solid #eee;margin:20px 0"/>
          <small style="color:#999;">Sitecraf Automation • sitecraf.com</small>
        </div>
      `
    });

    return NextResponse.json({
      success: true,
      message: 'Blog publisher cron triggered successfully',
      triggeredAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('[Cron] Failed:', error);
    return NextResponse.json(
      { error: 'Cron trigger failed', details: String(error) },
      { status: 500 }
    );
  }
}
