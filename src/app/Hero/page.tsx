import Arrivals from "@/components/Arrivals/page";
import CustomButton from "@/components/CustomButton/page";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="bg-bg-hero-pattern w-full h-screen">
        <div className="p-40 text-white">
          <span className="text-md  my-11 w-full">
            Spring/Summer collection 2024
          </span>
          <h2 className="w-full text-6xl mt-[40px] ">
            Get up to 30% off <br /> New Arrivals
          </h2>
        </div>
        <div className="px-40 mt-[-115px] ">
          <CustomButton
            href="/Products"
            title="Shop Now"
            style="bg-slate-100 text-black inline-block rounded-full w-40 font-semibolda h-11"
          />
        </div>
      </div>
      <div className="p-12 justify-center">
        <div className="flex gap-4">
          <Link href="/Products/Men">
          <h2 className="absolute items-center p-6 mt-[126px] mx-40 font-bold text-3xl text-white ">Men</h2>
            <Image
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjdb-1c5y3T4CoWPmtIPRaKDlPD-reFhv_3m1TYcLDmtH9jVn5_VPiDlDTwX6opsO9D_s5ZqKO1TbzRh9tgX1Wb7fva-9TdWuzE009O-qL_L7Y0TkufX87ERIjUPqwnF-Fc7tWziW8ER47tonvAvKRUnVzvsZSA7LjI9gaNMnX6WkovyTIRV0KsDMpDK1GW"
              alt="image1"
              width={455}
              height={455}
              className="rounded-2xl"
            />
          </Link>
          <Link href="/Products/Woman">
            <h2 className="absolute items-center p-6 mt-[86px] mx-40 font-bold text-3xl text-white ">Woman</h2>
            <Image
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjGxTp7sXtSfBEftNQeGi4pzT9Yn8fg62aX02FaROVJw5bVXXEjbBt8T2-W3svH1pE7s4tN_BVV3pKNjDtNYue6oiJhEKsqBpIoM8-jxH8VU2zFjmE-d6vZSMARYPXBrkRM2SM8JTwRhgYKNrT66TqEpltZPGRAhYHVSJhQ_8PEoHQslcoVAB0jaCTjE_f5"
            alt="image2"
            width={455}
            height={455}
            className="rounded-2xl"
          />
          </Link>
          <Link href="/Products/Accessories">
            <h2 className="absolute items-center p-6 mt-[86px] mx-6 font-bold text-xl text-white">Accessories</h2>
            <Image
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhWdpgmPGtqu0xirDbOwQmOpcqFz_FBvQ3IjzBnAx3RN5aLhuw8_wvG2nNfGfCrJ0JiHEK7ylUZyOxT2WBQcmTy3Ww6ZdObLvxVYgg-zUDhsPwaKV18Re4_GiVrE-fuyZO-uYUNezXBzPIf1En-KnBrajllwFf439w2Hm84iNPgtqeaHiOPxv8r9oe9Wyea"
            alt="image3"
            width={205}
            height={135}
            className="rounded-2xl"
          />
          </Link>
        </div>
      </div>
      <div className="">
          <div className="text-black font-bold text-3xl text-center">
            New Arrivals
          </div>
          <div>
            <Arrivals/>
          </div>
      </div>
    </div>
  );
};

export default Hero;
