import React from 'react'
import UserForm from '../Components/Form'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../Hooks/usefetch'
import useRequest from '../Hooks/useRequest'

function Edit() {
    const navigate = useNavigate()
    const {id} = useParams()

    const {data} = useFetch({link: `/api/v1/todos/${id}` , method : 'GET'})
    const {sendrequest} = useRequest({link : `/api/v1/todos/${id}`, method: "PUT"})
    
   const onsubmit = (task) => {
    sendrequest({task}).then(navigate('/'))
   }
  return (
    <UserForm task={data?.task} onsubmit={onsubmit}/>
  )
}

export default Edit