import { UserContext } from '@/09-useContext/context/UserContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const { login } = useContext(UserContext);

  const navigation = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = login(+userId);
    
    if(!result) {
      toast.error('User not found')
      setUserId('');
      return
    }

    navigation('/profile')

  }

  return (
    <div className='flex flex-col items-center min-h-screen'>

      <h1 className='text-4xl font-bold'>Sign in</h1>
      <hr />

      <form
        className='flex flex-col gap-2 my-10'
        onSubmit={handleSubmit}>
        <Input
          type='number'
          placeholder='ID user'
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <Button type='submit'>Login</Button>
      </form>

      <Link to={'/about'}>
        <Button variant={'ghost'}>About me</Button>
      </Link>

    </div>
  )
}

export default LoginPage
