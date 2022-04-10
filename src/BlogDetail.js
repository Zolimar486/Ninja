import{useHistory, useParams,  } from 'react-router-dom';

import useFetch from './useFetch';

const BlogDetail = () => {
    const {id} = useParams();
    const history = useHistory();
    
   const {data:blog,isPending} = useFetch('http://localhost:8000/blogs/' +  id);
   const handleClick = () => {
       fetch('http://localhost:8000/blogs/' + blog.id, {
           method:'DELETE'
       }).then(() => {
           history.push('/');
       })
   }

  

    return(
        <div className="detail">
          {isPending && <div> Loading...please wait</div>}
          {blog && (
              <article>
                  <h3>{blog.title}</h3>
                  <p>Written by {blog.author}</p>
                  <p>{blog.body}</p>
                  <button className='btn' onClick={handleClick} >Delete</button>
              </article>
          )}
         </div>
    )
}

export default BlogDetail;