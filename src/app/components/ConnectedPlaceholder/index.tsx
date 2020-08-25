import React, { useState, useEffect } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CustomModal from '@components/CustomModal';
import { MODAL_TYPES } from '@components/CustomModal/constants';
import { LoadableType } from '@components/Loadable';

import styles from './styles';
import ScreenWithLoader, { ScreenWithLoaderProps } from './components/ScreenWithLoader';
import ScreenWithError, { ScreenWithErrorProps } from './components/ScreenWithError';

interface Props extends ScreenWithLoaderProps, ScreenWithErrorProps {
  dataLength?: number;
  loadableType?: LoadableType;
  style?: StyleProp<ViewStyle>;
}

function ConnectedPlaceholder({
  children,
  dataLength,
  error,
  loadableType,
  loading,
  onRetry,
  refreshed,
  style,
  withInitialLoading
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleCloseModal = () => setModalVisible(false);

  useEffect(() => {
    if (error && dataLength) setModalVisible(true);
  }, [error, dataLength]);

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={[styles.container, style]}>
      <ScreenWithLoader
        loading={loading}
        loadableType={loadableType}
        refreshed={refreshed}
        withInitialLoading={withInitialLoading}>
        <ScreenWithError error={dataLength ? null : error} onRetry={onRetry}>
          {children}
        </ScreenWithError>
      </ScreenWithLoader>
      <CustomModal type={MODAL_TYPES.GENERAL_ERROR} isVisible={modalVisible} onClose={handleCloseModal} />
    </SafeAreaView>
  );
}

export default ConnectedPlaceholder;
