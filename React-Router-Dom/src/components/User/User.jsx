import { useParams } from "react-router-dom"

const User = () => {
    const {UserId} = useParams()
  return (
    <>
      <div className="text-center bg-gray-700 text-3xl text-white p-4">User ID : {UserId}</div>
    </> 
  )
}

export default User
