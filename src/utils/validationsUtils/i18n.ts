import i18next from 'i18next';

i18next.addResources('en', 'VALIDATIONS', {
  REQUIRED: '{{field}} required',
  INVALID_FORMAT: 'Invalid {{field}} format',
  ALPHANUMERIC: '{{field}} can only contain alphanumeric values',
  ONLY_TEXT: '{{field}} can only contain text',
  ONLY_NUMBERS: '{{field}} can only contain numeric values',
  MIN_LENGTH: '{{field}} must be at least {{count}} character',
  MIN_LENGTH_plural: '{{field}} must be at least {{count}} characters',
  MAX_LENGTH: '{{field}} must be at most {{count}} character',
  MAX_LENGTH_plural: '{{field}} must be at most {{count}} characters',
  EQUAL_LENGTH: '{{field}} must be {{count}} character',
  EQUAL_LENGTH_plural: '{{field}} must be {{count}} characters'
});

i18next.addResources('en', 'FIELDS', {
  EMAIL: 'Email',
  PASSWORD: 'Password'
});
