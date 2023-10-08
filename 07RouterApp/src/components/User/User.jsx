import { useParams } from "react-router-dom"

const User = () => {
    const {id} = useParams()
return (
    <div className="text-white text-3xl bg-gray-500 p-6 m-2" >
        user : {id }
    </div>
)
}

export default User
