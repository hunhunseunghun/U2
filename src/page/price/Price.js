import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useHistoryState from 'use-history-state';
import axios from "axios";
import {API_URL,IMG_URL} from "../../const/URL";
import Moment from 'react-moment';
import useBus from 'use-bus'
function Tutorial(props){

    const [mobileYn,setMobileYn] =  useState(false);
    const [mobileFilterViewYn,setMobileFilterViewYn] =  useState(false);


    const [cateProgramPopYn,setCateProgramPopYn] =  useState(false);
    const [cateOrderPopYn,setCateOrderPopYn] =  useState(false);

    const [currentCate,setCurrentCate] = useHistoryState(1,'cate');
    const [currentTool,setCurrentTool] = useHistoryState([],'tool');
    const [currentStorage,setCurrentStorage] = useHistoryState([],'tool');
    const [currentUseTime,setCurrentUseTime] = useHistoryState([],'tool');
    const [currentPrice,setCurrentPrice] = useHistoryState([],'tool');
    const [currentSort,setCurrentSort] = useHistoryState(3,'sort');


    useEffect(()=>{
        if(window.innerWidth<900){
            setMobileYn(true);
        }


    },[]);

    useBus(
        '@@popup/close',
        () =>{

        },
        [],
    );

    return(
        <div className={'contents_wrap'}>
            {false&&<div className={'popup_section'}>
             <div className={'popup pop_price_compare'}>
                    <div className={'pop_title'}>요금제 비교하기</div>
                    <div className={'pop_x_bt'}><img src={'/img/ic_x_bt.svg'}/></div>
                    <div className={'pop_contents'}>
                        <div className={'pc_items'}>
                            <div className={'price_item'}>
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
                                    <button className={'default_bt price_buy_bt'}>구매하기</button>
                                </div>

                            </div>
                            <div className={'price_item'}>
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
                                    <button className={'default_bt price_buy_bt'}>구매하기</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {false&&<div className={'popup_section no_back'}>
                <div className={'popup pop_price_compare_error'}>
                    <div className={'pop_title'}>요금제 비교하기</div>
                    <div className={'pop_x_bt'}><img src={'/img/ic_x_bt.svg'}/></div>
                    <div className={'pop_contents'}>요금제는 최대 두개까지만 선택가능합니다.</div>
                    <div className={'pop_bt_section'}>
                        <button className={'default_bt pop_check_bt'}>확인</button>
                    </div>
                </div>
            </div>}
            <div className={'filter_section'}>
               <div className={'ft_deco'}>
                   <div className={'ft_title mobile_view'} onClick={()=>{setMobileFilterViewYn(!mobileFilterViewYn)}}>필터 <img src={'/img/ic_arrow_down.svg'}/></div>
               </div>
                {!mobileYn&&<div className={'fr_left_section'}>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e)=>{e.stopPropagation();}}>요금제구성 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {false&&<div className={'pop_sub ftr_pop ftr_price_cate'}>
                            <ul>
                               <li>정기요금제</li>
                               <li>부가서비스</li>
                                </ul>
                        </div>}
                    </div>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e)=>{e.stopPropagation();}}>영상편집SW <img src={'/img/ic_arrow_down.svg'}/></div>
                        {false&&<div className={'pop_sub ftr_pop ftr_price_program'}>
                            <ul>
                                <li>Photoshop</li>
                                <li>illustrator</li>
                                <li>Premier</li>
                            </ul>
                        </div>}
                    </div>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e)=>{e.stopPropagation();}}>스토리지 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {false&&<div className={'pop_sub ftr_pop ftr_price_storage'}>
                            <ul>
                                <li>100Gb이하</li>
                                <li>100Gb~500Gb이하</li>
                                <li>1000Gb이상</li>
                            </ul>
                        </div>}
                    </div>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e)=>{e.stopPropagation();}}>최대사용시간 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {false&&<div className={'pop_sub ftr_pop ftr_price_use_time'}>
                            <div className={'ftr_title'}>1시간~200시간</div>
                            <div className={'ftr_contents'}>
                                <input type={'range'} min={0} max={200}/>
                            </div>

                        </div>}
                    </div>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e)=>{e.stopPropagation();}}>요금제가격 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {false&&<div className={'pop_sub ftr_pop ftr_price_price'}>
                            <ul>
                                <li>~월1만원 이하</li>
                                <li>월2만원~월5만원 이하</li>
                                <li>월5만원~월10만원 이하</li>
                                <li>월10만원 이상~</li>
                            </ul>
                        </div>}
                    </div>
                </div>}
                <div className={'ft_right_section'}>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e)=>{e.stopPropagation();}}>{currentSort===3?'최신순':'오래된순'} <img src={'/img/ic_arrow_down.svg'}/></div>
                        {false&&<div className={'pop_sub ftr_pop '}>
                            <ul>
                                <li>추천순</li>
                                <li>최신순</li>
                                <li>오래된순</li>
                            </ul>
                        </div>}
                    </div>
                </div>

            </div>
            <div className={'price_section'}>
                <div className={'price_items'}>
                    <div className={'section_title'}>정기요금제</div>
                    <div className={'price_item'}>
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
                            <button className={'default_bt price_sub_bt'}>비교하기</button>
                            <button className={'default_bt price_sub_bt'}>공유하기</button>
                            <Link to={'/price/detail/1'}><button className={'default_bt price_sub_bt'}>자세히보기</button></Link>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'}>1년약정시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                </div>
                                <div className={'pr_value'}>월 50,000원</div>
                            </div>
                            <button className={'default_bt price_buy_bt'}>구매하기</button>
                        </div>

                    </div>
                    <div className={'price_item'}>
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
                            <button className={'default_bt price_sub_bt'}>비교하기</button>
                            <button className={'default_bt price_sub_bt'}>공유하기</button>
                            <button className={'default_bt price_sub_bt'}>자세히보기</button>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'}>1년약정시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                </div>
                                <div className={'pr_value'}>월 50,000원</div>
                            </div>
                            <button className={'default_bt price_buy_bt'}>구매하기</button>
                        </div>

                    </div>
                    <div className={'price_bt_section'}>
                        <button className={'default_bt more_item_bt'}>정기요금제 더보기</button>
                    </div>
                </div>

                <div className={'price_items'}>
                    <div className={'section_title'}>부가서비스</div>
                    <div className={'price_item service_item'}>
                        <div className={'price_title'}>Cinema 4D <img src={'/img/cinema.png'}/></div>
                        <div className={'price_desc'}>기본 요금제에 추가하여 Cinema 4D를 즐겨보세요. </div>
                        <div className={'price_detail'}>
                            원숙한 전문가들은 물론 초보자들도 직관적이면서도 이해하기 쉬운 명령어와 인터페이스 덕분에 Cinema 4D의 광범위한 툴과 기능을 활용하여 깜짝 놀랄 3D 영상을 빠르게 제작할 수 있습니다.
                        </div>
                        <div className={'price_bt_section'}>
                            <button className={'default_bt price_sub_bt'}>공유하기</button>
                            <button className={'default_bt price_sub_bt'}>자세히보기</button>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'}>1년약정시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                </div>
                                <div className={'pr_value'}>월 50,000원</div>
                            </div>
                            <button className={'default_bt price_buy_bt'}>구매하기</button>
                        </div>

                    </div>
                    <div className={'price_bt_section'}>
                        <button className={'default_bt more_item_bt'}>부가서비스 더보기</button>
                    </div>
                </div>
                <div className={'price_compare_section'}>
                    <div className={'pc_container'}>
                        <div className={'section_title'}>요금제 비교하기(2)</div>
                        <div className={'pc_bt_section'}>
                            <div className={'pc_items'}>
                                <div className={'pc_item'}>5G 시그니처</div>
                                <div className={'pc_item'}>5G 플러스</div>
                            </div>
                            <div className={'pc_right_bt_section'}>
                                <button className={'default_bt pc_reset_bt'}>선택 리셋하기</button>
                                <button className={'default_bt price_compare_bt'}>비교하기</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )


}
export default Tutorial
