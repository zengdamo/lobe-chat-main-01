import { DEFAULT_OPENAI_MODEL_LIST } from '@/const/llm';
import { DEFAULT_AGENT_META } from '@/const/meta';
import { LanguageModel } from '@/types/llm';
import { LobeAgentConfig } from '@/types/session';
import {
  GlobalBaseSettings,
  GlobalDefaultAgent,
  GlobalLLMConfig,
  GlobalSettings,
} from '@/types/settings';

export const DEFAULT_BASE_SETTINGS: GlobalBaseSettings = {
  avatar: '',
  fontSize: 14,
  language: 'zh-CN',
  password: '',
  themeMode: 'auto',
};

export const DEFAULT_AGENT_CONFIG: LobeAgentConfig = {
  displayMode: 'chat',
  historyCount: 1,
  model: LanguageModel.GPT3_5,
  params: {
    frequency_penalty: 0,
    presence_penalty: 0,
    temperature: 0.6,
    top_p: 1,
  },
  plugins: [],
  systemRole: '',
};

export const DEFAULT_LLM_CONFIG: GlobalLLMConfig = {
  openAI: {
    OPENAI_API_KEY: '',
    models: DEFAULT_OPENAI_MODEL_LIST,
  },
};

export const DEFAULT_AGENT: GlobalDefaultAgent = {
  config: DEFAULT_AGENT_CONFIG,
  meta: DEFAULT_AGENT_META,
};

export const DEFAULT_SETTINGS: GlobalSettings = {
  defaultAgent: DEFAULT_AGENT,
  languageModel: DEFAULT_LLM_CONFIG,
  ...DEFAULT_BASE_SETTINGS,
};
