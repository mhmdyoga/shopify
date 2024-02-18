import CustomButton from "@/components/CustomButton/page";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image"

type ProductPageProp = {params: {slug: string[]}}

async function getData() {
  const res = await fetch("http://localhost:3000/Products/")
 if (!res.ok) {
  throw new Error("Gagal menampilkan data")
 }
 return res.json()
}

const ProductPage = async(prop: ProductPageProp) => {
    const {params} = prop;
    const product = await getData()
  return (
    <div>
         <div className="grid grid-cols-3 p-16 mx-4 items-center">
           {product.length > 0 && product.map((products: any) => (
          <div key={products.id} className="p-5 mx-7 m-4 bg-amber-400 w-80 h-96 rounded-2xl">
            <div className="gap-3 mx-14 mt-[16px]">
              <Image src={products.image} alt="image" width={225} height={225}/>
              <div className="text-center text-white font-semibold">
                <h2>{products.name}</h2>
                <span>Rp.{products.price}</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton href={`/Products/Details`} title="View Details" style="bg-slate-100"/>
              <ArrowForward/>
            </div>
          </div>
         ))}
         </div>
         {params.slug && (
          <>
          <p>{params.slug[0]}</p>
          <p>{params.slug[1]}</p>
          <p>{params.slug[2]}</p>
          </>
         )}
    </div>
  )
}

export default ProductPage