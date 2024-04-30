import CategoryList from "./_component/CategoryList";


export default function SearchLayout({ children }) {
  return (
    <div className=" grid grid-cols-4 pt-3 ">

      {/*search section*/}
      <div className="col-span-1 m-t   ">
        <CategoryList/>
      </div>
     
      {/*doctors section*/}
     
      <div className='col-span-3' >
        <div className=' mt-10 mb-10 grid lg:gap-10 gap-2 md:gap-5  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center   '>
        {children}
        </div>
      </div>

    </div>
  );
}