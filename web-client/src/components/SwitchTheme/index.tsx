import React, { useMemo, useState } from 'react'
import { createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import Switch from '@mui/material/Switch'
import getDesignTokens from 'helper/getDesignTokens'

type SwithThemeProp = {
  theme: PaletteMode
}

const SwithTheme: React.FC<SwithThemeProp> = ({ theme }) => {
  const [mode, setMode] = useState<PaletteMode>('light')
  useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        )
      }
    }),
    []
  )

  return (
    <>
      <label htmlFor="mudar cor">mudar cor</label>
      <Switch
        title="Mudar cor"
        defaultChecked={mode === 'dark'}
        onChange={colorMode.toggleColorMode}
        color="secondary"
      />
    </>
  )
}

export default SwithTheme
