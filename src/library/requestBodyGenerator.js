export default function (params, type) {
	switch (type) {
		case '공모전': {
			return {
				missions: [
					// 템플릿
					{
						videos: [
							{
								// "challengeIdx": 0,
								seq: 1, //seq는 무조건 1
								platform: 'YU', //객체
								platformRequired: params.platformRequired,
							},
						],
						seq: 1, //무조건 1
						missionDesc: 'string',
						datePub: params.datePub, //공지 시작일
						dateBegin: params.dateBegin, //접수 시작
						dateFin: params.dateFin, // 접수 종료
						shareRequired: params.shareRequired ? 1 : 0, //온라인 게시 필수제출시 2
						filmRequired: params.filmRequired ? 1 : 0, //영상 제작 제출 필수제출시 2
						emailRequired: params.emailRequired ? 1 : 0, //제출자 개인 정보 수집  이메일
						contactRequired: params.contactRequired ? 1 : 0, //제출자 개인 정보 수집 전화번호
					},
				],

				ownerName: params.ownerName, //userInfo. name
				memberIdx: params.memberIdx, // userInfo . memberidx
				rewards: [
					//   {
					//     "seq": 1,
					//     "cat": 0,
					//     "qty": 0,
					//     "pts": 0,
					//     "currency": "string",
					//   }
					params.rewards.map((el) => {
						return {
							seq: 1,
							cat: el.cat,
							qty: el.qty,
							pts: el.pts,
							currency: el.currency,
						};
					}),
				],
				// "challengerCount": 0, //?
				// "commentCount": 0,
				// "shareCount": 0,
				// "challengeIdx": 0, //?
				title: params.title, //공모전 명
				// "subtitle": "string", //preview로 할려했는데 일단 보류
				ownerIdx: params.ownerIdx, //userinfo.member idx
				companyA: params.companyA, //주관사
				companyB: params.companyB, //후원사
				url: params.url, //홈페이지 URL
				challengeDesc: params.challengeDesc, //공모 공지글
				// "meetCode": 0, //?
				challengeTargetCode: 1, //공모전이니까 1
				// datePub: params.datePub, //공지 시작일
				// "logo": "string", //?
				mainImage: params.mainImage, //포스터
				fileRef: params.fileRef, //파일
				// "promoting": 0, //?
				commentAllowed: params.commentAllowed ? 1 : 0, //댓글기능
				charge: params.charge, //담당자
				chargeShown: params.chargeShown ? 1 : 0,
				chargeContact: params.chargeContact,
				chargeContactShown: params.chargeContactShown ? 1 : 0,
				chargeeMail: params.chargeeMail,
				chargeeMailShown: params.chargeeMailShown ? 1 : 0,
				// "registMemberIdx": params.registMemberIdx,//userinfo.member idx //밑에 4줄은작성 안해도됨.
				// "registDate": params.registDate, //현재 시각
				// "modifyMemberIdx": params.registMemberIdx,//userinfo.member idx
				// "modifyDate": params.registDate //현재 시각
			};
		}
	}
}
