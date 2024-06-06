import { useLoaderData } from "react-router-dom";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Update = () => {
  const {Description, Title, deadline, createDate,category,email,image, _id} = useLoaderData();
  const {user} =useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();



  const onSubmit = async (data) => {
    console.log(data)
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    if (res.data.success) {
        // now send the menu item data to the server with the image url
        const SurveyItem = {
            




            Description: data.Description,
            Title: data.Title,
            deadline: data.deadline,
            createDate: data.create_date,
            category: data.category,
            status: 1,
            email:user?.email,
            image: res.data.data.display_url
        }
        // 
        const surveyorRes = await axiosSecure.patch(`/surveyor/${_id}`, SurveyItem);
        console.log(surveyorRes.data)
        if(surveyorRes.data.modifiedCount > 0){
            // show success popup
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.Title} is updated to the Survey.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log( 'with image url', res.data);
};

  const { register, handleSubmit } = useForm();
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={Title}
                            
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
                            <select defaultValue={category} {...register('category', { required: true })}
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
                        <label>Create:</label>
                        <input 
                        
                        defaultValue={createDate}
                        
                        type="date" {...register('create_date')} />
                        </div>
                        <div>
                        <label>Deadline:</label>
                        <input 
                        defaultValue={deadline}
                        type="date" {...register('deadline')} />
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
                        <textarea 
                        
                        defaultValue={Description}
                        
                        {...register('Description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input 
                        
                        {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Survey 
                    </button>
                </form>
    </div>
  );
};

export default Update;