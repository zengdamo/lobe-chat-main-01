import { ActionIcon, Logo, MobileNavBar } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { MessageSquarePlus, Settings2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

import AvatarWithUpload from '@/features/AvatarWithUpload';
import { useSessionStore } from '@/store/session';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const Header = memo(() => {
  const [createSession] = useSessionStore((s) => [s.createSession]);
  const router = useRouter();

  return (
    <MobileNavBar
      center={<Logo type={'text'} />}
      left={<AvatarWithUpload size={28} style={{ marginLeft: 8 }} />}
      right={
        <>
          <ActionIcon icon={MessageSquarePlus} onClick={() => createSession()} />
          <ActionIcon
            icon={Settings2}
            onClick={() => {
              router.push('/settings');
            }}
          />
        </>
      }
    />
  );
});

export default Header;
