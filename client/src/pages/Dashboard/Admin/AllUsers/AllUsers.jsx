import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


const AllUsers = () => {
  const axiosSecure = useAxiosSecure();


 

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    }
})


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
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an surveyor Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}
  return (
    <div>

<SectionTitle subHeading="Admin" heading="By defult role user, member ship purches pro-user,user update surveyor by admin "></SectionTitle>


          <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
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
                                       surveyor
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