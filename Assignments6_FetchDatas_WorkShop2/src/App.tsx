import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";

import classNames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import "./App.scss";
import avatar from "./images/bozai.png";
import avater1 from "./images/jack.png";
import avater2 from "./images/avatar2.png";

// current logged in user info
const user = {
  uid: "30009257",
  avatar,
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];
interface Comment {
  rpid: number | string;
  user: {
    uid: string;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
}

function useList() {
  const [commentList, setCommentList] = useState<Comment[]>([]);
  // Fetch the data from the server
  useEffect(() => {
    async function getDefaultList() {
      const response = await fetch("http://localhost:3000/list");
      const result = await response.json();

      setCommentList(_.orderBy(result, "like", "desc"));
    }
    getDefaultList();
  }, []);
  return {
    commentList,
    setCommentList,
  };
}
const ControlApp = () => {
  const { commentList, setCommentList } = useList();

  // Only display delete for current log in user
  const deleteHandler = (rid: number | string) => {
    const result = commentList.filter((comments) => comments.rpid !== rid);
    setCommentList(result);
  };
  // Extract likes from state
  const defaultLikes = commentList.map((items) => items.like);
  const [likes, setLike] = useState(defaultLikes);

  // Handle likes
  const handleLikes = (rpid: string | number) => {
    const updateLikes = commentList.map((items) => {
      if (items.rpid === rpid) {
        return { ...items, like: items.like + 1 };
      } else {
        return items;
      }
    });
    const stateLike = updateLikes.map((comments) => comments.like);
    // Update state to comment
    setLike(stateLike);

    // Update the state
    setCommentList(updateLikes);
  };

  // Display and highlight tabs
  const [activeType, setActiveType] = useState("hot");
  const changeActiveType = (type: string) => {
    setActiveType(type);
    if (type === "hot") {
      setCommentList(_.orderBy(commentList, "like", "desc"));
    } else {
      setCommentList(_.orderBy(commentList, "ctime", "desc"));
    }
  };
  // Post comment
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [newCommentValue, setNewCommentValue] = useState("");

  // Function to add new comment
  const addNewComments = () => {
    const newComment = newCommentValue.trim();
    if (newComment !== "") {
      const comment: Comment = {
        rpid: uuidv4(),
        user,
        content: newComment,
        ctime: dayjs().format("YYYY-MM-DD HH:mm"),
        like: 0,
      };
      setCommentList([...commentList, comment]);
      setNewCommentValue(""); // Clear the textarea
      if (textAreaRef.current) {
        textAreaRef.current!.focus(); // Focus on the textarea after posting
      }
    }
  };
  // Function to handle the text area
  const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentValue(e.currentTarget.value);
  };

  // Function to handle posting
  const newPostHandler = () => {
    addNewComments();
  };
  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">{"Comments"}</span>
            {/* Like */}
            <span className="total-reply">{commentList.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab) => (
              <span
                key={tab.type}
                // className={
                //   activeType == tab.type ? "nav-item active" : "nav-item"
                // }
                // Use ClassNames
                className={classNames("nav-item", {
                  active: tab.type === activeType,
                })}
                onClick={() => changeActiveType(tab.type)}
              >
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* Comment Using control Comonent */}
            <textarea
              className="reply-box-textarea"
              value={newCommentValue}
              onChange={handleNewCommentChange}
              placeholder="tell something..."
            />
            <div className="reply-box-send" onClick={newPostHandler}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentList.map((items) => (
            <ReplyItems
              items={items}
              deleteOne={deleteHandler}
              likeOne={handleLikes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
// State is in app: The functionality to define state should be in ControlApp: Props is readOnly
export default ControlApp;
type ItemProps = {
  items: Comment;
  deleteOne: (rid: number | string) => void;
  likeOne: (rpid: string | number) => void;
};
function ReplyItems(props: ItemProps) {
  const { items, deleteOne, likeOne } = props;
  return (
    <div className="reply-item" key={items.rpid}>
      {/* profile */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            // src={require("./images/jack.png")}
            src={items.user.avatar}
            alt="Profile"
          />
        </div>
      </div>

      <div className="content-wrap">
        {/* username */}
        <div className="user-info">
          <div className="user-name">{items.user.uname}</div>
        </div>
        {/* comment content */}
        <div className="root-reply">
          <span className="reply-content">{items.content}</span>
          <div className="reply-info">
            {/* comment created time */}
            <span className="reply-time">{items.ctime}</span>
            {/* total likes */}
            <span className="reply-time" onClick={() => likeOne(items.rpid)}>
              {""}
              Likes: {items.like}
            </span>
            {/* When to delete: When post userId is the same as currentUser id */}
            {user.uid === items.user.uid && (
              <span
                className="delete-btn"
                onClick={() => deleteOne(items.rpid)}
              >
                Delete
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
