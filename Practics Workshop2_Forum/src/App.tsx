import { useEffect, useState } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";

// Comment List data
type User = {
  uid: string;
  avatar: string;
  uname: string;
};

type Post = {
  rpid: number;
  user: User;
  content: string;
  ctime: string;
  like: number;
  id: string;
};

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

const App = () => {
  const [post, setPost] = useState<Post[]>([]);
  console.log(post);
  useEffect(() => {
    async function getPostData() {
      const response: Response = await fetch(
        "http://localhost:7003/defaultList"
      );
      const result: Post[] = await response.json();
      setPost(result);
    }
    getPostData();
  }, []);
  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            <span className="nav-item">Top</span>
            <span className="nav-item">Newest</span>
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
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {post.map((items) => (
            <div className="reply-item" key={items.rpid}>
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
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
                    <span className="reply-time">{"2023-11-11"}</span>
                    {/* total likes */}
                    <span className="reply-time">Like:{items.like}</span>
                    <span className="delete-btn">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
