import React from 'react';
import useMenus from '../../../../Components/Hooks/useMenus';
import { PiPlus } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { MdVilla } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../Components/Hooks/useAxiosPublic';

const ManageMenu = () => {
     const [menus, refetch, loading] = useMenus()
     const axiosPublic = useAxiosPublic()
     const handleDelete = async (id) => {
          try {
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
                         axiosPublic.delete(`/menuDelete/${id}`)
                              .then(res => {
                                   if (res.data.deletedCount > 0) {
                                        refetch()
                                        Swal.fire({
                                             title: "Deleted!",
                                             text: "Your file has been deleted.",
                                             icon: "success"
                                        });
                                   }

                              })

                    }
               });
          }
          catch (error) {
               console.log(error);
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
               });
          }
     }
          
     return (
          <div>
               <div className="bg-white  rounded-lg">
                    <div className="flex flex-col justify-between p-5  gap-4 items-center">

                         <h1 className='text-2xl w-1/6   font-semibold text-start'>Add Menu</h1>
                         <div>
                              <form className='flex gap-5' action="">
                                   <div>
                                        <fieldset className="w-full space-y-1 dark:text-gray-800">
                                             <label htmlFor="Search" className="hidden">Search</label>
                                             <div className="relative">
                                                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                                       <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                                                 <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                                            </svg>
                                                       </button>
                                                  </span>
                                                  <input type="search" name="Search" placeholder="Search Date & menu" className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                                             </div>
                                        </fieldset>
                                   </div>
                                   <div>
                                        <label htmlFor="propertyType" className='flex gap-3 items-center'>

                                             <select name="propertyType" className="select select-bordered w-full max-w-36" >
                                                  <option value="" >Our menu</option>
                                                  <option value={""}>Seaside Serenity Villa</option>

                                             </select>
                                        </label>
                                   </div>
                                   <div>
                                        <label htmlFor="propertyType" className='flex gap-3 items-center'>

                                             <select name="propertyType" className="select select-bordered w-full max-w-36" >
                                                  <option value="">Meal plan</option>
                                                  <option value={""}>Seaside Serenity Villa</option>

                                             </select>
                                        </label>
                                   </div>
                              </form>
                         </div>
                         <Link to={'/dashboard/addFood'}
                              className={"btn btn-success text-white "}>
                              <FaPlus className=" text-yellow-400 "></FaPlus>
                              Add Menu </Link>
                    </div>
                    <div className="overflow-x-auto">
                         <table className="table">
                              {/* head */}
                              <thead className="bg-[#fee8c8]">
                                   <tr className='text-lg'>
                                        <th>
                                             S.no
                                        </th>
                                        <th>Image</th>
                                        <th>Menu name</th>
                                        <th>Our Menu</th>
                                        <th>Meal Plan</th>
                                        <th>Action</th>
                                        <th></th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {/* row 1 */}
                                   {
                                        menus.reverse().map((food, index) =>
                                             <tr key={food._id}>
                                                  <th>
                                                       <label>
                                                            {index + 1}
                                                       </label>
                                                  </th>
                                                  <td>
                                                       <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                 <div className="mask rounded-xl h-12 w-12">
                                                                      <img
                                                                           src={food.image}
                                                                           alt="Avatar Tailwind CSS Component" />
                                                                 </div>
                                                            </div>

                                                       </div>
                                                  </td>
                                                  <td>
                                                       {food.foodName}

                                                  </td>
                                                  <td>{food.category}</td>
                                                  <th>
                                                       <button className="btn btn-ghost btn-xs">Small Meal</button>
                                                  </th>
                                                  <th className="flex gap-4">
                                                       <Link to={`/dashboard/update/${food._id}`}> <FaEdit className="size-7"></FaEdit></Link>
                                                       <Link onClick={() => handleDelete(food._id)}><RiDeleteBin5Line className="size-7 text-red-600" />                            </Link>
                                                  </th>
                                             </tr>
                                        )
                                   }

                              </tbody>

                         </table>
                    </div>
               </div>;
          </div>
     );
};

export default ManageMenu;