import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div>
				<table class="table">
					<thead class="thead-dark">
						<tr>
							<th scope="col">No</th>
							<th scope="col">Kode Pembayaran</th>
							<th scope="col">Tanggal Pembayaran</th>
							<th scope="col">Nama Pelanggan</th>
							<th scope="col">Jenis Pembayaran</th>
							<th scope="col">Kode Kamar</th>
							<th scope="col">Permintaan Khusus</th>
							<th scope="col">Tanggal Check-in</th>
							<th scope="col">Total Harga</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>PlK1023541</td>
							<td>19/01/2021</td>
							<td>Otto</td>
							<td>Tranasfer BCA</td>
							<td>K001</td>
							<td>Extra Bed</td>
							<td>21/01/2021</td>
							<td>Rp 300,000</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>PlK1023542</td>
							<td>15/01/2021</td>
							<td>Thornton</td>
							<td>Transfer Mandiri</td>
							<td>K002</td>
							<td>Ruangan Bebas Rokok</td>
							<td>22/01/2021</td>
							<td>Rp 450,000</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>PlK1023543</td>
							<td>17/01/2021</td>
							<td>Andrew</td>
							<td>Transfer BCA</td>
							<td>K002</td>
							<td>Extra Bed, Ruangan Bebas Rokok</td>
							<td>22/01/2021</td>
							<td>Rp 500,000</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
