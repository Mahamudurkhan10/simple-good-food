import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Components/Hooks/useAxiosPublic";

const FoodUpdate = () => {

    const food = useLoaderData()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    

    const handleUpdate = async(e) => {
        e.preventDefault()
        const foodName  = e.target.foodName.value;
        const image    = e.target.image.value;
        const price  = e.target.price.value;
        const protein  = e.target.protein.value;
        const carbs  = e.target.carbs.value;
        const fat  = e.target.fat.value;
        const description  = e.target.description.value;
        const ingredients  = e.target.ingredients.value;
        const instructions  = e.target.instructions.value;
        const category  = e.target.category.value;
        const meal  = e.target.meal.value;

        const newUpdatePost = { foodName, image, price, protein, carbs, fat, description, ingredients:[ingredients], instructions, category, meal }
        
         
        try {
          const res = await axiosPublic.put(`/menuUpdate/${food._id}`,newUpdatePost)
          .then((res) => {
                
               if (res.data.modifiedCount > 0) {
                   Swal.fire({
                       title: 'Success!',
                       text: 'Items updated Successfully',
                       icon: 'success',
                       confirmButtonText: 'Cool'
                   })
                   navigate('/dashboard/manageMenu')
               }
           })
          
        } catch (error) {
          console.log(error);
        }
            
        
    }

    return <div>
        <Link to={'/dashboard/allMenus'} className="flex gap-3 items-center mb-4"><FaArrowLeft />        Back</Link>
        <h1 className="text-2xl font-semibold text-green-400">Add Food menu</h1>
        <div className="mt-7">
            <form onSubmit={handleUpdate}>
                <div className="flex items-center justify-between gap-6 ">
                    <div className=" w-full ">
                        <label className="text-sm ">Name</label>
                        <input name="foodName" type="text" placeholder="First name" className="w-full border-4 h-12 rounded-lg mt-2" defaultValue={food.foodName} />
                    </div>
                    <div className=" w-full ">
                        <label className="text-sm ">Image</label>
                        <input name="image" type="text" placeholder="Image" className="w-full border-4 h-12 rounded-lg mt-2" defaultValue={food.image} />
                    </div>
                    <div className=" w-full ">
                        <label className="text-sm ">Price</label>
                        <input name="price" type="text" placeholder="Image" className="w-full border-4 h-12 rounded-lg mt-2" defaultValue={food.price}/>
                    </div>
                </div>

                <div className="flex w-3/4 mt-6   items-center justify-between gap-6 ">
                    <div className=" w-full ">
                        <label className="text-sm ">Protein</label>
                        <input name="protein" type="text" placeholder="55g" className="w-full border-4 h-12 rounded-lg mt-2" defaultValue={food.protein}/>
                    </div>
                    <div className=" w-full ">
                        <label className="text-sm ">Carbs</label>
                        <input name="carbs" type="text" placeholder="25g" className="w-full border-4 h-12 rounded-lg mt-2" defaultValue={food.carbs}/>
                    </div>
                    <div className=" w-full ">
                        <label className="text-sm ">Fat</label>
                        <input name="fat" type="text" placeholder="20g" className="w-full border-4 h-12 rounded-lg mt-2"  defaultValue={food.fat} />
                    </div>
                </div>
                <div className=" w-full mt-6">
                    <label className="text-sm ">Details</label>
                    <input name="description" type="text" placeholder="type your hair style name" className="w-full px-3 border-4 h-24 rounded-lg mt-2" defaultValue={food.description} />
                </div>
                <div className=" w-full mt-6">
                    <label className="text-sm ">Ingredients</label>
                    <input name="ingredients" type="text" placeholder="type your hair style name" className="w-full px-3 border-4 h-24 rounded-lg mt-2" defaultValue={food.ingredients}/>
                </div>
                <div className=" w-full mt-6">
                    <label className="text-sm ">Instructions</label>
                    <input name="instructions" type="text" placeholder="type your hair style name" className="w-full px-3 border-4 h-24 rounded-lg mt-2" defaultValue={food.instructions} />
                </div>
                <div className="flex justify-between items-center gap-9 mt-6">
                    <div className="w-full">
                        <label>Our menu</label>
                        <select name="meal" className="select select-bordered w-full mt-2 " defaultValue={food.meal}>
                            <option>Dinner</option>
                            <option>Lunch</option>
                            <option>Breakfast</option>
                            <option>Snack</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label>Meal Plan</label>
                        <select name="category" className="select select-bordered w-full mt-2" defaultValue={food.category}>
                            <option>Small Meal</option>
                            <option>Small Paleo Meal</option>
                            <option>Medium Meal</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex flex-col justify-center items-center  ">
                    <button className="btn btn-success w-1/3 mx-auto ">Submit menu</button>
                </div>
            </form>
        </div>
    </div>;
};
export default FoodUpdate;