import React, { forwardRef } from "react";

export const LyricLine = forwardRef(
  ({ detail, passed, onClick, isCurrent }, ref) => {
    console.log(isCurrent);

    return (
      <button
        className={`
          ${
            passed
              ? `${
                  isCurrent
                    ? "text-neutral-50/100"
                    : "text-neutral-50/75"
                } hover:text-neutral-50/100 mb-1 rtl:text-start text-end`
              : "hover:text-neutral-50/100 mb-1 rtl:text-start text-end "
          }`}
        ref={ref}
        onClick={onClick.bind(null, detail.time)}
      >
        {detail.text}
      </button>
    );
  }
);
