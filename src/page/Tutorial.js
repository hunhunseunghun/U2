import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import {API_URL,IMG_URL} from "../const/URL";
import Moment from 'react-moment';
import useBus from 'use-bus'
function Tutorial(props){
    const [cateProgramPopYn,setCateProgramPopYn] =  useState(false);
    const [cateOrderPopYn,setCateOrderPopYn] =  useState(false);
    const [categoryList,setCategoryList] = useState([]);
    const [tagList,setTagList] = useState([]);

    const [tutorialItems,setTutorialItems] =  useState({});

    const [currentCate,setCurrentCate] = useState(2);
    const [currentTag,setCurrentTag] = useState('');

    useEffect(()=>{
        axios.get(API_URL+'/Lecture/category/all').then((result)=>{
            console.log(result.data);
            setCategoryList(result.data.filter(cItem=>cItem.categoryIdx<=11));

        })
        axios.get(API_URL+'/Lecture/topichash/all').then((result)=>{
            console.log(result.data);
            setTagList(result.data);

        })
        axios.get(API_URL+'/Lecture/topic/list?option='+currentCate).then((result)=>{
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
    const cateChange=(idx)=>{
            setCurrentCate(idx);
            axios.get(API_URL+'/Lecture/topic/list?option='+idx+'&tag='+currentTag).then((result)=>{
                console.log(result);
                setTutorialItems(result.data);
            })
    }
    const tagChange=(keyword)=>{
        if(keyword!==currentTag){
            setCurrentTag(keyword);
            axios.get(API_URL+'/Lecture/topic/list?option='+currentCate+'&tag='+currentTag).then((result)=>{
                console.log(result);
                setTutorialItems(result.data);
            })
        }else{
            setCurrentTag('');
        }

    }
    return(
        <div className={'contents_wrap'}>
            <div className={'filter_section'}>
               <div className={'ft_deco'}>
                   <img src={'/img/ic_filter.svg'}/>
                   <div className={'ft_title mobile_view'}>필터 <img src={'/img/ic_arrow_down.svg'}/></div>
               </div>
                <div className={'sub_filter_section'}>
                    <div className={'ft_process'}>
                        {categoryList.map((cItem,index)=><div className={'ftp_item '+(cItem.categoryIdx===currentCate?'active':'')} key={index} onClick={(e)=>{cateChange(cItem.categoryIdx)}}>
                            <span className={'ftp_t'}>{cItem.categoryName}</span>
                            {index!==(categoryList.length-1)&&<img src={'/img/ic_arrow_right_g.svg'}/>}
                        </div>)}

                    </div>
                    <div className={'ft_tags'}>
                        {tagList.map((tagItem,tIndex)=><div key={tIndex} className={'tag_item '+(tagItem===currentTag?'active':'')} onClick={()=>{tagChange(tagItem)}}>#{tagItem}</div>)}
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
                {!tutorialItems.length?'':tutorialItems.map((tItem,index)=>{
                    return(
                        <Link to={'/tutorial/detail/'+tItem.topicIdx} key={index}>
                            <div className={'tt_item'}>
                                <div className={'tt_img'} style={{backgroundImage:'url('+IMG_URL+'/'+tItem.bannerImage+')'}}>
                                    {tItem.bannerImage===null&&<span className={'not_contents'}>Image not found</span>}
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
                {tutorialItems.length===0&&<div className={'not_contents'}>
                    해당하는 콘텐츠가 없습니다.
                </div>}




            </div>

        </div>
    )


}
export default Tutorial
