

const Votingpaper = () => {
  return (
    <div>
         <label>
            <input type="radio" value='no' {...register('vote', { required: 'vote is required' })} />
            No
          </label>
          <label>
            <input type="radio" value='yes' {...register('vote', { required: 'vote is required' })} />
           yes
          </label>
    </div>
  );
};

export default Votingpaper;