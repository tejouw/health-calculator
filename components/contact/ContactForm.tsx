'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui';
import { Mail, MessageSquare, Send, CheckCircle2, XCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: t('faq1Question'), answer: t('faq1Answer') },
    { question: t('faq2Question'), answer: t('faq2Answer') },
    { question: t('faq3Question'), answer: t('faq3Answer') },
    { question: t('faq4Question'), answer: t('faq4Answer') },
    { question: t('faq5Question'), answer: t('faq5Answer') },
    { question: t('faq6Question'), answer: t('faq6Answer') },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Contact Form */}
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
            <Mail className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <h2 className="heading-3">{t('formTitle')}</h2>
            <p className="text-sm text-neutral-600">{t('formDescription')}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
              {t('name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t('namePlaceholder')}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t('emailPlaceholder')}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-neutral-700">
              {t('subject')}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={t('subjectPlaceholder')}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
              {t('message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={t('messagePlaceholder')}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                {t('sending')}
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                {t('submit')}
              </>
            )}
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="animate-slide-up rounded-lg border border-green-200 bg-green-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <p className="font-semibold text-green-900">{t('success')}</p>
                  <p className="mt-1 text-sm text-green-700">{t('successDescription')}</p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="animate-slide-up rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-start gap-3">
                <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <p className="font-semibold text-red-900">{t('error')}</p>
                  <p className="mt-1 text-sm text-red-700">{t('errorDescription')}</p>
                </div>
              </div>
            </div>
          )}
        </form>
      </Card>

      {/* FAQ Section */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100">
            <MessageSquare className="h-6 w-6 text-secondary-600" />
          </div>
          <div>
            <h2 className="heading-3">{t('faqTitle')}</h2>
            <p className="text-sm text-neutral-600">{t('faqDescription')}</p>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <h3 className="font-semibold text-neutral-900">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-neutral-500 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="mt-3 animate-slide-up border-t border-neutral-200 pt-3">
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
