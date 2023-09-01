import { useDeleteProductsMutation, useGetUsersQuery } from "@/redux/feactures/userApi";
export const Products = () => {
  const { data, isError, isLoading , error } = useGetUsersQuery(null);
  const [deleteTaks] = useDeleteProductsMutation()
  return (
    <div>
      {isError && <p>error {error.stack } { error.message} {error.error}</p>}
      {isLoading && <p>loanding</p> }
      
      <div>
      {data?.map((task) => (
        <li key={task.id}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <button className="py-3 px-5 bg-red-500" onClick={()=>{
              deleteTaks(task.id)
            }}>delete</button>
        </li>
      ))}
      </div>
    </div>
  );
};
