'use client';

import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';

export const ContactForm = () => {
  const t = useTranslations('Footer.form');

  const formSchema = z.object({
    first_name: z.string().min(3, t('validations.first_name.min')),
    last_name: z.string(),
    email: z.email(t('validations.email')),
    subject: z.string(),
    message: z.string(),
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

  // BUILD SUBMIT FUNCTION LATER
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
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
      <Button className='mt-4 cursor-pointer' type='submit' form='send-email-form'>
        {t('send_email')}
      </Button>
    </form>
  );
};
