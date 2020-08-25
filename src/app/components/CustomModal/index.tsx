import React from 'react';
import { ModalType } from '@interfaces/customModal';

import ContainerModal from './components/ContainerModal';
import { MODAL_CONTENT } from './constants';

interface Props {
  type: ModalType;
  isVisible: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
}
const CustomModal = ({ type, ...props }: Props) => {
  return <ContainerModal {...MODAL_CONTENT[type]} {...props} />;
};

export default CustomModal;
