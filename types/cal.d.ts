// Type definitions for Cal.com embed script
declare global {
  interface Window {
    Cal?: (
      type: 'inline' | 'popup' | 'popover',
      config: {
        elementOrSelector: HTMLElement | string;
        calLink: string;
        layout?: 'month_view' | 'column_view' | 'agenda';
        config?: Record<string, unknown>;
      }
    ) => void;
  }
}

export {};



