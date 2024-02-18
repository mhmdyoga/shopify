import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import CustomButton from "../CustomButton/page";

const Navbar = () => {
  return (
    <header className="w-full ">
      <div className="bg-transparent w-full absolute flex justify-between items-center p-4">
        <h2 className="mx-6 font-bold text-2xl text-white">Shopify</h2>
        <ul className="flex gap-4 text-black">
          <Link href="/" className=" hover:text-white transition-all">Home</Link>
          <Link href="/Products" className=" hover:text-white transition-all">Products</Link>
          <Link href="/Contact" className=" hover:text-white transition-all">Contact</Link>
        </ul>
        <div className="mx-6 flex bg-slate-100 w-fit rounded-lg ">
            <CustomButton href="/Login" title="Login" style="font-medium"/>
            <div className="hover:translate-x-1 transition-all cursor-pointer mx-2 mt-[6px]">
            <PersonIcon className="text-orange-400 "/>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
