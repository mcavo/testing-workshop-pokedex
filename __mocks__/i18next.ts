/* eslint-disable @typescript-eslint/no-unused-vars */
const resources: Record<string, Record<string, string>> = {
  en: {}
};

const DEFAULT_LOCALE = 'en';

export default {
  addResources: (lang: string, ns: string, translations: Record<string, string>) => {
    // TODO: Complete
  },
  t: (str: string) => resources[DEFAULT_LOCALE][str] || str
};
