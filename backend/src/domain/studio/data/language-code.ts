export enum LanguageCode {
  KO = 'KO',
  DEV = 'DEV',
  EN = 'EN',
}

const LANGUAGE_CODE = 'languageCode';

/**
 * Find language code from the current request's Http session cookies, or return default if not found
 */
export function findFromCookieOrDefault(
  cookies: { [key: string]: string } | null,
): LanguageCode {
  if (cookies === null) {
    return defaultValue();
  }
  try {
    for (const key in cookies) {
      if (key.toUpperCase() === LANGUAGE_CODE) {
        const value = cookies[key].toUpperCase();
        if (value in LanguageCode) {
          return LanguageCode[value as keyof typeof LanguageCode];
        }
      }
    }
    return defaultValue();
  } catch (e) {
    return defaultValue();
  }
}

export function defaultValue(): LanguageCode {
  return LanguageCode.KO;
}
