'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";


const Page = () => {
  const handleClick = () => {
   alert('Hy Anwar');
  }

  const router=useRouter()

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* <button onClick={() => alert('Button Clicked!')}>Click Me</button>
      <button onClick={handleClick}>Log to Console</button> */}
      <Link href='/login'>Go to Login Page</Link>
      <button onClick={()=>router.push('/login')}>Login</button>
    </div>
  )
}

export default Page