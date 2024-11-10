
import { Toaster } from "@/components/ui/toaster"


export default function DetailsLayout({ children }) {
  

  return (
 <div className="py-12 ">
          <Toaster />

       {children}
 </div>
   
  );
}