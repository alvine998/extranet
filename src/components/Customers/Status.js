import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

export default function SwitchStatus() {
	const [ checked, setChecked ] = React.useState(false);
	const [ checked2, setChecked2 ] = React.useState(false);

	const toggleChecked = () => {
		setChecked((prev) => !prev);
	};
	const toggleChecked2 = () => {
		setChecked2((prev2) => !prev2);
	};

	return (
		<div style={{ marginLeft: 20, marginTop: 50, flexDirection:'row' }}>
			<FormGroup>
				<FormLabel component="legend">Status Kamar</FormLabel>
				<FormControlLabel
					control={<Switch checked={checked} onChange={toggleChecked} color="primary" />}
					label={checked ? 'Aktif' : 'Tidak Aktif'}
				/>
			</FormGroup>
			<FormGroup>
				<FormLabel component="legend">Bayar Ditempat</FormLabel>
				<FormControlLabel
					control={<Switch checked={checked2} onChange={toggleChecked2} color="primary" />}
					label={checked2 ? 'Tersedia' : 'Tidak Tersedia'}
				/>
			</FormGroup>
		</div>
	);
}
