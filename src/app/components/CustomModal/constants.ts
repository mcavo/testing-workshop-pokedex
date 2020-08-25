import i18next from 'i18next';
import { ModalInfo, ModalType } from '@interfaces/customModal';
import { GenericObjectInterface } from '@interfaces/globalInterfaces';
import iconGeneralError from '@assets/error.png';

import './i18n';

export const MODAL_TYPES: GenericObjectInterface<ModalType> = {
  GENERAL_ERROR: 'generalError'
};

export const MODAL_CONTENT: Record<ModalType, ModalInfo> = {
  [MODAL_TYPES.GENERAL_ERROR]: {
    icon: iconGeneralError,
    title: i18next.t('CUSTOM_MODAL:ERROR_TITLE'),
    subtitle: i18next.t('CUSTOM_MODAL:ERROR_SUBTITLE'),
    confirmButtonText: i18next.t('CUSTOM_MODAL:ERROR_BUTTON_TEXT')
  }
};
