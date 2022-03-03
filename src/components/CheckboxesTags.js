import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={topContinent}
      disableCloseOnSelect
      getOptionLabel={(option) => option.continent}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.continent}
        </React.Fragment>
      )}
      style={{ width: 300, marginLeft:10, marginTop:40 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Continent" placeholder="Search" />
      )}
    />
  );
}

const topContinent = [
  { continent: 'America'},
  { continent: 'Asia'},
  { continent: 'Europa'},
  { continent: 'Oceania'},
  
];