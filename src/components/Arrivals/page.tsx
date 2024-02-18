import Image from "next/image"
import CustomButton from "@/components/CustomButton/page";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Arrivals = async() => {
    const res = await fetch("http://localhost:3000/Best-products")
    const products = await res.json()
  return (
    <div className="grid grid-cols-3 p-6 mx-4 items-center">
    {products.map((items) => (
        <div key={items.id} className="p-5 mx-7 m-4 bg-amber-400 w-80 h-96 rounded-2xl">
         <div className=" gap-3 mx-14 mt-[16px]">
            <Image src={items.image} alt="image" width={224} height={257}/>
            <div className="p-4 text-center text-white font-semibold">
                <h4>{items.name}</h4>
                <p>Rp.{items.price }</p>
            </div>
         </div>
         <div className="flex justify-center items-center">
          <CustomButton
          href="/Products" 
          title="View Detail" 
          style="bg-slate-100 font-semibold"/>
          <ArrowForwardIcon/>
         </div>
        </div>
    ))}
    </div>
  )
}

export default Arrivals