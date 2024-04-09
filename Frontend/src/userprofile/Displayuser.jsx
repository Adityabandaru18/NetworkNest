import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { useEffect } from "react";
import { Showpost } from "../redux/slices/ShowpostsAPI";

const Displayuser = () => {
  const postdata = useSelector((state) => state.post);
  const token = useSelector((state) => state.token.text);
  const fetchedData = useSelector((state) => state.showpost.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Showpost(token));
  }, [dispatch])

  return (
    <>
<div>
  {Array.isArray(postdata) && fetchedData.length > 0 ? (
    <div className="flex flex-wrap mr-4">
      {fetchedData.map((post, index) => (
        post.images && (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-8 mb-4 relative right-1">
            <img
              className="w-full h-auto object-cover rounded hover:opacity-80"
              src={`http://localhost:4000/uploads/${post.images}`}
              alt="Post"
              id="userposts"
            />
          </div>
        )
      ))}
    </div>
  ) : (
    <div className="flex justify-center items-center font-light text-3xl mt-28">

    <p>No posts available</p>
    </div>
  )}
</div>

    </>
  );
};

export default Displayuser;
