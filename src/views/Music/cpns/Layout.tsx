import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import Nav from './nav'
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  marginTop:'0.5rem',
  overflow: 'hidden',
});

const Main = styled('div')({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
});
export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  return (
    <StyledRoot>
    <Nav openNav={open} onCloseNav={() => setOpen(false)} />
    <Main>
      <Outlet />
    </Main>
  </StyledRoot>
  )
}
