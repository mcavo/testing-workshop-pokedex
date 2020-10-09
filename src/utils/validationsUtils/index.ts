import i18next from 'i18next';
import { EMAIL_REGEX, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from '@constants/validations';

import './i18n';

export const requiredField = (field: string) => ({
  required: {
    value: true,
    message: i18next.t('VALIDATIONS:REQUIRED', { field })
  }
});

export const invalidFormatField = (field: string, pattern: RegExp) => ({
  pattern: {
    value: pattern,
    message: i18next.t('VALIDATIONS:INVALID_FORMAT', { field: field.toLowerCase() })
  }
});

export const minLengthField = (field: string, count: number) => ({
  minLength: {
    value: count,
    message: i18next.t('VALIDATIONS:MIN_LENGTH', { field, count })
  }
});

export const maxLengthField = (field: string, count: number) => ({
  maxLength: {
    value: count,
    message: i18next.t('VALIDATIONS:MAX_LENGTH', { field, count })
  }
});

const email = i18next.t('FIELDS:EMAIL');
export const emailRules = {
  ...requiredField(email),
  ...invalidFormatField(email, EMAIL_REGEX)
};

const password = i18next.t('FIELDS:PASSWORD');
export const passwordRules = {
  ...requiredField(password),
  ...minLengthField(password, MIN_PASSWORD_LENGTH),
  ...maxLengthField(password, MAX_PASSWORD_LENGTH)
};

export const validationsWrapper = (validations: Array<(value: string) => string | undefined>) => (
  value: string
) => {
  // eslint-disable-next-line init-declarations
  let finalError: string | undefined;
  validations.some(validation => {
    const result = validation(value);
    if (result) finalError = result;
    return !!result;
  });
  return finalError;
};

export const validateRequired = (field: string) => (value: string) =>
  value ? undefined : i18next.t('VALIDATIONS:REQUIRED', { field });

export const validateEmailFormat = (field: string) => (value: string) =>
  value && EMAIL_REGEX.test(value)
    ? undefined
    : i18next.t('VALIDATIONS:INVALID_FORMAT', { field: field.toLowerCase() });

  export const validateMinLength = (minValue: number, field: string) => (value: string) =>
    value && value.length >= minValue
      ? undefined
      : i18next.t('VALIDATIONS:MIN_LENGTH', { count: minValue, field });

export const validateMaxLength = (maxValue: number, field: string) => (value: string) =>
  value && value.length <= maxValue
    ? undefined
    : i18next.t('VALIDATIONS:MAX_LENGTH', { count: maxValue, field });
