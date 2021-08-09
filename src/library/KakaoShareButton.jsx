import React, { useEffect } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
//상위 컴포넌트에서 해야할 설정사항:
// useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//         document.body.removeChild(script);
//     };
// }, []);
const KakaoShareButton = ({
	challengeTitle,
	imageUrl,
	tags,
	social,
	buttons,
}) => {
	useEffect(() => {
		createKakaoButton();
	}, []);
	const createKakaoButton = () => {
		// kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
		if (window.Kakao) {
			const kakao = window.Kakao;
			// 중복 initialization 방지
			if (!kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				kakao.init(process.env.REACT_APP_KAKAO_KEY);
			}
			kakao.Link.createDefaultButton({
				// Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
				container: '#kakao-link-btn',
				objectType: 'feed',
				content: {
					title: challengeTitle,
					// description: tags.join(' ') ,
					imageUrl: imageUrl, // i.e. process.env.FETCH_URL + '/logo.png'
					link: {
						mobileWebUrl: window.location.href,
						// mobileWebUrl: 'https://www.naver.com',
						webUrl: window.location.href,
						// webUrl: 'https://www.naver.com',
					},
				},
				// social: social,
				// buttons: buttons,
			});
			// console.log('kakao: ', kakao);
			// kakao.API.request({
			// 	url: '/v1/api/talk/profile',
			// 	success: function (response) {
			// 		console.log('success response: ', response);
			// 	},
			// 	fail: function (error) {
			// 		console.log(error);
			// 	},
			// });
		}
	};
	return (
		// <div className="kakao-share-button">
		// 	{/* Kakao share button */}
		// 	{/* <button id="kakao-link-btn">
		// 		<img
		// 			src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/5f9c58c2017800001.png"
		// 			alt="kakao-share-icon"
		// 		/>
		// 	</button> */}
		// 	<RiKakaoTalkFill  className="kakao-share-button" id="kakao-link-btn" ></RiKakaoTalkFill>
		// </div>
		<div
			onClick={() => {
				console.log('clicked');
			}}
		>
			<img
				className="kakao-share-button"
				id="kakao-link-btn"
				src="/img/ic_kakao.svg"
			></img>
		</div>
	);
};
export default KakaoShareButton;
