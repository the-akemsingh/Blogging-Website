import { useNavigate } from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate();
    const isUserLoggedIn = localStorage.getItem("token") !== null;

    function toSignin() {
        if(!isUserLoggedIn){
            navigate("/signin");
        }
        else{
            navigate("/blogs");
        }
    }

    return (
        <div className="min-h-screen pt-10 md:pt-20 flex flex-col bg-[#D1C1AF] text-[#141414] text-left">
            <div className="text-4xl sm:text-6xl md:text-8xl px-4 md:px-10 gasoek-one-regular mt-6 md:mt-10" style={{
                wordSpacing: "0.2rem",
                letterSpacing: "0.1rem",
                lineHeight: "1.1"
            }} >
                WRITE FREELY,
            </div>
            <div className="text-4xl sm:text-6xl md:text-8xl px-4 md:px-10 gasoek-one-regular" style={{
                wordSpacing: "0.2rem",
                letterSpacing: "0.1rem",
                lineHeight: "1.1"
            }} >
                READ BOLDLY
            </div>
            <span className="text-2xl sm:text-4xl md:text-6xl px-4 md:px-10 gasoek-one-regular mt-4 md:mt-0" style={{
                wordSpacing: "0.2rem",
            }} >
                Disover Voices From Around The World, or Share Your Own
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-10 mt-6">
                <div className="grid col-span-1 border rounded-3xl bg-[#141414] min-h-[250px] md:min-h-[300px]">
                    <div className="flex text-left text-[#D1C1AF] flex-col justify-between p-6 md:p-10">
                        <div>
                            <div className="gasoek-one-regular text-3xl md:text-4xl">
                                Reasons to Join
                            </div>
                            <div className="funnel-display-regular mt-2 text-xl md:text-2xl">
                                Let ideas flow like never before. Share your thoughts, stories, and perspectives in a space designed for creative expression.
                            </div>
                        </div>

                        <button onClick={toSignin} className="gasoek-one-regular hover:underline transition-all duration-300 text-2xl md:text-3xl cursor-pointer flex items-center gap-2 mt-4 md:mt-0">
                            GET STARTED 
                            <svg xmlns="http://www.w3.org/2000/svg" id="Arrow" width="24" height="24"><path fill-rule="evenodd" d="M13 0A13 13 0 0 0 0 13a13 13 0 0 0 13 13 13 13 0 0 0 13-13A13 13 0 0 0 13 0zm-2.3 8 5.3 5-5.3 5-.7-.66L14.6 13 10 8.66l.7-.66z" fill="#d1c1af" className="color000000 svgShape"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid col-span-1 md:col-span-2 min-h-[200px] md:min-h-[300px]">
                    <div className="flex text-left text-[#141414] flex-col justify-center p-6 md:p-10">
                        <div className="funnel-display-regular mt-2 text-xl sm:text-2xl md:text-3xl">
                            "A powerful platform for authentic voices. I've discovered so many new perspectives and ideas here."
                        </div>
                        <div className="funnel-display-regular font-bold mt-2 text-lg md:text-2xl">
                            Sophia R.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};