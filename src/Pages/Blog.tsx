
import ScrollAnimation from "../Components/ScrollAnimation";

interface BlogProps {
    showHero?: boolean;
}

function Blog({ showHero = true }: BlogProps) {
    return (
        <>
            {showHero && (
                <div className="mb-[100px]">
                    <div className="h-[500px] sm:h-[550px] md:h-[600px] lg:min-h-[100vh] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/blog.jpeg')" }}>
                        <div className="absolute inset-0 bg-black/70"></div>

                        <div className="absolute z-10 flex flex-col text-white justify-center top-[120px]
                 left-[80px] lg:left-[155px] gap-3 animate__animated animate__fadeInLeft animate__slow">
                            <p className="text-[25px] md:text-[50px] font-bold">Ideas Worth <br />
                                Sharing</p>
                          <p className="text-[12px] md:text-[15px] w-[300px] sm:w-[350px]  lg:w-[450px]">
                                Explore insights, ideas, and stories from the world of technology.
                               
                                Stay curious, stay informed, and discover what's next.
                            </p>
                        </div>

                    </div>
                </div>
            )}

             <div className="mb-[150px] mx-[55px]">

                <ScrollAnimation animation="animate__fadeInDown">
                    <div className="text-center mb-[45px]">
                        <div className="flex gap-2 justify-center items-center mb-2">
                            <span className="h-1 bg-amber-500 w-[65px]"></span>
                            <p className="font-bold  text-lg text-amber-500 italic"> BLOG   </p>
                            <span className="h-1 bg-amber-500 w-[65px]"></span>
                        </div>
                        <p className="text-[25px] md:text-[30px] font-bold font-mono">Explore Our Latest Updates</p>
                    </div>
                </ScrollAnimation>



                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


                    <ScrollAnimation>
                        <div className="flex flex-col  rounded-lg shadow-lg shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] p-5 gap-5 group">

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
        </>
    )
}
export default Blog;