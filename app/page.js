'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";


const Page = () => {
   const router = useRouter()
  const handleClick = () => {
    alert('Hy Anwar');
  }

  const navigation=(name)=>{
    router.push(name)
  }

 

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* <button onClick={() => alert('Button Clicked!')}>Click Me</button>
      <button onClick={handleClick}>Log to Console</button> */}
      <Link href='/login'>Go to Login Page</Link>
      <br/>
      <br/>
      <Link href='/about'>Go to About Page</Link>
      <br/>
      <br/>

      {/* <button onClick={() => router.push('/login')}>Login Page</button> */}
      <button onClick={() => navigation('/login')}>Login Page</button>
      <button onClick={()=>navigation('/about')}>About page</button>

    </div>
  )
}

export default Page