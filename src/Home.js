
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => { 
    const {data:blogs, isPending} = useFetch('http://localhost:8000/blogs')

   return(
        <div className="home">
            {isPending && <div>Loading...wait a few seconds..</div>}
           { blogs &&<BlogList blogs={blogs} title='All Blogs list' />}
          { blogs &&<BlogList blogs={blogs.filter((blog) => blog.title==='Oil Production' )} title='Zolimars Blog'/>}
           
            
        </div>
    )
}

export default Home;