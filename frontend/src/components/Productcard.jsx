// import React from 'react'

// const Productcard = ({toy}) => {
//   return (
//     <div className=''>
//         <img
//         src={toy.image}
//         alt={toy.name}
//         className='w-full h-48 object-cover rounded-lg'
//         />
//         <h2 className=''>{toy.name}</h2>
//         <p className=''>₹{toy.price}</p>
//         <button>Add to cart</button>
      
//     </div>
//   )
// }

// export default Productcard


const Productcard = ({ toy }) => {
  return (
    <div className="border rounded-xl shadow-md p-4">
      <img
        src={toy.image}
        alt={toy.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="mt-2 font-bold">{toy.name}</h2>
      <p className="text-gray-600">₹{toy.price}</p>
      <button className="mt-2 bg-pink-500 text-white px-4 py-1 rounded">
        Add to cart
      </button>
    </div>
  );
};

export default Productcard;

