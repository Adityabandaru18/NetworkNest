import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Allposts } from "../redux/slices/ShowpostsAPI";
import SuggestedUsers from "./SuggestedUsers";

const Suggested = () => {

  const user_token = useSelector((state) => state.token.text);
  const fetchedData = useSelector((state) => state.showpost.Alldata);
 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(Allposts())
  }, [dispatch]);

  return (
    <>
      <div className="sticky top-5">
        <p className="text-center text-2xl font-semibold">NetWork Users</p>
        <br />
   {fetchedData
  ? fetchedData
      .filter((data, index, self) => {
        return (
          data.name !== "" &&
          self.findIndex((item) => item.token === data.token && item.token !== user_token) === index
        );
      })
      .map((data, index) => (
        <React.Fragment key={index}>
          <SuggestedUsers
            name={data.name}
            user_image={data.user_image}
          />
        </React.Fragment>
      ))
  : null}




        </div>
     
    </>
  )
}

export default Suggested