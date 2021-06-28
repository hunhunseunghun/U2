import { useState } from 'react';
import { WorkDetailContainer } from './WorkDetailStyled';
function WorkDetail(props) {
	let [subject, setSubject] = useState('광고/홍보');
	let [meeting, setMeeting] = useState('비대면');
	let [terms, setTerms] = useState(['YouTube', 'TIKTOK', '파일 업로드']);
	let [prise, setPrise] = useState('10000원');
	return (
		<WorkDetailContainer>
			<section>
				<section className="section1">
					<img src="http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/Aatrox.png"></img>
					<div className="project-name">project name</div>
					<div className="project-info">
						<div className="project-info spec">대상</div>
						<div>{subject}</div>
						<div className="project-info spec">프로젝트 미팅</div>
						<div>{meeting}</div>
						<div className="project-info spec">과제 완료 조건</div>
						<div>
							{terms.map((term) => {
								return <div>{term}</div>;
							})}
						</div>
						<div className="project-info spec">보상</div>
						<div>{prise}</div>
					</div>
				</section>
				<article style={{ border: 'solid', borderColor: 'black' }}>
					project details
				</article>
			</section>
		</WorkDetailContainer>
	);
}

export default WorkDetail;
