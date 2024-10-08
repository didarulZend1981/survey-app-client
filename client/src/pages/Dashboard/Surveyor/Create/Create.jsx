
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { imageUpload } from '../../../../api/utils'
import useAuth from "../../../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Create = () => {
  const { register, handleSubmit, reset } = useForm();
  const {user} =useAuth();
  console.log("create user check-------",user?.email);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
 
  





  console.log(data)
  // image upload to imgbb and then get an url
  const imageFile = { image: data.image[0] }
  const parts = data.deadline.split('-');
  // Rearrange the parts in the desired format 'dd/mm/yyyy'
  const fdeadline = `${parts[2]}-${parts[1]}-${parts[0]}`;

  const Cparts = data.create_date.split('-');
  // Rearrange the parts in the desired format 'dd/mm/yyyy'
  const Cdeadline = `${Cparts[2]}-${Cparts[1]}-${Cparts[0]}`;
   console.log("date formating---------------",fdeadline,Cdeadline);

  
   
  const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
          'content-type': 'multipart/form-data'
      }
  });
  if (res.data.success) {
      // now send the menu item data to the server with the image url
      const formItem = {
            Description: data.Description,
            Title: data.Title,
            // deadline: fdeadline,
            // createDate: Cdeadline,
            deadline: data.deadline,
            createDate: data.create_date,
            category: data.category,
            status: 1,
            email:user?.email,
            image: res.data.data.display_url,
            totalVotes: 0,
            yesVotes: 0,
            noVotes: 0
      }
      // 
    //   console.log("goooed datt     -------",formItem);
      const menuRes = await axiosPublic.post('/surveysForm', formItem);
    //   console.log("submite valuecheck------------",formItem)
      if(menuRes.data.insertedId){
          //show success popup
          reset();
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.Title} is added to the surveysForm.`,
              showConfirmButton: false,
              timer: 1500
            });
           
            
      }
  }
  console.log( 'with image url', res.data);
};

  return (
    <div className="border-2 p-10 mx-auto rounded-lg">
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
                                <option value="Cooking Appliances">Satisfaction</option>
                                <option value="Food Preparation">Performance</option>
                                <option value="Beverage Makers">Features</option>
                                <option value="Cleaning Tools">Cleaning</option>
                                <option value="Storage Solutions">Storage Solutions</option>
                                <option value="Efficiency">Efficiency</option>
                                
                            </select>
                        </div>
                       
                        

                        

                    </div>
                    <div className="flex justify-between gap-6">

                        <div>
                        <label>Create:</label>
                        <input className="btn outline-0" type="date" {...register('create_date')} />
                        </div>
                        <div>
                        <label>Deadline:</label>
                        <input className="btn outline-0" type="date" {...register('deadline')} />
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