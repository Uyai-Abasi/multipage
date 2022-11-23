import React,{useEffect,useState} from 'react'
import axios from "axios";
import gif from '../src/loadingg.gif'
function Blogpost() {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get("https://sparsh.pythonanywhere.com/blog/")
        .then((res) => {
          setBlog(res.data);
          console.log(blog);
          // setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
    return (
      <div>
        <h1>GET POST</h1>
        {loading ? (
          <>
            <img src={gif} alt="gif" />
          </>
        ) : (
          <>
            {blog.map((blogs) => (
              <div key={blogs.id}>
                <h1>{blogs.title}</h1>
                <h2>{blogs.text}</h2>
              </div>
            ))}
          </>
        )}
      </div>
    );
}

export default Blogpost