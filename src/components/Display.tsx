import React from "react";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[42px] text-center font-bold">{children}</h2>;
}

export default function Display() {
  const selector = useSelector((state: RootState) => state.periodicTable);
  const { coincidences } = selector;

  function highlightDisplay(
    str: string,
    coincidences: string[]
  ): React.ReactElement {
    let name = str;
    coincidences.forEach((c) => {
      const index = name.toLowerCase().indexOf(c.toLowerCase());
      if (index <= 1) {
        name = name.replace(
          c.toLowerCase(),
          `<span style='background-color: green'>${c}</span>`
        );
      }
    });
    const sanitizedHtml = DOMPurify.sanitize(name);
    return <span dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
  }

  if (!coincidences.name.length && !coincidences.last.length) {
    return (
      <>
        <Title>There are no coincidences on the name or lastname</Title>
      </>
    );
  }

  return (
    <div className="mb-8">
      <Title>
        {highlightDisplay(
          selector.displayName.name,
          selector.coincidences.name
        )}
      </Title>
      <Title>
        {highlightDisplay(
          selector.displayName.last,
          selector.coincidences.last
        )}
      </Title>
    </div>
  );
}
