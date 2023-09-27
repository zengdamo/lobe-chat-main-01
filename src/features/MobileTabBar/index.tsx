import { Icon, MobileTabBar, type MobileTabBarProps } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Bot, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { rgba } from 'polished';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGlobalStore } from '@/store/global';

const useStyles = createStyles(({ css, token }) => ({
  active: css`
    svg {
      fill: ${rgba(token.colorPrimary, 0.25)};
    }
  `,
}));

export default memo<{ className?: string }>(({ className }) => {
  const [tab, setTab] = useGlobalStore((s) => [s.sidebarKey, s.switchSideBar]);
  const { t } = useTranslation('common');
  const { styles } = useStyles();
  const router = useRouter();
  const items: MobileTabBarProps['items'] = useMemo(
    () => [
      {
        icon: (active) => (
          <Icon className={active ? styles.active : undefined} icon={MessageSquare} />
        ),
        key: 'chat',
        onClick: () => {
          router.push('/chat');
        },
        title: t('tab.chat'),
      },
      {
        icon: (active) => <Icon className={active ? styles.active : undefined} icon={Bot} />,
        key: 'market',
        onClick: () => {
          router.push('/market');
        },
        title: t('tab.market'),
      },
    ],
    [t],
  );
  return (
    <MobileTabBar
      activeKey={tab}
      className={className}
      items={items}
      onChange={(key) => setTab(key as any)}
    />
  );
});
