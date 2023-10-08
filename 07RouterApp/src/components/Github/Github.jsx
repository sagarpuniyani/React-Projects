import { useLoaderData } from "react-router-dom"

const Github = () => {
    const Data = useLoaderData();

    // const [Data , setData] = useState('')

    // useEffect( ()=> {
    //     fetch("https://api.github.com/users/sagarpuniyani")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(  data)
    //     })
    // } , [])

return (
    <div className="text-white text-3xl  bg-slate-500 p-3 m-4">
        Github Repos  : {Data.public_repos ? Data.public_repos : 0 }
    </div>
)
}

export default Github

export const GithubLoader = async () => {
    const res = await fetch("https://api.github.com/users/sagarpuniyani");
    return res 
}
