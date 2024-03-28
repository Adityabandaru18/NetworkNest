import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

interface Post {
  post: File | null;
}

const Displayuser: React.FC = () => {
  const postdata = useSelector((state: Post) => state.post);
  console.log(postdata);

  return (
    <>
     <div>
  {Array.isArray(postdata) && (
    <div className="flex flex-wrap mr-4">
      {postdata.map(
        (post) =>
          post.image.name && (
            <div key={post.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-4 relative right-5">
              {/* Adjust width for smaller screens (full width), medium screens (2 images in a row), and larger screens (3 images in a row) */}
              <img
                src={URL.createObjectURL(post.image)}
                className="w-full h-auto object-cover rounded"
                alt="Post"
                id="userposts"
              />
            </div>
          )
      )}
    </div>
  )}
</div>

    </>
  );
};

export default Displayuser;
