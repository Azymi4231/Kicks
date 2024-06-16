import Image from "next/image";
import Shoe from "../../../../public/big-shoe-product-page.png";
import Shoe3 from "../../../../public/shoe3.png";

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
      <div>
        <Image src={Shoe3} alt="Shoe3" className="rounded-xl " />
        <Image src={Shoe3} alt="Shoe3" className="rounded-xl " />
        <Image src={Shoe3} alt="Shoe3" className="rounded-xl " />
        <Image src={Shoe3} alt="Shoe3" className="rounded-xl " />
      </div>
    </div>
  );
};

export default ProductPage;
