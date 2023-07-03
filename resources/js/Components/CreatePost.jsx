import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function CreatePost() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        category: "",
        post: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("post.create"));
    };

    return (
        <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
            <form onSubmit={submit} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    <div>
                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={data.title}
                            className="mt-1 block w-full"
                            autoComplete="title"
                            isFocused={true}
                            onChange={(e) => setData("title", e.target.value)}
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div>
                        <TextInput
                            id="category"
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={data.category}
                            className="mt-1 block w-full"
                            autoComplete="category"
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <TextArea
                            id="post"
                            rows={1}
                            name="post"
                            placeholder="Post"
                            value={data.post}
                            className="mt-1 block w-full"
                            autoComplete="post"
                            onChange={(e) => setData("post", e.target.value)}
                        />

                        <InputError message={errors.post} className="mt-2" />
                    </div>
                </div>

                <div className="flex items-center mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Create New Post
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
