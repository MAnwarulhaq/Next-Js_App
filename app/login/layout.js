import Link from "next/link";

export default function Layout ({children})
{
    return (
        <div>
           <ul>
            <li>
                <Link href="/login">Main Login</Link>
            </li>
             <li>
                <Link href="/login/studentlogin">Students Login</Link>
            </li>
             <li>
                <Link href="/login/teacherlogin">Teachers Login</Link>
            </li>
           </ul>
            {
                children
            }
        </div>
    )
}