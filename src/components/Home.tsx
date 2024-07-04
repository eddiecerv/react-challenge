import React, { useEffect } from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { fetchPeriodicTableData } from "../store/actions";
import Display from "./Display";
import Coincidences from "./Coincidences";
import { Dispatch } from "redux";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(fetchPeriodicTableData(""));
  }, []);

  return (
    <div className="h-screen w-full bg-zinc-900 flex justify-center">
      <div className="h-[600px] w-[500px] text-white  content-center p-8">
        <Display />
        <Form />
        <Coincidences />
      </div>
    </div>
  );
}
