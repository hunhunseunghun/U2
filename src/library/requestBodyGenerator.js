export default function (params, type) {
	switch (type) {
		case '전문영상편집자': {
			return {
				challengeDesc: params.challengeDesc,
				challengeTargetCode: 2,
				charge: params.charge, //담당자
				chargeContact: params.chargeContact,
				chargeContactShown: params.chargeContactShown ? 1 : 0,
				chargeShown: params.chargeShown ? 1 : 0,
				chargeeMail: params.chargeeMail,
				chargeeMailShown: params.chargeeMailShown ? 1 : 0,
				fileRef: params.fileRef,
				logo: params.logo,
				// mainImage: 'test',
				memberIdx: params.memberIdx,
				missions: [
					// 템플릿
					{
						videos: params.videos.map((el, idx) => {
							return {
								// challengeIdx: 0,
								seq: idx + 1, //seq는 무조건 1
								platform: el.platform, //객체
								platformRequired: 1,
							};
						}),
						contactRequired: params.contactRequired,
						// datePub: params.datePub ? params.datePub : null, //공지 시작일
						dateBegin: params.dateBegin, //접수 시작
						dateFin: params.dateFin, // 접수 종료
						emailRequired: params.emailRequired, //제출자 개인 정보 수집  이메일
						fileOrUrl: params.fileOrUrl,
						filmRequired: params.filmRequired, //영상 제작 제출 필수제출시 2
						seq: 1, //무조건 1
						shareRequired: params.shareRequired, //온라인 게시 필수제출시 2
						missionDesc: params.missionDesc,

						//제출자 개인 정보 수집 전화번호
					},
				],

				title: params.title,
				ownerIdx: params.ownerIdx,
				ownerName: params.ownerName,
				ownerCat: params.ownerCat,
				company: params.company,
				// companyA: params.organizer,
				// companyB: params.sponsor,
				url: params.url,
				meetCode: params.meetCode,
				// mainImage:
				//   params.posterFile.length > 0 ? params.posterFile[0].name : null,
				fileRef: params.etcFile,
				shareRequired: params.isOnline ? (params.isSnsRequired ? 2 : 1) : 0,
				filmRequired: params.isVideoProduction,
				fileOrUrl: params.isFileOrUrl ? 1 : 0,
				emailRequired: params.isEmail ? (params.emailRequired ? 2 : 1) : 0,
				contactRequired: params.isMobile ? (params.mobileRequired ? 2 : 1) : 0,
				datePub: params.datePub ? params.datePub : null,
				rewards: params.rewards.map((el, idx) => {
					return {
						seq: idx + 1,
						cat: el.cat,
						qty: el.qty ? el.qty : 0,
						pts: el.pts ? Number(el.pts) : 0,
						// pts: 2000,
						currency: el.currency ? el.currency : null,
						rewarddesc: el.rewarddesc ? el.rewarddesc : null,
						datePayment: el.datePayment,
					};
				}),

				// // challengeDesc: viewRef.current.getAttribute('content_data'),

				//공모 공지글
				commentAllowed: params.commentAllowed ? 1 : 0, //댓글기능
			};
		}
		case 'challengeowner': {
			return {
				// ownerIdx: params.ownerIdx,
				memberIdx: params.memberIdx,
				ownerCat: params.ownerCat,
				company: params.company,
				email: params.email,
				contact: params.contact,
				socialMediaCode: params.socialMediaCode,
				socialMediaId: params.socialMediaId,
				// "registMemberIdx": 0,
				// "registDate": "2021-07-12T11:42:54.308Z",
				// "modifyMemberIdx": 0,
				// "modifyDate": "2021-07-12T11:42:54.308Z"
			};
		}
		case '공모전': {
			return {
				missions: [
					// 템플릿
					{
						videos: params.videos.map((el, idx) => {
							return {
								// "challengeIdx": 0,
								seq: idx + 1, //seq는 무조건 1
								platform: el.platform, //객체
								platformRequired: 1,
							};
						}),
						// {
						// 	// "challengeIdx": 0,
						// 	seq: 1, //seq는 무조건 1
						// 	platform: 'YU', //객체
						// 	platformRequired: params.platformRequired,
						// },

						seq: 1, //무조건 1
						// missionDesc: 'string',
						datePub: params.datePub, //공지 시작일
						dateBegin: params.dateBegin, //접수 시작
						dateFin: params.dateFin, // 접수 종료
						shareRequired: params.shareRequired, //온라인 게시 필수제출시 2
						filmRequired: params.filmRequired, //영상 제작 제출 필수제출시 2
						fileOrUrl: params.fileOrUrl,
						emailRequired: params.emailRequired, //제출자 개인 정보 수집  이메일
						contactRequired: params.contactRequired, //제출자 개인 정보 수집 전화번호
					},
				],

				ownerName: params.ownerName, //userInfo. name
				memberIdx: params.memberIdx, // userInfo . memberidx
				rewards:
					//   {
					//     "seq": 1,
					//     "cat": 0,
					//     "qty": 0,
					//     "pts": 0,
					//     "currency": "string",
					//   }
					params.rewards.map((el, idx) => {
						return {
							seq: idx + 1,
							cat: el.cat,
							qty: el.qty ? el.qty : 0,
							pts: el.pts ? Number(el.pts) : 0,
							currency: el.currency ? el.currency : null,
							rewarddesc: el.rewarddesc ? el.rewarddesc : null,
						};
					}),
				// hire: {
				// 	fields: [
				// 		{
				// 			challengeIdx: 1,
				// 			seq: 1,
				// 			fieldCode: 'string',
				// 			fieldName: 'string',
				// 			// registMemberIdx: 0,
				// 			// registDate: '2021-07-13T04:46:40.915Z',
				// 			// modifyMemberIdx: 0,
				// 			// modifyDate: '2021-07-13T04:46:40.915Z',
				// 		},
				// 	],
				// 	docs: [
				// 		{
				// 			challengeIdx: 1,
				// 			seq: 1,
				// 			docCode: 'string',
				// 			// registMemberIdx: 0,
				// 			// registDate: '2021-07-13T04:46:40.915Z',
				// 			// modifyMemberIdx: 0,
				// 			// modifyDate: '2021-07-13T04:46:40.915Z',
				// 		},
				// 	],
				// },
				// "challengerCount": 0, //?
				// "commentCount": 0,
				// "shareCount": 0,
				// "challengeIdx": 0, //?
				title: params.title, //공모전 명
				// "subtitle": "string", //preview로 할려했는데 일단 보류
				ownerIdx: params.ownerIdx, //userinfo.member idx
				companya: params.companyA, //주관사
				companyb: params.companyB, //후원사

				url: params.url, //홈페이지 URL
				challengeDesc: params.challengeDesc, //공모 공지글
				// "meetCode": 0, //?
				challengeTargetCode: 1, //공모전이니까 1
				datePub: params.datePub, //공지 시작일
				logo: params.logo, //로고
				// mainImage: params.mainImage, //포스터
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
