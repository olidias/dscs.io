/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
    readonly VITE_SMTP_USER: string;
    readonly VITE_SMTP_TOKEN: string;
    readonly VITE_SMTP_HOST: string;
    readonly VITE_SMTP_PORT: number;
  }