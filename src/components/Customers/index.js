import React, { Component } from 'react';
import { Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			edit: false,
			value: '',
			numb: null,
			bed:''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleChange2(event) {
		this.setState({ bed: event.target.bed });
	}

	handleNumber(event) {
		this.setState({ numb: event.target.numb});
	}

	// handleDecrease(){
	// 	const newVal = parseInt(this.state.numb, 10) - 1;
	// 	if(newVal >= this.state.minVal){
	// 		this.setState({
	// 			numb: newVal,
	// 			oldVal: this.state.numb
	// 		});
	// 	};
	// }

	render() {
		return (
			<div>
				<div style={{ alignItems: 'flex-end', paddingBottom: 20 }}>
					<Button
						onClick={() => this.setState({ show: !this.state.show })}
						type="submit"
						variant="contained"
						color="primary"
						style={{ backgroundColor: '#299BD7' }}
					>
						Tambah Kamar +
					</Button>
				</div>
				<Modal
					show={this.state.show}
					onHide={() => this.setState({ show: false })}
					size="lg"
					centered
					aria-labelledby="title-center"
				>
					<Modal.Header closeButton>
						<Modal.Title id="title-center">Tambah Kamar</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container maxWidth="lg">
							<form noValidate autoComplete="off">
								<TextField
									id="outlined-basic"
									label="Kode Kamar"
									fullWidth
									variant="outlined"
									autoFocus
								/>
								<FormControl variant="outlined" style={{ marginTop: 10, minWidth: 300 }}>
									<InputLabel id="comboBox">Tipe Kamar</InputLabel>
									<Select
										labelId="comboBox"
										id="Idcombo"
										value={this.state.value}
										onChange={this.handleChange}
										label="Tipe"
										fullWidth
									>
										<MenuItem value="">
											<em>Null</em>
										</MenuItem>
										<MenuItem value={'superior'}>Superior</MenuItem>
										<MenuItem value={'deluxe'}>Deluxe</MenuItem>
										<MenuItem value={'vip'}>VIP</MenuItem>
									</Select>
								</FormControl>

								<FormControl variant="outlined" style={{ marginTop: 10, minWidth: 350, marginLeft:20 }}>
									<TextField
										id="outlined-basic"
										label="Maksimal Tamu"
										fullWidth
										type="number"
										variant="outlined"
										autoFocus
										value={this.state.numb}
										onChange={this.handleNumber}
										// onClick={this.handleDecrease}
										
									/>
								</FormControl>

								<FormControl variant="outlined" style={{ marginTop: 10, minWidth: 300 }}>
									<InputLabel id="comboBox2">Tipe Kasur</InputLabel>
									<Select
										labelId="comboBox2"
										id="Idcombo"
										value={this.state.bed}
										onChange={this.handleChange2}
										label="Tipe"
										fullWidth
									>
										<MenuItem value="">
											<em>Null</em>
										</MenuItem>
										<MenuItem  value={'single'}>Single Bed</MenuItem>
										<MenuItem value={'twin'}>Twin Bed</MenuItem>
										<MenuItem value={'double'}>Double Bed</MenuItem>
									</Select>
								</FormControl>
							</form>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="contained"
							color="primary"
							style={{ backgroundColor: '#299BD7' }}
							onClick={() => this.setState({ show: false })}
						>
							Simpan
						</Button>
					</Modal.Footer>
				</Modal>

				<Modal
					show={this.state.edit}
					onHide={() => this.setState({ edit: false })}
					size="lg"
					centered
					aria-labelledby="title-edit"
				>
					<Modal.Header closeButton>
						<Modal.Title id="title-edit">Edit Kamar</Modal.Title>
					</Modal.Header>
					<Modal.Body />
					<Modal.Footer>
						<Button
							variant="contained"
							color="primary"
							style={{ backgroundColor: '#299BD7' }}
							onClick={() => this.setState({ edit: false })}
						>
							Simpan
						</Button>
					</Modal.Footer>
				</Modal>
				<table class="table">
					<thead class="thead-dark">
						<tr style={{ justifyContent: 'center' }}>
							<th scope="col">Edit</th>
							<th scope="col">Hapus</th>
							<th scope="col">Kode Kamar</th>
							<th scope="col">Tipe</th>
							<th scope="col">Maks Tamu</th>
							<th scope="col">Tipe Kasur</th>
							<th scope="col">Jumlah Kamar</th>
							<th scope="col">Fasilitas</th>
							<th scope="col">Status</th>
							<th scope="col">Bayar Ditempat</th>
							<th scope="col">Harga</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">
								<IconButton
									type="submit"
									onMouseOut={({ target }) => (target.style.color = '')}
									onMouseOver={({ target }) => (target.style.color = '#299BD7')}
									onClick={() => this.setState({ edit: !this.state.edit })}
								>
									<EditIcon />
								</IconButton>
							</th>
							<th>
								<IconButton
									type="submit"
									onMouseOut={({ target }) => (target.style.color = '')}
									onMouseOver={({ target }) => (target.style.color = 'red')}
									onClick={() => this.setState({ edit: !this.state.edit })}
								>
									<DeleteIcon />
								</IconButton>
							</th>
							<td>K001</td>
							<td>Superior</td>
							<td>2</td>
							<td>Twin Bed</td>
							<td>5</td>
							<td>Wifi, Breakfast, TV</td>
							<td>Aktif</td>
							<td>Ya</td>
							<td>Rp 250,000</td>
						</tr>
						<tr>
							<th scope="row">
								<IconButton
									type="submit"
									onMouseOut={({ target }) => (target.style.color = '')}
									onMouseOver={({ target }) => (target.style.color = '#299BD7')}
									onClick={() => this.setState({ edit: !this.state.edit })}
								>
									<EditIcon />
								</IconButton>
							</th>
							<th>
								<IconButton
									type="submit"
									onMouseOut={({ target }) => (target.style.color = '')}
									onMouseOver={({ target }) => (target.style.color = 'red')}
									onClick={() => this.setState({ edit: !this.state.edit })}
								>
									<DeleteIcon />
								</IconButton>
							</th>
							<td>K002</td>
							<td>Deluxe</td>
							<td>2</td>
							<td>Double Bed</td>
							<td>5</td>
							<td>Wifi, Breakfast, TV</td>
							<td>Aktif</td>
							<td>Ya</td>
							<td>Rp 350,000</td>
						</tr>
						<tr>
							<th scope="row">
								<IconButton
									type="submit"
									onMouseOut={({ target }) => (target.style.color = '')}
									onMouseOver={({ target }) => (target.style.color = '#299BD7')}
									onClick={() => this.setState({ edit: !this.state.edit })}
								>
									<EditIcon />
								</IconButton>
							</th>
							<th>
								<IconButton
									type="submit"
									onMouseOut={({ target }) => (target.style.color = '')}
									onMouseOver={({ target }) => (target.style.color = 'red')}
									onClick={() => this.setState({ edit: !this.state.edit })}
								>
									<DeleteIcon />
								</IconButton>
							</th>
							<td>K003</td>
							<td>VIP</td>
							<td>4</td>
							<td>Super Twin Bed</td>
							<td>1</td>
							<td>Wifi, Breakfast, Freezer, TV</td>
							<td>Aktif</td>
							<td>Tidak</td>
							<td>Rp 850,000</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Customers;
