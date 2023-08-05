import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import homeArrowIcon from "../images/Vector 12.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/reducers/postThunkMiddleware";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  const [showUserInfo, setShowUserInfo] = useState(false);
  const { id } = useParams();
  // console.log(typeof id);

  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  //   console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="detailPage-side-heading">
        <div className="arrowIcon">
          <img
            src={homeArrowIcon}
            alt="arrow-icon"
            onClick={() => navigate("/")}
          />
        </div>
        <h1>Post Number #{id}</h1>
      </div>

      <div className="specific-post-detail">
        <div className="specific-post-image">
          <img src={`https://picsum.photos/200?random=${id}`} alt="post-img" />
        </div>

        <div className="post-content">
          <button className={showUserInfo ? "inactive-btn" : "active-btn"} onClick={()=>setShowUserInfo(false)}>Detail</button>
          <button className={showUserInfo ? "active-btn" : "inactive-btn"} onClick={()=>setShowUserInfo(true)}>User Info</button>
          {showUserInfo ? (
            <p className="post-text">
              Post Was Posted By{" "}
              {posts && posts.length > 0
                ? posts.find((post) => post.id.toString() === id).userId
                : null}
              .
            </p>
          ) : (
            <p className="post-text">
              {posts && posts.length > 0
                ? posts.find((post) => post.id.toString() === id).body
                : null}
            </p>
          )}
        </div>
      </div>

      <div className="page-side-heading">More Posts</div>
      <Card posts={posts} />
    </div>
  );
};

export default DetailPage;
