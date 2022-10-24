import { MutableRefObject, useEffect, useState } from "react";

const useOutsideClickListener = (ref: MutableRefObject<any>) => {
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsClickedOutside(true);
      } else {
        setIsClickedOutside(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isClickedOutside };
};

export default useOutsideClickListener;
