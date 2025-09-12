export const RuStoreIcon = (props) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
    <rect x={3} y={6} width={18} height={14} rx={3} stroke="currentColor" strokeWidth={2}/>
    <path d="M7 6L9 3H15L17 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FeatureIcons = {
  payment: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M3 12h18" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth={2}/></svg>
  ),
  cards: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={2}/><path d="M3 10H21" stroke="currentColor" strokeWidth={2}/></svg>
  ),
  analytics: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M4 16c3-6 7-6 10-2s6 2 6 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>
  ),
  transfers: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 10l6-4 6 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/><path d="M6 14l6 4 6-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  history: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth={2}/><path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>
  ),
  security: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M12 3l8 4v6c0 5-4 7-8 8-4-1-8-3-8-8V7l8-4z" stroke="currentColor" strokeWidth={2}/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
};

Object.freeze(FeatureIcons); 