import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';

import './Main.css'

class Main extends Component {
  render() {

    const gridItems1 = [
      { title: 'Documents', id: 'doc' },
      { title: 'Downloads', id: 'down' },
      { title: 'Music', id: 'music' },
    ]
    const gridItems2 = [
      { title: 'Pictures', id: 'pic' },
      { title: 'Videos', id: 'vid' },
    ]
    const itemGrid1 = gridItems1.map(item => {
      return (
        <Grid item xs={0.85} className='itemGrid'>
          <FolderIcon sx={{ fontSize: 60 }} className='iconcolor' />
          {item.title}
        </Grid>
      )
    })
    const itemGrid2 = gridItems2.map(item => {
      return (
        <Grid item xs={0.85} className='itemGrid'>
          <FolderIcon sx={{ fontSize: 60 }} className='iconcolor' />
          {item.title}
        </Grid>
      )
    })
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {itemGrid1}
          </Grid>
          <Grid container item spacing={3}>
            {itemGrid2}
          </Grid>
        </Grid>
      </Box>
    )
  }
}

export default Main
