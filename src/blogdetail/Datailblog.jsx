import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavbarComponent } from "../nav/navigation";
import { ComponentFooter } from "../footer/footer";

export default function BlogDetail() {
  const { id } = useParams(); // get blog ID from URL

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://blog-api.srengchipor.dev/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <section>
      {/*header*/}

      <NavbarComponent />

      <div className="flex justify-center items-center gap-[10rem] mt-[7rem] ml-[2rem]">
        <div>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="my-4 w-[500px] ml-auto mr-auto rounded-[1.2rem]"
          />
          <p className="text-[1rem] uppercase font-bold text-blue-400">
            {blog.content}
          </p>
        </div>

        <div className="mt-[1rem]">
          <div className="text-[1.5rem]">
            <h3>Username: {blog.author.username}</h3>
            <h4>Email: {blog.author.email}</h4>
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

      {/*footer*/}
      <div className="mt-[5rem]">
        <ComponentFooter />
      </div>
    </section>
  );
}
