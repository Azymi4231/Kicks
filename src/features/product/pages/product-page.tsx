import Image from "next/image";
import Shoe from "../../../../public/big-shoe-product-page.png";
import Shoe3 from "../../../../public/shoe3.png";
import Shoe4 from "../../../../public/shoe4.png";
import Shoe5 from "../../../../public/shoe5.png";
import Shoe6 from "../../../../public/shoe6.png";

const ProductPage = () => {
  return (
    <div className="flex-col flex gap-6">
      <div className="font-bold text-5xl flex flex-row w-full justify-center gap-6">
        <div className="text-DarkGray ">DO IT </div>
        <div className="text-Blue px-3">RIGHT</div>
      </div>
      <div>
        <div
          className="flex flex-col justify-end w-full h-[500px] bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url(${Shoe.src})` }}
        >
          <div className="p-5 mr-20 flex-col flex gap-1">
            <h1 className=" flex text-2xl text-white font-semibold">
              NIKE AIR MAX
            </h1>
            <p className="text-white flex">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="flex font-medium bg-Blue text-White rounded-lg w-max px-4 py-2">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-2xl pr-4">Don’t miss out new drops</p>
        <button className="font-medium bg-Blue text-White rounded-lg px-4 py-2">
          SHOP NOW DROPS
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <Image src={Shoe3} alt="Shoe3" className="rounded-xl" />
          <p className="text-center">Text 1</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Shoe4} alt="Shoe4" className="rounded-xl" />
          <p className="text-center">Text 2</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Shoe5} alt="Shoe5" className="rounded-xl" />
          <p className="text-center">Text 3</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Shoe6} alt="Shoe6" className="rounded-xl" />
          <p className="text-center">Text 4</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
