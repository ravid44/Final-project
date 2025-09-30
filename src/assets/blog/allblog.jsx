import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function AllBlog({
  thumbnail,
  title,
  content,
  author,
  categories,
  number_of_likes,
  number_of_bookmarks,
  id,
  created_at,
  updated_at,
}) {
  return (
    <section className="flex justify-center items-center">
      <div className="border border-cyan-400 w-[80%] p-4 rounded-lg shadow mb-[3rem] mt-[4rem]">
        
        <Link to={`/blogs/${id}`}>
          <img src={thumbnail} alt={title} className="h-auto w-[60%] mx-auto" />
        </Link>

       
        <Link to={`/blogs/${id}`}>
          <h2 className="text-xl font-bold mt-2">{title}</h2>
        </Link>

        <p>{content.length > 100 ? content.slice(0, 100) + "..." : content}</p>

        <div className="mt-2">
          <h3 className="text-3xl text-blue-500 uppercase">
            Author: {author.username}
          </h3>
          <h3>Author Email: {author.email}</h3>
          <h3>Author ID: {author.id}</h3>
          <h3>Categories: {categories.map((cat) => cat.name).join(", ")}</h3>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          <span>Created At: {created_at}</span>
          <br />
          <span>Updated At: {updated_at}</span>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="pr-[1rem] text-blue-400 text-[1.5rem]"
          />
          <span>Number of Likes: {number_of_likes}</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBookBookmark}
            className="pr-[1rem] text-green-300 text-[1.5rem]"
          />
          <span>Number of Bookmarks: {number_of_bookmarks}</span>
        </div>
      </div>
    </section>
  );
}
