import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'

export const Filters = () => {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value="">
            <em>Tipo de producto</em>
          </MenuItem>
          <MenuItem value={10}>Aminoácidos</MenuItem>
          <MenuItem value={20}>Barritas proteicas</MenuItem>
          <MenuItem value={30}>CAA</MenuItem>
          <MenuItem value={40}>Colágeno</MenuItem>
          <MenuItem value={50}>CreatinaB</MenuItem>
          <MenuItem value={60}>Ganador de peso</MenuItem>
          <MenuItem value={70}>Proteína</MenuItem>
          <MenuItem value={80}>Proteína vegana</MenuItem>
          <MenuItem value={90}>Quemador de grasa</MenuItem>
          <MenuItem value={100}>Shakers</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

//     <CustomSelect renderValue={renderValue}>
//       <StyledOption value={1}>Aminoácidos</StyledOption>
//       <StyledOption value={2}>Barritas proteicas</StyledOption>
//       <StyledOption value={3}>CAA</StyledOption>
//       <StyledOption value={4}>Colágeno</StyledOption>
//       <StyledOption value={5}>CreatinaB</StyledOption>
//       <StyledOption value={6}>Ganador de peso</StyledOption>
//       <StyledOption value={7}>Proteína</StyledOption>
//       <StyledOption value={8}>Proteína Vegana</StyledOption>
//       <StyledOption value={9}>Quemador de grasa</StyledOption>
//       <StyledOption value={10}>Shakers</StyledOption>
//     </CustomSelect>
//   )
// }

// function CustomSelect(props) {
//   const slots = {
//     root: StyledButton,
//     listbox: StyledListbox,
//     popper: StyledPopper,
//     ...props.slots,
//   }

//   return <Select {...props} slots={slots} />
// }

// CustomSelect.propTypes = {
//   /**
//    * The components used for each slot inside the Select.
//    * Either a string to use a HTML element or a component.
//    * @default {}
//    */
//   slots: PropTypes.shape({
//     listbox: PropTypes.elementType,
//     popper: PropTypes.func,
//     root: PropTypes.elementType,
//   }),
// }

// function renderValue(option) {
//   if (option == null) {
//     return <span>Tipo de producto</span>
//   }

//   return <span>{option.label}</span>
// }

// const blue = {
//   100: '#DAECFF',
//   200: '#99CCF3',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   900: '#003A75',
// }

// const grey = {
//   50: '#f6f8fa',
//   100: '#eaeef2',
//   200: '#d0d7de',
//   300: '#afb8c1',
//   400: '#8c959f',
//   500: '#6e7781',
//   600: '#57606a',
//   700: '#424a53',
//   800: '#32383f',
//   900: '#24292f',
// }

// const StyledButton = styled('button')(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
//   min-width: 320px;
//   padding: 12px;
//   border-radius: 12px;
//   text-align: left;
//   line-height: 1.5;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;

//   &:hover {
//     background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
//     border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
//   }

//   &.${selectClasses.focusVisible} {
//     border-color: ${blue[400]};
//     outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
//   }

//   &.${selectClasses.expanded} {
//     &::after {
//       content: '▴';
//     }
//   }

//   &::after {
//     content: '▾';
//     float: right;
//   }
//   `
// )

// const StyledListbox = styled('ul')(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 6px;
//   margin: 12px 0;
//   min-width: 320px;
//   border-radius: 12px;
//   overflow: auto;
//   outline: 0px;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   box-shadow: 0px 4px 30px ${
//     theme.palette.mode === 'dark' ? grey[900] : grey[200]
//   };
//   `
// )

// const StyledOption = styled(Option)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${optionClasses.selected} {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.${optionClasses.highlighted} {
//     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   }

//   &.${optionClasses.highlighted}.${optionClasses.selected} {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.${optionClasses.disabled} {
//     color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//   }

//   &:hover:not(.${optionClasses.disabled}) {
//     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   }
//   `
// )

// const StyledPopper = styled(Popper)`
//   z-index: 1;
// `
