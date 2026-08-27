import { Link } from "react-router-dom";
import { FaLightbulb, FaUserFriends, FaHeadset, FaLaptop } from "react-icons/fa";
import ScrollAnimation from "../Components/ScrollAnimation";


function Home() {
    return (
        <div>
            <div className="min-h-[120vh] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/careers2.jpg')" }}>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="absolute z-10 flex flex-col text-white justify-center top-[120px]
                 left-[100px] md:left-[155px] gap-3 animate__animated animate__fadeInLeft animate__slow">
                    <p className="text-[25px] md:text-[50px] font-bold">Powering Your Vision <br></br> With Technology</p>
                    <p>We turn innovative ideas into powerful digital solutions. <br></br>
                        Together,let's create something extraordinary.</p>

                    <Link to="/about" className="w-[150px] bg-amber-500 text-white font-semibold py-2 px-4
                         rounded mt-5 hover:bg-amber-600 transition duration-300  hover:scale-105">
                        EXPLORE MORE</Link>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-[105px] mb-[150px] mx-[55px]">

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
                        <p className="text-gray-600 group-hover:text-white">Providing reliable support whenever you need us to keep your business moving.</p>
                    </div>
                </ScrollAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-[55px]">

                <ScrollAnimation animation="animate__zoomIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        <img src="https://www.haworth.com/content/dam/haworth/spark/photography/2023/q1/4-types-of-collaborative-spaces/2736x1130_4-Types_of_Collaborative-Spaces.jpg"
                            className="w-full h-[250px] object-cover">
                        </img>


                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6Dol8-U7GiWUh6Mtqtm-855bQjAKJLvjllhds5Ix0ImAb19zxaYosAc&s=10"
                            className="w-full h-[250px] object-cover">
                        </img>



                        <img src="https://syhzhuelbxgnhopnwjgc.supabase.co/storage/v1/object/public/media/blog/why_does_a_software_company_need_a_professional_services_team_0.jpg"
                            className="w-full h-[250px] object-cover">
                        </img>



                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOtGxR423uLbzZq7r-zMQYolAgfKkGfB9SRnP6no4NA&s=10"
                            className="w-full h-[250px] object-cover">
                        </img>



                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation ="animate__slideInUp">

                <div className="flex flex-col gap-2">

                    <div className="flex gap-2 items-center mt-10">
                        <p className="font-bold  text-lg text-amber-500 italic">about us</p>
                        <span className="h-1 bg-amber-500 w-[65px]"></span>
                    </div>

                    <div className="flex items-center">
                        <p className="text-[25px] md:text-[40px] font-bold font-mono">
                            Welcome to  </p>
                        <img src="https://png.pngtree.com/png-vector/20251023/ourmid/pngtree-3d-orange-growth-chart-icon-png-image_17807448.webp"
                            className="h-[42px] w-[65px]"></img>
                        <span className="text-[25px] md:text-[40px] font-bold font-mono">NextGen</span>
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

            <div className="my-[150px] mx-[55px]">

<ScrollAnimation animation="animate__fadeInDown">
                <div className="text-center mb-[45px]">
                    <div className="flex gap-2 justify-center items-center mb-2">
                        <span className="h-1 bg-amber-500 w-[65px]"></span>
                        <p className="font-bold  text-lg text-amber-500 italic"> LATEST INSIGHTS   </p>
                        <span className="h-1 bg-amber-500 w-[65px]"></span>
                    </div>
                    <p className="text-[25px] md:text-[30px] font-bold font-mono">Explore Our Latest Updates</p>
                </div>
</ScrollAnimation>
              


                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


