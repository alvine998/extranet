import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		marginTop:10,
		minWidth: 300
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function TipeKamar() {
	const classes = useStyles();
	const [ age, setAge ] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">Tipe Kamar</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={age}
					onChange={handleChange}
					label="Tipe Kamar"
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={'standard'}>Standard</MenuItem>
					<MenuItem value={'superior'}>Superior</MenuItem>
					<MenuItem value={'deluxe'}>Deluxe</MenuItem>
                    <MenuItem value={'junior'}>Junior Suit</MenuItem>
					<MenuItem value={'suit'}>Suit</MenuItem>
                    <MenuItem value={'vip'}>VIP</MenuItem>
					<MenuItem value={'precidental'}>Precidental</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
