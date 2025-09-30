import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavbarComponent } from "../nav/navigation";

export default function BlogDetail() {
  const { id } = useParams(); // get blog ID from URL

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://blog-api.devnerd.store/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <section>
      {/*header*/}

      <NavbarComponent />

      <div className="flex items-center gap-[10rem] mt-[10rem] ml-[4rem]">
        <div>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="my-4 w-[500px] ml-auto mr-auto"
          />
          <p className="text-[1.1rem] uppercase font-bold text-blue-400">
            {blog.content}
          </p>
        </div>

        <div>
          <div className="text-[1.5rem] mb-[2rem]">
            <h3>Username: {blog.author.username}</h3>
            <h4>Username: {blog.author.email}</h4>
          </div>

          <div className="text-[1.2rem]">
            <span className="text-blue-400">
              {blog.categories.map((cate) => cate.name)}
            </span>
            <br />

            <div className="text-red-400">
              <span>Number of Likes: {blog.number_of_likes}</span>
              <br />
              <span>Number of Likes: {blog.number_of_bookmarks}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
