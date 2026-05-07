import mixpanel from "mixpanel-browser";

const MixPanelId = "8c1d35dbe4bb083a23516a1f6608ab78";

export const initMixpanel = () => {
  mixpanel.init(MixPanelId, {
    autocapture: {
      click: true,
      input: true,
      scroll: false,
      submit: true,
      capture_text_content: false,
    },
  });
};

export const trackEvent = (event, properties = {}) => {
  if (typeof window !== 'undefined') {
    mixpanel.track(event, properties);
  }
};