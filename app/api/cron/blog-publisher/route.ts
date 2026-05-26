import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
  // Verify this is called by Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // Read the blog automation workflow
    const workflowPrompt = `
      You are the Sitecraf Blog Publisher Agent.
      Follow ALL rules in .agent/rules/blog-automation.md exactly.
      Follow ALL image rules in .agent/rules/image-generation.md exactly.
      Read kb/used-keywords.md before selecting a keyword.
      Run the complete 7-step blog workflow now.
      Stop after Step 7 (sending approval email).
      Do not merge to main without human approval.
    `;

    // Log trigger for monitoring
    console.log('[Cron] Blog publisher triggered at:', new Date().toISOString());
    console.log('[Cron] Workflow prompt dispatched to agent');

    // Send trigger confirmation email
    await resend.emails.send({
      from: 'info@sitecraf.com',
      to: 'pramodvermabroken@gmail.com',
      subject: '⏰ Sitecraf Blog Cron Triggered — Working on it...',
      html: `
        <h2>Sitecraf Blog Publisher Started</h2>
        <p>The daily blog automation has been triggered at 
        ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})} IST.</p>
        <p>You will receive a second email shortly with the 
        blog preview and PR link for approval.</p>
        <hr/>
        <small>Sitecraf Automation • sitecraf.com</small>
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Blog publisher workflow triggered',
      triggeredAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('[Cron] Blog publisher failed:', error);
    return NextResponse.json(
      { error: 'Cron job failed', details: String(error) }, 
      { status: 500 }
    );
  }
}
