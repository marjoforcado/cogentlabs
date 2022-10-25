import { MutableRefObject, useEffect, useState } from "react";
import useOutsideClickListener from "./useOutsideClickListener";

const useCollapseMenu = (ref: MutableRefObject<any>) => {
  const { isClickedOutside } = useOutsideClickListener(ref);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isClickedOutside && isCollapsed) {
      setIsCollapsed(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClickedOutside]);

  return { isCollapsed, setIsCollapsed };
};

export default useCollapseMenu;
