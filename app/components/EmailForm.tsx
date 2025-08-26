'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
import { RiLoader4Fill } from "react-icons/ri";
import { useTranslations } from 'next-intl';

export default function EmailForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const t = useTranslations('home');
  

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    if (result.success) {
      setLoading(false);
      toast.success('Email sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setLoading(false);
      toast.error('Failed to send email.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 items-center">
          <Input name="name" placeholder={t('contact.name')} value={form.name} onChange={handleChange} required />
          <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} required type="email" />
        </div>
        <br />
        <Textarea name="message" placeholder={t('contact.message')} value={form.message} onChange={handleChange} required rows={5}/>
        <br />
        <Button type="submit" className='w-full'>{loading ? <RiLoader4Fill className="animate-spin"/> : <span className='flex items-center gap-2'>{t('contact.sendMessage')} <Send size={16}/></span>}</Button>
      </form>
    </div>
  );
}
