import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const updateCoffee = useLoaderData()

    const { name, chef, supplier, taste, category, details, photo, _id} = updateCoffee;



    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, chef, supplier, taste, category, details, photo }

        console.log(updateCoffee)

        // send data to server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Nice!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }




    return (
        <div className="bg-addCoffee-bg bg-no-repeat bg-cover bg-center py-10">
            <div className="w-9/12 mx-auto">

                <div className="mb-4">
                    <Link to={'/'}>Back to home</Link>
                </div>

                <div className="border lg:px-48 py-5 bg-[#F4F3F0]">
                    <div className="text-center mb-6">
                        <h2 className="text-xl font-semibold text-slate-600 mb-4">Update Your Coffee</h2>
                        <img className="mx-auto" src={photo} alt="" />
                    </div>

                    <form onSubmit={handleUpdateCoffee}>

                        <div className="space-y-4 w-9/12 md:w-11/12 mx-auto mb-5">

                            <div className="md:flex justify-between gap-8 ">
                                <div className="w-full">
                                    <p>Name:</p>
                                    <input type="text" placeholder="Name"
                                    defaultValue={name}
                                        name="name"
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="w-full">
                                    <p>Chef:</p>
                                    <input type="text" placeholder="Chef Name"
                                    defaultValue={chef}
                                        name="chef"
                                        className="input input-bordered w-full" />
                                </div>
                            </div>


                            <div className="md:flex justify-between gap-8 ">
                                <div className="w-full">
                                    <p>Supplier:</p>
                                    <input type="text" placeholder="Name"
                                    defaultValue={supplier}
                                        name="supplier"
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="w-full">
                                    <p>Taste:</p>
                                    <input type="text" placeholder="Chef Name"
                                    defaultValue={taste}
                                        name="taste"
                                        className="input input-bordered w-full" />
                                </div>
                            </div>


                            <div className="md:flex justify-between gap-8 ">
                                <div className="w-full">
                                    <p>Category:</p>
                                    <input type="text" placeholder="Name"
                                    defaultValue={category}
                                        name="category"
                                        className="input input-bordered w-full" />
                                </div>
                                <div className=" w-full">
                                    <p>Details:</p>
                                    <input type="text" placeholder="Chef Name"
                                    defaultValue={details}
                                        name="details"
                                        className="input input-bordered w-full" />
                                </div>
                            </div>

                            <div className=" ">
                                <p>Photo:</p>
                                <input type="text" placeholder="Photo URl"
                                defaultValue={photo}
                                    name="photo"
                                    className="input input-bordered w-full" />
                            </div>




                            <div className="">
                                <input className="btn btn-block bg-[#D2B48C]" type="submit" value="Update Coffee" />
                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default UpdateCoffee;