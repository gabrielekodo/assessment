import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash'
import SettingsIcon from '@mui/icons-material/Settings'
import SaveIcon from '@mui/icons-material/Save'
import CardItem from './components/cards'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import { TextField, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
const drawerWidth = 240

function ResponsiveDrawer(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <img
          style={{ objectFit: 'cover', margin: '3px auto' }}
          width="100px"
          height="100px"
          src="https://firebasestorage.googleapis.com/v0/b/todo-app-e1dcf.appspot.com/o/download.png?alt=media&token=6d201900-c7d9-4532-a231-487a2aab0b2e"
        />

        <PermIdentityIcon
          sx={{
            margin: '3px auto',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'grey',
          }}
          fontSize="large"
        />
        <Typography fontWeight="700" textAlign="center">
          Systems Manager
        </Typography>
        <Typography textAlign="center">ADMIN</Typography>
      </div>
      <List>
        {[
          { name: 'Dashboard', icon: <HomeIcon /> },
          { name: 'Add Data', icon: <AddIcon /> },
          { name: 'Create', icon: <ImportExportIcon /> },
          { name: 'System Logs', icon: <SaveIcon /> },
          { name: 'Recycle Bin', icon: <RestoreFromTrashIcon /> },
          { name: 'Settings', icon: <SettingsIcon /> },
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#ff0000' }}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f4f4f4' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          backgroundColor: '#f4f4f4',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap color="#000000">
            Welcome To The ToolBox
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* <Stack direction="row" spacing={2}>
          <Item>
            {' '}
           
          </Item>
          <Item>
            {' '}
            <CardItem />
          </Item>
        </Stack> */}
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CardItem
            theme={{ theme: 'Themes', figures: '37', color: '#2F58CD' }}
          />
          <CardItem
            theme={{ theme: 'Answers', figures: '626', color: '#ff0000' }}
          />
        </Container>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <TextField
            fullWidth
            placeholder="What are you looking for?"
            id="fullWidth"
          />
        </Box>
      </Box>
    </Box>
  )
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default ResponsiveDrawer
