import { Link } from "react-router-dom";
import { FaLightbulb, FaUserFriends, FaHeadset, FaLaptop } from "react-icons/fa";
import ScrollAnimation from "../Components/ScrollAnimation";
import About from "./About";
import Team from "./Team";
import Blog from "./Blog";


function Home() {
    return (
        <div>
            <div className="h-[500px] sm:h-[550px] md:h-[600px] lg:min-h-[120vh] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/careers2.jpg')" }}>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="absolute z-10 flex flex-col text-white justify-center top-[120px]
                 left-[100px] md:left-[155px] gap-3 animate__animated animate__fadeInLeft animate__slow">
                    <p className="text-[25px] md:text-[50px] font-bold">Powering Your Vision <br></br> With Technology</p>
                    <p className="text-[12px] md:text-[15px] w-[300px] sm:w-[350px]  lg:w-[450px]">We turn innovative ideas into powerful digital solutions.
                        Together,let's create something extraordinary.</p>

                    <Link to="/about" className="w-[150px] bg-amber-500 text-white font-semibold py-2 px-4
                         rounded mt-5 hover:bg-amber-600 transition duration-300  hover:scale-105">
                        EXPLORE MORE</Link>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[105px] mb-[150px] mx-[55px]">

                <ScrollAnimation>
                    <div className="shadow-lg shadow-[5px_5px_10px_rgba(0,0,0,0.2)] p-8 flex flex-col gap-3 group hover:bg-amber-500  transition duration-500 ease-in hover:scale-105">
                        <FaLightbulb className="text-amber-500 text-5xl group-hover:text-white" />
                        <p className="font-bold group-hover:text-white">Innovative Solutions</p>
                        <p className="text-gray-600 group-hover:text-white">Transforming ideas into smart, scalable digital solutions for your business.</p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation>
                    <div className="shadow-lg shadow-[5px_5px_10px_rgba(0,0,0,0.2)] p-8 flex flex-col gap-3 group  hover:bg-amber-500 hover:text-white transition duration-500 ease-in hover:scale-105">
                        <FaLaptop className="text-amber-500 text-5xl group-hover:text-white" />
                        <p className="font-bold group-hover:text-white">Modern Technology</p>
                        <p className="text-gray-600 group-hover:text-white">Leveraging the latest technologies to build fast and reliable products.</p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation>
                    <div className="shadow-lg shadow-[5px_5px_10px_rgba(0,0,0,0.2)] p-8 flex flex-col gap-3 group 
                  hover:bg-amber-500 hover:text-white transition duration-500 ease-in hover:scale-105">
                        <FaUserFriends className="text-amber-500 text-5xl group-hover:text-white" />
                        <p className="font-bold group-hover:text-white">Expert Team</p>
                        <p className="text-gray-600 group-hover:text-white">Our skilled professionals work together to turn your vision into reality.</p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation>
                    <div className="shadow-lg shadow-[5px_5px_10px_rgba(0,0,0,0.2)] p-8 flex flex-col gap-3 group hover:bg-amber-500 hover:text-white transition duration-500 ease-in hover:scale-105">
                        <FaHeadset className="text-amber-500 text-5xl group-hover:text-white" />
                        <p className="font-bold group-hover:text-white">24/7 Support</p>
                        <p className="text-gray-600 group-hover:text-white">Dependable support to keep your business moving forward.
</p>
                    </div>
                </ScrollAnimation>
            </div>


            <About showHero={false} />

            <Blog showHero={false} />

            <Team showHero={false}></Team>

        </div>
    )
}
export default Home;