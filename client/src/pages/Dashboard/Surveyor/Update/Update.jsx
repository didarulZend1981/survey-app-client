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
    const parts = data.deadline.split('-');
    // Rearrange the parts in the desired format 'dd/mm/yyyy'
    const fdeadline = `${parts[2]}-${parts[1]}-${parts[0]}`;
  
    const Cparts = data.create_date.split('-');
    // Rearrange the parts in the desired format 'dd/mm/yyyy'
    const Cdeadline = `${Cparts[2]}-${Cparts[1]}-${Cparts[0]}`;

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
            userName:user?.displayName,
            image: res.data.data.display_url,
            totalVotes: 0,
            yesVotes: 0,
            noVotes: 0
        }
        // 

        
      console.log("data check----------------",SurveyItem)

        const surveyorRes = await axiosSecure.patch(`/surveyor/${_id}`, SurveyItem);
        // console.log(surveyorRes.data)
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
                                <option value="Cooking Appliances">Satisfaction</option>
                    <option value="Food Preparation">Performance</option>
                    <option value="Beverage Makers">Features</option>
                    <option value="Cleaning Tools">Cleaning</option>
                    <option value="Storage Solutions">Storage Solutions</option>
                    <option value="Efficiency">Efficiency</option>
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
                        Update Survey 
                    </button>
                </form>
    </div>
  );
};

export default Update;