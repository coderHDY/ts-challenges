declare module "react/jsx-runtime" {
  declare global {
    interface Window {
      ActiveXObject: any;
      isCloseHint: boolean;
    }

    namespace NodeJS {
      interface Global {
        globalBaseUrl: string;
      }
    }
  }
}

