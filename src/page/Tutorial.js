import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import {API_URL,IMG_URL} from "../const/URL";
import Moment from 'react-moment';
import useBus from 'use-bus'
function Tutorial(props){
    const [tutorialItems,setTutorialItems] =  useState({});
    const [cateProgramPopYn,setCateProgramPopYn] =  useState(false);
    const [cateOrderPopYn,setCateOrderPopYn] =  useState(false);
    useEffect(()=>{
        axios.get(API_URL+'/Lecture/topic/list?option=2').then((result)=>{
            console.log(result);
            setTutorialItems(result.data);
        })
    },[])

    useBus(
        '@@popup/close',
        () =>{
            setCateProgramPopYn(false);
            setCateOrderPopYn(false);
        },
        [],
    )
    return(
        <div className={'contents_wrap'}>
            <div className={'filter_section'}>
               <div className={'ft_deco'}>
                   <img src={'/img/ic_filter.svg'}/>
                   <div className={'ft_title mobile_view'}>필터 <img src={'/img/ic_arrow_down.svg'}/></div>
               </div>
                <div className={'sub_filter_section'}>
                    <div className={'ft_process'}>
                        <div className={'ftp_item selected'}>
                            <span className={'ftp_t'}>인트로</span>
                            <img src={'/img/ic_arrow_right_g.svg'}/>
                        </div>
                        <div className={'ftp_item selected'}>
                            <span className={'ftp_t'}>컷편집</span>
                            <img src={'/img/ic_arrow_right_g.svg'}/>
                        </div>
                        <div className={'ftp_item'}>
                            <span className={'ftp_t'}>색보정</span>
                            <img src={'/img/ic_arrow_right_g.svg'}/>
                        </div>
                        <div className={'ftp_item'}>
                            <span className={'ftp_t'}>장면전환</span>
                            <img src={'/img/ic_arrow_right_g.svg'}/>
                        </div>
                        <div className={'ftp_item'}>
                            <span className={'ftp_t'}>속도조절</span>
                            <img src={'/img/ic_arrow_right_g.svg'}/>
                        </div>
                        <div className={'ftp_item'}>
                            <span className={'ftp_t'}>자막넣기</span>
                            <img src={'/img/ic_arrow_right_g.svg'}/>
                        </div>
                        <div className={'ftp_item'}>
                            <span className={'ftp_t'}>음악넣기</span>
                            <img src={'/img/ic_arrow_right_g.svg'}/>
                        </div>
                        <div className={'ftp_item'}>
                            <span className={'ftp_t'}>클로징</span>
                            <img src={'/img/ic_arrow_right_g.svg'}/>
                        </div>
                        <div className={'ftp_item'}>
                            <span className={'ftp_t'}>썸네일</span>
                        </div>
                    </div>
                    <div className={'ft_programs'}>
                        <ul>
                            <li>Photoshop</li>
                            <li>Photoshop</li>
                            <li>Photoshop</li>
                            <li>Photoshop</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>


                <div className={'ft_right_section'}>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected'} onClick={(e)=>{e.stopPropagation();setCateProgramPopYn(false);setCateOrderPopYn(!cateOrderPopYn)}}>추천순 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateOrderPopYn&&<div className={'ftr_pop'}>
                            <ul>
                                <li>날짜순</li>
                                <li>추천순</li>
                            </ul>
                        </div>}
                    </div>
                    <div className={'ftr_select_item mobile_hidden'}>
                        <div className={'ftr_selected'}  onClick={(e)=>{e.stopPropagation();setCateOrderPopYn(false);setCateProgramPopYn(!cateProgramPopYn)}}>프로그램 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateProgramPopYn&&<div className={'ftr_pop ftr_pop_program'}>
                            <ul>
                                <li>Photoshop</li>
                                <li>Photoshop</li>
                                <li>Photoshop</li>
                                <li>Photoshop</li>
                                <li>Photoshop</li>
                            </ul>
                        </div>}
                    </div>
                </div>

            </div>
            <div className={'tutorial_items'}>
                {tutorialItems.length&&tutorialItems.map((tItem,index)=>{
                    return(
                        <Link to={'/tutorial/detail/'+tItem.topicIdx} key={index}>
                            <div className={'tt_item'}>
                                <div className={'tt_img'}>
                                    <img src={IMG_URL+'/'+tItem.bannerImage}/>
                                </div>
                                <div className={'tt_contents'}>
                                    <div className={'tt_title'}>{tItem.topicName}</div>
                                    <div className={'tt_sub'}>{tItem.categoryName}/ 총 {tItem.timeTotal}시간/ <Moment format="YYYY. MM. DD.">
                                        {tItem.regDate}
                                    </Moment></div>
                                    <div className={'tt_bottom'}>
                                        <div className={'tt_writer'}>by {tItem.memberName}</div>
                                        <div className={'tt_programs'}>
                                            {tItem.toolLogos.map((pItem,pIndex)=>{
                                                return(
                                                    <img key={pIndex} src={'/img/'+pItem+'.png'}/>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    )
                })
                }



            </div>

        </div>
    )


}
export default Tutorial
