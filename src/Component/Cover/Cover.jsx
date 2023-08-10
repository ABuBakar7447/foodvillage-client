

const Cover = ({img, heading, subheading}) => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-11/12 p-12 mx-auto hero-overlay text-white opacity-90">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                        <p className="mb-5">{subheading}</p>
                        
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Cover;