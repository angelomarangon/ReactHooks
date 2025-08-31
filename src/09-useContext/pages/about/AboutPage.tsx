import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button";
import { useContext } from "react"
import { Link } from "react-router"

const AboutPage = () => {

  const { authStatus, logout } = useContext(UserContext);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>About me</h1>
      <hr />
      {authStatus == 'authenticated' ?
        <div className='flex flex-col gap-2 mt-2'>
          <Link to={'/profile'} className="hover:text-blue-500 underline text-2xl">Profile</Link>
          <Button variant={'destructive'} onClick={logout} className="mt-4">Logout</Button>
        </div> :
        <div className='flex flex-col gap-2 mt-2'>
          <Link to={'/login'} className="hover:text-blue-500 underline text-2xl">Login</Link>
        </div>
      }
    </div>
  )
}

export default AboutPage
