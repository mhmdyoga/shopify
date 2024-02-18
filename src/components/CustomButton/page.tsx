import Link from "next/link";
import React from "react";

const CustomButton = ({ title, onClick, href, style }: CustomButtonProps) => {
  return (
    <div className="">
      <Link href={href} onClick={onClick} className={style}>
        <h2 className="text-black p-2 m-4 justify-center items-center ml-[30px] my-[2px]">
          {title}
          </h2>
      </Link>
    </div>
  );
};

export default CustomButton;
