declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_CODE?: string;
      AZURE_API_KEY?: string;
      AZURE_API_VERSION?: string;
      OPENAI_API_KEY?: string;
      OPENAI_PROXY_URL?: string;
      USE_AZURE_OPENAI?: string;
    }
  }
}

export const getServerConfig = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server Config] you are importing a nodejs-only module outside of nodejs');
  }

  return {
    ACCESS_CODE: process.env.ACCESS_CODE,
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    AZURE_API_KEY: process.env.AZURE_API_KEY,
    AZURE_API_VERSION: process.env.AZURE_API_VERSION,
    /* eslint-enabled */

    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_PROXY_URL: process.env.OPENAI_PROXY_URL,
    USE_AZURE_OPENAI: process.env.USE_AZURE_OPENAI === '1',
  };
};
