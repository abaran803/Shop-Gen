import { useState } from "react";

const BackTop = () => {

    const [showScroll, setShowScroll] = useState();

    const scrollToTop = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        })
    }

    window.onscroll = function () {
        if (window.pageYOffset >= 800) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    return (
        <div className="backtop" style={{position: "fixed", top: "90vh", right: "2vw", visibility: showScroll ? "visible" : "hidden"}}>
            <button
                id="button"
                className="btn btn-lg btn-outline-danger"
                onClick={scrollToTop}
            >
                <i className="fas fa-chevron-up text-dark"></i>
            </button>
        </div>
    );
};

export default BackTop;
