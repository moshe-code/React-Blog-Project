const CreateBlog = () => {
    return (
        <div className="CreateBlog-root">
            <br></br>
        <h1>CreateBlog</h1>
        <div className="blog-container">

            <label htmlFor="blog-title">Title</label>
            <input type="text" />
            <br />
            <label htmlFor="">Author</label>
            <input type="text" name="" id="" />
            <br />
            <label htmlFor="">Body</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br />
            <button id="submit-button">Submit</button>

            
            </div>       
        </div>


    )
}

export default CreateBlog