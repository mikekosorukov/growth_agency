// Type definitions for Cal.com cloud embed script
interface CalApi {
  (action: string, ...args: unknown[]): void;
  q?: unknown[];
  ns?: Record<string, CalApi>;
  loaded?: boolean;
}

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

export {};
