import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { useContext } from 'react'

const ProfilePage = () => {

  const { user, logout } = useContext(UserContext);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>

      <h1 className='text-4xl font-bold'>Profilo</h1>
      <hr />

      <pre className='my-4 overflow-x-auto'>{JSON.stringify(user, null, 2)}</pre>

      <Button
        variant={'destructive'}
        onClick={logout}>
        Logout
      </Button>
    </div>
  )
}

export default ProfilePage
