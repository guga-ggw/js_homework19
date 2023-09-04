import { useEffect, useState } from "react";
import useRequest from "../Hooks/useRequest";
import useFetch from "../Hooks/usefetch"
import { Link } from "react-router-dom"

const Main = () => {
    
    const {loading:dataloading, data, resendrequest} = useFetch({link: '/api/v1/todos' , method : 'GET'})
    const { loading:removeuser, sendrequest } = useRequest({ method: "DELETE" });

    const remove = (id) => {
        sendrequest(null,  `/api/v1/todos/${id}`).then(() => resendrequest())
    }


   
    return(
        <>
        <Link to={'/create'}>Create</Link>
        {dataloading ? (
            <p>...Loading</p>
        ) : (
            <div>
                {data?.items.map(item => (
                    
                    <div className="todo">
                      
                    <h1 key={item.uuid}>{item.task}</h1> 
                    <button onClick={() => remove(item._uuid)}>Delete</button>
                    <Link to={`/edit/${item._uuid}`}>Edit</Link>
                    </div>
                ))}
            </div>
        )}
        
        </>
        
    )
}

export default Main