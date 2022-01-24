import { useParams } from "react-router-dom"

const BlogDetails = () => {
    const { id } = useParams
    console.log(id);

    let b = {
        title: "Title",
        body: "body",
        author: 'author'
    }

return(
    <div>
        <h1>{b.title}</h1>
        <h3>Author:{b.author}</h3>
        <h3>{b.body}</h3>
    </div>

)

}

export default BlogDetails