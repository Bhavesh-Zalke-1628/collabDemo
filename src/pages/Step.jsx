import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { Box, Container, Paper } from '@mui/material'
import LinaerStepper from './LinearStepper'

const Step = () => {
  return (
    <div className='m-10'>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinaerStepper />
        </Paper>
      </Container>
    </div>
  )
}

export default Step
