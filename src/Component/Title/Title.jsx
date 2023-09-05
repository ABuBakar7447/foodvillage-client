

const Title = ({heading, subheading}) => {
    return (
        <div className="lg:w-2/5 w-3/4 mx-auto text-center my-12">
            <p className="text-yellow-500 md:text-xl">----- {heading} -----</p>
            <p className="my-4 py-5 border-y-4 text-4xl font-bold">{subheading}</p>
        </div>
    );
};

export default Title;