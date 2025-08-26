import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'en';

  const validLocales = ['en', 'id'];
  const safeLocale = validLocales.includes(locale) ? locale : 'en';

  return {
    locale: safeLocale,
    messages: (await import(`../../i18n/${safeLocale}.json`)).default,
  };
});
