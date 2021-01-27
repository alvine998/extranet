import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import imogi from '../../assets/images/broken-image.png';
import { Divider, FormControl, FormLabel, RadioGroup, TextField } from '@material-ui/core';
import { Label } from 'recharts';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

const Accounts = () => {
	const useStyles = makeStyles((theme) => ({
		left: {
			width: 200,
			backgroundColor: 'white',
			height: 500,
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			marginTop: 80
		},
		editColumn: {
			width: 300,
			height: 500,
			borderWidth: 1,
			display: 'flex'
		},
		root: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		imagi: {
			width: 150,
			height: 150
		},
		right: {
			textAlign: 'right',
			flex: 1
		},
		center: {
			width: 500,
			backgroundColor: 'white',
			height: 500,
			marginTop: 80
		},
		side: {
			display: 'flex',
			flexDirection: 'row'
		},
		formRoot: {
			'& < *': {
				margin: theme.spacing(1),
				width: '25ch'
			}
		},
		line: {
			borderBottomWidth: 1
		},
		input: {
			display: 'none'
		}
	}));
	const classes = useStyles();
	const [ value, setValue ] = useState('lakilaki');
    const [ value2, setValue2 ] = useState('aktif');
    const [ photo, setPhoto ] = useState(null);


	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const handleChange2 = (event2) => {
		setValue2(event2.target.value);
    };
    const handleChange3 = (e) => {
		setPhoto({photo: URL.createObjectURL(e.target.files[0])});
	};

	return (
		<div className={classes.root}>
			<div className={classes.editColumn}>
				<form className={classes.formRoot} noValidate autoComplete="off">
					<h4>Informasi Akun</h4>
					<TextField id="standard-basic" label="Nama" fullWidth variant="standard" autoFocus />
					<FormControl component="fieldset" style={{ marginTop: 20 }}>
						<FormLabel component="legend">Jenis Kelamin:</FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="lakilaki" control={<Radio />} label="Laki-laki" />
							<FormControlLabel value="perempuan" control={<Radio />} label="Perempuan" />
						</RadioGroup>
					</FormControl>
					<TextField
						id="standard-multiline-flexible"
						fullWidth
						label="Alamat"
						variant="standard"
						rowsMax={3}
						multiline
					/>
					<TextField id="standard-basic" type="email" fullWidth label="Email" variant="standard" />
					<TextField id="standard-basic" type="numeric" fullWidth label="Nomor Ponsel" variant="standard" />
					<FormControl component="fieldset" style={{ marginTop: 20 }}>
						<FormLabel component="legend">Status:</FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value2} onChange={handleChange2}>
							<FormControlLabel value="aktif" control={<Radio />} label="Aktif" />
							<FormControlLabel value="nonaktif" control={<Radio />} label="Tidak Aktif" />
						</RadioGroup>
					</FormControl>
					<div>
						<input
							accept="image/*"
							className={classes.input}
                            id="contained-button-file"
                            onChange={handleChange3}
							multiple
							type="file"
						/>
						<label htmlFor="contained-button-file">
							<Button variant="contained" onChange={handleChange3} color="primary" style={{backgroundColor:'#299BD7'}} component="span">
								Upload Foto
							</Button>
						</label>
					</div>
				</form>
			</div>
			<div className={classes.left}>
				<Avatar src={photo} className={classes.imagi} />
			</div>
			<div className={classes.center}>
				<div className={classes.side}>
					<p>ID Manager:</p>
					<p className={classes.right}>000001</p>
				</div>
				<div className={classes.side}>
					<p>Nama:</p>
					<p className={classes.right}>John doe</p>
				</div>
				<div className={classes.side}>
					<p>Jenis Kelamin:</p>
					<p className={classes.right}>Laki-laki</p>
				</div>
				<div className={classes.side}>
					<p>Alamat:</p>
					<p className={classes.right}>Ipsum Lorein </p>
				</div>
				<div className={classes.side}>
					<p>Email:</p>
					<p className={classes.right}>Johndoe@gmail.com</p>
				</div>
				<div className={classes.side}>
					<p>Nomor Ponsel:</p>
					<p className={classes.right}>+62 857-9999-0000</p>
				</div>
				<div className={classes.side}>
					<p>Join CariKamar:</p>
					<p className={classes.right}>2021</p>
				</div>
				<div className={classes.side}>
					<p>Status:</p>
					<p className={classes.right}>Aktif</p>
				</div>
			</div>
		</div>
	);
};

export default Accounts;
