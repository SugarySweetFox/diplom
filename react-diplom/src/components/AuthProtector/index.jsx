import { Children, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getUser, isAdmin } from "../../store/storage";

export default function AdminProtector({ children }) {

  const navigate = useNavigate();

   useEffect(()=>{
    if(getUser() == null){
      navigate('/');
  } 

   },[])
    const result = [];
    
    Children.forEach(children, (child, index) => {
      result.push(child);
      result.push(<hr key={index} />);
    });
    result.pop(); // Remove the last separator
    return result;
  }
// function Protector({children}) {
//     // const navigate = useNavigate();
//     // if(!!isAdmin()){
//     //     navigate('/');
//     // }

//     // return ({children});
//     return (
//         <>
//           {Children.map(children, child =>
            
//               {child}
            
//           )}
//         </>
//       );







