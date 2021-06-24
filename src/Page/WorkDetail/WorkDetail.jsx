import { WorkDetailContainer } from './WorkDetailStyled';
function WorkDetail(props) {
	return (
		<WorkDetailContainer>
			<main style={{ justifyContent: 'center', width: '100%' }}>
				<article style={{ border: 'solid', borderColor: 'black' }}>
					user info
				</article>
				<article style={{ border: 'solid', borderColor: 'black' }}>
					user details
				</article>
			</main>
		</WorkDetailContainer>
	);
}

export default WorkDetail;
