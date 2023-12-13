import { Box, FormControl } from '@mui/material'
import React from 'react'

const TextFieldComp = () => {

    const handleChange = () => {}

  return (
    <Box mt={3} width="100%">
        <FormControl>
            <TextField 
              onChange={handleChange}
              variant="outlined"
              lambel="Amount of Questions"
              type="number"
              size="small"
            />
        </FormControl>
    </Box>
  )
}

export default TextFieldComp