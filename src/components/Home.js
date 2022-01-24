import { useState, useEffect } from 'react'
import BlogItem from './BlogItem'

const Home = () => {
    const [blogs, setBlogs] = useState([])
    const [details, useDetails] = useState([])

    const loadDetails = () => {


        console.log("load details..");
        fetch(`http://localhost:8000/blogs1`)
        .then(res => res.json)
    }

    const loadData = () => {
        console.log("load data...")
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }
    useEffect(() => {
        console.log("useEffect -> Home")
        loadData()
    }, [])

    return (
        <div className="Home-root">
            <br></br>
            <h1>Home</h1>
            <h2>Here is list of blogs.</h2>
            <div>
                {
                    blogs.map((blog) => {
                        return <BlogItem key={`blog-item-commponenet${blog.id}`} blog={blog} />
                    })
                }



            </div>

        </div>
    )
}

export default Home