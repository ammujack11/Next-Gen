import { Link } from "react-router-dom";
import ScrollAnimation from "../Components/ScrollAnimation";

interface AboutProps {
    showHero?: boolean;
}
function About({ showHero = true }: AboutProps) {
    return (
        <>
            {showHero && (
                <div className="mb-[100px]">
                    <div className="h-[500px] sm:h-[550px] md:h-[600px] lg:min-h-[100vh] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('https://xtentertainment.com/wp-content/uploads/2015/03/Contact-us-Background.jpg')" }}>
                        <div className="absolute inset-0 bg-black/70"></div>



                        <div className="absolute z-10 flex flex-col text-white justify-center top-[120px]
                 left-[80px] lg:left-[155px] gap-3 animate__animated animate__fadeInTopLeft animate__slow">
                            <p className="text-[25px] md:text-[50px] font-bold">Shaping the Future <br /> With Innovation</p>
                         <p className="text-[12px] md:text-[15px] w-[300px] sm:w-[350px] lg:w-[450px]">
                                We combine creativity, technology, and expertise to bring ideas to life.
                                Together, we create meaningful solutions that make a difference.
                            </p>
                        </div>
                    
       

                    </div>
                </div>
            )}

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-[55px] mb-[150px]">

                <ScrollAnimation animation="animate__zoomIn">
                    <div className="grid grid-cols-2 gap-4">


                        <img src="https://www.haworth.com/content/dam/haworth/spark/photography/2023/q1/4-types-of-collaborative-spaces/2736x1130_4-Types_of_Collaborative-Spaces.jpg"
                            className="w-full h-[250px] object-cover" alt="collaboration">
                        </img>


                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6Dol8-U7GiWUh6Mtqtm-855bQjAKJLvjllhds5Ix0ImAb19zxaYosAc&s=10"
                            className="w-full h-[250px] object-cover" alt="teamwork">
                        </img>



                        <img src="https://syhzhuelbxgnhopnwjgc.supabase.co/storage/v1/object/public/media/blog/why_does_a_software_company_need_a_professional_services_team_0.jpg"
                            className="w-full h-[250px] object-cover" alt="professional services">
                        </img>



                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOtGxR423uLbzZq7r-zMQYolAgfKkGfB9SRnP6no4NA&s=10"
                            className="w-full h-[250px] object-cover" alt="innovation">
                        </img>



                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="animate__slideInUp">

                    <div className="flex flex-col gap-2">

                        <div className="flex gap-2 items-center mt-10">
                            <p className="font-bold  text-lg text-amber-500 italic">about us</p>
                            <span className="h-1 bg-amber-500 w-[65px]"></span>
                        </div>

                        <div className="flex items-center">
                            <p className="text-[18px] sm:text-[20px] lg:text-[40px] font-bold font-mono">
                                Welcome to  </p>
                            <img src="https://png.pngtree.com/png-vector/20251023/ourmid/pngtree-3d-orange-growth-chart-icon-png-image_17807448.webp"
                                className="h-[42px] w-[65px]" alt="NextGen logo"></img>
                            <span className="text-[15px] sm:text-[20px] lg:text-[40px] font-bold font-mono">NextGen</span>
                        </div>

                        <p className="text-gray-600">
                            At Next Gen, we turn innovative ideas into modern digital solutions.
                            We focus on creativity, technology, and user-friendly experiences. <br /> <br />
                            Our goal is to help businesses grow and succeed in the digital world.
                            Together, we build today and create a better future for tomorrow.</p>

                        <br />
                        <p className="text-gray-600">We are committed to delivering quality, innovation, and value in every project we create.
                            At Next Gen, your vision inspires us to build solutions that make a difference.</p>

                        <Link to="/about" className="w-[180px] bg-amber-500 text-white font-semibold py-3 px-5
                         rounded mt-5 hover:bg-amber-600 transition duration-300  hover:scale-105 ml-1">
                            FIND OUT MORE</Link>

                    </div>
                </ScrollAnimation>

            </div>
        </>
    )

}
export default About;