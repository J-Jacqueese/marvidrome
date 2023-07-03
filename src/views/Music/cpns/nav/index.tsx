import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// @mui
import { styled, alpha } from '@mui/material/styles'
import { Box, Link, Button, Typography, Avatar, Stack } from '@mui/material'
import { Card } from '@material-tailwind/react'
// // mock
// import account from '../../../_mock/account'
// // hooks
// import useResponsive from '../../../hooks/useResponsive'
// // components
// import Logo from '../../../components/logo'
import Scrollbar from '../../../../components/scrollbar'
import NavSection from '../../../../components/nav-section'
// //
import navConfig from './config'

// ----------------------------------------------------------------------

const NAV_WIDTH = 280

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12)
}))

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func
}

export default function Nav() {
  const { pathname } = useLocation()

  // const isDesktop = useResponsive('up', 'lg')

  useEffect(() => {
    // if (openNav) {
    //   onCloseNav()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <NavSection data={navConfig} />
    </Scrollbar>
  )
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH }
      }}
    >
      <Card>
        <Box
          sx={{
            height: '90vh',
            width: NAV_WIDTH,
            overflow: 'hidden',
            bgcolor: 'background.default',
            borderRightStyle: 'dashed'
          }}
        >
          {renderContent}
        </Box>
      </Card>
    </Box>
  )
}
