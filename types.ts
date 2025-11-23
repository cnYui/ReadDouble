

export type Language = 'en' | 'cn';

export interface ContentSection {
  hero: {
    tagline: string;
    subline: string;
    scroll: string;
  };
  pain: {
    line1: string;
    line2: string;
    line3: string;
  };
  companion: {
    bodyDouble: {
      title: string;
      subtitle: string;
      items: {
        title: string;
        desc: string;
      }[];
      labels: {
        solo: string;
        companion: string;
        focusLow: string;
        focusHigh: string;
      };
    };
    reveal: {
      text: string;
    };
  };
  features: {
    title: string;
    items: {
      title: string;
      desc: string;
      flowchart?: {
        label: string;
        type: 'user' | 'ai';
      }[];
      slotImages?: string[];
      slotButton?: {
        idle: string;
        active: string;
      };
    }[];
  };
  demo: {
    userLabel: string;
    aiLabel: string;
    conversation: {
      speaker: 'user' | 'ai';
      text: string;
    }[];
  };
  takeaways: {
    mindMapTitle: string;
    heatmapTitle: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  vision: {
    statement: string;
  };
  cta: {
    button: string;
    footer: string;
  };
}