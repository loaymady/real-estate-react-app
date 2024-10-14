import { useContext } from "react";
import React from "react";

import { HouseContext } from "./HouseContext";
import House from "./House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto min-h-[200px] animate-spin text-violet-700 text-4xl" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl min-h-[200px] text-gray-400 mt-48">
        Sorry, Nothing Found!{" "}
      </div>
    );
  }
  return (
    <section className="mb-20 md:mt-24 min-h-[200px]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 ">
          {houses.map((house, index) => {
            return (
              <Link key={index} to={`/property/${house.id}`}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
