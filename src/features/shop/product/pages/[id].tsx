"use client";
import { useDispatch, useSelector } from "react-redux";
import { advantages } from "./product-page-constans";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GetStaticProps, GetStaticPaths } from "next";
import { RootState } from "@/redux/store";
import { addProduct } from "@/redux/slices/user-product-slice";
import HeartLogo from "@/shared/svg/heart-logo-svg";
import { products } from "@/features/shop/home/pages/home-constans";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return { notFound: true };
  }

  return { props: { product } };
};

const ProductPageId = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const item = useSelector((state: RootState) => state.website);

  return (
    <>
      {item.id !== undefined ? (
        <div className="flex flex-col gap-6 sm:flex-row justify-between grow">
          <div className="flex max-w-md grow items-center">
            <Image className="flex grow" src={item.image} alt="Shoe2" />
          </div>

          <div className="flex gap-2 flex-col">
            <div className="flex font-semibold gap-2 flex-col text-DarkGray">
              <h1 className="text-xl">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h1>
              <p className="text-Blue text-2xl">$125.00</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex-row flex gap-2">
                <button
                  className="font-medium bg-DarkGray text- w-full text-White rounded-md px-4 py-2"
                  onClick={() => {
                    dispatch(addProduct(item));
                  }}
                >
                  ADD TO CART
                </button>
                <button className="font-medium bg-DarkGray text- w-min text-White rounded-md px-4 py-2">
                  <HeartLogo />
                </button>
              </div>
              <button
                className="font-medium bg-Blue text- w-full text-White rounded-md px-4 py-2"
                onClick={() => {
                  router.push("/shop/cart");
                }}
              >
                View cart
              </button>
            </div>
            <div className="flex flex-col gap-2 text-DarkGray">
              <div className="flex gap-3 flex-col">
                <h2 className="font-semibold text-lg">About the product</h2>
                <div className="flex flex-col gap-2">
                  <p>Shadow Navy / Army Green</p>
                  <p>
                    This product is excluded from all promotional discounts and
                    offers.
                  </p>
                  <ul className="flex flex-col list-disc text-sm px-4">
                    {advantages.map((item, id) => (
                      <li key={id}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-5xl text-DarkGray text-center">Page not found</h1>
      )}
    </>
  );
};

export default ProductPageId;
