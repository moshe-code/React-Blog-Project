import { useState } from "react"


const Home = () => {
    const [todoList,setTodoList] = useState([])
   

    
    
    const handleRequestAllTodos = () =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data =>{
            setTodoList(data);
        })

        .catch(e => {
            console.log(e);
        })
            
    
       
    }

    return (
        <div className="Home-root">
            <br></br>
            <h1>To do list</h1> 
            <button 
                onClick={handleRequestAllTodos}
                >Request all todos</button>  
                <ul>
                    {
                        todoList.map(element =>{
                            return <li key={`todo-item-${element.id}`}>{element.title}</li>
                        })
                    }
                    </ul>            
        </div>
    )
}

export default Home