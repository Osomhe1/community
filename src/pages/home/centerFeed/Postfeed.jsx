/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import CreatePostMoreDropdown from "../../../components/CreatePostMoreDropdown";
import ReactEmojiPopup from "../../../components/ReactEmojiPopup";
import { FacebookIcon, MessageSquare, Share } from "lucide-react";
import { HiOutlineEmojiHappy, HiPaperAirplane } from "react-icons/hi";
// import { CgPentagonUp } from "react-icons/cg";
import Comment from "./Comment";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useEffect } from "react";
import { useRef } from "react";
import { SlLike } from "react-icons/sl";
import PostModal from "../../../components/modals/PostModal";
import Avatar from "../../../components/Avatar";

import {
  Button,
  Avatar as NextAvatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@nextui-org/react";
// import { formatDistance, subDays } from "date-fns";
// import { IoReloadOutline } from "react-icons/io5";
// import moment from "moment";
import TimeAgo from "./TimeAgo";
import PostFeedWithBg from "./PostFeedWithBg";
import {
  useAddComment,
  useLikePost,
  useLoadMoreComment,
} from "../../../lib/query/queryandMutation";
import useCurrentUser from "../../../hooks/useCurrentUser";
import toast from "react-hot-toast";
import { useContext } from "react";
import { postContext } from "../../../context/Post";
import { IoReloadOutline } from "react-icons/io5";
// import { LayoutGroup, motion } from "framer-motion";

import {
  FacebookShareButton,
  // GabShareButton,
  // HatenaShareButton,
  // InstapaperShareButton,
  // LineShareButton,
  LinkedinShareButton,
  // LivejournalShareButton,
  // MailruShareButton,
  // OKShareButton,

  // PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  // TumblrShareButton,
  TwitterShareButton,
  // ViberShareButton,
  // VKShareButton,
  WhatsappShareButton,
  // WorkplaceShareButton,
} from "react-share";

import { OKShareButton } from "react-share";
import { TbBrandStackshare, TbBrandWhatsapp } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { GrSend } from "react-icons/gr";
import { FaRedditSquare } from "react-icons/fa";
import { AiFillRedditCircle } from "react-icons/ai";
import { SocketContext } from "../../../context/SocketContext";
import ChatDrawer from "../rightMenu/components/ChatDrawer";

const Postfeed = ({ data, withoutImg }) => {
  // share
  const shareUrl = "https://example.com";
  const title = "Example Title";

  const [showComment, setShowComment] = useState(false);
  const [showReactionEmoji, setShowReactionEmoji] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [msgValue, setMsgValue] = useState("");
  const { userData } = useCurrentUser();
  const { addAComment, likeAPost, loadMoreComments } = useContext(postContext);

  const [postModalOpen, setPostModalOpen] = useState(false);

  const { mutateAsync: add, isPending, error } = useAddComment();
  const { mutateAsync: like } = useLikePost();
  const { mutateAsync: loadComment, isPending: isLoadCommentPending } =
    useLoadMoreComment();

  // const [currentPage, setcurrentpage] = useState(10);


  const { setCurrentPickedChat } = useContext(SocketContext)
  const [selectedChat, setSelectedChat] = useState(null)
  const [showLargeChatContainer, setShowLargeChatContainer] = useState(false)







  const emojiRef = useRef();

  const addEmoji = (value) => {
    // console.log(value?.emoji);
    setMsgValue((prev) => prev + value?.emoji);
    setShowEmoji(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setShowEmoji(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emojiRef]);

  const addComment = async () => {
    try {
      const res = await add({
        comment: msgValue,
        postId: data?.POST_ID,
        STAFF_ID: userData?.data?.STAFF_ID,
      });

      if (res) {
        // console.log(res)
        setMsgValue("");
        addAComment(msgValue, userData, data?.POST_ID);
        toast.success("comment added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async () => {
    try {
      // console.log(data?.LIKES);
      const res = await like({
        POST_ID: data?.POST_ID,
        USER_ID: userData?.data?.STAFF_ID,
      });

      if (res) {
        // console.log(res?.data?.likes);

        // const data = {
        //   likes: [
        //     {
        //       DATE_POSTED : 1707133377,
        //       FILE_NAME: null,
        //       FIRST_NAME: "Admin",
        //       LAST_NAME: "Africacodes",
        //       LIKE_ID: 1,
        //       OTHER_NAMES: null,
        //       POST_ID: 687,
        //       USER_ID: 1
        //     }
        //   ],
        //   total_likes: 1
        // }

        likeAPost(
          data?.POST_ID,
          userData?.data,
          res?.data?.likes,
          res?.data?.total_likes
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreComment = async () => {
    try {
      const res = await loadComment({
        post_id: data?.POST_ID,
        limit: data?.COMMENTS?.length,
      });

      if (res) {
        loadMoreComments(data?.POST_ID, res?.data?.data?.COMMENTS);
      }
    } catch (error) {
      console.log(error);
    }
  };








  const selectAChat = (user) => {
    setShowLargeChatContainer(true)
    setSelectedChat(user)
  }

  const setCurrent = (usr) => {
    // console.log(usr)
    if(usr?.USER_ID !== userData?.data?.STAFF_ID){
      selectAChat(usr)
      setCurrentPickedChat(usr)
    }
  }

  const filePrefix = "http://lamp3.ncaa.gov.ng/pub/";

  return (
    <div className="flex flex-col rounded-md  py-6 gap-y-2 shadow-sm  bg-white dark:bg-cardDarkColor text-gray-600">
      <div className="flex flex-col rounded-md   space-y-3 ">
        {/* top */}
        <div className="flex justify-between px-9 ">
          <div className="flex gap-x-5">
            <div>
              <span className="rounded-full flex items-center relative">
                {/* <Avatar
                  bigger
                  image={
                    "/assets/images/profiles/avatar-07.jpg" || data?.FILE_NAME
                  }

                  /> */}

                {
                  // data?.FILE_NAME?.includes('http') ?
                  data?.FILE_NAME ? (
                    <NextAvatar
                      className="w-11 h-11"
                      src={filePrefix + data?.FILE_NAME || ""}
                      title={data?.LAST_NAME + " " + data?.FIRST_NAME}
                    />
                  ) : (
                    <NextAvatar
                      name={data?.FIRST_NAME?.trim()[0]}
                      className=" cursor-pointer w-11 h-11 text-large"
                      title={data?.LAST_NAME + " " + data?.FIRST_NAME}
                    />
                  )
                }
              </span>
            </div>

            <div className="flex flex-col text-xs">
              <span className="font-bold text-gray-600 text-sm">
                {data?.LAST_NAME + " " + data?.FIRST_NAME}
              </span>

              <div className=" space-x-1 text-slate-300">
                <span className="text-xs font-semibold">
                  {data?.DIRECTORATE}
                </span>
              </div>

              <span></span>
            </div>
          </div>

          {/* BACKGROUND_COLOR, POST_CONTENT */}

          <div className="w-24 text-right">
            <span className="text-xs text-gray-500 font-thin">
              <TimeAgo timestamp={data?.DATE_POSTED} />

              {/* {moment(new Date(data?.DATE_ADDED)).fromNow()} */}
            </span>
          </div>
        </div>
        {/* {format(new Date(data?.DATE_POSTED), 'yyyy-MM-dd')} {formatRelative(subDays(new Date(), 3), new Date())} */}
        {/* {formatDistance(
                    subDays(new Date(data?.DATE_POSTED), 3),
                    new Date(),
                    { addSuffix: true }
                  )} */}
        {/* {moment(new Date(data?.DATE_ADDED)).fromNow()} */}

        {/* <CreatePostMoreDropdown /> */}

        {/* image */}

        {data?.BACKGROUND_COLOR ? (
          <>
            <PostFeedWithBg data={data} />
          </>
        ) : (
          <>
            {data?.POST_FILE_NAME && !withoutImg && (
              <div className="w-full" onClick={() => setPostModalOpen(true)}>
                <img
                  src={
                    data?.POST_FILE_NAME ||
                    "http://lamp3.ncaa.gov.ng/pub/1705920708.jpeg" ||
                    "/assets/images/profiles/avatar-07.jpg"
                  }
                  alt=""
                  className="w-full max-h-[22rem] object-cover object-top cursor-zoom-in"
                />
              </div>
            )}

            {/* {data?.POST_FILE_NAME} */}

            <div className="flex justify-between px-9">
              {/* <div>
                      <span className="text-xl font-bold text-gray-600">
                        Today Our Three Cute Puppy Dog Birthday !!!!
                      </span>
                    </div> */}
              {/* <div className=" space-x-1 text-slate-300">
                      <span className="text-xs font-semibold">{data?.DIRECTORATE}</span>
                    </div> */}
              {/* <div className=" w-8 h-8 rounded-md bg-xinputLight flex items-center justify-center">
                      <CgPentagonUp size={18} color="gray" className="font-light" />
                    </div> */}
            </div>

            <div className="px-9 text-gray-500">
              <span dangerouslySetInnerHTML={{ __html: data?.POST_CONTENT }} />
            </div>
          </>
        )}

        {/* data?.TOTAL_LIKES > 0 */}
        {false && (
          <div className="flex items-center px-9 py-3">
            <div className="flex ">
              {data?.LIKES?.slice(0, 3)?.map((lik) => (
                <div
                  key={lik?.USER_ID}
                  className="border-[1.5px] border-white rounded-full  -ml-[0.6rem] flex"
                  
                >
                  {/* <img
                      src="/assets/images/profiles/avatar-03.jpg"
                      alt="User"
                      className="rounded-full object-cover "
                    /> */}

                  {lik?.FILE_NAME ? (
                    <NextAvatar
                      src={
                        lik?.FILE_NAME ||
                        "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }
                      title={lik?.LAST_NAME + " " + lik?.FIRST_NAME}
                    />
                  ) : (
                    <NextAvatar
                      name={lik?.FIRST_NAME?.trim()[0]}
                      className=" cursor-pointer"
                      title={lik?.LAST_NAME + " " + lik?.FIRST_NAME}
                    />
                  )}
                </div>
              ))}

              {/* <div className="border-[1.5px] border-white rounded-full  -ml-[0.6rem] flex ">
                <NextAvatar name="J" />
                <img
                  src="/assets/images/profiles/avatar-05.jpg"
                  alt="User"
                  className="rounded-full  object-cover "
                />
              </div>
              <div className="border-[1.5px] border-white rounded-full  -ml-[0.6rem] flex">
                <NextAvatar name="O" />
                <img
                  src="/assets/images/profiles/avatar-06.jpg"
                  alt="User"
                  className="rounded-full  object-cover "
                />
              </div> */}
            </div>

            <div className="mx-3 py-3 ">
              <span className="font-bold text-sm">
                {data?.LIKES?.length > 3
                  ? `+${data?.TOTAL_LIKES - 3} people react to this post`
                  : data?.TOTAL_LIKES === 1 &&
                    `${data?.TOTAL_LIKES} person react to this post`}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* <div className="border-y border-x-inputLight flex justify-between text-sm items-center font-semibold py-4 px-9">
          <div className="flex gap-x-5 items-center ">
            <div className="flex gap-x-3  text-2xl">
              <span className=" cursor-pointer hidden sm:block">😀</span>
              <span className=" cursor-pointer hidden sm:block">🥰</span>
              <span className=" cursor-pointer hidden sm:block">😥</span>
              <span className=" cursor-pointer hidden md:block">😳</span>
              <span className=" cursor-pointer">👍</span>
            </div>
            <div className="-mx-2">
              <span>+12</span>
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex gap-x-1">
              <span>{data?.COMMENT_COUNT}</span>
              <span>comment</span>
              
            </div>
            <div className="flex gap-x-1">
              <span>985</span>
              <span>share</span>
            </div>
          </div>
        </div> */}

      <div className="border-y border-[0.2px] border-opacity-90 border-y-xinputLight flex justify-between xl:px-30 px-8  md:px-12 items-center py-4 bg-post-react-color font-medium gap-x-2 md:gap-x-6 ">
        <div className="flex gap-x-2 items-center cursor-pointer relative">
          {/* {showReactionEmoji && (
            <div className="absolute z-50 -top-8 -right-32">
              <ReactEmojiPopup />
            </div>
          )} */}
          {/* <HiOutlineEmojiHappy size={20} /> */}

          <Button
            onClick={likePost}
            radius="full"
            size="sm"
            className="bg-slate-50/90 "
          >
            {" "}
            {/* <ThumbsUp size={15} /> <span className="text-medium">0</span>{" "} */}
            <SlLike color="blue" size={20} />
            <span className="text-sm">
              {data?.TOTAL_LIKES === 0 ? "" : data?.TOTAL_LIKES}
            </span>{" "}
          </Button>

          {/* <SlLike color="blue" size={20} />
          <span>
            Like
          </span> */}
        </div>

        <div className="flex gap-x-2 items-center cursor-pointer">
          <Button
            onClick={() =>
              data?.COMMENTS?.length > 0 ? setShowComment(!showComment) : {}
            }
            radius="full"
            size="sm"
            className="bg-purple-50/40 "
          >
            {" "}
            {/* <ThumbsUp size={15} /> <span className="text-medium">0</span>{" "} */}
            <MessageSquare color="purple" size={18} />
            <span>
              Comment{" "}
              {data?.COMMENTS?.length > 0 && "(" + data?.COMMENTS?.length + ")"}{" "}
            </span>
          </Button>

          {/* <MessageSquare color="purple" size={18} />
          <span>
            Comment{" "}
            {data?.COMMENTS?.length > 0 && "(" + data?.COMMENTS?.length + ")"}{" "}
          </span> */}
        </div>
        <div className="flex gap-x-2 items-center">
              {
                 data?.LIKES?.slice(0,5)?.map(lik => (
                  <div key={lik?.USER_ID} className="border-[1.5px] border-white rounded-full  -ml-[0.6rem] flex"
                  onClick={()=>setCurrent(lik)}
                  >
                    {
                      lik?.FILE_NAME ? 
                      <Tooltip
                      showArrow={true}
                      placement='bottom'
                      content={lik?.LAST_NAME + " " + lik?.FIRST_NAME}
                    >
                       <NextAvatar size="sm" src={lik?.FILE_NAME ||  "https://i.pravatar.cc/150?u=a04258114e29026702d"} /> 
                    </Tooltip>
                     :

                     <Tooltip
                     showArrow={true}
                     placement='bottom'
                     content={lik?.LAST_NAME + " " + lik?.FIRST_NAME}
                   >
                    <NextAvatar size="sm" name={lik?.FIRST_NAME?.trim()[0]}  className=" cursor-pointer" />
                   </Tooltip>

                      
                    }

                  </div>

                 ))
              }

            <div className="mx-3 py-3 ">
              <span className="font-bold text-sm">
                {data?.LIKES?.length > 4
                  ? `+${data?.TOTAL_LIKES - 4}`
                  : data?.TOTAL_LIKES === 1 &&
                    ``}
              </span>
              {/* <span className="font-bold text-sm">
                {data?.LIKES?.length > 5
                  ? `+${data?.TOTAL_LIKES - 5} people react`
                  : data?.TOTAL_LIKES === 1 &&
                    `${data?.TOTAL_LIKES} person react `}
              </span> */}
            </div>





          {/* <Popover placement="top">
            <PopoverTrigger>
              <Button
                variant="light"
                size="sm"
                className=" !w-8 !h-8 !rounded-full"
              >
                {" "}
                <Share className="text-yellow-600" size={18} />
            
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-3 flex gap-3 flex-wrap w-44 justify-center ">
                <FacebookShareButton url="http://lamp3.ncaa.gov.ng">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600/70 cursor-pointer">
                    {" "}
                    <FacebookIcon size={20} color="white" />{" "}
                  </div>
                </FacebookShareButton>

                <TwitterShareButton url="http://lamp3.ncaa.gov.ng">
                  <div className="bg-gray-800 rounded-full w-10 h-10  flex items-center justify-center hover:bg-gray-800/70 cursor-pointer">
                    {" "}
                    <FaXTwitter size={18} color="white" />{" "}
                  </div>
                </TwitterShareButton>

                <LinkedinShareButton url="http://lamp3.ncaa.gov.ng">
                  <div className="bg-blue-800 rounded-full w-10 h-10  flex items-center justify-center  hover:bg-blue-800/70 cursor-pointer">
                    {" "}
                    <LiaLinkedin size={22} color="white" />{" "}
                  </div>
                </LinkedinShareButton>

                <TelegramShareButton url="http://lamp3.ncaa.gov.ng">
                  <div className="bg-blue-400 rounded-full w-10 h-10  flex items-center justify-center  hover:bg-blue-400/70 cursor-pointer">
                    {" "}
                    <GrSend size={20} color="white" />{" "}
                  </div>
                </TelegramShareButton>

                <WhatsappShareButton url="http://lamp3.ncaa.gov.ng">
                  <div className="bg-green-800/70 rounded-full w-10 h-10  flex items-center justify-center hover:bg-green-800/50 cursor-pointer">
                    {" "}
                    <TbBrandWhatsapp size={20} color="white" />{" "}
                  </div>
                </WhatsappShareButton>

                <RedditShareButton url="http://lamp3.ncaa.gov.ng">
                  <div className="bg-red-500 rounded-full w-10 h-10  flex items-center justify-center  hover:bg-red-500/70 cursor-pointer">
                    {" "}
                    <AiFillRedditCircle size={18} color="white" />{" "}
                  </div>
                </RedditShareButton>
              </div>
            </PopoverContent>
          </Popover> */}

          {/* <Share className="text-yellow-600" size={18} />
          <span>Share</span> */}
        </div>
      </div>

      <div className="">
        {/* comments */}

        {/* <Comment  withReply={true}/> */}
        {showComment && (
          <div>
            {data?.COMMENTS?.map((comment) => (
              <Comment key={comment?.COMMENT_ID} data={comment} />
            ))}

            {data?.TOTAL_COMMENTS > 10 &&
              data?.TOTAL_COMMENTS > data?.COMMENTS?.length && (
                <div className="grid place-items-center text-mainColor my-2 mb-4 ">
                  <div
                    className="flex gap-3 items-center cursor-pointer bg-xinputLight px-3 py-2 rounded-lg"
                    onClick={loadMoreComment}
                  >
                    {/* isLoadCommentPending */}
                    <IoReloadOutline
                      className={`${isLoadCommentPending && "animate-spin"}  `}
                    />
                    <span>Load More Replies</span>
                  </div>
                </div>
              )}
          </div>
        )}

        <div className="flex justify-center items-center pt-3 relative gap-x-2">
          {/* {showEmoji && (
            <div className="absolute bottom-0 right-0 z-50" ref={emojiRef}>
              <EmojiPicker onEmojiClick={addEmoji} />
            </div>
          )} */}
          <div className="flex items-center py-3   bg-xinputLight rounded-md w-[80%] md:w-[85%] ">
            <input
              name="msg"
              id="msg"
              value={msgValue}
              onChange={(e) => setMsgValue(e.target.value)}
              className="outline-none border-none bg-transparent  px-4 w-full placeholder:text-xs placeholder:text-main-text-color"
              type="text"
              placeholder="Write A Comment..."
            />

            <div className="ml-auto flex relative">
              <button className="text-gray-500 outline-none px-3  ">
                {" "}
                {/* <HiOutlineEmojiHappy onClick={() => setShowEmoji(true)} />{" "} */}
              </button>
              {/* <button className="px-3 text-gray-500 outline-none">
                  {" "}
                  <Camera size={16} />{" "}
                </button> */}
            </div>
          </div>
          <button
            onClick={addComment}
            disabled={!msgValue}
            type="submit"
            className="
                  rounded-full 
                  p-2 disabled:bg-sky-300/20 
                  bg-sky-500
                  cursor-pointer 
                  hover:bg-sky-600 
                  transition
                "
          >
            <HiPaperAirplane size={18} className="text-white rotate-90" />
          </button>
        </div>
      </div>

      <PostModal
        data={data}
        isOpen={postModalOpen}
        onClose={() => setPostModalOpen(false)}
      />

    {
        <ChatDrawer
          isOpen={showLargeChatContainer}
          onClose={() => setShowLargeChatContainer(false)}
          user={selectedChat}
          setUser={() => setSelectedChat(null)}
        />
      }
    </div>
  );
};

export default Postfeed;
