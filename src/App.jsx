import { useEffect, useState } from "react";
import "./App.css";
import Login from "./auth/login";
import { NavbarComponent } from "./nav/navigation";
import { getBlogs } from "./utils/blogs";
import AllBlog from "./assets/blog/allblog";
import { useNavigate } from "react-router-dom";
import Listcategories from "./category/listcategories";
import { ComponentFooter } from "./footer/footer";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const getAllBlog = async () => {
    
    const myBlog = await getBlogs(); 
    console.log(myBlog.blogs);

   
    const myCategories = myBlog.categories || []; 
    setBlogs(myBlog.blogs);
    setCategories(myCategories);

    console.log(myCategories);
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  // FIXED spelling of the function
  const handleGetCategory = (category) => {
    navigate("/getByCategory", { state: category });
  };

  return (
    <>
      <NavbarComponent />

      <section>
        <img className="w-[100%] ml-5" src="public/com-image.jpg" alt="Angkor Wat" />
      </section>

      {/* List of categories */}
      <section>
        {categories.map((categoryList, index) => (
          <Listcategories
            key={index}
            getCategory={() => handleGetCategory(categoryList.blogs)} 
            page={categoryList.page}
            pageSize={categoryList.page_size}
          />
        ))}
      </section>

      {/* Display blogs */}
      <section>
        {blogs.map((blog, index) => (
          <AllBlog
            key={index}
            id={blog.id}
            thumbnail={blog.thumbnail}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            categories={blog.categories}
            number_of_likes={blog.number_of_likes}
            number_of_bookmarks={blog.number_of_bookmarks}
          />
        ))}
      </section>
      
      {/*footer*/}
      <ComponentFooter />

    </>
  );
}

export default App;
