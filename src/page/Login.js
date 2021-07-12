import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link, useHistory } from 'react-router-dom';
import qs from 'qs';
import { API_URL, HOST_URL } from '../const/URL';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import * as baseActions from '../store/base';
const newAPI = process.env.REACT_APP_API_URL;

window.fbAsyncInit = function () {
	window.FB.init({
		//appId      : '463225464912276',
		appId: '4579024922127467',
		cookie: true,
		xfbml: true,
		version: 'v10.0',
	});
	window.FB.AppEvents.logPageView();
};
function Login(props) {
	const [mobileYn, setMobileYn] = useState(false);
	const location = useLocation();
	let params;
	let googleToken;
	let kakaoToken;
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		params = new URLSearchParams(location.search);
		if (window.innerWidth < 900) {
			setMobileYn(true);
		}
		if (params.get('code')) kakaoToken = params.get('code'); //카카오로그인 토큰
		if (location.hash)
			googleToken = location.hash.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]; //구글로그인 토큰

		if (googleToken) {
			//구글로그인되었을 때
			axios({
				method: 'get',
				url:
					'https://www.googleapis.com/userinfo/v2/me?access_token=' +
					googleToken,
				headers: { Authorization: 'Bearer ' + googleToken },
			}).then((result) => {
				console.log(result);
				console.log();

				ourLogin({
					email: result.data.email,
					name: result.data.family_name + result.data.given_name,
					photo: result.data.picture,
					type: 2,
				});
			});
		}
	}, []);

	const ourLogin = (data) => {
		//console.log(data);
		console.log('our login: ');
		console.log('newAPI: ', newAPI);
		axios
			.post(process.env.REACT_APP_API_URL + '/member/login', {
				email: data.email,
				fullName: data.name,
				photoUrl: data.photo,
				entryTypeCode: data.type,
			})
			.then((response) => {
				console.log(response);
				dispatch(
					baseActions.login({
						email: response.data.email,
						fullName: response.data.fullName,
						photo: response.data.photoUrl,
						token: response.data.token,
						charge: response.data.chargeApp.chargeIdx,
						memberIdx: response.data.memberIdx,
					}),
				);
				if (!response.data.chargeApp.chargeIdx) history.push('/price');
				else history.push('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const snsLoginClick = (sns) => {
		switch (sns) {
			case 'fb': {
				window.FB.login(
					function (response) {
						if (response.status === 'connected') {
							window.FB.api(
								'/me',
								'get',
								{ fields: 'name,email' },
								function (result) {
									//console.log(result);
									//console.log('https://graph.facebook.com/'+result.id+'/picture?type=large');
									ourLogin({
										email: result.email,
										name: result.name,
										photo:
											'https://graph.facebook.com/' +
											result.id +
											'/picture?type=large',
										type: 1,
									});
								},
							);
						} else if (response.status === 'not_authorized') {
							// 사람은 Facebook에 로그인했지만 앱에는 로그인하지 않았습니다.
							alert('앱에 로그인해야 이용가능한 기능입니다.');
						} else {
							// 그 사람은 Facebook에 로그인하지 않았으므로이 앱에 로그인했는지 여부는 확실하지 않습니다.
							alert('페이스북에 로그인해야 이용가능한 기능입니다.');
						}
					},
					{ scope: 'public_profile,email' },
				);
				break;
			}
			case 'google': {
				//기존: 298115075163-hlqv6f9barc61674b385qats4j1gqgup.apps.googleusercontent.com
				//신규: 954387501984-2bifnk88paakq2l6jcp63nr34jkha8ap.apps.googleusercontent.com
				const CLIENT_ID =
					'954387501984-2bifnk88paakq2l6jcp63nr34jkha8ap.apps.googleusercontent.com';
				const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
				const queryStr = qs.stringify({
					client_id: CLIENT_ID,
					redirect_uri: window.location.href,
					response_type: 'token',
					scope: 'profile email',
				});

				const loginUrl = AUTHORIZE_URI + '?' + queryStr;

				window.location.href = loginUrl;

				break;
			}
			case 'kakao': {
				window.Kakao.Auth.login({
					//redirectUri:  encodeURI('http://localhost:3000/login'),
					success: (auth) => {
						window.Kakao.API.request({
							url: '/v2/user/me',
							success(result) {
								//console.log(result);
								ourLogin({
									email: result.kakao_account.email,
									name: result.kakao_account.profile.nickname,
									photo: result.kakao_account.profile.profile_image_url,
									type: 3,
								});
								// { userData: response, tokenData: authObj }
							},
							fail() {
								/* Handle error */
							},
						});
						//console.log('정상적으로 로그인 되었습니다.', auth);
					},
					fail: (err) => {
						console.error(err);
					},
				});
				//window.open('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3004a61b1c2a6c50a35c37134635331a&redirect_uri=http://localhost:3000/login');
				break;
			}
		}
	};

	return (
		<div className={'contents_wrap'}>
			<div className={'login_section'}>
				<div className={'login_container'}>
					<div className={'logo_section'}>
						<Link to={'/'}>
							<img src={'/img/logo_g.svg'} />
						</Link>
					</div>
					<div className={'section_title'}>로그인/회원가입</div>
					<div className={'sns_items'}>
						<button
							className={'default_bt sns_login_bt'}
							onClick={() => snsLoginClick('fb')}
						>
							<img src={'/img/ic_facebook2.svg'} />
							페이스북계정으로 계속하기
						</button>
						<GoogleLogin
							clientId="298115075163-hlqv6f9barc61674b385qats4j1gqgup.apps.googleusercontent.com"
							render={(props) => (
								<button
									className={'default_bt sns_login_bt'}
									onClick={() => snsLoginClick('google')}
								>
									<img src={'/img/ic_google.svg'} />
									구글계정으로 계속하기
								</button>
							)}
							onSuccess={(result) => console.log(result)}
							onFailure={(result) => console.log(result)}
							cookiePolicy={'single_host_origin'}
						/>
						<button
							className={'default_bt sns_login_bt'}
							onClick={() => snsLoginClick('kakao')}
						>
							<img src={'/img/ic_kakao2.svg'} />
							카카오계정으로 계속하기
						</button>
					</div>
					<div className={'login_bottom_info'}>
						로그인을 하지않고 서비스를 계속하려면,{' '}
						<span
							className={'back_bt'}
							onClick={() => {
								window.history.back();
							}}
						>
							뒤로가기
						</span>
						를 눌러주세요.
					</div>
				</div>
			</div>
		</div>
	);
}
export default Login;
