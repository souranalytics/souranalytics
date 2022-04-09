declare namespace NodeJS {
  export interface ProcessEnv {
    COOKIE_DOMAIN: string
    TOKEN_SECRET: string

    NEXT_PUBLIC_URL_GHERKIN: string
    NEXT_PUBLIC_URL_PICKLE: string
    NEXT_PUBLIC_URL_SOUR_ANALYTICS: string

    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string
  }
}
