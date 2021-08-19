import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';
function Main() {
	const [mobileYn, setMobileYn] = useState(false);
	const [quoteCount, setQuoteCount] = useState(0);
	const userInfo = useSelector((state) => state.userInfo);
	useEffect(() => {
		if (window.innerWidth < 900) {
			setMobileYn(true);
			document.querySelector('.intro1').style.height =
				window.innerHeight + 'px';
		}

		gsap.to('.co_0', 0, { left: '50%' });
	}, []);

	//리액트 훅에서 setInterval 구현(유튜버추천 롤링)
	useEffect(() => {
		function tick() {
			return setTimeout(() => {
				gsap.fromTo(
					'.co_' + (quoteCount % 3),
					1,
					{ left: '50%' },
					{ left: '-200%' },
				);
				gsap.fromTo(
					'.co_' + ((quoteCount + 1) % 3),
					1,
					{ left: '200%' },
					{ left: '50%' },
				);
				setQuoteCount(quoteCount + 1);
			}, 5000);
		}
		tick();
		return () => clearTimeout(tick);
	}, [quoteCount]);

	return (
		<div className={'contents_wrap'}>
			<div
				className={'intro intro1'}
				style={{
					backgroundImage: 'url(/img/main12' + (mobileYn ? '_m' : '') + '.jpg)',
				}}
			>
				<div className={'main_copy_section'}>
					<div className={'main_copy'}>
						영상 크리에이터에
						<br />
						필요한 모든 것
					</div>
					<div className={'sub_copy'}>
						지금 가입하면 영상 제작 Tip을 마음껏 보실 수 있어요!
					</div>
					<div className={'bt_section'}>
						<Link to={userInfo.email ? '/price' : '/login'}>
							<div className={'default_bt join_bt'}>서비스 가입하기</div>
						</Link>
					</div>
				</div>
			</div>
			<div className={'intro intro2'}>
				<div className={'section_title'}>
					<span className={'st_t'}>ABOUT</span>
					<span className={'st_deco'}></span>
					<span className={'st_t'}>U2</span>
				</div>
				<div className={'main_copy'}>
					U2 서비스는, 여러분이 영상 편집 장비 구비와 기술을 공부하는데 많은
					시간과 돈을 허비하는 대신,
					<br />
					자산의 영상을 기획하고 동료와 함께 협력하는 본연의 작업에 더욱 집중할
					수 있도록 해줍니다.
					<br />
					<br />
					초보 영상 편집자라도 U2에서 필요한 영상 편집 법만 골라 찾고 그에 맞는
					영상 편집 SW를 골라 따라하면 어려운 특수효과도 순식간에 전문가처럼
					표현할 수 있어요.
					<br />
					영상편집 강사분들이 U2 앱만 설치하면, 한시간 넘게 걸리던 학생
					노트북PC에 각종 영상편집 SW 설치와 파일 공유하는 강의 준비 과정 없이
					즉시 강의 시작 가능합니다.
				</div>
			</div>
			<div className={'intro intro3'}>
				<div className={'main_copy'}>
					최신 클라우드 기술을 통해
					<br />
					최고사양 컴퓨터에서 여러분의 영상을
					<br />
					편집하고 제작하세요!
				</div>
				<div className={'deco_img'}>
					<img src={'/img/main02.png'} />
				</div>
				<div className={'strength_items'}>
					<div className={'st_item'}>
						<div className={'st_title'}>찾기 쉬운 영상제작 정보</div>
						<div className={'st_contents'}>
							검색할 필요없이, 쉽고 빠르게 영상제작 정보를 얻을 수 있어요. TV,
							유명 유튜버처럼 영상편집효과를 직접 배워서 만들 수 있어요.
							영상제작 어디서부터 시작해야할지 모를 때 참고해보세요.
						</div>
					</div>
					<div className={'st_item'}>
						<div className={'st_title'}>즉시 시작 가능한 영상제작</div>
						<div className={'st_contents'}>
							설치없이 로그인만으로 영상제작이 가능해요. 카페에서 저사양
							노트북으로도 4K 영상제작이 가능해요. 이동하면서 영상을 빠르게
							업로드/다운로드 할 수 있어요.
						</div>
					</div>
					<div className={'st_item'}>
						<div className={'st_title'}>돈이 되는 부가기능</div>
						<div className={'st_contents'}>
							영상제작을 통해 새로운 수입을 만들어보세요. 내가 만든 영상으로
							나를 표현해보세요. 정보/프로그램소/부가기능이 한 눈에 쉽고 빠르게
							정돈해보세요.
						</div>
					</div>
				</div>
			</div>
			<div className={'intro intro4'}>
				<div className={'section_title'}>U2 구성 소프트웨어</div>
				<div className={'tool_items'}>
					<div className={'tool_list'}>
						<div className={'tool_item'}>
							<img src={'/img/photoshop.png'} />
							<div className={'tool_contents'}>
								<div className={'tool_name'}>Adobe Photoshop</div>
								<div className={'tool_desc'}>
									누구나 간편하고 쉽게 이미지 보정, 편집을 할 수 있는 최적의
									소프트웨어
								</div>
							</div>
						</div>
						<div className={'tool_item'}>
							<img src={'/img/premiere.png'} />
							<div className={'tool_contents'}>
								<div className={'tool_name'}>Adobe Premiere Pro</div>
								<div className={'tool_desc'}>
									누구나 간편하고 쉽게 이미지 보정, 편집을 할 수 있는 최적의
									소프트웨어
								</div>
							</div>
						</div>
						<div className={'tool_item'}>
							<img src={'/img/aftereffects.png'} />
							<div className={'tool_contents'}>
								<div className={'tool_name'}>Adobe AfterEffect</div>
								<div className={'tool_desc'}>
									누구나 간편하고 쉽게 이미지 보정, 편집을 할 수 있는 최적의
									소프트웨어
								</div>
							</div>
						</div>
						<div className={'tool_sub_desc'}>
							*Adebe제품은 이미 구입한 계정이 있을시, 본인계정으로 설치가
							가능합니다.
						</div>
					</div>
					<div className={'tool_list'}>
						<div className={'tool_item'}>
							<img src={'/img/cinema.png'} />
							<div className={'tool_contents'}>
								<div className={'tool_name'}>Cinema 4D</div>
								<div className={'tool_desc'}>
									누구나 간편하고 쉽게 이미지 보정, 편집을 할 수 있는 최적의
									소프트웨어
								</div>
							</div>
						</div>
						<div className={'tool_item'}>
							<img src={'/img/powerdirector.png'} />
							<div className={'tool_contents'}>
								<div className={'tool_name'}>Power Director</div>
								<div className={'tool_desc'}>
									누구나 간편하고 쉽게 이미지 보정, 편집을 할 수 있는 최적의
									소프트웨어
								</div>
							</div>
						</div>
					</div>
					<div className={'tool_list'}>
						<div className={'tool_item'}>
							<img src={'/img/davinchresolve.png'} />
							<div className={'tool_contents'}>
								<div className={'tool_name'}>Autodesk Maya</div>
								<div className={'tool_desc'}>
									누구나 간편하고 쉽게 이미지 보정, 편집을 할 수 있는 최적의
									소프트웨어
								</div>
							</div>
						</div>
						<div className={'tool_item'}>
							<img src={'/img/davinchresolve.png'} />
							<div className={'tool_contents'}>
								<div className={'tool_name'}>Autodesk Maya</div>
								<div className={'tool_desc'}>
									누구나 간편하고 쉽게 이미지 보정, 편집을 할 수 있는 최적의
									소프트웨어
								</div>
							</div>
						</div>
						<div className={'tool_item'}>
							<img src={'/img/davinchresolve.png'} />
							<div className={'tool_contents'}>
								<div className={'tool_name'}>Autodesk Maya</div>
								<div className={'tool_desc'}>
									누구나 간편하고 쉽게 이미지 보정, 편집을 할 수 있는 최적의
									소프트웨어
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={'intro intro5'}>
				<div className={'section_title'}>U2 요금제</div>
				<div className={'price_items'}>
					<div className={'pr_item'}>
						<div className={'pr_title'}>5G 프리미어 플러스</div>
						<div className={'pr_tags'}>
							<div className={'pr_tag'}>스토리지</div>
							<div className={'pr_tag'}>영상편집</div>
							<div className={'pr_tag'}>제작팁</div>
						</div>
						<div className={'pr_price'}>
							<div className={'pr_value'}>월 50,000원</div>
							<div className={'pr_sub_desc'}>1년 약정시</div>
						</div>
						<div className={'pr_contents'}>
							<div className={'pr_main_copy'}>
								영상편집을 시작하는 분께 적합한 요금제 입니다.
							</div>
							<div className={'pr_desc'}>
								영상공유/리뷰 기능을 사용할 수 있습니다.
								<br />
								U2만의 전용 영상 제작 팁과 영상 트렌드를 쉽게 확인할 수
								있습니다.
								<br />
								인터넷만 제공되면 언제 어디서나 영상편집을 하실 수 있습니다.
							</div>
						</div>
						<div className={'pr_bt_section'}>
							<div className={'default_bt go_to_price_bt'}>
								요금제 자세히보기
							</div>
						</div>
					</div>
					<div className={'pr_item'}>
						<div className={'pr_title'}>5G 프리미어 플러스</div>
						<div className={'pr_tags'}>
							<div className={'pr_tag'}>스토리지</div>
							<div className={'pr_tag'}>영상편집</div>
							<div className={'pr_tag'}>제작팁</div>
						</div>
						<div className={'pr_price'}>
							<div className={'pr_value'}>월 50,000원</div>
							<div className={'pr_sub_desc'}>1년 약정시</div>
						</div>
						<div className={'pr_contents'}>
							<div className={'pr_main_copy'}>
								영상편집을 시작하는 분께 적합한 요금제 입니다.
							</div>
							<div className={'pr_desc'}>
								영상공유/리뷰 기능을 사용할 수 있습니다.
								<br />
								U2만의 전용 영상 제작 팁과 영상 트렌드를 쉽게 확인할 수
								있습니다.
								<br />
								인터넷만 제공되면 언제 어디서나 영상편집을 하실 수 있습니다.
							</div>
						</div>
						<div className={'pr_bt_section'}>
							<div className={'default_bt go_to_price_bt'}>
								요금제 자세히보기
							</div>
						</div>
					</div>
					<div className={'pr_item'}>
						<div className={'pr_title'}>5G 프리미어 플러스</div>
						<div className={'pr_tags'}>
							<div className={'pr_tag'}>스토리지</div>
							<div className={'pr_tag'}>영상편집</div>
							<div className={'pr_tag'}>제작팁</div>
						</div>
						<div className={'pr_price'}>
							<div className={'pr_value'}>월 50,000원</div>
							<div className={'pr_sub_desc'}>1년 약정시</div>
						</div>
						<div className={'pr_contents'}>
							<div className={'pr_main_copy'}>
								영상편집을 시작하는 분께 적합한 요금제 입니다.
							</div>
							<div className={'pr_desc'}>
								영상공유/리뷰 기능을 사용할 수 있습니다.
								<br />
								U2만의 전용 영상 제작 팁과 영상 트렌드를 쉽게 확인할 수
								있습니다.
								<br />
								인터넷만 제공되면 언제 어디서나 영상편집을 하실 수 있습니다.
							</div>
						</div>
						<div className={'pr_bt_section'}>
							<div className={'default_bt go_to_price_bt'}>
								요금제 자세히보기
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={'intro intro6'}
				style={{ backgroundImage: 'url(/img/main6.jpg)' }}
			>
				<div className={'process_section'}>{(quoteCount % 3) + 1} / 3</div>
				<div className={'copy_items'}>
					<div className={'copy_item co_0'}>
						<div className={'main_copy'}>
							<span className={'t_deco_start'}>"</span>
							U2 서비스는 영상편집 초심자는 물론 전문가까지 모두를 위한
							플랫폼이에요. 초심자분들은 큐레이션을 통해 원하는 정볼르 쉽고
							빠르게 찾아 영상편집을 할 수 있고, 전문가들은 고사양이 요구되는
							전문영상 편집을 이동 중에도 할 수 있는 장점이 있어요.
							<span className={'t_deco_end'}>"</span>
						</div>
						<div className={'copy_writer'}>- 유튜버 조커스마일 -</div>
					</div>
					<div className={'copy_item co_1'}>
						<div className={'main_copy'}>
							<span className={'t_deco_start'}>"</span>
							초심자분들은 큐레이션을 통해 원하는 정볼르 쉽고 빠르게 찾아
							영상편집을 할 수 있고, 전문가들은 고사양이 요구되는 전문영상
							편집을 이동 중에도 할 수 있는 장점이 있어요.
							<span className={'t_deco_end'}>"</span>
						</div>
						<div className={'copy_writer'}>- 유튜버 조커스마일 -</div>
					</div>
					<div className={'copy_item co_2'}>
						<div className={'main_copy'}>
							<span className={'t_deco_start'}>"</span>
							전문가들은 고사양이 요구되는 전문영상 편집을 이동 중에도 할 수
							있는 장점이 있어요. 초심자분들은 큐레이션을 통해 원하는 정볼르
							쉽고 빠르게 찾아 영상편집을 할 수 있고, U2 서비스는 영상편집
							초심자는 물론 전문가까지 모두를 위한 플랫폼이에요.
							<span className={'t_deco_end'}>"</span>
						</div>
						<div className={'copy_writer'}>- 유튜버 조커스마일 -</div>
					</div>
				</div>
			</div>
			<div className={'intro intro7'}>
				<div className={'section_title'}>자주 묻는 질문</div>
				<div className={'faq_items'}>
					<div className={'faq_item active'}>
						<div className={'faq_header'}>
							<div className={'faq_num'}>Q.1</div>
							<div className={'faq_title'}>
								진짜 프로그램 설치없이 영상제작을 할 수 있나요?
							</div>
							<div className={'faq_cate'}>영상제작 정보</div>
							<div className={'faq_deco'}>
								<img src={'/img/ic_arrow_up_w.svg'} />
							</div>
						</div>
						<div className={'faq_contents'}>
							<div className={'faq_num'}>A.1</div>
							네. U2는 인터넷 연결만 되어 있으면 사용할 수 있는 서비스에요.
							원격지의 고성능 서버에서 영상제작 프로그램이 동작하고 있고,
							인터넷을 통해 넷플릭스처럼 화면만 스트리밍 해와요그래서
							노트북으로도 4K편집 같은 높은 사양을 요구하는 영상제작 작업을 할
							수 있어요.
						</div>
					</div>
					<div className={'faq_item'}>
						<div className={'faq_header'}>
							<div className={'faq_num'}>Q.1</div>
							<div className={'faq_title'}>
								진짜 프로그램 설치없이 영상제작을 할 수 있나요?
							</div>
							<div className={'faq_cate'}>영상제작 정보</div>
							<div className={'faq_deco'}>
								<img src={'/img/ic_arrow_down.svg'} />
							</div>
						</div>
						<div className={'faq_contents'}>
							<div className={'faq_num'}>A.1</div>
							네. U2는 인터넷 연결만 되어 있으면 사용할 수 있는 서비스에요.
							원격지의 고성능 서버에서 영상제작 프로그램이 동작하고 있고,
							인터넷을 통해 넷플릭스처럼 화면만 스트리밍 해와요그래서
							노트북으로도 4K편집 같은 높은 사양을 요구하는 영상제작 작업을 할
							수 있어요.
						</div>
					</div>
					<div className={'faq_item'}>
						<div className={'faq_header'}>
							<div className={'faq_num'}>Q.1</div>
							<div className={'faq_title'}>
								진짜 프로그램 설치없이 영상제작을 할 수 있나요?
							</div>
							<div className={'faq_cate'}>영상제작 정보</div>
							<div className={'faq_deco'}>
								<img src={'/img/ic_arrow_down.svg'} />
							</div>
						</div>
						<div className={'faq_contents'}>
							<div className={'faq_num'}>A.1</div>
							네. U2는 인터넷 연결만 되어 있으면 사용할 수 있는 서비스에요.
							원격지의 고성능 서버에서 영상제작 프로그램이 동작하고 있고,
							인터넷을 통해 넷플릭스처럼 화면만 스트리밍 해와요그래서
							노트북으로도 4K편집 같은 높은 사양을 요구하는 영상제작 작업을 할
							수 있어요.
						</div>
					</div>
					<div className={'faq_item'}>
						<div className={'faq_header'}>
							<div className={'faq_num'}>Q.1</div>
							<div className={'faq_title'}>
								진짜 프로그램 설치없이 영상제작을 할 수 있나요?
							</div>
							<div className={'faq_cate'}>영상제작 정보</div>
							<div className={'faq_deco'}>
								<img src={'/img/ic_arrow_down.svg'} />
							</div>
						</div>
						<div className={'faq_contents'}>
							<div className={'faq_num'}>A.1</div>
							네. U2는 인터넷 연결만 되어 있으면 사용할 수 있는 서비스에요.
							원격지의 고성능 서버에서 영상제작 프로그램이 동작하고 있고,
							인터넷을 통해 넷플릭스처럼 화면만 스트리밍 해와요그래서
							노트북으로도 4K편집 같은 높은 사양을 요구하는 영상제작 작업을 할
							수 있어요.
						</div>
					</div>
					<div className={'faq_item'}>
						<div className={'faq_header'}>
							<div className={'faq_num'}>Q.1</div>
							<div className={'faq_title'}>
								진짜 프로그램 설치없이 영상제작을 할 수 있나요?
							</div>
							<div className={'faq_cate'}>영상제작 정보</div>
							<div className={'faq_deco'}>
								<img src={'/img/ic_arrow_down.svg'} />
							</div>
						</div>
						<div className={'faq_contents'}>
							<div className={'faq_num'}>A.1</div>
							네. U2는 인터넷 연결만 되어 있으면 사용할 수 있는 서비스에요.
							원격지의 고성능 서버에서 영상제작 프로그램이 동작하고 있고,
							인터넷을 통해 넷플릭스처럼 화면만 스트리밍 해와요그래서
							노트북으로도 4K편집 같은 높은 사양을 요구하는 영상제작 작업을 할
							수 있어요.
						</div>
					</div>
					<div className={'faq_item'}>
						<div className={'faq_header'}>
							<div className={'faq_num'}>Q.1</div>
							<div className={'faq_title'}>
								진짜 프로그램 설치없이 영상제작을 할 수 있나요?
							</div>
							<div className={'faq_cate'}>영상제작 정보</div>
							<div className={'faq_deco'}>
								<img src={'/img/ic_arrow_down.svg'} />
							</div>
						</div>
						<div className={'faq_contents'}>
							<div className={'faq_num'}>A.1</div>
							네. U2는 인터넷 연결만 되어 있으면 사용할 수 있는 서비스에요.
							원격지의 고성능 서버에서 영상제작 프로그램이 동작하고 있고,
							인터넷을 통해 넷플릭스처럼 화면만 스트리밍 해와요그래서
							노트북으로도 4K편집 같은 높은 사양을 요구하는 영상제작 작업을 할
							수 있어요.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Main;
