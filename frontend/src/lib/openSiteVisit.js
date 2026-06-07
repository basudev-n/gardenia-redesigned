export const openSiteVisitModal = () => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event('gardenia:open-site-visit'));
};
