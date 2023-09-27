import { Avatar } from '@lobehub/ui';
import { Button, Divider } from 'antd';
import { useTheme } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import PluginSettingsConfig from '@/features/PluginSettings';
import { pluginHelpers, pluginSelectors, usePluginStore } from '@/store/plugin';
import { useSessionStore } from '@/store/session';

import { ErrorActionContainer, useStyles } from '../style';

interface PluginSettingsProps {
  id: string;
  pluginIdentifier: string;
}

const PluginSettings = memo<PluginSettingsProps>(({ id, pluginIdentifier }) => {
  const { styles } = useStyles();

  const { t } = useTranslation('error');
  const theme = useTheme();
  const [resend, deleteMessage] = useSessionStore((s) => [s.resendMessage, s.deleteMessage]);

  const plugin = usePluginStore(pluginSelectors.getPluginMetaById(pluginIdentifier), isEqual);
  const manifest = usePluginStore(pluginSelectors.getPluginManifestById(pluginIdentifier), isEqual);

  return (
    <ErrorActionContainer>
      <Center gap={16} style={{ maxWidth: 400 }}>
        <Avatar
          avatar={pluginHelpers.getPluginAvatar(plugin?.meta) || '⚙️'}
          background={theme.colorFillContent}
          gap={12}
          size={80}
        />
        <Flexbox style={{ fontSize: 20 }}>
          {t('pluginSettings.title', { name: pluginHelpers.getPluginTitle(plugin?.meta) })}
        </Flexbox>
        <Flexbox className={styles.desc}>{t('pluginSettings.desc')}</Flexbox>
        <Divider style={{ margin: '0 16px' }} />
        {manifest.settings && (
          <PluginSettingsConfig id={manifest.identifier} settings={manifest.settings} />
        )}
        <Button
          block
          onClick={() => {
            resend(id);
            deleteMessage(id);
          }}
          style={{ marginTop: 8 }}
          type={'primary'}
        >
          {t('unlock.confirm')}
        </Button>
      </Center>
    </ErrorActionContainer>
  );
});

export default PluginSettings;
