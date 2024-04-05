/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  useGetPostsInfinite,
  useGetPostsInitial,
  useLoadBirthday,
} from "../../../lib/query/queryandMutation";
import Postfeed from "./Postfeed";
import postData from "./post";

import { InView, useInView } from "react-intersection-observer";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { fetchInfinitePostsV2Action } from "../../../API/post";
import LoadingShimmer from "./LoadingShimmer";

import HorizontalBirthdayCard from "./components/HorizontalBirthdayCard";
import { postContext } from "../../../context/Post";
import TrainingSlider from "./components/TrainingSlider";
import ShoppingSlider from "./components/ShoppingSlider";













const PostFeeds = () => {
  const { userData } = useCurrentUser();
  // const [isLoading, setIsLoading] = useState(false);
  const [pageStart, setPageStart] = useState(0);

  const {data:birthdayData,  isPending: pend} = useLoadBirthday(userData?.data)

  const { data: postDatasInitial, isPending } = useGetPostsInitial(
    userData?.data
  );

  const { data: postDatasInfinite, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetPostsInfinite(
    userData?.data, pageStart
  );


  const {allAvailablePost, setAllAvailablePost, allAvailableFormattedPost, } = useContext(postContext)

  const [allPostInitial, setAllPostInitial] = useState([]);
  const [allPostPage, setAllPostPage] = useState([]);
  const { ref, inView } = useInView();




  //test 
  const [allPost, setAllPost] = useState([]);
// 


// console.log(allAvailablePost)



  // working
  // const getMoreData = async () => {
  //   if (inView) {
  //     setIsLoading(true);
  //     const res = await fetchInfinitePostsV2Action({
  //       data: userData?.data,
  //       offset: pageStart,
  //     });
  //     if (res) {
  //       setPageStart((prev) => prev + 10);
  //       // console.log(res?.data)

  //       setAllPostPage([...allPostPage, ...res?.data]);

  //       setAllPost([...allPostInitial, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0}, ...allPostPage, ...res?.data]);

  //       setIsLoading(false);
  //     }
  //   }
  // };
//working


// working 
  // useEffect(() => {
  //   // const { clientHeight, scrollHeight, scrollTop } = document.scrollingElement;
  //   // const scrolled = scrollTop + clientHeight > scrollHeight - 800;

  //   console.log(inView);
  //   if (inView && !isLoading && !isPending) {
  //     if (isLoading) return;

  //     getMoreData();

  //   }

  // }, [isLoading, isPending, inView]);
// working


  useEffect(() => {

    // birthdayData?.data?.data?.length

    if (postDatasInitial?.pages[0]?.data?.data?.length > 0) {


      // test

      let initial = [...postDatasInitial?.pages[0]?.data?.data]
      if(birthdayData?.data?.data?.length > 0){
        initial.splice(4, 0, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0});

        // if training
        // initial.splice(11, 0, {birthday: birthdayData?.data?.data, isTraining: true, key: 0});
      }
      setAllPostInitial([...initial]);
      // console.log(initial)
      
      if (allPostPage?.length > 0) {
        setAllPost([...initial,   ...allPostPage]);
        setAllAvailablePost([...initial,   ...allPostPage])
      } else {
        setAllPost([...initial]);
        setAllAvailablePost([...initial]);
      }
      // test







      // actual
      // setAllPostInitial([...postDatasInitial?.pages[0]?.data?.data]);
      // if (allPostPage?.length > 0 && birthdayData?.data?.data?.length > 0) {
      //   setAllPost([...postDatasInitial?.pages[0]?.data?.data, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0},  ...allPostPage]);
      //   setAllAvailablePost([...postDatasInitial?.pages[0]?.data?.data, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0},  ...allPostPage])
      // } else {
      //   setAllPost([...postDatasInitial?.pages[0]?.data?.data, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0}]);
      //   setAllAvailablePost([...postDatasInitial?.pages[0]?.data?.data, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0}]);

      // }


      
    }
  }, [postDatasInitial, birthdayData?.data?.data ]);




  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }  

 }, [inView, isFetchingNextPage])



  useEffect(() => {
      if (!isFetchingNextPage && postDatasInfinite) {
        const all = []

    
        setPageStart((prev) => prev + 10);

        postDatasInfinite?.pages?.map(info=>{
          info?.data?.data?.map(dt=>{
            all?.push(dt)
            return all
          })
        })



        //test
          // all [training], all [shopping]

        //test





        setAllPostPage([...all])

        // const nextSlideData = nextSlide.current === "shopping" ? {birthday: birthdayData?.data?.data, isShopping: true, key: 0} : {birthday: birthdayData?.data?.data, isTraining: true, key: 0}
        // done
        setAllPost([...allPostInitial, ...all ]);
        
        setAllAvailablePost([...allPostInitial, ...all]);
        // done
        // if(all.length > 0)[
        //   nextSlide.current =  nextSlide.current === "shopping" ? "training" : "shopping"
        // ]

        // actual
        // setAllPost([...allPostInitial, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0}, ...all]);
        // setAllAvailablePost([...allPostInitial, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0}, ...all]);

      }
  }, [inView, isFetchingNextPage])















// const loadBirth  = ()=>{
//   if (birthdayData?.data?.data?.length > 0  && !isLoading) {
      
//     // console.log(birthdayData?.data?.data)
    
//     const arr = [...allPost]
//     // setTimeout(() => {
//     arr.splice(9, 0, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0});
//     // console.log(arr)

//       // setAllPost([...arr])
//     // }, );


//   }
// }




  // useEffect(() => {

  //   // console.log(birthdayData)


  //   if (birthdayData?.data?.data?.length > 0) {
      
  //     console.log(birthdayData?.data?.data)
      
  //     const arr = [...allPost]
  //     arr.splice(9, 0, {birthday: birthdayData?.data?.data, isBirthday: true, key: 0});


  //     console.log(arr)
  //     // setTimeout(() => {
  //     //   setAllPost([...arr])
  //     // }, 600);
  

  //   }


  // }, [birthdayData])
  











  return (
    <div className="space-y-5 ">
      {
        <>
          {allAvailablePost?.length === 0 ? (
            <LoadingShimmer isLoaded={allAvailablePost?.length > 0} />
          ) : (
            <>
              {allAvailableFormattedPost?.map((post, i) => (

                post?.isBirthday ?
                  <div key={i} className="space-y-5 overflow-x-clip  bg-transparent">
                  <HorizontalBirthdayCard data={post}  />
                </div>
                : 
                
                post?.isTraining ? 
                <div key={i} className="space-y-5 overflow-x-clip  bg-transparent">
                  <TrainingSlider data={post}  />
                 </div>

                :
                
                post?.isShopping ? 
                <div key={i} className="space-y-5 overflow-x-clip  bg-transparent">
                  <ShoppingSlider data={post}  />
                 </div>

                :
                
                
                <Postfeed data={post} index={i} key={post.POST_ID} />
              ))}

              {
               hasNextPage  && ( <div ref={ref} style={{ marginTop: "10px" }}>
                 <span className="w-5 h-5 rounded-full animate-spin duration-75  border-t-2 border-btnColor "></span>
                </div>)
              }
            </>
          )}
        </>
      }
    </div>
  );
};

export default PostFeeds;
