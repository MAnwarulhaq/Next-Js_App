import Link from "next/link"

const About=()=>{
    return(
        <>
        <h1>About Page</h1>
              <Link href='/'>Go to home page</Link>
              <br/><br/>
              <Link href='/about/aboutstudent'>Go to Student page</Link>
              <br/><br/>
              <Link href='/about/aboutcollege'>Go to college Page</Link>

        </>
    )
}

export default About