import { Link, Head } from "@inertiajs/react";
import moment from "moment";

export default function Post({ blogItem, auth }) {
    return (
        <>
            <Head title="Blog Detail" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <h1 className="text-xl text-gray-900 dark:text-white font-bold">
                            {" "}
                            X-Blogs
                        </h1>
                    </div>

                    <div className="scale-100 p-6 bg-white dark:bg-gray-100  dark:ring-inset rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none mt-5">
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-5 mx-auto">
                                <div className="-my-8 divide-y-2 divide-gray-800">
                                    <div
                                        className="py-8 flex flex-wrap md:flex-nowrap"
                                    >
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">
                                                {blogItem.category}
                                            </span>
                                            <span className="mt-1 text-gray-500 text-sm">
                                                {moment(
                                                    blogItem.created_at
                                                ).format("DD-MM-YYYY")}
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
                                               Views - ({blogItem.reply_count})
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}