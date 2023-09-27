import { ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import AppMobileLayout from '@/layout/AppMobileLayout';
import { useSwitchSideBarOnInit } from '@/store/global';

import Header from './features/Header';
import SideBar from './features/SideBar';

const MarketLayout = memo<{ children: ReactNode }>(({ children }) => {
  useSwitchSideBarOnInit('market');

  return (
    <AppMobileLayout navBar={<Header />} showTabBar>
      <Flexbox flex={1} gap={16} style={{ padding: 16 }}>
        {children}
      </Flexbox>
      <SideBar />
    </AppMobileLayout>
  );
});

export default MarketLayout;
