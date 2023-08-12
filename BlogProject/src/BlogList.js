const  BlogList= ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // // console.log(props, blogs)
    // const title = props.title;
   return (
      <div className="blogs-list">
      <h2>{title}</h2>
      {blogs.map((blog)=>(
          <div className="blog-preview" key = {blogs.id} >
              <h2>{blogs.title}</h2>
              <p>Written by {blogs.author}</p>
              <button onClick={()=> handleDelete(blogs.id)}>Delete Blog</button>
          </div>
      ))}
      </div>
    );
} 
export default BlogList ;