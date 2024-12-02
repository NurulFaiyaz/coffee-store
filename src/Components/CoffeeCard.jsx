import { Link } from "react-router-dom";
import { MdRemoveRedEye, MdEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {


    const { _id, name, chef, photo } = coffee;



    const handleDelete = _id => {
        console.log(_id)

        if (_id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/coffee/${_id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                                setCoffees(remainingCoffees);
                            }
                        })
                }
            });
        }
    }


    return (
        <div className="">
            <div className="card card-side border rounded-md flex p-5 items-center bg-[#f5f4f1]">
                <figure className="w-2/6 border">
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                </div>
                <div className="card-actions justify-end flex-col ">
                    <Link><button className="btn btn-sm bg-[#d2b48c]"><MdRemoveRedEye /></button></Link>
                    <Link to={`/update-coffee/${_id}`}><button className="btn btn-sm bg-slate-900 text-white"><MdEdit /></button></Link>
                    <Link><button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-500 text-white"><MdDelete /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;