
import * as types from "./actionType"



export const fetchPostsRequest = () => ({
    type: types.FETCH_POSTS_REQUEST,
  });
  
  export const fetchPostsSuccess = (posts) => ({
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts,
  });
  
  export const fetchPostsFailure = (error) => ({
    type: types.FETCH_POSTS_FAILURE,
    payload: error,
  });


//   export const fetchPosts = () => async (dispatch) => {
//     dispatch(fetchPostsRequest());
  
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
  
//       dispatch(fetchPostsSuccess(data));
//     } catch (error) {
//       dispatch(fetchPostsFailure(error.message));
//     }
//   };
// export const fetchData = ()=>{
//     return (dispatch)=>{
//         dispatch(fetchDataRequest())
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(async response =>{
//             dispatch(fetchDataSuccess(await response.json()))
//         } )
        
//         .catch(error=>dispatch(fetchDataFailue(error)))
//     }
// }

// 