import { useEffect, useRef } from "react"
import gsap from "gsap";


export default (active: boolean) => {
    const pathRef = useRef<SVGPathElement>(null);


    useEffect(() => {
        if (active) {
            gsap.to(pathRef.current, {
                duration: 1,
                ease: "power2.out",
                strokeDashoffset: 0
            });
        }
    }, [active]);

    return pathRef;
}