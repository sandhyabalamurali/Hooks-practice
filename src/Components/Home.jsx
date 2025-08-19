import { useNavigate } from "react-router-dom";
import "../Styles/Home.css"
function Home(){
     const navigate=useNavigate();
     return(
          <div className="home-container">
          <h1 className="home-title">Hooks & Demos</h1>
          <ul className="home-list">
          <li className="home-list-item">
               <button className="home-button" onClick={() => navigate('/usestate')}>
               useState
               </button>
          </li>
          <li className="home-list-item">
               <button className="home-button" onClick={() => navigate('/useeffect')}>
               useEffect
               </button>
          </li>
          <li className="home-list-item">
               <button className="home-button" onClick={() => navigate('/usecontext')}>
               useContext
               </button>
          </li>
          <li className="home-list-item">
               <button className="home-button" onClick={() => navigate('/useref')}>
               useRef
               </button>
          </li>
          {/* add more buttons here */}
          </ul>
     </div>
     );
}
export default Home;

// return (
//     <div className="container">
//       <h1>Hooks & Demos</h1>
//       <ul className="hook-list">
//         {hooks.map((hook) => (
//           <li key={hook.name}>
//             <button
//               className="hook-button"
//               onClick={() => navigate(hook.path)}
//             >
//               {hook.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }