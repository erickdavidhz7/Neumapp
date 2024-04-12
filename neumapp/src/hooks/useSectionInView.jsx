import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/ActiveSectionContext";

export function useSectionInView(tags, threshold) {
const { ref, inView } = useInView({ threshold: threshold });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
  useEffect(() => {
     
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(tags);
    }
  }, [inView, timeOfLastClick, setActiveSection, tags]);
  return { ref };
}