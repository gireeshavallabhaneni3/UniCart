// import React, { useState } from 'react';
// import DescriptionList from './DescriptionList'; // Assuming you have a list of items
// export const DescriptionnList = () => {
//     const [openId, setOpenId] = useState(null);

//     const items = [
//         { id: 1, title: "Item 1", details: "Details of Item 1" },
//         { id: 2, title: "Item 2", details: "Details of Item 2" },
//         { id: 3, title: "Item 3", details: "Details of Item 3" },
//         { id: 4, title: "Item 4", details: "Details of Item 4" },
//     ];

//     const handleClick = (id) => {
//         if (openId === id) {
//             setOpenId(null); // If clicked again, close it
//         } else {
//             setOpenId(id); // Open the clicked item
//         }
//     };

//     return (
//         <div>
//             {items.map((item) => (
//                 <div key={item.id}>
//                     <div
//                         onClick={() => handleClick(item.id)}
//                         style={{
//                             padding: '10px',
//                             margin: '5px 0',
//                             backgroundColor: '#eee',
//                             cursor: 'pointer'
//                         }}
//                     >
//                         {item.title}
//                     </div>

//                     {openId === item.id && (
//                         <div
//                             style={{
//                                 padding: '10px',
//                                 backgroundColor: '#ddd'
//                             }}
//                         >
//                             {item.details}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default DescriptionList;
