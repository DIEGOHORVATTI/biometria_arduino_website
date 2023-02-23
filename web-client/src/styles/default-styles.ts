export const colors = {
  primary: '#C33538',
  hoverPrimary: '#6A0000',
  dark: '#2E2E2E',
  secondary: '#848688',
  secondaryLight: '#f7f7f7',
  gray: '#B7B7B7',
  body: '#FFF',
  white: '#FFFF',
  transparence: 'rgba(0,0,0,0)'
} as const

export const sizes = {
  fontSize: '13px',
  headerSmall: '70px',
  headerLarge: '100px',
  detailsContainer: '650px',
  devices: {
    SM: '320px',
    MD: '768px',
    LG: '1024px',
    XL: '1440px',
    XXL: '2560px'
  }
} as const

export const devices = {
  mobileSM: `(max-width: ${sizes.devices.SM})`,
  mobileMD: `(max-width: ${sizes.devices.MD})`,
  tabletLG: `(max-width: ${sizes.devices.LG})`,
  desktopXL: `(max-width: ${sizes.devices.XL})`,
  desktopXXL: `(min-width: ${sizes.devices.XXL})`
} as const
