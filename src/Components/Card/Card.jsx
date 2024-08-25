const Card = () => {
    return(
        <>
        <div className="h-screen bg-gray-300 flex items-center justify-center dark:bg-gray-800">
            <div className="max-w-96 bg-white p-4 rounded-md text-center space-y-1 shadow-md sm:flex sm:space-x-4 sm:text-left">
                <img className="sm:flex-shrink-0 hover:scale-105 duration-700"src="https://dreamlandit.com/wp-content/uploads/2020/02/Dreamland-logo-e1605036485856.png" alt="" />
                <div className="">
                    <h1>Dreamland IT</h1>
                    <p className="text">Best IT Institute</p>
                    <button className="btn btn-purple">Read more</button>
                    <button className="btn btn-green ml-2">Visit now</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card;