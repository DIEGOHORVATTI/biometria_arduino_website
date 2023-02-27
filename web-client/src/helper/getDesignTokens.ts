import { PaletteMode } from '@mui/material'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            main: '#ff00e1',
            dark: '#bf00ff',
            contrastText: 'rgba(0, 0, 0, 0.87)'
          }
        }
      : {
          primary: {
            main: '#ff00e1',
            dark: '#bf00ff',
            contrastText: 'rgba(0, 0, 0, 0.87)'
          },
          text: {
            primary: '#000000'
          }
        })
  }
})

export default getDesignTokens
