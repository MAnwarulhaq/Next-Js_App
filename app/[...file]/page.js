import Link from "next/link"
export default async function FilePage ({params}){

    // console.log( await params)
    return(
        <>
        <h1>Wel Come To TeckAgency</h1>
        <p>Catch All routes </p>
        <Link href={'/teckagency/blog'}>Blog</Link>
        </>
        
    )
}