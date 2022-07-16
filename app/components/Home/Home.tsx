import React, { FC } from "react";
import Image from "next/image";
import { useGetProductsQuery } from "../../store/product/productApi";

type Props = {};

const Home: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(6);
  console.log(data);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2x1 text-green-900 font-medium text-red">
            Lets find ur products.
          </h1>
        </div>
      </div>

      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div className="text-red">Error</div>
      ) : (
        <div className="flex flex-wrap">
          {data?.map((product: any) => (
            <div key={product.id}>
              <div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
