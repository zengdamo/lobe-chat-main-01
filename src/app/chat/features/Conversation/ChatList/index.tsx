import { ChatList, RenderMessage } from '@lobehub/ui';
import isEqual from 'fast-deep-equal';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useSessionChatInit, useSessionStore } from '@/store/session';
import { agentSelectors, chatSelectors } from '@/store/session/selectors';
import { ChatMessage } from '@/types/chatMessage';
import { isFunctionMessage } from '@/utils/message';

import { renderErrorMessage } from './Error';
import MessageExtra from './MessageExtra';
import FunctionCall from './Plugins/FunctionCall';
import PluginMessage from './Plugins/PluginMessage';
import SkeletonList from './SkeletonList';

const List = () => {
  const init = useSessionChatInit();
  const { t } = useTranslation('common');

  const data = useSessionStore(chatSelectors.currentChatsWithGuideMessage, isEqual);

  const [
    displayMode,
    enableHistoryCount,
    historyCount,
    chatLoadingId,
    deleteMessage,
    resendMessage,
    dispatchMessage,
  ] = useSessionStore((s) => {
    const config = agentSelectors.currentAgentConfig(s);
    return [
      config.displayMode,
      config.enableHistoryCount,
      config.historyCount,
      s.chatLoadingId,
      s.deleteMessage,
      s.resendMessage,
      s.dispatchMessage,
    ];
  });

  const renderMessage: RenderMessage = useCallback(
    (content, message: ChatMessage) => {
      const id = message.plugin?.identifier || message.function_call?.name;
      const command = message.plugin ?? message.function_call;
      const args = command?.arguments;
      const fcProps = {
        arguments: args,
        command,
        content: message.content,
        id,
        loading: message.id === chatLoadingId,
      };

      if (message.role === 'function')
        return (
          <Flexbox gap={12} id={message.id}>
            <FunctionCall {...fcProps} />
            <PluginMessage loading={message.id === chatLoadingId} {...message} />
          </Flexbox>
        );

      if (
        message.role === 'assistant' &&
        // 包含了 function 信息
        isFunctionMessage(message.content)
      )
        return (
          <div id={message.id}>
            <FunctionCall {...fcProps} />
          </div>
        );

      return <div id={message.id}>{content}</div>;
    },
    [chatLoadingId],
  );

  if (!init) return <SkeletonList />;

  return (
    <ChatList
      data={data}
      enableHistoryCount={enableHistoryCount}
      historyCount={historyCount}
      loadingId={chatLoadingId}
      onActionClick={(key, id) => {
        switch (key) {
          case 'delete': {
            deleteMessage(id);
            break;
          }

          case 'regenerate': {
            resendMessage(id);
            break;
          }
        }
      }}
      onMessageChange={(id, content) => {
        dispatchMessage({ id, key: 'content', type: 'updateMessage', value: content });
      }}
      renderErrorMessage={renderErrorMessage}
      renderMessage={renderMessage}
      renderMessageExtra={MessageExtra}
      style={{ marginTop: 24 }}
      text={{
        cancel: t('cancel'),
        confirm: t('ok'),
        copy: t('copy'),
        copySuccess: t('copySuccess'),
        delete: t('delete'),
        edit: t('edit'),
        history: t('historyRange'),
        regenerate: t('regenerate'),
      }}
      type={displayMode || 'chat'}
    />
  );
};

export default memo(List);
