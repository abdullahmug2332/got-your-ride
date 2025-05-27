import { useNavigate } from "react-router-dom";
import hb from "../assets/hb.png"
import call from "../assets/call.png"
import { useSelector, useDispatch } from 'react-redux';
import { toggleValue } from '../redux/toggleSlice';


export default function Navbar() {
  const navigate = useNavigate();
  const toggle = useSelector((state) => state.toggle.value);
  const token = localStorage.getItem("token")

  const dispatch = useDispatch();
  const logOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;

    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <section className='bg-[#f0582a] fixed top-0 left-0 w-full z-20' >
      <div className={` ${toggle == false ? "w-full" : " w-[64%] sm:w-[75%] md:w-[83%] xl:w-[86%] 2xl:w-[88%]"} top-0 left-[0]  duration-500  text-white py-[15px] ml-auto`}>
        <div className='flex items-center justify-between  py-[10px] px-[35px]'>
          <div className='flex gap-[10px] md:gap-[40px] items-center'>
            <img onClick={() => dispatch(toggleValue())} src={hb} className='w-[30px] md:w-[40px] hover:scale-[1.06] duration-300 cursor-pointer' />
          </div>
          <div className='flex items-center gap-[10px] md:gap-[40px]'>
            <div className={`${token ? "block" : "hidden"}`}>
              <button onClick={logOut} className='text-[12px] md:text-[15px]'>Logout</button>
            </div>
            <div className='flex items-center gap-[2px] hover:scale-[1.06] duration-300 cursor-pointer'>
              <img src={call} className='w-[15px] md:w-[20px]' />
              <p className='text-[12px] md:text-[15px]'>+447453923024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
