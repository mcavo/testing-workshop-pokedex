import React, { ReactNode } from 'react';
import ErrorPlaceholder from '@components/ErrorPlaceholder';

export interface ScreenWithErrorProps {
  error: string | null;
  onRetry: () => void;
  children: ReactNode;
}

function ScreenWithError({ error, onRetry, children }: ScreenWithErrorProps) {
  return error ? <ErrorPlaceholder onPress={onRetry} /> : <>{children}</>;
}

export default ScreenWithError;
