import { MoveUp } from "lucide-react"
import { useEffect, useState } from "react";


const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        const heightToHidden = 100;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
    return (
        <div className="wrapper">
            {
                isVisible && (
                    <div className="top-btn" onClick={goToBtn}>
                        <MoveUp className="h-5 w-5"/>
                    </div>
                )
            }

        </div>

    )
}

export default GoToTop