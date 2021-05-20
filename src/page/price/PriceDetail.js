import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useHistoryState from 'use-history-state';
import axios from "axios";
import {API_URL,IMG_URL} from "../../const/URL";
import Moment from 'react-moment';
import useBus from 'use-bus'
function Tutorial(props){

    const [mobileYn,setMobileYn] =  useState(false);
    const [currentSubPage,setCurrentSubPage] =  useState(0);//0개요,1시스템요구사항,2자주묻는질문



    useEffect(()=>{
        if(window.innerWidth<900){
            setMobileYn(true);
        }


    },[]);



    return(
        <div className={'contents_wrap'}>
            <div className={'filter_section'}>
                <ul className={'sub_tab_menu'}>
                    <li className={currentSubPage===0?'active':''} onClick={()=>{setCurrentSubPage(0)}}>개요</li>
                    <li className={currentSubPage===1?'active':''} onClick={()=>{setCurrentSubPage(1)}}>시스템요구사항</li>
                    <li className={currentSubPage===2?'active':''}>자주묻는질문</li>
                </ul>

            </div>
            <div className={'price_detail_section'}>
                {currentSubPage===0&&<div className={'pr_container'}>
                    <div className={'pr_summary'}>
                        <div className={'price_title'}>5G 프리미어 플러스</div>
                        <div className={'price_desc'}>영상편집을 시작하는 분께 적합한 요금제 입니다.</div>
                        <div className={'price_info_items'}>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 SW</div>
                                <div className={'pi_contents'}>다빈치리졸브, 파워디렉터, 블렌더</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 스토리지</div>
                                <div className={'pi_contents'}>영상 편집용 프리미엄 공간 120GB,
                                    영상 저장용 공간 100GB</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 사용시간</div>
                                <div className={'pi_contents'}>100시간</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 SW</div>
                                <div className={'pi_contents'}>필모라X, 베가스, 모하비, 씨네마4D</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 스토리지</div>
                                <div className={'pi_contents'}>영상 저장용 공간 100GB</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 사용시간</div>
                                <div className={'pi_contents'}>시간당/1800원</div>
                            </div>
                        </div>
                        <div className={'price_detail'}>
                            영상공유/리뷰 기능을 사용할 수 있습니다.<br/>
                            U2만의 전용 영상 제작 팁과 영상 트렌드를 쉽게 확인할 수 있습니다<br/>
                            인터넷만 제공되면 언제 어디서나 영상편집을 하실 수 있습니다.
                        </div>
                        <div className={'price_bt_section'}>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'}>1년약정시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                </div>
                                <div className={'pr_value'}>월 50,000원</div>
                            </div>
                            <button className={'default_bt sns_share_bt'}>공유</button>
                            <button className={'default_bt price_buy_bt'}>구매하기</button>
                        </div>
                    </div>
                    <div className={'section_title'}>주요혜택</div>
                    <div className={'pr_benefit'}>
                        <div className={'prb_item'}>
                            <div className={'prb_circle'}>Tutorial</div>
                            <div className={'prb_desc'}>U2만의 독점 영상강의 및 찾기 쉬운 영상제작 정보</div>
                        </div>
                        <div className={'prb_item'}>
                            <div className={'prb_circle'}>CLOUD</div>
                            <div className={'prb_desc'}>인터넷 연결만으로 즉시 가능한 영상제작</div>
                        </div>
                        <div className={'prb_item'}>
                            <div className={'prb_circle'}>Storage</div>
                            <div className={'prb_desc'}>영상전용 스토리지 100GB</div>
                        </div>
                        <div className={'prb_item'}>
                            <div className={'prb_circle'}>cooperation</div>
                            <div className={'prb_desc'}>영상 특화 협업기능</div>
                        </div>
                        <div className={'prb_item'}>
                            <div className={'prb_circle'}>Multi OS</div>
                            <div className={'prb_desc'}>Windows, macOS, iOS 및 Android에서 사용</div>
                        </div>
                    </div>
                    <div className={'section_title'}>요금제 구성 및 내용</div>
                    <div className={'pr_composition'}>
                        <div className={'prc_item'}>
                            <div className={'prc_title'}>1. 영상제작패키지 프로그램 3종</div>
                            <div className={'prc_contents'}>
                                색보정에 강력한 다빈치리졸브<br/>
                                간단한 컷편집엔 파워디렉터365<br/>
                                …
                            </div>
                        </div>
                        <div className={'prc_item'}>
                            <div className={'prc_title'}>2. 야외에서도 가능한 영상제작</div>
                            <div className={'prc_contents'}>
                                저사양 노트북으로도 4K 영상제작<br/>
                                어디서나 가능한 제작 협업하기
                                <br/>…
                            </div>
                        </div>
                        <div className={'prc_item'}>
                            <div className={'prc_title'}>3. 영상전용 스토리지</div>
                            <div className={'prc_contents'}>
                                편집용 120GB, 저장용 100GB<br/>
                                프리미엄 SSD로 보다 빠른 편집속도<br/>
                                이동 중 영상 업로드 (30Mbps, U+기준)<br/>
                                …
                            </div>
                        </div>
                        <div className={'prc_item'}>
                            <div className={'prc_title'}>4. 종량형 요금제</div>
                            <div className={'prc_contents'}>
                                기본사용 시간 100시간<br/>
                                하루 평균 5시간의 영상편집 시간 제공<br/>
                                추가 이용시엔 시간당 OO원으로 저렴하게<br/>
                                …
                            </div>
                        </div>
                    </div>
                    <div className={'section_title'}>추가 가능 서비스</div>
                    <div className={'pr_service'}>
                        <div className={'prs_item'}>
                            <img src={'/img/ic_box.svg'}/>
                            <div className={'prs_contents'}>
                                <div className={'prs_title'}>부가 Software</div>
                                <div className={'prs_desc'}>
                                    Adobe Premiere Pro<br/>
                                    Adobe After Effect<br/>
                                    Adobe Photoshop<br/>
                                    Adobe Illustrator<br/>
                                    Cinema 4D<br/>
                                    Autodesk Maya
                                </div>
                            </div>
                        </div>
                        <div className={'prs_item'}>
                            <img src={'/img/ic_storage.svg'}/>
                            <div className={'prs_contents'}>
                                <div className={'prs_title'}>추가 저장소</div>
                                <div className={'prs_desc'}>
                                    추가 100GB당 10,000원<br/>
                                    추가 100GB당 2,500원
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'section_title'}>요금제 1-2 가입/해지 유의사항</div>
                    <div className={'pr_note'}>
                        1. 동시 접속 불가<br/>
                        - U2서비스는 윈도우/맥/iOS/Android 모든 OS를 지원합니다.<br/>
                        - 하지만 U2서비스는 하나의 디바이스에서만 접속 가능하며, 동시 접속은 불가능합니다.<br/>
                        - 최대 등록 가능한 디바이스는 2대 입니다.<br/><br/>
                        2. 사용 가능 시간<br/><br/>
                        3. 요금제 약관 붙여넣기
                    </div>

                </div>}
                {currentSubPage===1&&<div className={'pr_container'}>
                    <div className={'pr_summary'}>
                        <div className={'price_title'}>5G 프리미어 플러스</div>
                        <div className={'price_desc'}>영상편집을 시작하는 분께 적합한 요금제 입니다.</div>
                        <div className={'price_bt_section'}>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'}>1년약정시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                </div>
                                <div className={'pr_value'}>월 50,000원</div>
                            </div>
                            <button className={'default_bt sns_share_bt'}>공유</button>
                            {false&&<div className={'pop_sub sns_share_pop'}>
                                <ul>
                                    <li>
                                        <div className={'sns_img'}><img src={'/img/ic_facebook.svg'}/></div>
                                        <div className={'sns_title'}>페이스북</div>
                                        </li>
                                    <li>
                                        <div className={'sns_img'}><img src={'/img/ic_kakao.svg'}/></div>
                                        <div className={'sns_title'}>카카오톡</div>
                                    </li>
                                    <li>
                                        <div className={'sns_img'}><img src={'/img/ic_url_copy.svg'}/></div>
                                        <div className={'sns_title'}>URL복사</div>
                                    </li>

                                </ul>
                            </div>}
                            <button className={'default_bt price_buy_bt'}>구매하기</button>
                        </div>
                    </div>
                    <div className={'section_title'}>시스템 요구사항</div>
                    <div className={'pr_spec_items'}>
                        <div className={'pcs_item'}>
                            <div className={'pcs_title'}>PC</div>
                            <div className={'pcs_contents'}>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>컴퓨터 및 프로세서</div>
                                    <div className={'info_contents'}>1.6Ghz 이상, 2코어</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>운영체제</div>
                                    <div className={'info_contents'}>Windows 10, Widnows 8.1<br/>
                                        <br/>
                                        *최상의 환경을 위해 위에 지정된 운영체제의 최신버전을 사용하세요.</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>메모리</div>
                                    <div className={'info_contents'}>4GB RAM<br/>
                                        2GB RAM(32비트)</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>하드디스크</div>
                                    <div className={'info_contents'}>4.0GB의 사용 가능한 디스크 공간</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>디스플레이</div>
                                    <div className={'info_contents'}>1280x768 화면 해상도</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>그래픽</div>
                                    <div className={'info_contents'}>그래픽 하드웨어 가속은 Windows 10에서 DirectX9 이상, WDDM 2.0이상이 필요합니다(Window 10 Fall Creators Update의 경우 WDDM 1.3이상 </div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>.NET버전</div>
                                    <div className={'info_contents'}>일부 기능을 사용하려면 .Net 3.5 또는 4.6 이상도 설치해야 할 수 있습니다.</div>
                                </div>
                            </div>
                        </div>
                        <div className={'pcs_item'}>
                            <div className={'pcs_title'}>Mac</div>
                            <div className={'pcs_contents'}>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>컴퓨터 및 프로세서</div>
                                    <div className={'info_contents'}>Intel 프로세서</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>운영체제</div>
                                    <div className={'info_contents'}>최신 3개 macOS 버전<br/>
                                        <br/>
                                        *최상의 환경을 위해 위에 지정된 운영체제의 최신버전을 사용하세요.</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>메모리</div>
                                    <div className={'info_contents'}>4GB RAM</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>하드디스크</div>
                                    <div className={'info_contents'}>10GB의 사용 가능한 디스크 공간 HFS+하드디스크형식(MacOS 확장 또는 APFS라고도 함)</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>디스플레이</div>
                                    <div className={'info_contents'}>1280x800 화면 해상도</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>그래픽</div>
                                    <div className={'info_contents'}>그래픽 요구사항 없음</div>
                                </div>
                            </div>
                        </div>
                        <div className={'pcs_item'}>
                            <div className={'pcs_title'}>Android</div>
                            <div className={'pcs_contents'}>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>컴퓨터 및 프로세서</div>
                                    <div className={'info_contents'}>ARM 기반 또는 Intel x86프로세서</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>운영체제</div>
                                    <div className={'info_contents'}>최근 4개의 주요 Android 버전<br/>
                                        <br/>
                                        *최상의 환경을 위해 위에 지정된 운영체제의 최신버전을 사용하세요.</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>메모리</div>
                                    <div className={'info_contents'}>1GB RAM<br/>
                                        2GB RAM(32비트)</div>
                                </div>
                            </div>
                        </div>
                        <div className={'pcs_item'}>
                            <div className={'pcs_title'}>iOS</div>
                            <div className={'pcs_contents'}>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>컴퓨터 및 프로세서</div>
                                    <div className={'info_contents'}>해당 없음</div>
                                </div>
                                <div className={'info_item'}>
                                    <div className={'info_title'}>운영체제</div>
                                    <div className={'info_contents'}>최신 2개 iOS 버전<br/>
                                        <br/>
                                        *최상의 환경을 위해 위에 지정된 운영체제의 최신버전을 사용하세요.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'info_item'}>
                        <div className={'info_title'}>브라우저</div>
                        <div className={'info_contents'}>최신 버전의 Microsoft Edge, Internet Explorer, Safari, Chrome 또는 FireFox입니다</div>
                    </div>
                    <div className={'info_item'}>
                        <div className={'info_title'}>기타</div>
                        <div className={'info_contents'}>
                            인터넷 기능을 사용하려면 인터넷 연결이 필요합니다. 시용 요금이 부과될 수 있습니다.<br/>
                            멀티 터치 기능을 사용하려면 터치가 지원되는 디바이스가 필요합니다. 그러나 키보드, 마우스 또는 기타 표준 입력 디바이스나 ㅈ저근서을 위한 입력 디바이스를 사용하여 언제든지 모든 기능을 사용할 수 있습니다.<br/>
                            제품 기능과 그래픽은 사용자의 시스템 구성에 따라 달라질 수 있습니다. 일부 기능을 사용하려면 추가 또는 고급 하드웨어나 서버 연결이 필요할 수 있습니다.
                        </div>
                    </div>
                </div>}
            </div>

        </div>
    )


}
export default Tutorial
