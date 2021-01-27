import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';

const Contact = () => {
	return (
		<div>
			<Container maxWidth="xs">
				<div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
					<h4 style={{ fontWeight: 'bold', flex:1 }}>Hubungi Kami Via Email</h4>
					<form noValidate autoComplete="off" style={{ marginTop: 20 }}>
						<TextField id="standard-basic" label="Email" fullWidth variant="standard" autoFocus />
						<TextField id="standard-basic" label="Perihal" fullWidth variant="standard" />
						<TextField
							id="outlined-multiline-flexible"
							fullWidth
							label="Pesan"
							variant="outlined"
							rowsMax={5}
							style={{ marginTop: 10 }}
							multiline
						/>
						<Button
							color="primary"
							style={{ backgroundColor: '#299BD7', marginTop: 15 }}
							fullWidth
							type="submit"
							variant="contained"
						>
							Kirim
						</Button>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Contact;
