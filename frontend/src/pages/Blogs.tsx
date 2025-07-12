import { useBlogs } from '../Hooks/index';
import { BlogCard } from '../components/BlogCard';
import { BlogSkeleton } from '../components/BlogSkeleton';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signin");
        }   
    }, []);

    if (loading) {
        return <div>
            <Navbar></Navbar>
            <div className="flex min-h-screen justify-center px-2 sm:px-4">
                <div className="w-full max-w-screen-md mt-16 sm:mt-20">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    if (!localStorage.getItem("token")) {
        navigate("/signin");
    }
    return (
        <div>
            <div className='min-h-screen px-2 sm:px-4 md:p-5 flex justify-center'>
                <div className='flex flex-col gap-3 sm:gap-5 pt-16 sm:pt-20 w-full max-w-screen-md'>
                    {blogs?.map((blog) => (
                        <BlogCard 
                            key={blog.id}
                            id={blog.id} 
                            title={blog.title} 
                            content={blog.content} 
                            authorName={blog.author.name || "Anonymous"} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}