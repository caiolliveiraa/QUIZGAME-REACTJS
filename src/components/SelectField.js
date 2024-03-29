import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'


const SelectField = props => {
    const { label } = props;
    const [value, setValue] = useState("");

    const handleChange = () => { }

  return (
    <Box mt={3} with="100%">
        <FormControl size="small" fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                <MenuItem>Option1</MenuItem>
                <MenuItem>Option2</MenuItem>
                <MenuItem>Option3</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField