// const { Link } from  "next/link"
import Link from "next/link"

const StudentList = () => {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href='/studentlist/ali'>Ali</Link>
                </li>
                <li>
                    <Link href='/studentlist/faizan'>Faizan</Link>
                </li>
                <li>
                    <Link href='/studentlist/anwar'>Anwar</Link>
                </li>
                <li>
                    <Link href='/studentlist/aysha'>Aysha</Link>
                </li>
                <li>
                    <Link href='/studentlist/sara'>sara</Link>
                </li>
            </ul>

        </div>
    )

}

export default StudentList