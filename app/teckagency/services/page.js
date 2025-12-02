import Link from "next/link"
const page = () => {
    return (
        <div>
            <h1>Our Services</h1>
            <Link href={'/teckagency/services/webdev'}>
                <h4>Web Development</h4>

            </Link>
            <Link href={'/teckagency/services/seo'}>
                <h4>SEO</h4>

            </Link>




        </div>
    )
}

export default page