import i18next from 'i18next';
import { Effect } from '@interfaces/pokemon';

i18next.addResources('en', 'TYPE_EFECTIVENESS', {
  [`${Effect.WEAKNESS}_TITLE`]: 'Weaknesses',
  [`${Effect.WEAKNESS}_SUBTITLE`]: 'The effectiveness of each type on {{name}}',
  [`${Effect.STRENGTH}_TITLE`]: 'Strengths',
  [`${Effect.STRENGTH}_SUBTITLE`]: 'The effectiveness of {{name}} on each type'
});
