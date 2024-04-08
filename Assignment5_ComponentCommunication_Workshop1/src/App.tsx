import { ChangeEvent, MouseEvent, useRef, useState } from "react";

import classNames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import "./App.scss";
import avatar from "./images/bozai.png";
import avater1 from "./images/jack.png";
import avater2 from "./images/avatar2.png";

// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: "13258165",
      avatar: avater1,
      uname: "Jay Zhou",
    },
    // comment content
    content: "Nice, well done",
    // created datetime
    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: avater2,
      uname: "Song Xu",
    },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
  {
    rpid: 4,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content: "This is second post from john",
    ctime: "10-19 09:00",
    like: 66,
  },
];
// current logged in user info
const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

// Comment Props
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
type Props = {
  addCommentList: Comment[];
  onGetUpdate: (comments: Comment[]) => void;
};
function NewComment(props: Props) {
  const { addCommentList, onGetUpdate } = props;

  // Delete Handler
  const deleteHandler = (rid: number | string) => {
    //  Pass the id
    const result = addCommentList.filter((comments) => comments.rpid !== rid);
    onGetUpdate(result);
  };

  // Handle likes
  const handleLikes = (rpid: string | number) => {
    console.log(addCommentList);
    const updatedUsers = addCommentList.map((item) =>
      item.rpid === rpid ? { ...item, like: item.like + 1 } : item
    );
    onGetUpdate(updatedUsers);
  };

  return (
    <div className="reply-list">
      {/* comment item */}
      {addCommentList.map((items) => (
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
                <span
                  className="reply-time"
                  onClick={() => handleLikes(items.rpid)}
                >{`Likes: ${items.like} `}</span>
                {/* When to delete: When post userId is the same as currentUser id */}
                {user.uid === items.user.uid && (
                  <span
                    className="delete-btn"
                    onClick={() => deleteHandler(items.rpid)}
                  >
                    Delete
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const ControlApp = () => {
  const [commentList, setCommentList] = useState<Comment[]>(
    _.orderBy(defaultList, "like", "desc")
  );
  // Child to Message
  const receiveUpdateFromChild = (newUpdate: Comment[]) => {
    setCommentList(newUpdate);
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
  // Count Comment
  const [commentCount, setCommentCount] = useState(4);

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
      setCommentCount(commentCount + 1);
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
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{commentCount}</span>
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
        {/* Send state variable to Child component */}
        <NewComment
          addCommentList={commentList}
          onGetUpdate={receiveUpdateFromChild}
        />
      </div>
    </div>
  );
};

export default ControlApp;
