'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';
import { SendEmail } from '@/api/email';

export const ContactForm = () => {
  const t = useTranslations('Footer.form');
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const formSchema = z.object({
    first_name: z.string().min(3, t('validations.first_name.min')),
    last_name: z.string().min(3, t('validations.last_name.min') || 'Last name must be at least 3 characters'),
    email: z.email(t('validations.email')),
    subject: z.string().min(5, t('validations.subject.min') || 'Subject must be at least 5 characters'),
    message: z
      .string()
      .min(10, t('validations.message.min') || 'Message must be at least 10 characters')
      .max(100, 'Message must not exceed 100 characters'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Falha ao enviar o email.');
      }

      setSubmitStatus('success');
      form.reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro desconhecido.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className='w-full mt-6 lg:mt-0' id='send-email-form' onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className='grid lg:grid-cols-2 gap-4'>
          <Controller
            name='first_name'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>{t('first_name.label')}</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder={t('first_name.placeholder')}
                  autoComplete='off'
                  disabled={isLoading}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name='last_name'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>{t('last_name.label')}</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder={t('last_name.placeholder')}
                  autoComplete='off'
                  disabled={isLoading}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>{t('email.label')}</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder={t('email.placeholder')}
                autoComplete='off'
                type='email'
                disabled={isLoading}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name='subject'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>{t('subject.label')}</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder={t('subject.placeholder')}
                autoComplete='off'
                disabled={isLoading}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name='message'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>{t('message.label')}</FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  placeholder={t('message.placeholder')}
                  rows={6}
                  className='min-h-24 max-h-24 resize-none overflow-y-auto'
                  aria-invalid={fieldState.invalid}
                  maxLength={100}
                  disabled={isLoading}
                />
                <InputGroupAddon align='block-end'>
                  <InputGroupText className='tabular-nums'>{field.value.length}/100 characters</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {submitStatus === 'success' && (
        <div className='mt-4 p-3 bg-green-50 border border-green-200 rounded text-green-800 text-sm'>
          ✓ Email enviado com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className='mt-4 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm'>✗ {errorMessage}</div>
      )}

      <Button className='mt-4 cursor-pointer' type='submit' form='send-email-form' disabled={isLoading}>
        {isLoading ? 'Enviando...' : t('send_email')}
      </Button>
    </form>
  );
};
