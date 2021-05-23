import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useHistoryState from 'use-history-state';
import axios from "axios";
import {API_URL,IMG_URL} from "../const/URL";
import Moment from 'react-moment';
import useBus from 'use-bus'
function Tutorial(props){
    const [cateProgramPopYn,setCateProgramPopYn] =  useState(false);
    const [cateOrderPopYn,setCateOrderPopYn] =  useState(false);
    const [mobileYn,setMobileYn] =  useState(false);
    const [mobileFilterViewYn,setMobileFilterViewYn] =  useState(false);

    const [categoryList,setCategoryList] = useState([]);
    const [tagList,setTagList] = useState([]);
    const [toolList,setToolList] = useState([]);
    const [tutorialItems,setTutorialItems] =  useState({});

    const [currentCate,setCurrentCate] = useHistoryState(0,'cate');
    const [currentTag,setCurrentTag] = useHistoryState('','tag');
    const [currentTool,setCurrentTool] = useHistoryState([],'tool');
    const [currentSort,setCurrentSort] = useHistoryState(3,'sort');

    useEffect(()=>{
        if(window.innerWidth<900){
            setMobileYn(true);
        }

        axios.get(API_URL+'/Lecture/category/all').then((result)=>{
            console.log(result.data);
            const cateUseList = result.data.filter(cItem=>cItem.usestateCode===1);
           setCategoryList(cateUseList);
            let cateIdx;
            if(currentCate===0) cateIdx = cateUseList[0].categoryIdx;
            else cateIdx = currentCate;
            setCurrentCate(cateIdx);
            axios.get(API_URL+'/Lecture/topic/list?option='+cateIdx+'&newerFirst='+currentSort).then((result)=>{
                console.log(result);
                setTutorialItems(result.data);
            })

        })
        axios.get(API_URL+'/Lecture/topichash/all').then((result)=>{
            console.log(result.data);
            setTagList(result.data);

        })
        axios.get(API_URL+'/Lecture/toolmaster/list').then((result)=>{

            setToolList(result.data);

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
            axios.get(API_URL+'/Lecture/topic/list?option='+idx+'&tag='+currentTag+'&newerFirst='+currentSort+'&toolFilterString='+currentTool).then((result)=>{
                console.log(result);
                setTutorialItems(result.data);
            })
    }
    const tagChange=(keyword)=>{
        if(keyword!==currentTag){
            setCurrentTag(keyword);
            axios.get(API_URL+'/Lecture/topic/list?option='+currentCate+'&tag='+currentTag+'&newerFirst='+currentSort+'&toolFilterString='+currentTool).then((result)=>{
                console.log(result);
                setTutorialItems(result.data);
            })
        }else{
            setCurrentTag('');
        }

    }
    const sortChange=(sort)=>{

        setCurrentSort(sort);
        axios.get(API_URL+'/Lecture/topic/list?option='+currentCate+'&tag='+currentTag+'&newerFirst='+sort+'&toolFilterString='+currentTool).then((result)=>{
            console.log(result.data);
            setTutorialItems(result.data);
        })
    }
    const toolChange=(idx)=>{
        let tempToolList= [];
        if(currentTool.indexOf(idx)>=0){
            tempToolList = currentTool.filter(tIdx=>tIdx!==idx)

        }else{
            tempToolList=[...currentTool,idx];
        }
        setCurrentTool(tempToolList);
        let toolStr='';
        tempToolList.map((tl,index)=>{
            return index!==(tempToolList.length-1)?toolStr+=(tl+'-'):toolStr+=tl;
        });
        axios.get(API_URL+'/Lecture/topic/list?option='+currentCate+'&tag='+currentTag+'&newerFirst='+currentSort+'&toolFilterString='+toolStr).then((result)=>{
            console.log(result.data);
            setTutorialItems(result.data);
        })
    }
    return(
        <div className={'contents_wrap'}>
            <div className={'filter_section'}>
               <div className={'ft_deco'}>
                   <div className={'ft_title mobile_view '+(mobileFilterViewYn?'active':'')} onClick={()=>{setMobileFilterViewYn(!mobileFilterViewYn)}}>필터 <img src={'/img/ic_arrow_down.svg'}/></div>
               </div>
                {(!mobileYn||mobileFilterViewYn)&&<div className={'sub_filter_section'} onClick={()=>{setMobileFilterViewYn(false)}}>
                    <div className={'ft_process'}>
                        {categoryList.map((cItem,cIndex)=><div className={'ftp_item '+(cItem.categoryIdx===currentCate?'active':'')} key={cIndex} onClick={(e)=>{cateChange(cItem.categoryIdx)}}>
                            <span className={'ftp_num'} title={cItem.categoryName}>{(cIndex+1)}</span><span className={'ftp_t'}>. {cItem.categoryName}</span>
                            {cIndex!==(categoryList.length-1)&&<img src={'/img/ic_arrow_right_g.svg'}/>}
                        </div>)}

                    </div>
                    <div className={'ft_title'}>태그</div>
                    <div className={'ft_tags'}>
                        {tagList.map((tagItem,tIndex)=><div key={tIndex} className={'tag_item '+(tagItem===currentTag?'active':'')} onClick={()=>{tagChange(tagItem)}}>#{tagItem}</div>)}
                    </div>
                    <div className={'ft_title'}>프로그램</div>
                    <div className={'ft_programs'}>
                        <ul>
                            {toolList.map((toolItem,tIndex)=><li key={tIndex} onClick={()=>{toolChange(toolItem.toolIdx)}} className={currentTool.indexOf(toolItem.toolIdx)>=0?'active':''}>{toolItem.toolName}</li>)}
                        </ul>
                    </div>
                </div>}


                <div className={'ft_right_section'}>
                    <div className={'ftr_select_item'}>
                        <div className={'ftr_selected '+(cateOrderPopYn?'active':'')} onClick={(e)=>{e.stopPropagation();setCateProgramPopYn(false);setCateOrderPopYn(!cateOrderPopYn)}}>{currentSort===1?'최신순':(currentSort===3?'추천순':'오래된순')} <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateOrderPopYn&&<div className={'pop_sub ftr_pop'}>
                            <ul>
                                <li onClick={()=>{sortChange(3)}}>추천순</li>
                                <li onClick={()=>{sortChange(1)}}>최신순</li>
                                <li onClick={()=>{sortChange(0)}}>오래된순</li>
                            </ul>
                        </div>}
                    </div>
                    <div className={'ftr_select_item mobile_hidden'}>
                        <div className={'ftr_selected '+(cateProgramPopYn?'active':'')}  onClick={(e)=>{e.stopPropagation();setCateOrderPopYn(false);setCateProgramPopYn(!cateProgramPopYn)}}>프로그램 <img src={'/img/ic_arrow_down.svg'}/></div>
                        {cateProgramPopYn&&<div className={'pop_sub ftr_pop ftr_pop_program'}>
                            <ul>
                                {toolList.map((toolItem,tIndex)=><li key={tIndex} onClick={()=>{toolChange(toolItem.toolIdx)}}>{toolItem.toolName}{currentTool.indexOf(toolItem.toolIdx)>=0&&<span className={'active_deco'}></span>}</li>)}
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
                                <div className={'tt_img'} >
                                    {tItem.bannerImage!==null&&<img src={IMG_URL+'/'+tItem.bannerImage}/>}
                                    {tItem.bannerImage===null&&<div className={'no_img'}><img src={'/img/no_image.png'}/><span className={'not_contents'}>Image not found</span></div>}
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
