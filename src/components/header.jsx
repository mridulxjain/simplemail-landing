function Heading () {

    return(
        <div className="absolute pb-2 border-b-[0.5px] border-white mt-2 w-full flex items-center justify-between">
            <a className="ml-2 block " href="/">
                <img src="./email.png" alt="SimpleMail" className="w-10"/>
            </a>
            <div className="flex gap-4">
                <button className="px-4 py-1.5 rounded-full bg-white">Sign In</button>
                <button className="px-4 py-1.5 rounded-full bg-yellow-500 mr-1 ">Log In</button>
            </div>

        </div>
    )

}

export default Heading;