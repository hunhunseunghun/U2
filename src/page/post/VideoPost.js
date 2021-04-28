import {useState,useEffect} from 'react';
import { TagInput } from 'reactjs-tag-input'
import {useForm} from 'react-hook-form'
function VideoPost(props){
    const [tags,setTags] = useState([{
        index: 0,
        displayValue: 'tag'
    }]);
    const [fileName,setFileName]= useState('파일이름');
    const [uploadPercent,setUploadPercent] = useState(0);
    const { register, handleSubmit } = useForm();

    useEffect(()=>{


    },[])


    const fileChange= (e)=>{
        const formData = new FormData();
        console.log(e.target.files[0]);
        console.log(e.target.files[0].codecs);
        setFileName(e.target.files[0].name);
        let img = new Image();
        const reader = new FileReader();
        const fileDetails ={};
        const video = document.createElement('video');
        video.onloadedmetadata = function() {
            window.URL.revokeObjectURL(video.src);
            const duration = video.duration;
            //const codec = video.codec;

            console.log(video.codecs);
        }
        const form = new FormData();
        form.append('video', e.target.files[0]);
        this.result = this.http.post('https://videoinfoapi.azurewebsites.net/api/videoinfo', form, {
            observe: 'body'
        });



        reader.onload = function(file){
            const fileContent = file;
            img.src = file.target.result;
            console.log(file.target);
            fileDetails.width = img.naturalWidth;
            fileDetails.height = img.naturalHeight;

            console.log(fileDetails);

        }

        video.src = URL.createObjectURL(e.target.files[0]);;
        reader.readAsDataURL(e.target.files[0]);

    }

    const postSubmit=(data)=>{
        console.log(data);
        const tagsData = tags.reduce((tempAr,tag)=>{
            tempAr.push(tag.displayValue);
            return tempAr;
        },[]);

        console.log(tagsData);

    }

    const onTagsChanged=(tag)=>{
        setTags(tag);
        console.log(tag);
    }
    return(
        <div className={'contents_wrap'}>
            {<div className={'video_post vp_post'}>
                <div className={'section_title'}>Youtube 영상 게시하기</div>
                <form onSubmit={handleSubmit(postSubmit)}>
                <div className={'vp_input_items'}>
                    <div className={'input_item disable_item file_item'}>
                        <div className={'item_title'}>파일선택</div>
                        <div className={'item_contents'}>
                            <input type={'text'} value={fileName} disabled={true}/>
                            <label><input type={'file'} accept="video/*[, MIME_TYPES]" onChange={(e)=>{fileChange(e)}} />
                            <div className={'default_bt file_bt'}>찾아보기</div>
                            </label>
                        </div>
                    </div>
                    <div className={'input_item '}>
                        <div className={'item_title'}>제목</div>
                        <div className={'item_contents'}>
                            <input type={'text'} placeholder={'영상 제목을 입력해주세요(최대 15자)'}  {...register("subject")} />
                        </div>
                    </div>
                    <div className={'input_item '}>
                        <div className={'item_title'}>설명</div>
                        <div className={'item_contents'}>
                            <input type={'text'} placeholder={'영상 설명을 입력해주세요(최대 8자)'} {...register("desc")}/>
                        </div>
                    </div>
                    <div className={'input_item '}>
                        <div className={'item_title'}>태그</div>
                        <div className={'item_contents'}>
                            <TagInput tags={tags}  onTagsChanged={onTagsChanged} placeholder="태그 입력 후 엔터키로 태그 추가" />
                        </div>
                    </div>
                    <div className={'input_item disable_item'}>
                        <div className={'item_title'}>해상도</div>
                        <div className={'item_contents'}>
                            <input type={'text'} value={'-'} disabled={true}/>
                        </div>
                    </div>
                    <div className={'input_item disable_item'}>
                        <div className={'item_title'}>재생시간</div>
                        <div className={'item_contents'}>
                            <input type={'text'} value={'-'} disabled={true}/>
                        </div>
                    </div>
                    <div className={'input_item disable_item'}>
                        <div className={'item_title'}>코덱</div>
                        <div className={'item_contents'}>
                            <input type={'text'} value={'-'} disabled={true}/>
                        </div>
                    </div>
                    <div className={'input_item '}>
                        <div className={'item_title'}>캠페인 선택</div>
                        <div className={'item_contents'}>
                            <select>
                                <option>과제명1(회사이름)</option>
                                <option>과제명1(회사이름)</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className={'vp_bt_section'}>
                    <input type={'submit'} className={'default_bt post_submit_bt'} value={'유튜브 영상 게시하기'} ></input>
                    <button className={'default_bt post_cancel_bt'}>
                        게시 취소하기
                    </button>
                </div>
                </form>
            </div>}
            <div className={'video_post vp_post_ing'}>
                <div className={'section_title'}>Youtube에 영상이 업로드 중 입니다</div>
                <div className={'upload_chart'}>
                    <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="350" height="350"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-chart__background" stroke="#efefef" strokeWidth="3" fill="none"
                                cx="16.91549431" cy="16.91549431" r="13.91549431"/>
                        <circle className="circle-chart__circle" stroke="#FF4B3F" strokeWidth="3"
                                strokeDasharray="30,100" strokeLinecap="round" fill="none" cx="16.91549431"
                                cy="16.91549431" r="13.91549431"/>
                    </svg>
                    <div className={'upload_info'}>
                        <div className={'upload_percent'}>
                            <div className={'up_number'}>40</div>
                            <div className={'up_unit'}>%</div>
                        </div>
                        <div className={'upload_text'}>업로드완료</div>
                    </div>
                    <div className={'upload_bottom'}>
                        <button className={'default_bt post_cancel_bt'}>업로드 취소하기</button>
                        <div className={'sub_info'}>
                            게시 완료 후 Youtube Studio에서 업로드 결과를 확인하고,
                            상세 설정을 변경하세요.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default VideoPost
