import { Link } from "react-router-dom";
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    id: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 sm:p-6 border rounded-xl sm:rounded-3xl funnel-display-regular bg-white border-slate-200 pb-4 w-[95vw] sm:w-[90vw] md:w-[85vw] max-w-screen-md cursor-pointer">
                <div className="flex flex-wrap items-center gap-2 sm:gap-0">
                    <Avatar name={authorName} />
                    <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
                    <div className="hidden sm:flex pl-2 justify-center flex-col">
                        <Circle />
                    </div>
                    <div className="pl-0 sm:pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {new Date().toDateString()}
                    </div>
                </div>
                <div className="text-lg sm:text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-sm sm:text-md font-thin">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-xs sm:text-sm font-thin pt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </Link>
    )
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-semibold text-gray-600 dark:text-gray-300`}>
            {name[0]}
        </span>
    </div>
}