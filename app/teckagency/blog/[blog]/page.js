export default async function Page({ params }) {
  const p = await params;       
  console.log("params:", p);    

  const { blog } = p;

  return <div>
   <p> Blog: {blog}</p>
   <p>loram</p>
   </div>;
}
