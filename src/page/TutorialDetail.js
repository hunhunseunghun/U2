import {useState,useEffect} from 'react';
import axios from "axios";
import {API_URL, IMG_URL} from "../const/URL";
import {Link, useLocation} from "react-router-dom";
import Moment from "react-moment";

function TutorialDetail(props){
    const [tutorialDetail,setTutorialDetail] =  useState({});
    const [windowAppYn,setWindowAppYn] =  useState(false);
    const location = useLocation();
    let params
    useEffect(()=>{
        params = new URLSearchParams(location.search);
        if(params.get('windowapp')){
            setWindowAppYn(true);
        }
        const t_idx = location.pathname.substr(17,20)
        axios.get(API_URL+'/Lecture/topic/'+t_idx).then((result)=>{
            console.log(result);
            setTutorialDetail(result.data);
        })
    },[location])
    return(
        <div className={'contents_wrap'}>
          <div className={'tutorial_detail td1'}>
              {tutorialDetail.topicImage&&<div className={'td_back'} style={{backgroundImage:'url('+IMG_URL+'/'+tutorialDetail.topicImage+')'}}>
              </div>}
                <div className={'td_title'}>
                   <div className={'tdt_t'}>
                       {tutorialDetail.topicName}
                   </div>
                    <div className={'td_subtitle'}>
                        {tutorialDetail.categoryName}/ 총 {tutorialDetail.timeTotal}시간/ <Moment format="YYYY. MM. DD.">
                        {tutorialDetail.regDate}</Moment>
                    </div>
                </div>

              <div className={'td_writer'}>
                  <span className={'user_profile'} style={{backgroundImage:'url(/img/temp_profile.png)'}}></span> {tutorialDetail.memberName}
              </div>
              <div className={'td_programs'}>
                  {tutorialDetail.toolLogos&&tutorialDetail.toolLogos.map((pItem,pIndex)=>{
                      return(
                          <img key={pIndex} src={'/img/'+pItem+'.png'}/>
                      )
                  })}
              </div>
          </div>
          <div className={'tutorial_detail td2'}>
              {tutorialDetail.topicDesc}
          </div>
            <div className={'tutorial_detail td3'}>
                <div className={'section_title'}>Course Table</div>
                <div className={'course_items'}>
                    {tutorialDetail.videos&&tutorialDetail.videos.map((vItem,vIndex)=>{
                        return(
                            <div className={'course_item'} key={vIndex}>
                                <div className={'cs_step'}>step{vIndex+1}.</div>
                                <div className={'cs_title'}>{vItem.videoName}</div>
                                <div className={'cs_time'}>총 {vItem.playTime}분</div>
                            </div>
                        )
                    })}


                </div>
            </div>
            <div className={'tutorial_detail td4'}>
                <div className={'video_items'}>
                    {tutorialDetail.videos&&tutorialDetail.videos.map((vItem,vIndex)=>{
                        return(
                            <div className={'video_item'} key={vIndex}>
                                <div className={'vd_title'}>{vItem.sectionTitle}</div>
                                <div className={'vd_video'}>
                                    <iframe width="900" height="510" src={"https://www.youtube.com/embed/"+vItem.vodLinkUrl}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    <ul className={'vd_info'}>
                                        <li>출처 : {vItem.sourceName}</li>
                                        <li>영상제목 : <a href={vItem.sourceLink} target={'_blank'}>{vItem.videoName}</a></li>
                                        <li>관련 앱<br/>
                                            {vItem.toolLogos&&tutorialDetail.toolLogos.map((spItem,spIndex)=>{
                                                return(
                                                    <img key={spIndex} src={'/img/'+spItem+'.png'}/>
                                                )
                                            })}

                                        </li>
                                    </ul>
                                </div>
                                <div className={'vd_contents'}>
                                    {vItem.videoDesc}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={'tutorial_detail td5'}>
                <div className={'section_title'}>관련된 추천 영상제작 팁</div>
                <div className={'tutorial_items'}>
                    {tutorialDetail.topicRecommands&&tutorialDetail.topicRecommands.map((tItem,index)=>{
                        return(
                            <Link to={{pathname:'/tutorial/detail/'+tItem.topicIdx,
                            search:windowAppYn?'?windowapp=true':''
                            }} key={index}>
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

        </div>
    )


}
export default TutorialDetail
