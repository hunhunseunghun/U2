import { useState, useEffect } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as baseActions from '../store/base';
import useBus from 'use-bus';
import axios from 'axios';
function Header(props) {
	const history = useHistory();
	// const [mobileYn, setMobileYn] = useState(false);
	const [whiteFix, setWhiteFix] = useState(false);
	const [headerFix, setHeaderFix] = useState(false);
	const [mobileMenuActive, setMobileMenuActive] = useState(false);
	const [windowAppYn, setWindowAppYn] = useState(false);
	const [headerYn, setHeaderYn] = useState(true);
	const [profilePopYn, setProfilePopYn] = useState(false);

	const location = useLocation();
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.userInfo);
	useEffect(() => {
		// if (window.innerWidth < 900) {
		// 	setMobileYn(true);
		// }
		setMobileMenuActive(false);
		if (location.pathname === '/') {
			setWhiteFix(true);
		} else {
			setWhiteFix(false);
		}
		const params = new URLSearchParams(location.search);
		if (params.get('windowapp')) {
			setWindowAppYn(true);
		}
		if (location.pathname.indexOf('/login') >= 0) {
			setHeaderYn(false);
		} else {
			setHeaderYn(true);
		}

		if (!userInfo.email) {
			const token = localStorage.getItem('token');
			if (token) {
				axios
					.get(process.env.REACT_APP_API_URL + '/member/profile', {
						headers: {
							Authorization: 'Bearer ' + token,
						},
					})
					.then((result) => {
						dispatch(
							baseActions.setUserInfo({
								email: result.data.email,
								fullName: result.data.fullName,
								photo: result.data.photoUrl,
								token: result.data.token,
								charge: result.data.chargeApp.chargeIdx,
								memberIdx: result.data.memberIdx,
							}),
						);
					});
			}
		} else {
			var config = {
				method: 'get',
				url: process.env.REACT_APP_U2_DB_HOST + '/Campaign/notification',
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
					'Content-Type': 'application/json',
				},
			};
			axios(config)
				.then((response) => {
					props.handleNotification(response.data);
				})
				.catch((err) => {
					console.log(err.response);
				});
		}

		let scTop;
		document.addEventListener('scroll', function () {
			scTop = document.documentElement.scrollTop;
			if (scTop > 500) {
				setHeaderFix(true);
				setWhiteFix(false);
			} else {
				setHeaderFix(false);
				if (location.pathname === '/') {
					setWhiteFix(true);
				} else {
					setWhiteFix(false);
				}
			}
		});

		window.scrollTo(0, 0);
	}, [location]);
	useBus(
		'@@popup/close',
		() => {
			setProfilePopYn(false);
		},
		[],
	);
	const logOutClick = () => {
		dispatch(baseActions.logout());
		window.reload();
	};
	return (
		<div
			className={
				'header ' +
				(whiteFix ? 'white ' : '') +
				(headerFix ? 'fixed ' : '') +
				(windowAppYn ? 'window_app' : '') +
				(mobileMenuActive ? 'active' : '') +
				(headerYn ? '' : 'not_display')
			}
		>
			<div className={'header_tl'}>
				<Link to={'/'}>
					<div className={'logo_section'}>
						<img src={'/img/logo' + (whiteFix ? '_w' : '') + '.svg'} />
					</div>
				</Link>
				{location.pathname !== '/' && (
					<div className={'search_section'}>
						<input
							type={'text'}
							placeholder={'필요한 영상제작팁을 검색하세요'}
						/>
						<img src={'/img/ic_search' + (whiteFix ? '_w' : '') + '.svg'} />
					</div>
				)}
				<div
					className={
						'mobile_menu mobile_view ' + (mobileMenuActive ? 'active' : '')
					}
					onClick={(e) => {
						e.stopPropagation();
						setMobileMenuActive(!mobileMenuActive);
					}}
				>
					<div className={'mm_ic_container '}>
						<div className={'mm_ic mm1'}></div>
						<div className={'mm_ic mm2'}></div>
						<div className={'mm_ic mm3'}></div>
					</div>
				</div>
			</div>
			<div className={'main_menu'}>
				<ul>
					<li className={location.pathname === '/' ? 'active' : ''}>
						<Link to={'/'}>메인으로</Link>
					</li>
					<li
						className={
							location.pathname.indexOf('/tutorial') >= 0 ? 'active' : ''
						}
					>
						<Link to={'/tutorial'}>영상제작팁</Link>
					</li>
					<li
						className={location.pathname.indexOf('/price') >= 0 ? 'active' : ''}
					>
						<Link to={'/price'}>요금제</Link>
					</li>
					<li
						className={
							location.pathname.indexOf('/creatormarket') >= 0
								? 'active tab_creatorMarket'
								: 'tab_creatorMarket'
						}
					>
						<Link to={'/creatormarket'}>크리에이터 마켓</Link>

						<div className="creatorMarket_dropdown">
							<Link
								className="dropdown_ele"
								onClick={() => {
									if (!userInfo.email) {
										if (
											window.confirm(
												'로그인이 필요한 서비스입니다. 로그인하시겠습니까?',
											)
										) {
											history.push('/login');
										}
									} else {
										history.push('/prjregi');
									}
								}}
							>
								프로젝트 등록
							</Link>
							<Link className="dropdown_ele" to={'/creatormarket'}>
								진행중인 프로젝트
							</Link>
						</div>
					</li>

					{!userInfo.email && (
						<li>
							<Link to={'/login'}>로그인/회원가입</Link>
						</li>
					)}
					{userInfo.email && (
						<li>
							<div
								className={'profile_img'}
								onClick={(e) => {
									e.stopPropagation();
									setProfilePopYn(!profilePopYn);
								}}
								style={{
									backgroundImage:
										'url(' +
										(userInfo.photo ? userInfo.photo : '/img/tempProfile.jpg') +
										')',
								}}
							></div>
							{profilePopYn && (
								<div className={'pop_sub profile_pop'}>
									<ul>
										<Link to="/mywork">
											<li>나의 프로젝트</li>
										</Link>
									</ul>
									<ul>
										<li
											onClick={() => {
												logOutClick();
											}}
										>
											로그아웃
										</li>
									</ul>
								</div>
							)}
						</li>
					)}
				</ul>
			</div>

			<div className={'mobile_menu_section'}>
				{userInfo.email && (
					<div className={'user_info'}>
						<div
							className={'profile_img'}
							style={{
								backgroundImage:
									'url(' +
									(userInfo.photo ? userInfo.photo : '/img/tempProfile.jpg') +
									')',
							}}
						></div>
						<div className={'profile_email'}>{userInfo.email}</div>
					</div>
				)}
				<div className={'main_menu'}>
					<ul>
						<li className={location.pathname === '/' ? 'active' : ''}>
							<Link to={'/'} className={'mm_t'}>
								메인으로
							</Link>
						</li>
						<li
							className={
								location.pathname.indexOf('/tutorial') >= 0 ? 'active' : ''
							}
						>
							<Link to={'/tutorial'} className={'mm_t'}>
								영상제작팁
							</Link>
						</li>
						<li
							className={
								location.pathname.indexOf('/price') >= 0 ? 'active' : ''
							}
						>
							<Link to={'/price'} className={'mm_t'}>
								요금제
							</Link>
						</li>

						<li
							className={
								location.pathname.indexOf('/creatormarket') >= 0 ? 'active' : ''
							}
						>
							<Link to={'/creatormarket'} className={'mm_t'}>
								크리에이터 마켓
							</Link>
						</li>
						{userInfo.email && (
							<li
								className={
									location.pathname.indexOf('/mywork') >= 0
										? 'active tab_mywork'
										: 'tab_mywork'
								}
							>
								<Link to={'/mywork'}>나의 프로젝트</Link>
							</li>
						)}

						{!userInfo.email && (
							<li>
								<Link to={'/login'} className={'mm_t'}>
									로그인/회원가입
								</Link>
							</li>
						)}
						{userInfo.email && (
							<li
								onClick={() => {
									logOutClick();
								}}
							>
								로그아웃
							</li>
						)}
					</ul>
				</div>
				<div className={'sub_menu'}>
					<ul>
						<li>이용약관</li>
						<li>개인정보취급방침</li>
						<li>제휴협력문의</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Header;
