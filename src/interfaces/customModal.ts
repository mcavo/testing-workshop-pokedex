import { ImageSourcePropType } from 'react-native';

export type ModalType = 'generalError';

export interface ModalInfo {
  icon: ImageSourcePropType;
  title: string;
  subtitle?: string;
  confirmButtonText: string;
  cancelButtonText?: string;
}
