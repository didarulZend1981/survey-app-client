
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

const Create = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // const parts = data.deadline.split('-');
    // // Rearrange the parts in the desired format 'dd/mm/yyyy'
    // const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    //  console.log(formattedDate);
    console.log("feed back--------",data)
    // image upload to imgbb and then get an url
    // const imageFile = { image: data.image[0] }
    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // });
    // if (res.data.success) {
    //     // now send the menu item data to the server with the image url
    //     const menuItem = {
    //         Description: data.Description,
    //         Title: data.Title,
    //         deadline: data.deadline,
    //         category: data.category,
            //    vote: data.vote,
    //         image: res.data.data.display_url
    //     }
    //     // 
    //     const menuRes = await axiosSecure.post('/menu', menuItem);
    //     console.log(menuRes.data)
    //     if(menuRes.data.insertedId){
    //         // show success popup
    //         reset();
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: `${data.name} is added to the menu.`,
    //             showConfirmButton: false,
    //             timer: 1500
    //           });
    //     }
    // }
    // console.log( 'with image url', res.data);
};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register('Title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Cooking Appliances">Cooking Appliances</option>
                                <option value="Food Preparation">Food Preparation</option>
                                <option value="Beverage Makers">Beverage Makers</option>
                                <option value="Cleaning Tools">Cleaning Tools</option>
                                <option value="Storage Solutions">Storage Solutions</option>
                            </select>
                        </div>
                        <div>
                        <label>Deadline:</label>
                        <input type="date" {...register('deadline')} />
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                           
                        <div>
        <label>vote:</label>
        <div>
          <label>
            <input type="radio" value="0" {...register('vote', { required: 'vote is required' })} />
            No
          </label>
          <label>
            <input type="radio" value="1" {...register('vote', { required: 'vote is required' })} />
           yes
          </label>
          
        </div>
        
      </div>
                        
                        
                        
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('Description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Survey 
                    </button>
                </form>
    </div>
  );
};

export default Create;