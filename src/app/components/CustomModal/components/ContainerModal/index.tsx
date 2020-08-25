import React from 'react';
import { View, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import closeIcon from '@assets/ic_close.png';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import { ModalInfo } from '@interfaces/customModal';

import styles from './styles';

interface Props extends ModalInfo {
  isVisible: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
}
const ContainerModal = ({
  icon,
  title,
  subtitle,
  confirmButtonText,
  isVisible,
  onConfirm,
  onCancel,
  onClose
}: Props) => {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    onClose();
  };

  return (
    <Modal animationType="fade" transparent visible={isVisible} onRequestClose={handleCancel}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleCancel}>
          <View style={styles.outsideModal} />
        </TouchableWithoutFeedback>
        <View style={styles.modal}>
          <TouchableWithoutFeedback onPress={handleCancel}>
            <View style={styles.closeIconContainer}>
              <Image source={closeIcon} resizeMode="contain" style={styles.close} />
            </View>
          </TouchableWithoutFeedback>
          <Image
            source={icon}
            resizeMode="contain"
            style={[styles.image, !subtitle && styles.imageWithoutSubtitle]}
          />
          <CustomText semiBold center style={!subtitle && styles.titleWithoutSubtitle}>
            {title}
          </CustomText>
          {!!subtitle && (
            <CustomText center style={styles.subtitle}>
              {subtitle}
            </CustomText>
          )}
          <CustomButton text={confirmButtonText} onPress={handleConfirm} style={styles.button} />
        </View>
      </View>
    </Modal>
  );
};

export default ContainerModal;
