'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { ClipLoader } from 'react-spinners';

import { ContactFormData, createContactResolver } from './validation';

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
    console.log('Form submitted:', data);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // throw new Error('Simulated submission error');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
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
