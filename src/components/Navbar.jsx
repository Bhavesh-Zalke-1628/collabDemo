import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlices'
import sports from '../assets/sports.png'
import smjt from '../assets/smjt.png'
import { TiThMenu } from 'react-icons/ti'
import sevenyfiveears from '../assets/sevenyfiveears.jpg'

function Navbar(props) {
  async function handleLogout(e) {
    e.preventDefault()
    const res = await dispatch(logout())
    if (res?.payload?.success) navigate('/')
  }

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state?.auth)
  const { data } = useSelector(state => state?.auth)

  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const drawerWidth = 240
  const navItems = [
    {
      name: 'Home',
      slug: '/',

      active: true,
      button: false
    },
    {
      name: 'about',
      slug: '/about',
      active: true,
      button: false
    },
    // {
    //   name: 'services',
    //   slug: '/services',
    //   active: true,
    //   button: false
    // },
    {
      name: 'contact',
      slug: '/contact',
      active: true,
      button: false
    },

    {
      name: 'Login',
      slug: '/login',
      active: !isLoggedIn,
      button: true
    },
    {
      name: ' सभासद व्हा',
      slug: '/user-registration',
      active: !isLoggedIn,
      button: true
    }
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <div
      className='  bg-blue-900 text-white
    '
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant='h6' sx={{ my: 2 }}>
          <img src={sports} className='w-[5rem]' alt='' />
          {/* जिल्हा क्रीडा संकुल समिति */}
        </Typography>
        <Divider />
        <List>
          {navItems.map(item =>
            item.active ? (
              <a className='flex  items-center justify-center ' key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className={
                    item.button
                      ? ' bg-green-400 inline-bock px-6 py-2 duration-200   hover:bg-blue-100 hover:text-black rounded-md m-2'
                      : ' text-white hover:bg-slate-300    p-4 uppercase'
                  }
                >
                  {item.name}
                </button>
              </a>
            ) : null
          )}
        </List>
      </Box>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className=''>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <nav>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth
              }
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <AppBar component='nav'>
          <Toolbar>
            <img className='w-[4.5rem] m-1 p-1' src={smjt} alt='logo' />
            {/* 
            <img
              className='w-[4.5rem] m-1 p-1'
              src={sevenyfiveears}
              alt='logo'
            />
            <img className='w-[4.5rem] m-1 p-1' src={sports} alt='logo' /> */}
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              जिल्हा क्रीडा संकुल समिती, यवतमाळ
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map(item =>
                item.active ? (
                  <a key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className={
                        item.button
                          ? ' bg-green-400 inline-bock px-6 py-2 duration-200   hover:bg-blue-100 hover:text-black rounded-md m-2'
                          : ' text-white  p-4 uppercase'
                      }
                    >
                      {item.name}
                    </button>
                  </a>
                ) : null
              )}
            </Box>

            {isLoggedIn && (
              <Link to='/register'>
                <a
                  className='uppercase text-black i nline-block  text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'
                  onClick={handleLogout}
                >
                  logout
                </a>
              </Link>
            )}

            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              {/* <MenuIcon  /> */}
              <TiThMenu className=' text-white text-5xl' width={200} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default Navbar
