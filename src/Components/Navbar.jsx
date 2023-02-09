import { Box, Stack } from '@mui/material'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", background: "#1d1e1e", width: "100vw" }}>
      <img alt="logo" src={logo} style={{ margin: "0 3% 0 5%", height: "40px" }} />
      <h2>Blockchain Explorer</h2>
    </Stack>
  )
}

export default Navbar