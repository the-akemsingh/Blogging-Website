export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="p-4 sm:p-6 border rounded-xl sm:rounded-3xl bg-white border-slate-200 pb-4 w-[95vw] sm:w-[90vw] md:w-[85vw] max-w-screen-md mb-3 sm:mb-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-0">
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-20 bg-gray-200 rounded-full ml-2"></div>
                <div className="hidden sm:block pl-2 flex-none">
                    <div className="h-1 w-1 bg-gray-200 rounded-full"></div>
                </div>
                <div className="h-4 w-32 bg-gray-200 rounded-full ml-0 sm:ml-2"></div>
            </div>
            <div className="pt-3">
                <div className="h-5 sm:h-6 bg-gray-200 rounded-full mb-2 max-w-[250px]"></div>
            </div>
            <div className="pt-2">
                <div className="h-3 sm:h-4 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-3 sm:h-4 bg-gray-200 rounded-full mb-2 max-w-[80%]"></div>
            </div>
            <div className="pt-4">
                <div className="h-3 bg-gray-200 rounded-full max-w-[120px]"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}