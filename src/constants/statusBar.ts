import { white, black, transparent } from './colors';

const DARK_CONTENT = 'dark-content';
const LIGHT_CONTENT = 'light-content';

const commonTransparentConfig = {
  translucent: true,
  backgroundColor: transparent
};

const statusBarConfig = {
  transparentStatusBar: {
    barStyle: DARK_CONTENT,
    ...commonTransparentConfig
  },
  transparentStatusBarWhite: {
    barStyle: LIGHT_CONTENT,
    ...commonTransparentConfig
  },
  whiteStatusBar: { barStyle: DARK_CONTENT, backgroundColor: white },
  blackStatusBar: { barStyle: LIGHT_CONTENT, backgroundColor: black }
} as const;

export default statusBarConfig;
