import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [Author, setAuthor] = useState('');
return (
<div className="create">
  <h2>Add new blog</h2>
  <form>
    <label>Blog Title:</label>
    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
    <label>Blog body:</label>
    <textarea required vakue= {body} onChange={(e)}></textarea>
    <label>Blog Author:</label>
    <select>
      <option value="mario">Mario</option>
      <option value="yoshi"></option>
    </select>
    <button>Add Blog</button>
    <p>{ title} </p>
    <p>{Author}</p>
  </form>
</div>
)
};
export default Create;