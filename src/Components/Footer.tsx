import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
    return (
        <div className="bg-black text-white px-[55px] pt-10 pb-5">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mb-[75px]">
                <div>
                    <p className="text-3xl font-bold mb-4 text-amber-500">NextGen</p>
                    <p className="text-justify mb-7">Building digital  experiences that move businesses forward
                        Creating <br></br>
                        innovative digital solutions that turn ideas into meaningful experiences.</p>
                    <div className="flex gap-5 text-2xl">
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                        <FaLinkedin />
                        <FaFacebook />

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <p className="text-lg font-bold mb-4 text-amber-500">Company</p>
                        <Link to="/about" className="block mb-2 underline transition-transform duration-300 hover:translate-x-2">About us</Link>
                        <Link to="/team" className="block mb-2 underline transition-transform duration-300 hover:translate-x-2">Our Team</Link>
                        <Link to="/blog" className="block mb-2 underline transition-transform duration-300 hover:translate-x-2">Blog</Link>
                    </div>

                    <div>
                        <p className="text-lg font-bold mb-4 text-amber-500">Services</p>
                        <p className="mb-2">Web Development</p>
                        <p className="mb-2">Mobile App Development</p>
                        <p className="mb-2">UI/UX Design</p>
                    </div>



                </div>


            </div>

             <div className="flex flex-row justify-between">
                    <p className="text-[12px] md:text-[14px] hover:text-amber-400">&copy; {new Date().getFullYear()} NextGen. All rights reserved.</p>

                    <div className="flex gap-2 md:gap-5 text-[12px] md:text-[14px] ">
                        <p className="hover:text-amber-400">Privacy Policy</p>
                        <p className="hover:text-amber-400">Terms of Service</p>

                    </div>

                </div>
        </div>
    )
}

export default Footer;