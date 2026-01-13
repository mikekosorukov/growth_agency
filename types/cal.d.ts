// Type definitions for Cal.com cloud embed script
declare global {
  interface Window {
    Cal?: {
      (
        action: 'init',
        config?: { origin?: string }
      ): void;
      (
        action: 'inline',
        config: {
          elementOrSelector: HTMLElement | string;
          calLink: string;
          layout?: 'month_view' | 'column_view' | 'week_view';
          config?: {
            theme?: 'dark' | 'light' | 'auto';
            hideEventTypeDetails?: boolean;
            layout?: 'month_view' | 'column_view' | 'week_view';
          };
        }
      ): void;
      (
        action: 'on',
        config: {
          action: string;
          callback: () => void;
        }
      ): void;
      (
        action: 'ui',
        config: {
          theme?: 'dark' | 'light' | 'auto';
          styles?: { branding?: { brandColor?: string } };
          hideEventTypeDetails?: boolean;
        }
      ): void;
    };
  }
}

export {};
