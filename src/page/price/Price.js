import {useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import useHistoryState from 'use-history-state';
import axios from "axios";
import {HOST_URL,API_URL,IMG_URL} from "../../const/URL";
import Moment from 'react-moment';
import useBus from 'use-bus'
import {brTagParser} from '../../library/common';
import { useSelector ,useDispatch} from 'react-redux';
import * as baseActions from "../../store/base";
import {setUserInfo} from "../../store/base";

function Price(props) {

    const [mobileYn, setMobileYn] = useState(false);
    const [mobileFilterViewYn, setMobileFilterViewYn] = useState(false);

    const [cateTypePopYn, setCateTypePopYn] = useState(false);
    const [cateProgramPopYn, setCateProgramPopYn] = useState(false);
    const [cateStoragePopYn, setCateStoragePopYn] = useState(false);
    const [cateUseTimePopYn, setCateUseTimePopYn] = useState(false);
    const [catePricePopYn, setCatePricePopYn] = useState(false);
    const [cateSortPopYn, setCateSortPopYn] = useState(false);
    const [contractPopYn, setContractPopYn] = useState(false);
    const [comparePopYn, setComparePopYn] = useState(false);
    const [compareAlertPopYn, setCompareAlertPopYn] = useState(false);

    const [priceCompo1Count, setPriceCompo1Count] = useState(2); //정기요금제 표시할 갯수
    const [priceCompo2Count, setPriceCompo2Count] = useState(1); //부가서비스 표시할 갯수
    const [toolList, setToolList] = useState([]);
    const [compareItems, setCompareItems] = useState([]);
    const [priceDiscounts, setPriceDiscounts] = useState([]);
    const [cateStorages, setCateStorages] = useState([]);

    const [cateOrderPopYn, setCateOrderPopYn] = useState(false);

    const [currentType, setCurrentType] = useHistoryState(0, 'type');  //0전체보기, 1정기요금제, 2부가서비스
    const [currentTool, setCurrentTool] = useHistoryState([], 'tool');
    const [currentStorage, setCurrentStorage] = useHistoryState([], 'storage');
    const [currentUseTime, setCurrentUseTime] = useHistoryState(0, 'useTime');
    const [currentPrice, setCurrentPrice] = useHistoryState(0, 'price');
    const [currentSort, setCurrentSort] = useHistoryState(1, 'sort');
    const [priceList, setPriceList] = useState([]);
    const [priceList1, setPriceList1] = useState([]); //정기요금제
    const [priceList2, setPriceList2] = useState([]); //부가서비스

    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if (window.innerWidth < 900) {
            setMobileYn(true);
        }

        console.log(userInfo);

        axios.get(API_URL + '/common/code/contract').then((result) => {
            setPriceDiscounts(result.data);
        })
        axios.get(API_URL + '/common/storage/all').then((result) => {
            setCateStorages(result.data);
        })
        axios.get(API_URL + '/common/chargemaster/all' + '?newerFirst=' + currentSort).then((result) => {
            console.log(result.data);
            setPriceList(result.data.map((item) => {
                return {
                    ...item,
                    sharePopYn: false,
                    disCountPopYn: false,
                    disCount: 10,
                    disCountName: '1년 약정',
                }
            }));
        })
        axios.get(API_URL + '/Lecture/toolmaster/list').then((result) => {
            setToolList(result.data);
        })


    }, []);

    useBus(
        '@@popup/close',
        () => {
            allCatePopupClose();
            priceListPopClose();
        },
        [],
    );

    useEffect(() => {
        setPriceList1(priceList.filter((p_item) => {
            let toolFilterYn = false;
            let storageFilterYn = false;
            let useTimeFilterYn = false;
            let priceFilterYn = false;
            if (p_item.goodsTypeCode !== 1) return false;
            if (currentTool.length > 0) {
                if (p_item.tools.length !== 0) {
                    p_item.tools.map((pt) => {
                        if (currentTool.indexOf(pt.toolIdx) >= 0) toolFilterYn = true;
                    });
                }

            } else {
                toolFilterYn = true;
            }
            if (currentStorage.length > 0) {
                if (p_item.storageMasters.length !== 0) {
                    p_item.storageMasters.map((st) => {
                        if (currentStorage.indexOf(st.storageIdx) >= 0) storageFilterYn = true;
                    });
                }
            } else {
                storageFilterYn = true;
            }
            if (currentUseTime) {
                if (currentUseTime === 60) {
                    if (p_item.serviceHour >= currentUseTime) useTimeFilterYn = true;
                } else {
                    if (p_item.serviceHour <= currentUseTime) useTimeFilterYn = true;
                }
            } else {
                useTimeFilterYn = true;
            }
            if (currentPrice) {
                if (currentPrice === 10000) {
                    if (p_item.price < currentPrice) priceFilterYn = true;
                } else if (currentPrice === 50000) {

                    if (p_item.price >= 10000 && p_item.price <= currentPrice) {
                        console.log(p_item.price);
                        priceFilterYn = true;
                    }
                } else if (currentPrice === 100000) {
                    if (p_item.price >= 50000 && p_item.price <= currentPrice) priceFilterYn = true;
                } else if (currentPrice === 100001) {
                    if (p_item.price >= currentPrice) priceFilterYn = true;
                }
            } else {
                priceFilterYn = true;
            }


            return toolFilterYn && storageFilterYn && useTimeFilterYn && priceFilterYn
        }));

        setPriceList2(priceList.filter((p_item) => {
            let toolFilterYn = false;
            if (p_item.goodsTypeCode !== 0) return false;

            if (currentTool.length > 0) {
                if (p_item.tools.length !== 0) {
                    p_item.tools.map((pt) => {
                        if (currentTool.indexOf(pt.toolIdx) >= 0) toolFilterYn = true;
                    });
                }

            } else {
                toolFilterYn = true;

            }
            return toolFilterYn;
        }));
    }, [priceList, currentTool, currentPrice, currentStorage, currentUseTime]);

    useEffect(() => {
        const resizeEvent = () => {
            if (window.innerWidth < 900 && !mobileYn) {
                setMobileYn(true);
                //window.location.reload();
            } else if (window.innerWidth >= 900 && mobileYn) {
                setMobileYn(false);
                //window.location.reload();
            }
        }
        window.addEventListener('resize', resizeEvent)
        return () => {
            window.removeEventListener('resize', resizeEvent);
        }
    }, [mobileYn])


    const allCatePopupClose = () => {
        setCateTypePopYn(false);
        setCateProgramPopYn(false);
        setCateStoragePopYn(false);
        setCateUseTimePopYn(false);
        setCatePricePopYn(false);
        setCateSortPopYn(false);

    }

    const allPopupClose = () => {

        setComparePopYn(false);
        setCompareAlertPopYn(false);
    }
    const priceListPopClose = () => {
        setPriceList((currentList) => currentList.map((item) => {
            return {
                ...item,
                sharePopYn: false,
                disCountPopYn: false
            }
        }));
    }

    const sortChange = (sort) => {

        setCurrentSort(sort);
        axios.get(API_URL + '/common/chargemaster/all' + '?newerFirst=' + sort).then((result) => {

            setPriceList(result.data.map((item) => {
                return {
                    ...item,
                    disCountPopYn: false,
                    disCount: 10,
                    disCountName: '1년 약정',
                }
            }));
        })
    }
    const disCountPopOpen = (pr) => {
        setPriceList(priceList.map((item) => {
            if (item.chargeIdx === pr.chargeIdx) {
                return {
                    ...item,
                    disCountPopYn: !item.disCountPopYn
                }
            } else {
                return item;
            }
        }));
    }
    const selectDiscount = (pr, d_item) => {
        setPriceList(priceList.map((item) => {
            if (item.chargeIdx === pr.chargeIdx) {
                return {
                    ...item,
                    disCountPopYn: false,
                    disCount: parseInt(d_item.codeName),
                    disCountName: d_item.codeDesc,
                }
            } else {
                return item;
            }

        }));
    }

    const comparePriceView = () => {
        if (compareItems.length >= 2) {
            setComparePopYn(true);
        }

    }

    const compareItemClick = (Item) => {
        if (compareItems.indexOf(Item.chargeIdx) >= 0) {
            //console.log(compareItems.filter((ci)=>ci!==Item.chargeIdx));
            setCompareItems([...compareItems.filter((ci) => ci !== Item.chargeIdx)]);
        } else {
            if (compareItems.length >= 2) {
                setCompareAlertPopYn(true);
            } else {
                setCompareItems([...compareItems, Item.chargeIdx]);
            }

            //console.log([...compareItems,Item.chargeIdx]);
        }

    }
    const sharePopView = (pr) => {
        //카카오공유하기
        const device = navigator.userAgent.toLowerCase();
        if (device.indexOf("iphone") !== -1 || device.indexOf("android") !== -1) {
            window.Kakao.Link.createDefaultButton({
                container: ".kakao_share", // 공유하기 기능을 부여할 DOM container
                objectType: "feed", // 피드타입
                content: {
                    title: pr.chargeName,
                    description: pr.chargeSubName,
                    imageUrl: IMG_URL+'/'+pr.chargePhoto,
                    link: {
                        webUrl: HOST_URL+"/price/detail/"+pr.chargeIdx, // 카카오 PC에서 확인할 때 연결될 웹 url
                        mobileWebUrl:HOST_URL+"/price/detail/"+pr.chargeIdx, // 카카오 앱에서 확인할 때 연결될 웹 url
                    },
                },
            });
        }
        setPriceList(priceList.map((item) => {
            if (item.chargeIdx === pr.chargeIdx) {
                return {
                    ...item,
                    sharePopYn: !item.sharePopYn
                }
            } else {
                return item;
            }
        }));
    }
    const toolChange = (idx) => {
        let tempToolList = [];
        if (currentTool.indexOf(idx) >= 0) {
            tempToolList = currentTool.filter(tIdx => tIdx !== idx)

        } else {
            tempToolList = [...currentTool, idx];
        }
        setCurrentTool(tempToolList);
        let toolStr = '';
        tempToolList.map((tl, index) => {
            return index !== (tempToolList.length - 1) ? toolStr += (tl + '-') : toolStr += tl;
        });

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

        // axios({
        //     method: 'post',
        //     url:API_URL+'/member/chargepay',
        //     data:{
        //         ChargeIdx:idx
        //     },
        //     headers: { Authorization: "Bearer "+userInfo.token}
        // }).then((result)=>{
        //     alert("구매가 완료되었습니다.");
        // })
    }

    const storageChange = (idx) => {
        let storageList = [];
        if (currentStorage.indexOf(idx) >= 0) {
            storageList = currentStorage.filter(sIdx => sIdx !== idx)
        } else {
            storageList = [...currentStorage, idx];
        }
        setCurrentStorage(storageList);

    }
    const sns_share_click = (sns, idx) => {
        switch (sns) {
            case 'fb': {
                //const linkUrl = window.location.href;
                const linkUrl = HOST_URL+"/price/detail/"+idx;
                window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(linkUrl));
                break;
            }
            case 'kakao': {
                const device = navigator.userAgent.toLowerCase();
                if (device.indexOf("iphone") === -1 && device.indexOf("android") === -1) {
                    alert("카카오톡 공유는 모바일 환경에서만 지원합니다.")
                }
                break;
            }
            case 'url': {
                const t = document.createElement("textarea");
                document.body.appendChild(t);
                t.value = HOST_URL + '/price/detail/' + idx;
                t.select();
                document.execCommand('copy');
                document.body.removeChild(t);
                alert('주소가 복사되었습니다');

            }
        }
    }

    return (
        <div className={'contents_wrap'}>
            {comparePopYn && <div className={'popup_section'} onClick={() => {
                allPopupClose()
            }}>
                {comparePopYn && <div className={'popup pop_price_compare'} onClick={(e) => {
                    e.stopPropagation();
                    priceListPopClose();
                }}>
                    <div className={'pop_title'}>요금제 비교하기</div>
                    <div className={'pop_x_bt'} onClick={() => {
                        allPopupClose()
                    }}><img src={'/img/ic_x_bt.svg'}/></div>
                    <div className={'pop_contents'}>
                        <div className={'pc_items'}>
                            {priceList.filter((pi) => (compareItems.indexOf(pi.chargeIdx) >= 0)).map((pcItem, pcIndex) =>
                                <div className={'price_item disable_item'}>
                                    <div className={'price_title'}>{pcItem.chargeName}</div>
                                    <div className={'price_desc'}>{pcItem.chargeSubName}</div>
                                    <div className={'price_info_items'}>
                                        <div className={'pi_item'}>
                                            <div className={'pi_title'}>기본 SW</div>
                                            <div
                                                className={'pi_contents'}>{pcItem.tools.length === 0 ? '없음' : pcItem.tools.map((tl, tl_index) => {
                                                if ((tl_index + 1) !== pcItem.tools.length) return tl.toolName + ', ';
                                                else return tl.toolName;
                                            })}</div>
                                        </div>
                                        <div className={'pi_item'}>
                                            <div className={'pi_title'}>기본 스토리지</div>
                                            <div className={'pi_contents'}>
                                                {pcItem.storageMasters.length === 0 ? '없음' : pcItem.storageMasters.map((st, stIndex) =>
                                                    <div
                                                        key={stIndex}>{st.storageName + ' 공간 ' + st.storageSize + 'GB'}</div>)}
                                            </div>
                                        </div>
                                        <div className={'pi_item'}>
                                            <div className={'pi_title'}>기본 사용시간</div>
                                            <div className={'pi_contents'}>{pcItem.serviceHour}시간</div>
                                        </div>
                                        <div className={'pi_item'}>
                                            <div className={'pi_title'}>추가 SW</div>
                                            <div
                                                className={'pi_contents'}>{pcItem.toolsAdditional.length === 0 ? '없음' : pcItem.toolsAdditional.map((tl, tl_index) => {
                                                if ((tl_index + 1) !== pcItem.toolsAdditional.length) return tl.toolName + ', ';
                                                else return tl.toolName;
                                            })}</div>
                                        </div>
                                        <div className={'pi_item'}>
                                            <div className={'pi_title'}>추가 스토리지</div>
                                            <div className={'pi_contents'}>
                                                {pcItem.storageMastersAdditional.length === 0 ? '없음' : pcItem.storageMastersAdditional.map((st, stIndex) =>
                                                    <div
                                                        key={stIndex}>{st.storageName + ' 공간 ' + st.storageSize + 'GB'}</div>)}
                                            </div>
                                        </div>
                                        <div className={'pi_item'}>
                                            <div className={'pi_title'}>추가 사용시간</div>
                                            <div className={'pi_contents'}>시간당/{pcItem.extraHourPrice}원</div>
                                        </div>
                                    </div>
                                    <div className={'price_detail'}
                                         dangerouslySetInnerHTML={{__html: brTagParser(pcItem.description)}}></div>
                                    <div className={'price_bt_section'}>
                                        <div className={'price_info_section'}>
                                            <div className={'pr_select_item'}>
                                                <div className={'pr_selected'} onClick={(e) => {
                                                    e.stopPropagation();
                                                    disCountPopOpen(pcItem);
                                                }}>{pcItem.disCountName}시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                                {pcItem.disCountPopYn &&
                                                <div className={'pop_sub ftr_pop ftr_price_discounts'}>
                                                    <ul>
                                                        {priceDiscounts.map((d_item, d_index) => <li key={d_index}
                                                                                                     onClick={(e) => {
                                                                                                         e.stopPropagation();
                                                                                                         selectDiscount(pcItem, d_item)
                                                                                                     }}>{d_item.codeDesc}</li>)}
                                                    </ul>
                                                </div>}
                                            </div>
                                            <div
                                                className={'pr_value'}>월 {(pcItem.price * (1 - pcItem.disCount * 0.01)).toLocaleString()}원
                                            </div>
                                        </div>
                                        <button className={'default_bt price_buy_bt '+(userInfo.charge===pcItem.chargeIdx?'price_cancel':'')} onClick={() => {
                                            chargeBuyClick(pcItem.chargeIdx)
                                        }}>{(userInfo.charge===pcItem.chargeIdx?'해지하기':(userInfo.charge===0?'구매하기':'변경하기'))}
                                        </button>
                                    </div>

                                </div>)}

                        </div>
                    </div>
                </div>}
            </div>}
            {compareAlertPopYn && <div className={'popup_section no_back'} onClick={() => {
                allPopupClose()
            }}>
                {compareAlertPopYn && <div className={'popup pop_price_compare_error'}>
                    <div className={'pop_title'}>요금제 비교하기</div>
                    <div className={'pop_x_bt'}><img src={'/img/ic_x_bt.svg'}/></div>
                    <div className={'pop_contents'}>요금제는 최대 두개까지만 선택가능합니다.</div>
                    <div className={'pop_bt_section'}>
                        <button className={'default_bt pop_check_bt'} onClick={() => {
                            allPopupClose()
                        }}>확인
                        </button>
                    </div>
                </div>}
            </div>}
            <div className={'filter_section'}>
                <div className={'ft_deco'}>
                    <div className={'ft_title mobile_view ' + (mobileFilterViewYn ? 'active' : '')} onClick={() => {
                        setMobileFilterViewYn(!mobileFilterViewYn)
                    }}>필터 <img src={'/img/ic_arrow_down.svg'}/></div>
                </div>
                {mobileFilterViewYn && <div className={'sub_filter_section ft_price'} onClick={() => {
                    setMobileFilterViewYn(false)
                }}>
                    <div className={'ft_title'}>요금제구성</div>
                    <ul>
                        <li className={currentType === 1 ? 'active' : ''} onClick={(e) => {
                            setCurrentType(currentType !== 1 ? 1 : 0)
                        }}>정기요금제
                        </li>
                        <li className={currentType === 2 ? 'active' : ''} onClick={(e) => {
                            setCurrentType(currentType !== 2 ? 2 : 0)
                        }}>부가서비스
                        </li>
                    </ul>
                    <div className={'ft_title'}>영상편집SW</div>
                    <ul>
                        {toolList.map((toolItem, tIndex) => <li
                            className={currentTool.indexOf(toolItem.toolIdx) >= 0 ? 'active' : ''} key={tIndex}
                            onClick={() => {
                                toolChange(toolItem.toolIdx)
                            }}>{toolItem.toolName}</li>)}
                    </ul>
                    <div className={'ft_title'}>스토리지</div>

                    <ul>
                        {cateStorages.map((st, stIndex) => <li
                            className={currentStorage.indexOf(st.storageIdx) >= 0 ? 'active' : ''} key={stIndex}
                            onClick={() => {
                                storageChange(st.storageIdx)
                            }}>{st.storageName + ' 공간 ' + st.storageSize + 'GB'}</li>)}
                    </ul>

                    <div className={'ft_title'}>최대사용시간</div>

                    <ul>
                        {cateStorages.map((st, stIndex) => <li
                            className={currentStorage.indexOf(st.storageIdx) >= 0 ? 'active' : ''} key={stIndex}
                            onClick={() => {
                                storageChange(st.storageIdx)
                            }}>{st.storageName + ' 공간 ' + st.storageSize + 'GB'}</li>)}
                    </ul>

                    <div className={'ft_title'}>요금제가격</div>

                    <ul>
                        <li className={currentPrice === 10000 ? 'active' : ''} onClick={(e) => {
                            setCurrentPrice(currentPrice !== 10000 ? 10000 : 0)
                        }}>~10,000원 미만
                        </li>
                        <li className={currentPrice === 50000 ? 'active' : ''} onClick={(e) => {
                            setCurrentPrice(currentPrice !== 50000 ? 50000 : 0)
                        }}>10,000~50,000원
                        </li>
                        <li className={currentPrice === 100000 ? 'active' : ''} onClick={(e) => {
                            setCurrentPrice(currentPrice !== 100000 ? 100000 : 0)
                        }}>50,000원~100,000원
                        </li>
                        <li className={currentPrice === 100001 ? 'active' : ''} onClick={(e) => {
                            setCurrentPrice(currentPrice !== 100001 ? 100001 : 0)
                        }}>10만원 초과
                        </li>
                    </ul>

                </div>}
                {!mobileYn && <div className={'fr_left_section'}>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e) => {
                            e.stopPropagation();
                            allCatePopupClose();
                            setCateTypePopYn(!cateTypePopYn)
                        }}>요금제구성 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateTypePopYn && <div className={'pop_sub ftr_pop ftr_price_cate'}>
                            <ul>
                                <li onClick={(e) => {
                                    setCurrentType(currentType !== 1 ? 1 : 0)
                                }}>정기요금제{currentType === 1 && <span className={'active_deco'}></span>}</li>
                                <li onClick={(e) => {
                                    setCurrentType(currentType !== 2 ? 2 : 0)
                                }}>부가서비스{currentType === 2 && <span className={'active_deco'}></span>}</li>
                            </ul>
                        </div>}
                    </div>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e) => {
                            e.stopPropagation();
                            allCatePopupClose();
                            setCateProgramPopYn(!cateProgramPopYn)
                        }}>영상편집SW <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateProgramPopYn && <div className={'pop_sub ftr_pop ftr_price_program'}>
                            <ul>
                                {toolList.map((toolItem, tIndex) => <li key={tIndex} onClick={() => {
                                    toolChange(toolItem.toolIdx)
                                }}>{toolItem.toolName}{currentTool.indexOf(toolItem.toolIdx) >= 0 &&
                                <span className={'active_deco'}></span>}</li>)}
                            </ul>
                        </div>}
                    </div>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e) => {
                            e.stopPropagation();
                            allCatePopupClose();
                            setCateStoragePopYn(!cateStoragePopYn)
                        }}>스토리지 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateStoragePopYn && <div className={'pop_sub ftr_pop ftr_price_storage'}>
                            <ul>
                                {cateStorages.map((st, stIndex) => <li key={stIndex} onClick={() => {
                                    storageChange(st.storageIdx)
                                }}>{st.storageName + ' 공간 ' + st.storageSize + 'GB'}{currentStorage.indexOf(st.storageIdx) >= 0 &&
                                <span className={'active_deco'}></span>}</li>)}
                            </ul>
                        </div>}
                    </div>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e) => {
                            e.stopPropagation();
                            allCatePopupClose();
                            setCateUseTimePopYn(!cateUseTimePopYn)
                        }}>최대사용시간 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateUseTimePopYn && <div className={'pop_sub ftr_pop ftr_price_use_time'}>
                            <ul>
                                <li onClick={(e) => {
                                    setCurrentUseTime(currentUseTime !== 1 ? 1 : 0)
                                }}>1시간 이하{currentUseTime === 1 && <span className={'active_deco'}></span>}</li>
                                <li onClick={(e) => {
                                    setCurrentUseTime(currentUseTime !== 35 ? 35 : 0)
                                }}>35시간 이하{currentUseTime === 35 && <span className={'active_deco'}></span>}</li>
                                <li onClick={(e) => {
                                    setCurrentUseTime(currentUseTime !== 60 ? 60 : 0)
                                }}>60시간 이상{currentUseTime === 60 && <span className={'active_deco'}></span>}</li>
                            </ul>

                        </div>}
                    </div>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e) => {
                            e.stopPropagation();
                            allCatePopupClose();
                            setCatePricePopYn(!catePricePopYn)
                        }}>요금제가격 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {catePricePopYn && <div className={'pop_sub ftr_pop ftr_price_price'}>
                            <ul>
                                <li onClick={(e) => {
                                    setCurrentPrice(currentPrice !== 10000 ? 10000 : 0)
                                }}>~10,000원 미만{currentPrice === 10000 && <span className={'active_deco'}></span>}</li>
                                <li onClick={(e) => {
                                    setCurrentPrice(currentPrice !== 50000 ? 50000 : 0)
                                }}>10,000~50,000원{currentPrice === 50000 &&
                                <span className={'active_deco'}></span>}</li>
                                <li onClick={(e) => {
                                    setCurrentPrice(currentPrice !== 100000 ? 100000 : 0)
                                }}>50,000원~100,000원{currentPrice === 100000 &&
                                <span className={'active_deco'}></span>}</li>
                                <li onClick={(e) => {
                                    setCurrentPrice(currentPrice !== 100001 ? 100001 : 0)
                                }}>10만원 초과{currentPrice === 100001 && <span className={'active_deco'}></span>}</li>
                            </ul>
                        </div>}
                    </div>
                </div>}
                <div className={'ft_right_section'}>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected ' + (cateSortPopYn ? 'active' : '')} onClick={(e) => {
                            e.stopPropagation();
                            setCateSortPopYn(!cateSortPopYn)
                        }}>{currentSort === 1 ? '최신순' : '오래된순'} <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateSortPopYn && <div className={'pop_sub ftr_pop '}>
                            <ul>
                                <li onClick={(e) => {
                                    sortChange(1)
                                }}>최신순
                                </li>
                                <li onClick={(e) => {
                                    sortChange(0)
                                }}>오래된순
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>

            </div>
            <div className={'price_section'}>
                {currentType !== 2 && <div className={'price_items'}>
                    <div className={'section_title'}>정기요금제</div>
                    {priceList1.filter((p_item, p_index) => p_index < priceCompo1Count).map((pr, p_index) => <div
                        className={'price_item disable_item ' + (compareItems.indexOf(pr.chargeIdx) >= 0 ? 'compare_selected' : '')}
                        key={p_index}>
                        <div className={'price_title'}>{pr.chargeName}</div>
                        <div className={'price_desc'}>{pr.chargeSubName}</div>
                        <div className={'price_info_items'}>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 SW</div>
                                <div
                                    className={'pi_contents'}>{pr.tools.length === 0 ? '없음' : pr.tools.map((tl, tl_index) => {
                                    if ((tl_index + 1) !== pr.tools.length) return tl.toolName + ', ';
                                    else return tl.toolName;
                                })}</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 스토리지</div>
                                <div className={'pi_contents'}>
                                    {pr.storageMasters.length === 0 ? '없음' : pr.storageMasters.map((st, stIndex) => <div
                                        key={stIndex}>{st.storageName + ' 공간 ' + st.storageSize + 'GB'}</div>)}
                                </div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>기본 사용시간</div>
                                <div className={'pi_contents'}>{pr.serviceHour}시간</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 SW</div>
                                <div
                                    className={'pi_contents'}>{pr.toolsAdditional.length === 0 ? '없음' : pr.toolsAdditional.map((tl, tl_index) => {
                                    if ((tl_index + 1) !== pr.toolsAdditional.length) return tl.toolName + ', ';
                                    else return tl.toolName;
                                })}</div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 스토리지</div>
                                <div className={'pi_contents'}>
                                    {pr.storageMastersAdditional.length === 0 ? '없음' : pr.storageMastersAdditional.map((st, stIndex) =>
                                        <div key={stIndex}>{st.storageName + ' 공간 ' + st.storageSize + 'GB'}</div>)}
                                </div>
                            </div>
                            <div className={'pi_item'}>
                                <div className={'pi_title'}>추가 사용시간</div>
                                <div className={'pi_contents'}>시간당/{pr.extraHourPrice}원</div>
                            </div>
                        </div>
                        <div className={'price_detail'} dangerouslySetInnerHTML={{__html: brTagParser(pr.description)}}>

                        </div>
                        <div className={'price_bt_section'}>
                            <button className={'default_bt price_sub_bt compare_bt'} onClick={() => {
                                compareItemClick((pr))
                            }}>비교하기
                            </button>
                            <div className={'share_bt_section'}>
                                <button className={'default_bt price_sub_bt'} onClick={(e) => {
                                    e.stopPropagation();
                                    sharePopView(pr)
                                }}>공유하기
                                </button>
                                {<div className={'pop_sub sns_share_pop ' +(pr.sharePopYn? 'active' : '')}>
                                    <ul>
                                        <li onClick={(e) => {
                                            sns_share_click('fb')
                                        }}>
                                            <div className={'sns_img'}><img src={'/img/ic_facebook.svg'}/></div>
                                            <div className={'sns_title'}>페이스북</div>
                                        </li>
                                        <li className={'kakao_share'} onClick={(e) => {
                                            sns_share_click('kakao')
                                        }}>
                                            <div className={'sns_img'}><img src={'/img/ic_kakao.svg'}/></div>
                                            <div className={'sns_title'}>카카오톡</div>
                                        </li>
                                        <li onClick={(e) => {
                                            sns_share_click('url', pr.chargeIdx)
                                        }}>
                                            <div className={'sns_img'}><img src={'/img/ic_url_copy.svg'}/></div>
                                            <div className={'sns_title'}>URL복사</div>
                                        </li>
                                    </ul>
                                </div>}
                            </div>
                            <Link to={'/price/detail/' + pr.chargeIdx}>
                                <button className={'default_bt price_sub_bt'}>자세히보기</button>
                            </Link>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'} onClick={(e) => {
                                        e.stopPropagation();
                                        disCountPopOpen(pr);
                                    }}>{pr.disCountName}시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                    {pr.disCountPopYn && <div className={'pop_sub ftr_pop ftr_price_discounts'}>
                                        <ul>
                                            {priceDiscounts.map((d_item, d_index) => <li key={d_index} onClick={() => {
                                                selectDiscount(pr, d_item)
                                            }}>{d_item.codeDesc}</li>)}
                                        </ul>
                                    </div>}
                                </div>
                                <div
                                    className={'pr_value'}>월 {(pr.price * (1 - pr.disCount * 0.01)).toLocaleString()}원
                                </div>
                            </div>
                            <button className={'default_bt price_buy_bt '+(userInfo.charge===pr.chargeIdx?'price_cancel':'')} onClick={() => {
                                chargeBuyClick(pr.chargeIdx)
                            }}>{(userInfo.charge===pr.chargeIdx?'해지하기':(userInfo.charge===0?'구매하기':'변경하기'))}
                            </button>
                        </div>

                    </div>)}
                    {priceList.length !== 0 && priceList1.length === 0 &&
                    <div className={'no_contents'}>조건에 맞는 정기요금제가 없습니다.</div>}
                    {priceCompo1Count !== 999 && priceList1.length > priceCompo1Count &&
                    <div className={'price_bt_section'}>
                        <button className={'default_bt more_item_bt'} onClick={() => {
                            setPriceCompo1Count(999)
                        }}>정기요금제 더보기
                        </button>
                    </div>}
                </div>}

                {currentType !== 1 && <div className={'price_items'}>
                    <div className={'section_title'}>부가서비스</div>
                    {priceList2.filter((p_item, p_index) => p_index < priceCompo2Count).map((pr, p_index) => <div
                        className={'price_item disable_item service_item'} key={p_index}>
                        <div className={'price_title'}>{pr.chargeName} <img
                            src={'/img/' + pr.tools[0].toolLogo + '.png'}/></div>
                        <div className={'price_desc'}>{pr.chargeSubName}</div>
                        <div className={'price_detail'}
                             dangerouslySetInnerHTML={{__html: brTagParser(pr.description)}}></div>
                        <div className={'price_bt_section'}>
                            <div className={'price_info_section'}>
                                <div className={'pr_select_item'}>
                                    <div className={'pr_selected'} onClick={(e) => {
                                        e.stopPropagation();
                                        disCountPopOpen(pr);
                                    }}>{pr.disCountName}시 <img src={'/img/ic_arrow_down.svg'}/></div>
                                    {pr.disCountPopYn && <div className={'pop_sub ftr_pop ftr_price_discounts'}>
                                        <ul>
                                            {priceDiscounts.map((d_item, d_index) => <li key={d_index} onClick={() => {
                                                selectDiscount(pr, d_item)
                                            }}>{d_item.codeDesc}</li>)}
                                        </ul>
                                    </div>}
                                </div>
                                <div
                                    className={'pr_value'}>월 {(pr.price * (1 - pr.disCount * 0.01)).toLocaleString()}원
                                </div>
                            </div>
                            <button className={'default_bt price_buy_bt '+(userInfo.charge===pr.chargeIdx?'price_cancel':'')} onClick={() => {
                                chargeBuyClick(pr.chargeIdx)
                            }}>{(userInfo.charge===pr.chargeIdx?'해지하기':'구매하기')}
                            </button>
                        </div>

                    </div>)}
                    {priceCompo2Count !== 999 && priceList2.length > priceCompo2Count &&
                    <div className={'price_bt_section'}>
                        <button className={'default_bt more_item_bt'} onClick={() => {
                            setPriceCompo2Count(999)
                        }}>부가서비스 더보기
                        </button>
                    </div>}
                </div>}
                {priceList.length !== 0 && priceList2.length === 0 &&
                <div className={'no_contents'}>조건에 맞는 부가서비스가 없습니다.</div>}

                {compareItems.length > 0 && <div className={'price_compare_section'}>
                    <div className={'pc_container'}>
                        <div className={'section_title'}>요금제 비교하기({compareItems.length})</div>
                        <div className={'pc_bt_section'}>
                            <div className={'pc_items'}>
                                {priceList.filter((pi) => (compareItems.indexOf(pi.chargeIdx) >= 0)).map((pcItem, pcIndex) =>
                                    <div className={'pc_item'}>{pcItem.chargeName}</div>)}
                            </div>
                            <div className={'pc_right_bt_section'}>
                                <button className={'default_bt pc_reset_bt'} onClick={() => {
                                    setCompareItems([])
                                }}>선택 리셋하기
                                </button>
                                <button
                                    className={'default_bt price_compare_bt ' + (compareItems.length < 2 ? 'disable_bt' : '')}
                                    onClick={() => {
                                        comparePriceView()
                                    }}>비교하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}


            </div>

        </div>
    )


}

export default Price
