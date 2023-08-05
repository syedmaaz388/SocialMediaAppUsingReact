import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../redux/reducers/postThunkMiddleware";

import searchIcon from "../images/Vector.png"
import Card from "./Card"
import Navbar from "./Navbar";


const HomePage =()=>{

    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);
    // console.log(posts)
  
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

          <div className="page-content">
            <div className="page-side-heading">Social Media For Travellers</div>
            <div className="search-bar">
            <button><img src={searchIcon} alt="icon" /></button>
                <input type="text"  placeholder="Search here..."/>
            </div>
          </div>
          <Card posts={posts}/>

        </div>
      );
}

export default HomePage