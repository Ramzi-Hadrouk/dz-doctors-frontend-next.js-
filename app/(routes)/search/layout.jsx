import CategoryList from "./_component/CategoryList";


export default function SearchLayout({ children }) {
  return (
    <div className=" grid grid-cols-4 pt-3  h-screen">

      {/*search section*/}
       
        <CategoryList className="col-span-1 m-t   "/>
       
     
      {/*doctors section*/}
     
      <div className='lg:col-span-3  col-span-4 px-5' >
        <div className=' mx-10'>
        {children}
        </div>
      </div>

    </div>
  );
}