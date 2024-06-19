import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import axios from 'axios';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        
        
        
        const response = await axios.get(`https://survey-app-ashy.vercel.app/all/user?role=${role}`);
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, [role]);


  








//   const { data: users = [], refetch } = useQuery({
//     queryKey: ['users'],
//     queryFn: async () => {
//         const res = await axiosSecure.get('/users');
//         return res.data;
//     }
// })


//   const { data: users = [], refetch } = useQuery({
//       queryKey: ['users'],
//       queryFn: async () => {
//           const res = await axiosSecure.get('/users');
//           return res.data;
//       }
//   })


  const proUserProm = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an surveyor Now!`,
                showConfirmButton: false,
                timer: 1500
              });

              refetch();
        }
    })
}
  return (
    <div>

<SectionTitle subHeading="Admin" heading="By defult role user, member ship purches pro-user,user update surveyor by admin "></SectionTitle>


          <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
            

                <select 
          value={role}
          onChange={(e) => setRole(e.target.value)}

          className="select select-secondary w-full max-w-xs">
                  <option value="none" selected>All</option>
                  <option value="pro-user">pro-user</option>
                                <option value="user">user</option>
                                <option value="surveyor">surveyor</option>
                                <option value="admin">admin</option>
                               
          </select>







                <h2 className="text-3xl">Total Users: {users.length}</h2>
          </div>


          <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    { user.role === 'surveyor' ? 'surveyor' : <button
                                        onClick={() => proUserProm(user)}
                                        className="btn btn-lg bg-orange-500">
                                       {user.role}
                                    </button>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default AllUsers;