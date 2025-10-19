import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (email: IEmail) => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY não configurada');
  }

  const recipientEmail = process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL;
  if (!recipientEmail) {
    throw new Error('CONTACT_FORM_EMAIL não configurada');
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const fullName = `${email.first_name} ${email.last_name}`;

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email.email,
      subject: `Nova mensagem: ${email.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f7f9fc; padding: 20px; border-radius: 8px;">
          <h2 style="color: #1e40af; margin-bottom: 16px;">📩 Nova mensagem recebida</h2>
          <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
            <p><strong>Nome completo:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email.email}" style="color: #2563eb;">${email.email}</a></p>
            <p><strong>Assunto:</strong> ${email.subject}</p>
            <hr style="margin: 16px 0; border-top: 1px solid #e5e7eb;" />
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-line; color: #374151;">${escapeHtml(email.message)}</p>
          </div>
          <p style="font-size: 12px; color: #6b7280; margin-top: 20px; text-align: center;">
            Este email foi enviado automaticamente pelo formulário do site.
          </p>
        </div>
      `,
    });

    return response;
  } catch (error) {
    console.error('Erro ao enviar email com Resend:', error);
    throw new Error('Falha ao enviar email. Por favor, tente novamente.');
  }
};

const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};
