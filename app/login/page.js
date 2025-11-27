import Link from "next/link";

 const Login = ()=>{
    return(
        <div>
            <h1> Login Page</h1>
            <br/><br/>
            <Link href='/'>Home Page</Link>
            <br/><br/>
{/* 
            <Link href='/login/studentlogin'>student Login</Link>
            <br/><br/>
            <Link href='/login/teacherlogin'>Teacher Login</Link> */}
        </div>
    )
 }

 export default Login;