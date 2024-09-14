import { FaStar } from "react-icons/fa";



const MenuCard = ({ food}) => {
    
     const { foodName,image,rating,price,protein,carbs,fat } = food;
     
     return (
          <div >
               <div className='food-slide bg-[#f7f7f7] p-4 '>
                    <img src={image} alt={foodName} className='mx-auto rounded-xl' />
                    <p className="flex items-center gap-1 mt-2">  <FaStar className="text-yellow-500"></FaStar> {rating} </p>
                    <h1 className="text-xl text-start font-semibold"> {foodName} </h1>
                    <p className="text-start font-semibold"> $ {price} </p>
                    <div className="p-3">
                         <button className="btn bg-[#6ea963] w-full p-3"> Add to Card </button>
                    </div>
                    <div className="flex justify-around text-red-400 font-medium">
                         <h1> Protein {protein}g / </h1>
                         <h1> Carbs {carbs}g / </h1>
                         <h1> Fat {fat}g / </h1>
                    </div>
               </div>
          </div>
     );
};

export default MenuCard;