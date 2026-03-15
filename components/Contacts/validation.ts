import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, t('validation.nameMin')).max(50, t('validation.nameMax')),
    email: z.email(t('validation.emailInvalid')),
    message: z.string().min(10, t('validation.messageMin')).max(500, t('validation.messageMax')),
  });

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const createContactResolver = (t: (key: string) => string) => zodResolver(createContactSchema(t));
