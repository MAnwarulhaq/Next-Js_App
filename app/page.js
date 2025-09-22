'use client'


const Page = () => {
  const handleClick = () => {
   alert('Hy Anwar');
  }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => alert('Button Clicked!')}>Click Me</button>
      <button onClick={handleClick}>Log to Console</button>
    </div>
  )
}

export default Page