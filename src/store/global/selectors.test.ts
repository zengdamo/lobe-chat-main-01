import { LanguageModel } from '@/types/llm';

import { globalSelectors } from './selectors';
import { GlobalStore } from './store';

describe('globalSelectors', () => {
  describe('currentSettings', () => {
    it('should merge DEFAULT_SETTINGS and s.settings correctly', () => {
      const s = {
        settings: {
          avatar: 'avatar.jpg',
          fontSize: 14,
          language: 'en-US',
          neutralColor: 'sand',
          password: 'password123',
          primaryColor: 'blue',
          themeMode: 'light',
          defaultAgent: {
            config: {
              systemRole: '',
              model: LanguageModel.GPT3_5,
              params: {},
            },
            meta: {
              avatar: 'Default Agent',
              description: 'Default agent for testing',
            },
          },
          languageModel: {
            openAI: {
              OPENAI_API_KEY: 'openai-api-key',
              endpoint: 'https://openai-endpoint.com',
              models: ['gpt-3.5-turbo'],
            },
          },
        },
      } as unknown as GlobalStore;

      const result = globalSelectors.currentSettings(s);

      expect(result).toEqual({
        avatar: 'avatar.jpg',
        fontSize: 14,
        language: 'en-US',
        neutralColor: 'sand',
        password: 'password123',
        primaryColor: 'blue',
        themeMode: 'light',
        defaultAgent: {
          config: {
            displayMode: 'chat',
            historyCount: 1,
            systemRole: '',
            model: LanguageModel.GPT3_5,
            params: {
              frequency_penalty: 0,
              presence_penalty: 0,
              temperature: 0.6,
              top_p: 1,
            },
            plugins: [],
          },
          meta: {
            avatar: 'Default Agent',
            description: 'Default agent for testing',
          },
        },
        languageModel: {
          openAI: {
            OPENAI_API_KEY: 'openai-api-key',
            endpoint: 'https://openai-endpoint.com',
            models: ['gpt-3.5-turbo'],
          },
        },
      });
    });
  });
  //
  // describe('defaultAgent', () => {
  //   it('should merge DEFAULT_AGENT and s.settings.defaultAgent correctly', () => {
  //     const s: GlobalStore = {
  //       settings: {
  //         defaultAgent: {
  //           config: {
  //             model: 'gpt-3.5-turbo',
  //             maxTokens: 100,
  //           },
  //           meta: {
  //             name: 'Default Agent',
  //             description: 'Default agent for testing',
  //           },
  //         },
  //       },
  //     };
  //
  //     const result = globalSelectors.defaultAgent(s);
  //
  //
  //
  //     expect(result).toEqual(expected);
  //   });
  // });
  //
  // describe('defaultAgentConfig', () => {
  //   it('should merge DEFAULT_AGENT_CONFIG and defaultAgent(s).config correctly', () => {
  //     const s: GlobalStore = {
  //       settings: {
  //         defaultAgent: {
  //           config: {
  //             model: 'gpt-3.5-turbo',
  //             maxTokens: 100,
  //           },
  //         },
  //       },
  //     };
  //
  //     const result = globalSelectors.defaultAgentConfig(s);
  //
  //     const defaultAgent = globalSelectors.defaultAgent(s);
  //     const expected = merge({}, DEFAULT_AGENT_CONFIG, defaultAgent.config);
  //
  //     expect(result).toEqual(expected);
  //   });
  // });
  //
  // describe('defaultAgentMeta', () => {
  //   it('should merge DEFAULT_AGENT_META and defaultAgent(s).meta correctly', () => {
  //     const s: GlobalStore = {
  //       settings: {
  //         defaultAgent: {
  //           meta: {
  //             name: 'Default Agent',
  //             description: 'Default agent for testing',
  //           },
  //         },
  //       },
  //     };
  //
  //     const result = globalSelectors.defaultAgentMeta(s);
  //
  //     const defaultAgent = globalSelectors.defaultAgent(s);
  //     const expected = merge({}, DEFAULT_AGENT_META, defaultAgent.meta);
  //
  //     expect(result).toEqual(expected);
  //   });
  // });
  //
  // describe('exportSettings', () => {
  //   it('should remove OPENAI_API_KEY and password fields from s.settings', () => {
  //     const s: GlobalStore = {
  //       settings: {
  //         OPENAI_API_KEY: 'openai-api-key',
  //         password: 'password123',
  //         avatar: 'avatar.jpg',
  //         fontSize: 14,
  //         language: 'en',
  //         neutralColor: 'white',
  //         primaryColor: 'blue',
  //         themeMode: 'light',
  //         defaultAgent: {
  //           config: {
  //             model: 'gpt-3.5-turbo',
  //             maxTokens: 100,
  //           },
  //           meta: {
  //             name: 'Default Agent',
  //             description: 'Default agent for testing',
  //           },
  //         },
  //         languageModel: {
  //           azureOpenAI: {
  //             AZURE_API_KEY: 'azure-api-key',
  //             apiVersion: 'v1',
  //             endpoint: 'https://azure-openai-endpoint.com',
  //             models: ['gpt-3.5-turbo'],
  //           },
  //           openAI: {
  //             OPENAI_API_KEY: 'openai-api-key',
  //             endpoint: 'https://openai-endpoint.com',
  //             models: ['gpt-3.5-turbo'],
  //           },
  //         },
  //       },
  //     };
  //
  //     const result = globalSelectors.exportSettings(s);
  //
  //     const expected = {
  //       avatar: 'avatar.jpg',
  //       fontSize: 14,
  //       language: 'en',
  //       neutralColor: 'white',
  //       primaryColor: 'blue',
  //       themeMode: 'light',
  //       defaultAgent: {
  //         config: {
  //           model: 'gpt-3.5-turbo',
  //           maxTokens: 100,
  //         },
  //         meta: {
  //           name: 'Default Agent',
  //           description: 'Default agent for testing',
  //         },
  //       },
  //       languageModel: {
  //         azureOpenAI: {
  //           AZURE_API_KEY: 'azure-api-key',
  //           apiVersion: 'v1',
  //           endpoint: 'https://azure-openai-endpoint.com',
  //           models: ['gpt-3.5-turbo'],
  //         },
  //         openAI: {
  //           endpoint: 'https://openai-endpoint.com',
  //           models: ['gpt-3.5-turbo'],
  //         },
  //       },
  //     };
  //
  //     expect(result).toEqual(expected);
  //   });
  //
  //   it('should return the result as GlobalSettings type', () => {
  //     const s: GlobalStore = {
  //       settings: {
  //         avatar: 'avatar.jpg',
  //         fontSize: 14,
  //         language: 'en',
  //         neutralColor: 'white',
  //         password: 'password123',
  //         primaryColor: 'blue',
  //         themeMode: 'light',
  //         defaultAgent: {
  //           config: {
  //             model: 'gpt-3.5-turbo',
  //             maxTokens: 100,
  //           },
  //           meta: {
  //             name: 'Default Agent',
  //             description: 'Default agent for testing',
  //           },
  //         },
  //         languageModel: {
  //           azureOpenAI: {
  //             AZURE_API_KEY: 'azure-api-key',
  //             apiVersion: 'v1',
  //             endpoint: 'https://azure-openai-endpoint.com',
  //             models: ['gpt-3.5-turbo'],
  //           },
  //           openAI: {
  //             OPENAI_API_KEY: 'openai-api-key',
  //             endpoint: 'https://openai-endpoint.com',
  //             models: ['gpt-3.5-turbo'],
  //           },
  //         },
  //       },
  //     };
  //
  //     const result = globalSelectors.exportSettings(s);
  //
  //     expect(result).toBeInstanceOf(GlobalSettings);
  //   });
  // });
});
