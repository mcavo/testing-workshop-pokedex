import React, { ReactNode, useRef, useEffect } from 'react';
import { Loading, LoadableType } from '@components/Loadable';

export interface ScreenWithLoaderProps {
  loading: boolean;
  refreshed?: boolean;
  children: ReactNode;
  withInitialLoading?: boolean;
  loadableType?: LoadableType;
}

function ScreenWithLoader({
  loading,
  refreshed,
  children,
  withInitialLoading = true,
  loadableType
}: ScreenWithLoaderProps) {
  const initialLoading = useRef(withInitialLoading);
  useEffect(() => {
    if (initialLoading.current && loading) initialLoading.current = false;
  }, [loading]);

  return initialLoading.current || (loading && !refreshed) ? (
    <Loading type={loadableType} />
  ) : (
    <>{children}</>
  );
}

export default ScreenWithLoader;
