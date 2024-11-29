import { Link } from "react-router-dom";
import swal from 'sweetalert';


const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const addCoffee = { name, chef, supplier, taste, category, details, photo }

        console.log(addCoffee)

        // send data to server

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    swal("Good job!", "Coffee is added successfully");
                }
                form.reset()
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
                        <h2 className="text-xl font-semibold text-slate-600 mb-4">Add New Coffee</h2>
                        <p className="w-9/12  mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    <form onSubmit={handleAddCoffee}>

                        <div className="space-y-4 w-9/12 md:w-11/12 mx-auto mb-5">

                            <div className="md:flex justify-between gap-8 ">
                                <div className="w-full">
                                    <p>Name:</p>
                                    <input type="text" placeholder="Name"
                                        name="name"
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="w-full">
                                    <p>Chef:</p>
                                    <input type="text" placeholder="Chef Name"
                                        name="chef"
                                        className="input input-bordered w-full" />
                                </div>
                            </div>


                            <div className="md:flex justify-between gap-8 ">
                                <div className="w-full">
                                    <p>Supplier:</p>
                                    <input type="text" placeholder="Name"
                                        name="supplier"
                                        className="input input-bordered w-full" />
                                </div>
                                <div className="w-full">
                                    <p>Taste:</p>
                                    <input type="text" placeholder="Chef Name"
                                        name="taste"
                                        className="input input-bordered w-full" />
                                </div>
                            </div>


                            <div className="md:flex justify-between gap-8 ">
                                <div className="w-full">
                                    <p>Category:</p>
                                    <input type="text" placeholder="Name"
                                        name="category"
                                        className="input input-bordered w-full" />
                                </div>
                                <div className=" w-full">
                                    <p>Details:</p>
                                    <input type="text" placeholder="Chef Name"
                                        name="details"
                                        className="input input-bordered w-full" />
                                </div>
                            </div>

                            <div className=" ">
                                <p>Photo:</p>
                                <input type="text" placeholder="Photo URl"
                                    name="photo"
                                    className="input input-bordered w-full" />
                            </div>




                            <div className="">
                                <input className="btn btn-block bg-[#D2B48C]" type="submit" value="Add Coffee" />
                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddCoffee;