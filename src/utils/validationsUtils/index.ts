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
