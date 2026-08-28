import ScrollAnimation from "../Components/ScrollAnimation";
import { FaInstagram, FaTwitter,FaHandshake  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { HiOutlineUsers } from "react-icons/hi";


interface TeamProps {
    showHero?: boolean;
}


function Team({ showHero = true }: TeamProps) {
    return (
        <>
            {showHero && (
                <div className="mb-[100px]">
                    <div className="h-[500px] sm:h-[550px] md:h-[600px] lg:min-h-[100vh] bg-cover bg-center bg-no-repeat relative"
                        style={{ backgroundImage: "url('https://cdn.prod.website-files.com/6000aba55a5017babf44a8b9/6071a0a9352921e2d545529a_trumont-hero-2-team.jpg')" }}>
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="absolute z-10 flex flex-col text-white justify-center top-[120px]
                 left-[50px] md:left-[155px] gap-3 animate__animated animate__fadeInTopLeft animate__slow">
                            <p className="text-[25px] md:text-[50px] font-bold">Meet the Team <br />
                                Behind Our Success</p>
                           <p className="text-[12px] md:text-[15px] w-[300px] sm:w-[350px]  lg:w-[450px]">
                                Our team brings together diverse skills, creative thinking, and a shared passion
                                 for technology.Together, we turn challenges into opportunities and 
                                 ideas into reality.

                            </p>
                        </div>

                    </div>
                </div>
            )}

             <div className="my-[70px] mx-[70px] md:mx-[100px] lg:mx-[180px]">

                <ScrollAnimation animation="animate__fadeInDown">
                    <div className="text-center mb-10">
                        <h3 className="font-bold  text-lg text-amber-500 italic mb-3">Meet Our Team</h3>
                        <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-5">
                            Get to know the talented people behind our vision.<br></br> Together, we bring fresh ideas and passion to everything we create.
                        </p>
                        <p className="w-[250px] md:w-[470px] h-[1px] bg-amber-500 mx-auto"></p>
                        
                    </div>

                </ScrollAnimation>



                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-[35px] mb-[55px]">


                    <ScrollAnimation>
                        <div className="flex flex-col gap-2 px-5 py-10 bg-amber-500 shadow rounded-lg shadow-[1px_1px_5px_rgba(0,0,0,0.2)] 
                    transition duration-300 ease-in-out hover:-translate-y-2 h-[280px] shrink-0"> 
                            <p className="text-white text-lg font-bold">People behind NextGen</p> 
                            <p className="mb-3">Meet the talented minds that make our team exceptional.</p> 
                            <Link to="/team" 
                            className="text-amber-600 bg-white rounded-lg px-3 py-1 w-[130px] hover:text-white 
                            hover:bg-amber-600 transition duration-300  hover:scale-105 font-bold">Join the team</Link>
                        </div>
                    </ScrollAnimation>


                    <ScrollAnimation>
                        <div className="flex flex-col  h-[280px] rounded-lg shadow-[1px_1px_5px_rgba(0,0,0,0.2)] transition duration-300 ease-in-out hover:-translate-y-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFQZrZidFe-Ta1K6K8KTcyvPJUBn_QY_ArVRlIpuMeA&s=10"
                                className="w-full h-[200px] object-cover rounded"></img>
                            <div className="flex justify-between p-4 items-center">
                                <div>
                                    <p className="font-bold">Nikita king</p>
                                    <p className="text-gray-600 text-[13px]">HR manager</p>
                                </div>

                                <div className="flex text-gray-600 gap-2">
                                    <FaInstagram />
                                    <FaTwitter />
                                </div>

                            </div>



                        </div>

                    </ScrollAnimation>

                    <ScrollAnimation>
                        <div className="flex flex-col  h-[280px] rounded-lg shadow-[1px_1px_5px_rgba(0,0,0,0.2)]
                                            transition duration-300 ease-in-out hover:-translate-y-2">
                            <img src="https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw="
                                className="w-full h-[200px] object-cover rounded"></img>
                            <div className="flex justify-between p-4 items-center">
                                <div>
                                    <p className="font-bold">Lesli Alexander</p>
                                    <p className="text-gray-600 text-[13px]">Co-Founder</p>
                                </div>

                                <div className="flex text-gray-600 gap-2">
                                    <FaInstagram />
                                    <FaTwitter />
                                </div>

                            </div>


                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation>
                        <div className="flex flex-col  h-[280px] rounded-lg shadow-[1px_1px_5px_rgba(0,0,0,0.2)]
                                             transition duration-300 ease-in-out hover:-translate-y-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Z5CVARAGruSu3WPn7fzJlrURL1aKYkT4Eoc-wrCmjk-09Hp-d_LBEgc&s=10"
                                className="w-full h-[200px] object-cover rounded"></img>
                            <div className="flex justify-between p-4 items-center">
                                <div>
                                    <p className="font-bold">Hawins</p>
                                    <p className="text-gray-600 text-[13px]">Product Designer</p>
                                </div>

                                <div className="flex text-gray-600 gap-2">
                                    <FaInstagram />
                                    <FaTwitter />
                                </div>

                            </div>

                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation>
                        <div className="flex flex-col  h-[280px] rounded-lg shadow-[1px_1px_5px_rgba(0,0,0,0.2)]
                                              transition duration-300 ease-in-out hover:-translate-y-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wk-W2vKE__zfE_MRBzEQ6vntqIZE0YcjoKzJLCpZD9xWV-2KcLYehOMa&s=10"
                                className="w-full h-[200px] object-cover rounded"></img>
                            <div className="flex justify-between p-4 items-center">
                                <div>
                                    <p className="font-bold">Ronald Richard</p>
                                    <p className="text-gray-600 text-[13px]">Customer Support</p>
                                </div>

                                <div className="flex text-gray-600 gap-2">
                                    <FaInstagram />
                                    <FaTwitter />
                                </div>

                            </div>


                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation>
                        <div className="flex flex-col  h-[280px] rounded-lg shadow-[1px_1px_5px_rgba(0,0,0,0.2)]
                                               transition duration-300 ease-in-out hover:-translate-y-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTvbLJ9WUPDGgohVRgagIgIxlXJ_95EAVuEq4KzxisDAkEqM7TDRW6_Fa&s=10"
                                className="w-full h-[200px] object-cover rounded"></img>
                            <div className="flex justify-between p-4 items-center">
                                <div>
                                    <p className="font-bold">Wade Warren</p>
                                    <p className="text-gray-600 text-[13px]">UI Designer</p>
                                </div>

                                <div className="flex text-gray-600 gap-2">
                                    <FaInstagram />
                                    <FaTwitter />
                                </div>

                            </div>


                        </div>

                    </ScrollAnimation>

                </div>

                <hr className=" border-amber-500" />

                <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mt-10">

                    <ScrollAnimation animation="animate__zoomIn">
                    <div className="flex flex-col items-center gap-3">
                        <TiTick className="text-amber-500 text-[30px] hover:text-amber-600"/>
                        <p className="text-sm lg:text-[18px] font-semibold whitespace-nowrap">WE'RE HELPFUL</p>
                    </div>
                    </ScrollAnimation>
                        <ScrollAnimation animation="animate__zoomIn">
                    <div className="flex flex-col items-center gap-3">
                        <HiOutlineUsers className="text-amber-500 text-[30px] hover:text-amber-600"/>
                        <p className="text-sm lg:text-[18px] font-semibold whitespace-nowrap">WE'RE FRIENDLY</p>
                    </div>
                    </ScrollAnimation>
                      <ScrollAnimation animation="animate__zoomIn">
                    <div className="flex flex-col items-center gap-3">
                        <FaHandshake className="text-amber-500 text-[30px] hover:text-amber-600" />
                        <p className="text-sm lg:text-[18px] font-semibold whitespace-nowrap">WE'RE HERE</p>
                    </div>
                    </ScrollAnimation>

                </div>


            </div>
        </>
    )
}
export default Team;