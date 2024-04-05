import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";



const Displayuser= () => {
  const postdata = useSelector((state) => state.post);
  const token = useSelector((state ) => state.token.text);
  const fetchedData = useSelector((state)=>state.showpost.data);


  return (
    <>
     <div>
  {Array.isArray(postdata) && (
    <div className="flex flex-wrap mr-4">
      {fetchedData.map(
        (post) =>
       
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-8 mb-4 relative right-1">
             
              <img
          
                className="w-full h-auto object-cover rounded hover:opacity-80"
                src={`http://localhost:4000/uploads/${post.images}`}
                alt="Post"
                id="userposts"

                
              />
            </div>
          ) 
      }
    </div>
  )}
</div>

    </>
  );
};

export default Displayuser;
