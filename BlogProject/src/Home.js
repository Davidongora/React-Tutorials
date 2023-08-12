import {useEffect, useState} from 'react';
import BlogList from './BlogList';
//use state hooks are used to create reactive values
// const Home = () => {
//     // let name = 'mario';
//     // const handleClick = () => {
//         // let name = 'luigi';
//         // console.log(name);
//     const [name, setName] =useState('mario');
//     const [age, setAge] = useState(25);
//     // const handleClickAgain = (name)=>{
//     //     console.log("hello" + name);
//     const handleClick =() => {
//         setName('luigi');
//     }
//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{ name } is {age}</p>
//             <button onClick = {handleClick()}>Click Me</button>
//             {/* <button onClick = {(name)} */}
//         </div>
//      );
// }


//  const Home = () => {
//     const [blogs, setBlogs] = useState([
//         {title: "my new website", body: "Lorem ipsum dolor sit amet.", id : 1},
//         {title: "my new website", body: "Lorem ipsum dolor sit amet.", id : 2},
//         {title: "my new website", body: "Lorem ipsum dolor sit amet.",id : 3}
//     ]);
//     const [name, setName] = useState('mario');

//     const handleDelete=(id) => {
//         const newBlogs= blogs.filter(blogs => blogs.id !==id);
//         setBlogs(newBlogs);
//     }
//     useEffect(()=>{
//         fetch("http://localhost:8000/blogs")
//             .then(res=>{
//                 return res.json(); 
//             })
//             .then(data=>{
//                 console.log(data);
//                 setBlogs(data)
//             })
//         }, []);
//         //console.log('use effect ran');
//         // console.log(blogs);
//         // console.log(name)
//     // }, [name]);

//     return (
//         <div className="home">
//             <BlogList blogs={blogs} title="All Blogs"/>
//             <BlogList blogs={blogs.filter((blogs)=> blogs.author === 'mario')} title="Mario's blogs"/>
//             <button onClick={()=> setName('luigi')}change Name></button>
//         </div>
//     )
//  }

const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  
    return (
      <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} /> }
      </div>
    );
  }
   

export default Home;
//react developer tools gives us more features to use in dev mode
//props to make code reusable
//pass components in form of props
//use effect is used to fetch data in a component
//watch on json and json server
