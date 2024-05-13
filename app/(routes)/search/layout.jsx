import CategoryList from "./_component/CategoryList";


export default function SearchLayout({ children }) {
  return (
    <div className=" grid grid-cols-4 pt-3 ">

      {/*search section*/}
      <div className="col-span-1 m-t  hidden md:block  ">
        <CategoryList/>
      </div>
     
      {/*doctors section*/}
     
      <div className='lg:col-span-3  col-span-4 px-5' >
        <div className=' mt-10 mb-10 grid lg:gap-10 gap-2 md:gap-5  grid-cols-2 md:grid-cols-3 xl:grid-cols-4  place-content-center'>
        {children}
        </div>
      </div>

    </div>
  );
}