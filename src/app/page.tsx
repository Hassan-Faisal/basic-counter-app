import Image from "next/image";
import { useState } from "react";
import UpdatingState from "@/components/Counterapp";
import { Fragment } from "react";
export default function Home() {
  return (
    <Fragment>
    <div className="flex justify-center text-5xl p-44">
    Counter App
    </div>
      <div>
         <UpdatingState/>
      </div>
     </Fragment>
    
  );
}
