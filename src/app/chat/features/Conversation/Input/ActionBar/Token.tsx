import { TokenTag, Tooltip } from '@lobehub/ui';
import { encode } from 'gpt-tokenizer';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ModelTokens } from '@/const/modelTokens';
import { useSessionStore } from '@/store/session';
import { agentSelectors, chatSelectors } from '@/store/session/selectors';

const Token = memo<{ input: string }>(({ input }) => {
  const { t } = useTranslation('common');

  const inputTokenCount = useMemo(() => encode(input).length, [input]);

  const [totalToken, systemRoleToken, chatsToken, model] = useSessionStore((s) => [
    chatSelectors.totalTokenCount(s),
    chatSelectors.systemRoleTokenCount(s),
    chatSelectors.chatsTokenCount(s),
    agentSelectors.currentAgentModel(s),
  ]);

  return (
    <Tooltip placement={'bottom'} title={t('tokenDetail', { chatsToken, systemRoleToken })}>
      <TokenTag
        maxValue={ModelTokens[model]}
        style={{ marginLeft: 8 }}
        text={{
          overload: t('tokenTag.overload'),
          remained: t('tokenTag.remained'),
          used: t('tokenTag.used'),
        }}
        value={totalToken + inputTokenCount}
      />
    </Tooltip>
  );
});

export default Token;
