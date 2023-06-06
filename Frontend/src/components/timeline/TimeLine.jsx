import React, { useEffect, useState } from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
// import { Posts } from "../../dummyDate";
import "./TimeLine.css";
import axios from "axios";

export const TimeLine = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/641ad7e008ae49dc8e42054d");
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};