<ScrollAnimation>
                    <div className="flex flex-col rounded-lg shadow-lg shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] p-5 gap-5 group">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_8qiMCO6SNL4T96SY2ApbcMKSDtKp5s83P9H438iwLRrU3f_0dzT2WY&s=10"
                            className="w-full h-[150px] rounded object-cover group-hover:scale-105 transition duration-300"></img>
                        <p className="text-white bg-amber-500 py-1 px-1 w-[125px] text-sm rounded">Web Development</p>
                        <p className="text-gray-600 text-sm leading-relaxed">Modern web development is changing rapidly with AI, React, cloud technologies, and interactive experiences.
                            Discover how these technologies are shaping the websites of tomorrow.</p>

                    </div>
                    </ScrollAnimation>
                 

                    
<ScrollAnimation>
                    <div className="flex flex-col rounded-lg shadow-lg shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] p-5 gap-5 group">

                        <img src="https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp"
                            className="w-full h-[150px] rounded object-cover group-hover:scale-105 transition duration-300"></img>
                        <p className="text-white bg-amber-500 py-1 px-1 w-[155px] text-sm rounded">Artificial Intelligence</p>
                        <p className="text-gray-600 text-sm leading-relaxed">AI is helping businesses automate tasks, understand customers, and make smarter decisions.
                            Learn how artificial intelligence can create new opportunities for modern businesses.</p>

                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation>
                    <div className="flex flex-col rounded-lg shadow-lg shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] p-5 gap-5 group">

                        <img src="https://img.magnific.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?semt=ais_hybrid&w=740&q=80"
                            className="w-full h-[150px] rounded object-cover group-hover:scale-105 transition duration-300"></img>
                        <p className="text-white bg-amber-500 py-1 px-1 w-[125px] text-sm rounded">UI/UX Design</p>
                        <p className="text-gray-600 text-sm leading-relaxed">Users access websites from phones, tablets, and desktops every day. A responsive design ensures your website looks great and works smoothly on every screen.</p>

                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation>
                    <div className="flex flex-col rounded-lg shadow-lg shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] p-5 gap-5 group">

                        <img src="https://media.licdn.com/dms/image/v2/C4E12AQE0mORPrwNuYw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1640382254724?e=2147483647&v=beta&t=QZ5KlMefki2dToRIhTno_pxpE_-Rr9ioUoexqZppcDw"
                            className="w-full h-[150px] rounded object-cover group-hover:scale-105 transition duration-300"></img>
                        <p className="text-white bg-amber-500 py-1 px-1 w-[125px] text-sm rounded">Digital Solutions</p>
                        <p className="text-gray-600 text-sm leading-relaxed">A strong digital presence helps businesses connect with customers and build trust. Learn why a professional website and consistent online experience are essential for growth.</p>

                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation>
                    <div className="flex flex-col rounded-lg shadow-lg shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] p-5 gap-5 group">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKFxixG5f-9gOU55ifHexC67KhUL_r1LGRL9w7yv_yg&s=10"
                            className="w-full h-[150px] rounded object-cover group-hover:scale-105 transition duration-300 "></img>
                        <p className="text-white bg-amber-500 py-1 px-1 w-[125px] text-sm rounded">User Experience</p>
                        <p className="text-gray-600 text-sm leading-relaxed">A great website is not only about appearance. Good UX makes websites easier to navigate, faster to use, and more enjoyable for customers simple, efficient, and engaging.</p>

                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation>
                    <div className="flex flex-col rounded-lg shadow-lg shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] p-5 gap-5 group">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdhz4n2PoHZ1tiygQmazDdFFbcetQYTuMZYSX-aDbBjGMbh6vFoA1GqHY&s=10"
                            className="w-full h-[150px] rounded object-cover group-hover:scale-105 transition duration-300"></img>
                        <p className="text-white bg-amber-500 py-1 px-1 w-[125px] text-sm rounded">Technology</p>
                        <p className="text-gray-600 text-sm leading-relaxed">Every successful digital product starts with an idea. Explore the journey from planning and design to development, testing, and launching a solution that makes an impact.</p>

                    </div>
                    </ScrollAnimation>

                </div>
             
            </div>
        </div>
    )
}
export default Home;