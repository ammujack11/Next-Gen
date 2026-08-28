import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="fixed top-0 left-0 z-50 flex h-16 w-full justify-between bg-black items-center text-white px-5 lg:px-10">
            <div className="flex items-center">
                <img src="https://png.pngtree.com/png-vector/20251023/ourmid/pngtree-3d-orange-growth-chart-icon-png-image_17807448.webp"
                className="h-[42px] w-[65px]"></img>
                <p className="text-2xl md:text-3xl font-bold text-amber-500">NextGen</p>
            </div>

            <div className="flex text-[11px] sm:text-[13px] lg:text-lg space-x-2 md:space-x-8">
                <NavLink to="/" className={({isActive})=>`hover:text-amber-500 ${isActive ? "border-b-2  border-amber-500 text-amber-500":"text-white"}` } >HOME</NavLink>
                <NavLink to="/about" className={({isActive})=>`hover:text-amber-500 ${isActive ? "border-b-2 border-amber-500 text-amber-500":"text-white"}` } >ABOUT</NavLink>
                <NavLink to="/team" className={({isActive})=>`hover:text-amber-500 ${isActive ? "border-b-2 border-amber-500 text-amber-500":"text-white"}` } >TEAM</NavLink>
                <NavLink to="/blog" className={({isActive})=>`hover:text-amber-500 ${isActive ? "border-b-2 border-amber-500 text-amber-500":"text-white"}` } >BLOG  </NavLink>
            </div>

        </nav>
    );
}

export default NavBar;