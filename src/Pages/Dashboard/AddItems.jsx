import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../Components/SectionTitle.jsx";
import useAxiosPublic from "../../Hooks/useAxiosPublic.jsx";
import useAxiosSecure from "../../Hooks/useAxiosSecure.jsx";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // upload the image to imgbb and get the url
        const imageFile = { image: data.image[0] };

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        if (res.data.success) {
            // send the data to the database
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            };
            const menuRes = await axiosSecure.post("/menu", menuItem);
            console.log(menuRes.data);
        }
    };

    return (
        <div>
            <SectionTitle heading="Add an item" subHeading="Whats new" />
            <div className="px-12 py-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="font-bold label-text">
                                Recipe Name*
                            </span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Recipe Name"
                            className="w-full input input-bordered"
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="font-bold label-text">
                                    Category Name*
                                </span>
                            </label>
                            <select
                                {...register("category", {
                                    required: true,
                                })}
                                defaultValue="default"
                                className="w-full select select-bordered"
                            >
                                <option disabled value="default">
                                    Select a category
                                </option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="font-bold label-text">
                                    Price*
                                </span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="w-full input input-bordered"
                            />
                        </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="font-bold label-text">
                                Recipe Details*
                            </span>
                        </div>
                        <textarea
                            className="h-24 textarea textarea-bordered"
                            {...register("recipe")}
                            placeholder="Recipe Details"
                        ></textarea>
                    </label>
                    <div className="my-4">
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="w-full max-w-xs file-input"
                        />
                    </div>
                    <button className="btn">
                        Add Items
                        <FaUtensils />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
