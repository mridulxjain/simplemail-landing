import { PiCurrencyDollarSimpleLight, PiMagicWandThin , PiQuestionMarkThin} from "react-icons/pi";
import { CiUser, CiHome } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";


function Dock() {
    const location = useLocation();

    const links = [
        { to: "/", icon: <CiHome />, key: "home" },
        { to: "/pricing", icon: <PiCurrencyDollarSimpleLight />, key: "pricing" },
        { to: "/features", icon: <PiMagicWandThin />, key: "features" },
        { to: "/testimonials", icon: <CiUser />, key: "testimonials" },
        { to: "/support", icon: <PiQuestionMarkThin />, key: "support" },
    ];
    return(
        <div className="mb-10 fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
            <div className="text-2xl gap-7 px-4 py-2 text-white flex items-center justify-between shadow-lg backdrop-blur-lg bg-white/10 border rounded-xl border-white/20  ">
                {links.map((link) => (
                    <NavLink key={link.key} to={link.to} className={({ isActive }) =>
                        `relative flex flex-col items-center justify-center w-8 ${
                          isActive ? "text-white" : "text-gray-400"
                        }`
                      }>
                        {link.icon}
                        {location.pathname === link.to && (<span className="absolute -bottom-[5px] w-1 h-1 bg-white transition-all duration-500 rounded-full" />)}
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

export default Dock;