import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Coincidences() {
  const selector = useSelector(
    (state: RootState) => state.periodicTable.coincidences
  );

  if (!selector.name.length || !selector.last.length) {
    return <></>;
  }

  const { name, last } = selector;

  return (
    <div className="text-white mt-4">
      <p>Coincidences for Name: {name.join(", ")}</p>
      <p>Coincidences for Lastname: {last.join(", ")}</p>
    </div>
  );
}
