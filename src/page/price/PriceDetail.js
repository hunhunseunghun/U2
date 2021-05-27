import {useState,useEffect} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import useHistoryState from 'use-history-state';
import axios from "axios";
import {API_URL, HOST_URL, IMG_URL} from "../../const/URL";
import Moment from 'react-moment';
import useBus from 'use-bus'
import {createMarkup} from "../../library/InnterHtml";
import {brTagParser} from "../../library/common";
import {useDispatch, useSelector} from "react-redux";
import * as baseActions from "../../store/base";
import {setUserInfo} from "../../store/base";

function Tutorial(props){

    const [mobileYn,setMobileYn] =  useState(false);
    const [currentSubPage,setCurrentSubPage] =  useState(0);//0개요,1시스템요구사항,2자주묻는질문
    const [priceDetail,setPriceDetail] = useState({})
    const location = useLocation();
    const [sharePopYn,setSharePopYn] = useState(false);
    const [disCountPopYn,setDiscountPopYn] = useState(false);

    const [priceDiscounts,setPriceDiscounts] = useState([]);

    const [currentDiscount,setDiscount]= useState(0);
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        const params = new URLSearchParams(location.search);
        if(window.innerWidth<900){
            setMobileYn(true);
        }
        axios.get(API_URL+'/common/code/contract').then((result)=>{
            setPriceDiscounts(result.data);
            setDiscount(result.data[1]);
        })
        const p_idx = location.pathname.substr(14,18);
        axios.get(API_URL+'/common/chargemaster/'+p_idx).then((result)=>{
            console.log(result.data);
            setPriceDetail(result.data);

            //카카오공유하기
            const device=navigator.userAgent.toLowerCase();
            if(device.indexOf("iphone")!==-1||device.indexOf("android")!==-1) {
                window.Kakao.Link.createDefaultButton({
                    container: ".kakao_share", // 공유하기 기능을 부여할 DOM container
                    objectType: "feed", // 피드타입
                    content: {
                        title: result.data.chargeName,
                        description: result.data.chargeSubName,
                        imageUrl: IMG_URL+'/'+result.data.chargePhoto,
                        link: {
                            webUrl: HOST_URL+"/price/detail/"+result.data.chargeIdx, // 카카오 PC에서 확인할 때 연결될 웹 url
                            mobileWebUrl:HOST_URL+"/price/detail/"+result.data.chargeIdx, // 카카오 앱에서 확인할 때 연결될 웹 url
                        },
                    },
                });
            }
        })





    },[]);

    useBus(
        '@@popup/close',
        () =>{
           setSharePopYn(false);
            setDiscountPopYn(false);
        },
        [],
    );

    const selectDiscount = (d_item)=>{
        setDiscount(d_item);
        setDiscountPopYn(false);
    }
    const sns_share_click=(sns)=>{
        switch (sns){
            case 'fb':{
                //const linkUrl = window.location.href;
                const linkUrl = 'https://eumray.com';
                window.open( 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(linkUrl) );
                break;
            }
            case 'kakao':{
                const device=navigator.userAgent.toLowerCase();
                if(device.indexOf("iphone")===-1&&device.indexOf("android")===-1){
                    alert("카카오톡 공유는 모바일 환경에서만 지원합니다.")
                }else{

                }
                break;
            }
            case 'url':{
                const t = document.createElement("textarea");
                document.body.appendChild(t);
                t.value = window.location.href;
                t.select();
                document.execCommand('copy');
                document.body.removeChild(t);
                alert('주소가 복사되었습니다');

            }
        }
    }
    const chargeBuyClick = (idx) => {

        if(!userInfo.email) {
            alert("로그인이 필요합니다.");
            history.push('/login');
        }
        if(userInfo.charge!==idx){
            axios.post(API_URL+'/member/chargepaychange',
                {
                    ChargeIdx: idx
                },
                {
                    headers: {
                        Authorization: "Bearer " + userInfo.token
                    }
                }).then((result)=>{
                console.log(result);
                dispatch(baseActions.setUserInfo({
                    ...userInfo,
                    charge:result.data.chargeIdx,
                }));
                alert("구매가 완료되었습니다.");

            })
        }else{
            axios.post(API_URL+'/member/chargepayremove',
                {
                    ChargeIdx: idx
                },
                {
                    headers: {
                        Authorization: "Bearer " + userInfo.token
                    }
                }).then((result)=>{
                console.log(result);
                dispatch(baseActions.setUserInfo({
                    ...userInfo,
                    charge:result.data.chargeIdx,
                }));
                alert("요금제가 해지되었습니다.");

            })
        }
    }

    return(
        <div className={'contents_wrap'}>
            <div className={'filter_section'}>
                <ul className={'sub_tab_menu'}>
                    <li className={currentSubPage===0?'active':''} onClick={()=>{setCurrentSubPage(0)}}>개요</li>
                    <li className={currentSubPage===1?'active':''} onClick={()=>{setCurrentSubPage(1)}}>시스템요구사항</li>
                    <li className={currentSubPage===2?'active':''}>자주묻는질문</li>
                </ul>

            </div>
            <div className={'price_detail_section disable_item'}>
                {currentSubPage===0&&<div className={'pr_container'}>
                    <div className={'pr_summary'}>
                        <div className={'price_title'}>{priceDetail.chargeName}</div>
                        <div className={'price_desc'}>{priceDetail.chargeSubName}</div>
                        {priceDetail.chargeSubName&&<div className={'price_info_items'}>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 SW</div>
                                <div className={'pi_contents'}>{priceDetail.tools.length===0?'없음':priceDetail.tools.map((tl,tl_index)=>{
                                    if((tl_index+1)!==priceDetail.tools.length) return tl.toolName+', ';
                                    else return tl.toolName;
                                })}</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 스토리지</div>
                                <div className={'pi_contents'}>
                                    {priceDetail.storageMasters.length===0?'없음':priceDetail.storageMasters.map((st,stIndex)=><div key={stIndex}>{st.storageName+' 공간 '+st.storageSize+'GB'}</div>)}
                                </div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 사용시간</div>
                                <div className={'pi_contents'}>{priceDetail.serviceHour}시간</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 SW</div>
                                <div className={'pi_contents'}>{priceDetail.toolsAdditional.length===0?'없음':priceDetail.toolsAdditional.map((tl,tl_index)=>{
                                    if((tl_index+1)!==priceDetail.toolsAdditional.length) return tl.toolName+', ';
                                    else return tl.toolName;
                                })}</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 스토리지</div>
                                <div className={'pi_contents'}>
                                    {priceDetail.storageMastersAdditional.length===0?'없음':priceDetail.storageMastersAdditional.map((st,stIndex)=><div key={stIndex}>{st.storageName+' 공간 '+st.storageSize+'GB'}</div>)}
                                </div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 사용시간</div>
                                <div className={'pi_contents'}>시간당/{priceDetail.extraHourPrice}원</div>
                            </div>
                        </div>}
                        {priceDetail.description&&<div className={'price_detail'} dangerouslySetInnerHTML={{__html:brTagParser(priceDetail.description)}}></div>}
                        <div className={'price_bt_section'}>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'} onClick={(e)=>{e.stopPropagation();setDiscountPopYn(!disCountPopYn)}}>{currentDiscount.codeDesc}시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                    {disCountPopYn&&<div className={'pop_sub ftr_pop ftr_price_program'}>
                                        <ul>
                                            {priceDiscounts.map((d_item,d_index)=><li key={d_index} onClick={()=>{selectDiscount(d_item)}}>{d_item.codeDesc}</li>)}
                                        </ul>
                                    </div>}
                                </div>
                                <div className={'pr_value'}>월 {(priceDetail.price*(1-parseInt(currentDiscount.codeName)*0.01)).toLocaleString()}원</div>
                            </div>
                            <button className={'default_bt sns_share_bt'} onClick={(e)=>{e.stopPropagation();setSharePopYn(!sharePopYn)}}>공유</button>
                            {<div className={'pop_sub sns_share_pop '+(sharePopYn?'active':'')}>
                                <ul>
                                    <li onClick={(e)=>{sns_share_click('fb')}}>
                                        <div className={'sns_img'}><img src={'/img/ic_facebook.svg'}/></div>
                                        <div className={'sns_title'}>페이스북</div>
                                    </li>
                                    <li className={'kakao_share'} onClick={(e)=>{sns_share_click('kakao')}}>
                                        <div className={'sns_img'}><img src={'/img/ic_kakao.svg'}/></div>
                                        <div className={'sns_title'}>카카오톡</div>
                                    </li>
                                    <li onClick={(e)=>{sns_share_click('url')}}>
                                        <div className={'sns_img'}><img src={'/img/ic_url_copy.svg'}/></div>
                                        <div className={'sns_title'}>URL복사</div>
                                    </li>
                                </ul>
                            </div>}
                            <button className={'default_bt price_buy_bt '+(userInfo.charge===priceDetail.chargeIdx?'price_cancel':'')} onClick={() => {
                                chargeBuyClick(priceDetail.chargeIdx)
                            }}>{(userInfo.charge===priceDetail.chargeIdx?'해지하기':(userInfo.charge===0?'구매하기':'변경하기'))}
                            </button>
                        </div>
                    </div>
                    <div className={'section_title'}>주요혜택</div>
                    <div dangerouslySetInnerHTML={{__html:priceDetail.mainBenefitDesc}}></div>
                    <div className={'section_title'}>요금제 구성 및 내용</div>
                    <div dangerouslySetInnerHTML={{__html:priceDetail.chargeDetailDesc}}>

                    </div>
                    <div className={'section_title'}>추가 가능 서비스</div>
                    <div dangerouslySetInnerHTML={{__html:priceDetail.addServiceDesc}}>

                    </div>
                    <div className={'section_title'}>요금제 1-2 가입/해지 유의사항</div>
                    <div dangerouslySetInnerHTML={{__html:priceDetail.entryOutDesc}}></div>

                </div>}
                {currentSubPage===1&&<div className={'pr_container'}>
                    <div className={'pr_summary'}>
                        <div className={'price_title'}>{priceDetail.chargeName}</div>
                        <div className={'price_desc'}>영상편집을 시작하는 분께 적합한 요금제 입니다.</div>
                        <div className={'price_bt_section'}>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'} onClick={(e)=>{e.stopPropagation();setDiscountPopYn(!disCountPopYn)}}>{currentDiscount.codeDesc}시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                    {disCountPopYn&&<div className={'pop_sub ftr_pop ftr_price_program'}>
                                        <ul>
                                            {priceDiscounts.map((d_item,d_index)=><li key={d_index} onClick={()=>{selectDiscount(d_item)}}>{d_item.codeDesc}</li>)}
                                        </ul>
                                    </div>}
                                </div>
                                <div className={'pr_value'}>월 {(priceDetail.price*(1-parseInt(currentDiscount.codeName)*0.01)).toLocaleString()}원</div>
                            </div>
                            <button className={'default_bt sns_share_bt'}  onClick={(e)=>{e.stopPropagation();setSharePopYn(!sharePopYn)}}>공유</button>
                            {<div className={'pop_sub sns_share_pop '+(sharePopYn?'active':'')}>
                                <ul>
                                    <li onClick={(e)=>{sns_share_click('fb')}}>
                                        <div className={'sns_img'}><img src={'/img/ic_facebook.svg'}/></div>
                                        <div className={'sns_title'}>페이스북</div>
                                    </li>
                                    <li onClick={(e)=>{sns_share_click('kakao')}}>
                                        <div className={'sns_img'}><img src={'/img/ic_kakao.svg'}/></div>
                                        <div className={'sns_title kakao_share'}>카카오톡</div>
                                    </li>
                                    <li onClick={(e)=>{sns_share_click('url')}}>
                                        <div className={'sns_img'}><img src={'/img/ic_url_copy.svg'}/></div>
                                        <div className={'sns_title'}>URL복사</div>
                                    </li>
                                </ul>
                            </div>}
                            <button className={'default_bt price_buy_bt'}>구매하기</button>
                        </div>
                    </div>
                    <div className={'section_title'}>시스템 요구사항</div>
                    <div dangerouslySetInnerHTML={{__html:priceDetail.systemDesc}}></div>
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
