import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle.jsx";
import useAxiosPublic from "../../Hooks/useAxiosPublic.jsx";
import useAxiosSecure from "../../Hooks/useAxiosSecure.jsx";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const { name, category, recipe, price, _id } = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    console.log(name, category, recipe, price);

    const onSubmit = async (data) => {
        console.log("onSubmit called with data:", data);
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
            console.log("Payload sent to server:", menuItem);
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log("Update response:", menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Item Updated",
                    text: `${data.name} is added to the menu`,
                    icon: "success",
                    confirmButtonText: "Okay",
                });
            }
        }
    };

    return (
        <div>
            <SectionTitle heading="Update Item" subHeading="Refresh Info" />
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
                            defaultValue={name}
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
                                defaultValue={category}
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
                                defaultValue={price}
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
                            defaultValue={recipe}
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
                    <button className="btn">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
