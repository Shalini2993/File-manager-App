import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DownloadIcon from '@mui/icons-material/Download';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import VideoFileIcon from '@mui/icons-material/VideoFile';

export default class Sidebar extends Component {
  render() {

    const leftPaneOptions = [
      { title: 'Documents', icon: < DocumentScannerIcon /> },
      { title: 'Downloads', icon: <DownloadIcon /> },
      { title: 'Music', icon: <AudioFileIcon /> },
      { title: 'Pictures', icon: <PictureInPictureAltIcon /> },
      { title: 'Videos', icon: <VideoFileIcon /> },
    ]
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: '300px',
          zIndex: 1,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: '300px', boxSizing: 'border-box', position: 'relative', height: '100%' },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {leftPaneOptions.map((item, index) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#1976d2', opacity: 0.8 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    )
  }
}
