import { useState, useEffect } from 'react';
import axios from 'axios';
export default function ({ handleBankCode }) {
	const [codes, setCodes] = useState([]);
	useEffect(() => {
		var config = {
			method: 'get',
			url: process.env.REACT_APP_U2_DB_HOST + '/common/bankcode',
			headers: {
				'Content-Type': 'application/json',
			},
		};
		axios(config)
			.then((response) => {
				const banks = response.data;
				setCodes(banks);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<select
			className="banks_select"
			name="account_bank_id"
			onChange={(e) => {
				handleBankCode(e.target.value);
			}}
		>
			<option value="">은행 선택</option>
			{codes.map((el) => {
				return (
					<option value={`${el.code},${el.bankName}`}>{el.bankName}</option>
				);
			})}
		</select>
	);
}
