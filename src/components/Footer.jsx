const Footer = () => {
    return(
        <footer className="flex justify-between bg-black text-white mt-10 gap-20 pt-5 ">
            <div className="flex">
                <div className="bg-white size-20 flex " >
                    <img src="src/assets/Vector.png" className="px-1 py-1 " alt="" />
                </div>
                <div>
                    <p>Scan to download on the playstore and Appstore. </p>
                    <div>
                    <img src="src/assets/ion_logo-google-playstore.svg" alt="" />
                    <img src="src/assets/Vector (2).svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex" >
                <div>
                    <h1>About us</h1>
                    <p>Our company</p>
                    <p>Careers</p>
                    <p>Press kits</p>
                </div>
                <div>
                    <h1>Legal</h1>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <p>About us</p>
                </div>
                <div>
                    <h1>Support</h1>
                    <p>Contact us</p>
                    <p>FAQ</p>
                </div>
            </div>
        </footer>
    )

}
export default Footer;