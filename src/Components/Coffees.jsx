import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./coffeeCard";
import { BsCup } from "react-icons/bs";
import { useState } from "react";

const Coffees = () => {

    const currentCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(currentCoffees)


    return (
        <div className="w-4/6 mx-auto my-10">
            <div className="text-center space-y-2 text-sm">
                <p>Slip & Savor</p>
                <p>Our Popular Products</p>
                <Link to={'/add-coffee'} className="btn btn-sm bg-[#e3b577] text-base-100"><button className="flex gap-2 items-center">Add Coffee <span className="text-lg text-black"><BsCup /></span></button></Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 md:gap-10 my-6">
                {
                    coffees.map(coffee =>
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Coffees;