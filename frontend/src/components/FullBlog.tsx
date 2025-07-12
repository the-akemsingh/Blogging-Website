import { useNavigate } from "react-router-dom";
import { Blog } from "../Hooks/index"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const navigate = useNavigate();

    return <div>
        <div className="flex p-4 sm:p-8 md:p-16 min-h-screen justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 px-2 sm:px-6 md:px-10 w-full pt-20 max-w-screen-xl">
                <div className="col-span-1 md:col-span-8">
                    <button onClick={() => navigate(`/blogs`)} className="funnel-display-regular cursor-pointer text-xl md:text-2xl text-white underline">
                        back
                    </button>
                    <div className="text-3xl sm:text-4xl md:text-5xl mt-6 md:mt-10 gasoek-one-regular font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-white funnel-display-regular text-sm sm:text-base pt-2">
                        Posted on {new Date().toDateString()}
                    </div>
                    <div className="pt-4 funnel-display-regular text-base sm:text-lg md:text-xl">
                        {blog.content}
                    </div>
                    
                    {/* Author info for mobile - shown only on small screens */}
                    <div className="block md:hidden mt-10 pb-10">
                        <div className="flex funnel-display-regular w-full border-t border-gray-700 pt-6">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-lg font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-1 text-white text-sm">
                                    Software Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Author info for desktop - hidden on small screens */}
                <div className="hidden md:block col-span-4 ml-0 md:ml-10 mt-6 md:mt-0">
                    <div className="flex funnel-display-regular w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-white">
                                Software Engineer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}