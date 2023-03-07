import * as React from 'react'
import { styled } from '@mui/material/styles'
import WidgetsIcon from '@mui/icons-material/Widgets'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

export default function ComplexGrid({ theme }) {
  console.log(theme)
  return (
    <Paper
      sx={{
        p: 0,
        margin: 'auto',
        width: '400px',
        // flexGrow: 1,
        boxShadow: 'none',
        backgroundColor: `${theme.color}`,
        color: '#ffffff',
      }}
    >
      <Grid container spacing={3}>
        <Grid item>
          <ButtonBase>
            <WidgetsIcon sx={{ width: '100px', height: '100px' }} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {theme.theme}
              </Typography>
              <Typography variant="h3" gutterBottom>
                {theme.figures}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
