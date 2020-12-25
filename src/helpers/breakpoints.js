export const breakpoints = {
  small: '480px',
  medium: '768px',
  tablet: '1024px',
  laptop: '1440px',
  big: '2560px'
}


export const responsiveFrom = (deviceKey) => {
  return styles => `@media (min-width: ${deviceKey}) { ${styles} }`;
}