/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_APP_CHROMATIC_PROJECT_TOKEN: string;
  readonly VITE_APP_STORYBOOK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare const __API_URL__: string;
