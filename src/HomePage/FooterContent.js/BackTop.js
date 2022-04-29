const BackTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        })
    }

    window.onscroll = function () {
        if (window.pageYOffset >= 500) {
            document.getElementsByClassName('backtop')[0].style.visibility = "visible"
        } else {
            document.getElementsByClassName('backtop')[0].style.visibility = "hidden"
        }
    };

    return (
        <div className="backtop" style={{position: "fixed", top: "90vh", right: "2vw"}}>
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
