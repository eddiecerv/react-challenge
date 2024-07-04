import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCoincidences } from "../store/reducers/periodicTable.reducer";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type Inputs = {
  name: string;
  last: string;
};

export default function Form() {
  const dispatch = useDispatch();
  const selectorElements = useSelector(
    (state: RootState) => state.periodicTable.data
  );

  function getCoincidences(str: string) {
    const coincidences = selectorElements.filter((el) =>
      str.toLowerCase().includes(el.toLowerCase())
    );

    // Filted coincidences in case they are repeated inside others (eg I in Ir).
    const filteredCoincidences = coincidences.filter((c) => {
      const otherElements = coincidences
        .filter((c2) => c2 !== c)
        .map((c2) => c2.toLowerCase());
      //   console.log("Other Elements:", otherElements, "for", c);

      const isElementSymbolOnOtherElements = otherElements.filter((oEl) =>
        oEl.includes(c.toLowerCase())
      );
      if (!isElementSymbolOnOtherElements.length) {
        return true;
      }

      return false;
    });

    return filteredCoincidences;
  }

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.name && data.last) {
      const coincidencesName = getCoincidences(data.name);
      const coincidencesLast = getCoincidences(data.last);
      dispatch(
        setCoincidences({
          displayName: data,
          coincidences: {
            name: coincidencesName,
            last: coincidencesLast,
          },
        })
      );
    }
  };

  return (
    <form className="block" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <div className="flex flex-row mt-2 mb-2 gap-6 p-4">
          <div className="flex-initial w-1/2">
            <div className="flex flex-col">
              <label>First Name</label>
              <input
                className="p-2 rounded bg-color-grey text-slate-600"
                placeholder="Name"
                {...register("name")}
              />
            </div>
          </div>

          <div className="flex-initial w-1/2">
            <div className="flex flex-col">
              <label>Last Name</label>
              <input
                className="p-2 rounded bg-color-grey text-slate-600"
                placeholder="Name"
                {...register("last")}
              />
            </div>
          </div>
        </div>

        <div className="p-4">
          <button
            type="submit"
            className="bg-green-800 p-2 border-green-100 rounded w-full"
          >
            Breakify
          </button>
        </div>
      </fieldset>
    </form>
  );
}
