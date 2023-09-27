export default {
  danger: {
    clear: {
      action: '立即清除',
      confirm: '确认清除所有聊天数据？',
      desc: '清除所有会话数据',
      success: '已清除所有会话消息',
      title: '清除所有会话消息',
    },
    reset: {
      action: '立即重置',
      confirm: '确认重置所有设置？',
      currentVersion: '当前版本',
      desc: '重置所有设置项回默认值',
      title: '重置所有设置',
    },
  },
  header: {
    global: '全局设置',
    session: '会话设置',
    sessionWithName: '会话设置 · {{name}}',
  },
  llm: {
    AzureOpenAI: {
      endpoint: {
        desc: '从 Azure 门户检查资源时，可在“密钥和终结点”部分中找到此值',
        placeholder: 'https://docs-test-001.openai.azure.com',
        title: 'Azure API 地址',
      },
      models: {
        desc: '支持的模型',
        title: '模型列表',
      },
      title: 'Azure OpenAI 设置',
      token: {
        desc: '从 Azure 门户检查资源时，可在“密钥和终结点”部分中找到此值。 可以使用 KEY1 或 KEY2',
        placeholder: 'Azure API Key',
        title: 'API Key',
      },
    },
    OpenAI: {
      azureApiVersion: {
        desc: 'Azure 的 API 版本，遵循 YYYY-MM-DD 格式，查阅[最新版本](https://learn.microsoft.com/zh-cn/azure/ai-services/openai/reference#chat-completions)',
        fetch: '获取列表',
        title: 'Azure Api Version',
      },
      check: {
        button: '检查',
        desc: '测试 Api Key 与代理地址是否正确填写',
        pass: '检查通过',
        title: '连通性检查',
      },
      endpoint: {
        desc: '除默认地址外，必须包含 http(s)://',
        placeholder: 'https://api.openai.com/v1',
        title: '接口代理地址',
      },
      models: {
        count: '共支持 {{count}} 个模型',
        desc: '支持的模型',
        fetch: '获取模型列表',
        notSupport: 'Azure OpenAI 暂不支持查看模型列表',
        notSupportTip: '你需要自行确保部署名称与模型名称一致',
        refetch: '重新获取模型列表',
        title: '模型列表',
      },
      title: 'OpenAI 设置',
      token: {
        desc: '使用自己的 OpenAI Key',
        placeholder: 'OpenAI API Key',
        title: 'API Key',
      },
      useAzure: {
        desc: '使用 Azure 提供的 OpenAI 服务',
        fetch: '获取列表',
        serverConfig: '管理员在服务端配置开启了 Azure OpenAI，禁止切换',
        title: 'Azure OpenAI',
      },
    },
    waitingForMore: '更多模型正在 <1>计划接入</1> 中，敬请期待 ✨',
  },
  settingAgent: {
    avatar: {
      title: '头像',
    },
    backgroundColor: {
      title: '背景色',
    },
    description: {
      placeholder: '请输入助手描述',
      title: '助手描述',
    },
    name: {
      placeholder: '请输入助手名称',
      title: '名称',
    },
    prompt: {
      placeholder: '请输入角色 Prompt 提示词',
      title: '角色设定',
    },
    tag: {
      placeholder: '请输入标签',
      title: '标签',
    },
    title: '助手信息',
  },
  settingChat: {
    chatStyleType: {
      title: '聊天窗口样式',
      type: {
        chat: '对话模式',
        docs: '文档模式',
      },
    },
    compressThreshold: {
      desc: '当未压缩的历史消息超过该值时，将进行压缩',
      title: '历史消息长度压缩阈值',
    },
    enableCompressThreshold: {
      title: '是否开启历史消息长度压缩阈值',
    },
    enableHistoryCount: {
      alias: '不限制',
      limited: '只包含 {{number}} 条会话消息',
      title: '限制历史消息数',
      unlimited: '不限历史消息数',
    },
    historyCount: {
      desc: '每次请求携带的历史消息数',
      title: '附带历史消息数',
    },
    inputTemplate: {
      desc: '用户最新的一条消息会填充到此模板',
      placeholder: '预处理模版 {{text}} 将替换为实时输入信息',
      title: '用户输入预处理',
    },
    title: '聊天设置',
  },
  settingModel: {
    enableMaxTokens: {
      title: '开启单次回复限制',
    },
    frequencyPenalty: {
      desc: '值越大，越有可能降低重复字词',
      title: '频率惩罚度',
    },
    maxTokens: {
      desc: '单次交互所用的最大 Token 数',
      title: '单次回复限制',
    },
    model: {
      desc: 'ChatGPT 模型',
      list: {
        'gpt-3.5-turbo': 'GPT 3.5',
        'gpt-3.5-turbo-16k': 'GPT 3.5 (16K)',
        'gpt-4': 'GPT 4',
        'gpt-4-32k': 'GPT 4 (32K)',
      },
      title: '模型',
    },
    presencePenalty: {
      desc: '值越大，越有可能扩展到新话题',
      title: '话题新鲜度',
    },
    temperature: {
      desc: '值越大，回复越随机',
      title: '随机性',
      titleWithValue: '随机性 {{value}}',
    },
    title: '模型设置',
    topP: {
      desc: '与随机性类似，但不要和随机性一起更改',
      title: '核采样',
    },
  },
  settingPlugin: {
    add: '添加',
    addTooltip: '添加自定义插件',
    clearDeprecated: '移除无效插件',
    config: '{{id}} 插件配置',
    settings: '配置插件市场',
    title: '插件列表',
  },
  settingSystem: {
    accessCode: {
      desc: '管理员已开启加密访问',
      placeholder: '请输入访问密码',
      title: '访问密码',
    },
    title: '系统设置',
  },
  settingTheme: {
    avatar: {
      title: '头像',
    },
    fontSize: {
      desc: '聊天内容的字体大小',
      title: '字体大小',
    },
    lang: {
      title: '语言设置',
    },
    neutralColor: {
      desc: '不同色彩倾向的灰阶自定义',
      title: '中性色',
    },
    primaryColor: {
      desc: '自定义主题色',
      title: '主题色',
    },
    themeMode: {
      auto: '自动',
      dark: '深色',
      light: '浅色',
      title: '主题',
    },
    title: '主题设置',
  },
  tab: {
    agent: '默认助手',
    common: '通用设置',
    llm: '语言模型',
  },
};
