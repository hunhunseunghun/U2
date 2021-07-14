export default function ({ handleBankCode, datas }) {
	return (
		<select
			className="banks_select"
			name="account_bank_id"
			onChange={(e) => {
				handleBankCode(e.target.value);
			}}
		>
			<option value="">은행 선택</option>
			{datas.map((el) => {
				return <option value={el.code}>{el.bankName}</option>;
			})}
			{/* <option value="">은행 선택</option>
			<option value="35">경남은행</option>
			<option value="29">광주은행</option>
			<option value="7">국민은행</option>
			<option value="5">기업은행</option>
			<option value="15">농협중앙회</option>
			<option value="17">농협회원조합</option>
			<option value="25">대구은행</option>
			<option value="47">도이치은행</option>
			<option value="27">부산은행</option>
			<option value="3">산업은행</option>
			<option value="41">상호저축은행</option>
			<option value="37">새마을금고</option>
			<option value="11">수협중앙회</option>
			<option value="36">신한금융투자</option>
			<option value="60">신한은행</option>
			<option value="39">신협중앙회</option>
			<option value="9">외환은행</option>
			<option value="19">우리은행</option>
			<option value="56">우체국</option>
			<option value="33">전북은행</option>
			<option value="31">제주은행</option>
			<option value="68">카카오뱅크</option>
			<option value="67">케이뱅크</option>
			<option value="59">하나은행</option>
			<option value="23">한국씨티은행</option>
			<option value="45">HSBC은행</option>
			<option value="21">SC제일은행</option> */}
		</select>
	);
}
