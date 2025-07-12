import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isCreateBlogPage = location.pathname === "/publish";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function toSignin() {
        navigate("/signin");
    }

    function toggleMobileMenu() {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const isUserLoggedIn = localStorage.getItem("token") !== null;
    return (
        <div className="fixed min-w-full text-[#141414] funnel-display-regular2 z-50">
            <div className="min-w-full flex p-3 sm:p-5 px-4 sm:px-10 rounded-3xl justify-between items-center">
                <button onClick={() =>
                    navigate("/")
                } className="text-3xl sm:text-4xl cursor-pointer gasoek-one-regular underline">WISDOM</button>

                {/* Hamburger menu for mobile */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden flex flex-col justify-center items-center gap-1.5"
                >
                    <div className={`w-6 h-0.5 bg-[#141414] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-[#141414] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`w-6 h-0.5 bg-[#141414] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Desktop navigation */}
                <div className="hidden md:block">
                    {
                        isUserLoggedIn ? (
                            <div className="flex gap-5 items-center">
                                {isHomePage && (
                                    <button onClick={
                                        () => {
                                            navigate("/blogs");
                                        }
                                    } className="text-xl flex gap-2 items-center cursor-pointer border-2 border-[#141414] rounded-full py-2 px-3 hover:underline text-[#141414] bg-[#D1C1AF] transition-all duration-300">
                                        Explore
                                    </button>
                                )}
                                {!isCreateBlogPage ? (
                                    <button onClick={
                                        () => {
                                            navigate("/publish");
                                        }
                                    } className="text-xl flex gap-2 items-center cursor-pointer border-2 border-[#141414] rounded-full py-2 px-3 hover:underline text-[#141414] bg-[#D1C1AF] transition-all duration-300">
                                        New
                                    </button>
                                ) : null}

                                <button onClick={
                                    () => {
                                        localStorage.removeItem("token");
                                        window.location.href = "/signin";
                                    }
                                } className="text-xl flex gap-2 items-center cursor-pointer border-2 border-[#141414] rounded-full py-2 px-3 hover:underline text-[#141414] bg-[#D1C1AF] transition-all duration-300">
                                    Sign Out
                                </button>
                            </div>

                        ) :
                            <button onClick={toSignin} className="text-xl sm:text-2xl flex gap-2 items-center cursor-pointer border-2 border-[#141414] rounded-full py-2 px-3 sm:p-3 hover:underline text-[#141414] bg-[#D1C1AF] transition-all duration-300">
                                Start Writing
                            </button>
                    }
                </div>
            </div>

            {/* Mobile menu - slides down when hamburger is clicked */}
            <div className={`md:hidden bg-[#D1C1AF] overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-60 border-b border-[#141414]/20' : 'max-h-0'
                }`}>
                <div className="p-4 flex flex-col gap-3">
                    {
                        isUserLoggedIn ? (
                            <>
                                {isHomePage && (
                                    <button onClick={
                                        () => {
                                            navigate("/blogs");
                                            setMobileMenuOpen(false);
                                        }
                                    } className="text-xl w-full text-left py-2 hover:underline text-[#141414] transition-all duration-300">
                                        Explore
                                    </button>
                                )}
                                {!isCreateBlogPage ? (
                                    <button onClick={
                                        () => {
                                            navigate("/publish");
                                            setMobileMenuOpen(false);
                                        }
                                    } className="text-xl w-full text-left py-2 hover:underline text-[#141414] transition-all duration-300">
                                        New
                                    </button>
                                ) : null}

                                <button onClick={
                                    () => {
                                        localStorage.removeItem("token");
                                        window.location.href = "/signin";
                                    }
                                } className="text-xl w-full text-left py-2 hover:underline text-[#141414] transition-all duration-300 border-t border-[#141414]/20 mt-2 pt-4">
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <button onClick={() => {
                                toSignin();
                                setMobileMenuOpen(false);
                            }} className="text-xl w-full text-left py-2 hover:underline text-[#141414] transition-all duration-300">
                                Start Writing
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
