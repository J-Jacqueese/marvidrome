import { NavLink as RouterLink } from 'react-router-dom'
// @mui
import { Box, List, ListItemButton, ListItemText, ThemeProvider, createTheme } from '@mui/material'
//
import { StyledNavItemIcon } from './styles'

import React, { FC, ReactNode, memo } from 'react'
interface IPros {
  children?: ReactNode
  data: any[]
}
interface Item {
  title: string
  path: string
  icon: string
  info: string
}
interface INavItemPros {
  item: Item
}
const NavSection: FC<IPros> = ({ data = [], ...other }) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  )
}
export default memo(NavSection)
const theme = createTheme({
  palette: {
    background: {
      paper: '#F0F0F0',
    },
    text: {
      primary: '#509bf0',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
  },
});
// 封装的内部小组件 路由导航
const NavItem: FC<INavItemPros> = ({ item }) => {
  const { title, path, icon, info } = item

  return (
    <ThemeProvider theme={theme}>
    <ListItemButton
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'background.paper',
          fontWeight: 'fontWeightBold'
        }
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemButton>
    </ThemeProvider>
  )
}
