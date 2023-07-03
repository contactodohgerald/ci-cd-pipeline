import { Link } from "@inertiajs/react";
import moment from "moment/moment";

export default function Posts({ blog }) {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-5 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-800">
                    {blog.length > 0 ? (
                        blog.map((blogItem, index) => (
                            <div
                                className="py-8 flex flex-wrap md:flex-nowrap"
                                key={index}
                            >
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">
                                        {blogItem.category} 
                                    </span>
                                    <span className="mt-1 text-gray-500 text-sm">
                                        { moment(blogItem.created_at).format("DD-MM-YYYY") }
                                    </span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                        {blogItem.title}
                                    </h2>
                                    <p className="leading-relaxed">
                                        {blogItem.post}
                                    </p>
                                    <div className="text-indigo-500 inline-flex items-center mt-4">
                                        <Link href={route('post.get', blogItem.id)}> Learn More</Link>
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="py-8 text-center">
                            <h1 className="font-bold text-gray-700">
                                No Data was returned!!
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
