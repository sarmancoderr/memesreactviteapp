/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_URL_JOKES: string
    readonly VITE_URL_MEMES: string
    readonly VITE_XRapidAPIKey: string
    readonly VITE_XRapidAPIHost: string
    readonly VITE_IMG_MEMES_USERNAME: string
    readonly VITE_IMG_MEMES_PASSWORD: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
  }