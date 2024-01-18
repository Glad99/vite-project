const NavBar = ()=> {
    return(
        <nav className="flex bg-lime-200 justify-between px-10 py-5">
            <div>Logo</div>
            <div className="flex justify-between gap-20 items-center">
                <div className="flex gap-10">
                    <p className="cursor-pointer">About</p>
                    <p className="cursor-pointer">Careers</p>
                    <p className="cursor-pointer">Contact Us</p>
                </div>
                <div>
                    <button className="bg-green-400 rounded py-2 px-3">Sign Up</button>
                </div>

            </div>
        </nav>
    );
};
export default NavBar