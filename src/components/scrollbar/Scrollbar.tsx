import { FC,memo } from 'react'
import { ReactNode } from 'react'
// @mui
import { Box } from '@mui/material'
//
import { StyledRootScrollbar, StyledScrollbar } from './styles'

// ----------------------------------------------------------------------
interface IPros {
  children?: ReactNode
  sx: object
}

const Scrollbar: FC<IPros> = ({ children, sx, ...other }: IPros) => {
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    )

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    )
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar clickOnTrack={false} sx={sx} {...other}>
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  )
}

export default memo(Scrollbar)
