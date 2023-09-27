import type { FormProps } from '@lobehub/ui';

export const HEADER_HEIGHT = 64;
export const MOBILE_NABBAR_HEIGHT = 44;
export const MOBILE_TABBAR_HEIGHT = 48;
export const CHAT_TEXTAREA_HEIGHT = 200;
export const CHAT_SIDEBAR_WIDTH = 280;
export const MARKET_SIDEBAR_WIDTH = 400;
export const FOLDER_WIDTH = 256;
export const MAX_WIDTH = 1024;
export const FORM_STYLE: FormProps = {
  itemMinWidth: 'max(30%,240px)',
  style: { maxWidth: MAX_WIDTH, width: '100%' },
};
