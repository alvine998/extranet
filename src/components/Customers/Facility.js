import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	formControl: {
		margin: theme.spacing(3)
	}
}));

export default function CheckboxesGroup() {
	const classes = useStyles();
	const [ state, setState ] = React.useState({
		wifi: false,
		breakfast: false,
        tv: false,
        freezer:false,
        ac: false,
		kipas: false,
        water: false,
        air:false
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const { wifi, breakfast, tv, freezer, ac, kipas, water, air } = state;
	const error = [ wifi, breakfast, tv, freezer, ac, kipas, water, air ].filter((v) => v).length !== 2;

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Fasilitas Kamar</FormLabel>
				<FormControl style={{flexDirection:'row'}}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={wifi} onChange={handleChange} name="wifi" color="primary" />}
                            label="Wifi"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={breakfast} onChange={handleChange} name="breakfast" color="primary" />}
                            label="Sarapan"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={tv} onChange={handleChange} name="tv" color="primary" />}
                            label="TV"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={freezer} onChange={handleChange} name="freezer" color="primary"color="primary" />}
                            label="Kulkas"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={ac} onChange={handleChange} name="ac" color="primary" />}
                            label="AC"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={kipas} onChange={handleChange} name="kipas" color="primary" />}
                            label="Kipas Angin"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={water} onChange={handleChange} name="water" color="primary" />}
                            label="Water Heater"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={air} onChange={handleChange} name="air" color="primary" />}
                            label="Air Mineral"
                        />
                    </FormGroup>
                </FormControl>
			</FormControl>
		</div>
	);
}
