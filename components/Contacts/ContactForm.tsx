'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { type ContactFormData, createContactResolver } from './validation';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || '';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations('Contacts');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: createContactResolver(t),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      reset();
      toast.success(t('form.success'));
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t('form.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-6">
      <div className="flex flex-col gap-1">
        <input
          id="name"
          {...register('name')}
          className="bg-grey px-4 py-2 rounded-sm text-antiqueWhite"
          placeholder={t('form.name')}
        />
        {errors.name && <small className="text-red-500">{errors.name.message}</small>}
      </div>
      <div className="flex flex-col gap-1">
        <input
          id="email"
          {...register('email')}
          className="bg-grey px-4 py-2 rounded-sm text-antiqueWhite"
          placeholder={t('form.email')}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <textarea
          id="message"
          {...register('message')}
          className="bg-grey px-4 py-2 rounded-sm text-antiqueWhite"
          placeholder={t('form.message')}
          rows={5}
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        className={`w-full px-4 py-2 bg-grey rounded-sm transition-colors duration-300 text-lg font-bold text-antiqueWhite ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-orange hover:text-grey'}`}
        disabled={loading}
      >
        {loading ? <ClipLoader color="#faebd7" size={22} /> : t('form.submit')}
      </button>
    </form>
  );
};
