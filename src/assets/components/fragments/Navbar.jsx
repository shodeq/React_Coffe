import { FaRegEnvelope, FaRegHeart, FaSearch, FaShoppingBag } from "react-icons/fa"
import propil from "../../image/propil.jpg"
import { TiHome } from "react-icons/ti"
import { BsChatDots } from "react-icons/bs"

export default function Navbar(){
    return(
        <div className="nav w-full flex justify-between items-center">
            <div className="kiri lg:w-[30%] flex items-center gap-[10px] lg:gap-[20px]">
                <div className="mbar">
                    <img src={propil} alt="" className="h-[60px] aspect-square rounded-[10px]"/>
                </div>
                <div className="nem">
                    <h1 className="font-extrabold text-[1.5rem]">Maverik Elias</h1>
                    <p className="font-semibold">Welcome back</p>
                </div>
            </div>
            <div className="tengah w-[60%] lg:flex hidden">
                <ul className="w-full flex justify-around">
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <i className="fa-solid fa-house">{<TiHome />}</i>
                        <p>Home</p>
                    </li>
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <i className="fa-regular fa-heart">{<FaRegHeart />}</i>
                        <p>Favourite</p>
                    </li>
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <i className="fa-regular fa-envelope">{<FaRegEnvelope />}</i>
                        <p>Inbox</p>
                    </li>
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <i className="fa-regular fa-comment-dots">{<BsChatDots />}</i>
                        <p>Order</p>
                    </li>
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <i className="fa-solid fa-bag-shopping">{<FaShoppingBag />}</i>
                        <p>Bag</p>
                    </li>
                </ul>
            </div>
            <div className="kanan lg:w-[10%] flex justify-end">
                <i className="fa-solid fa-magnifying-glass h-[40px] aspect-square flex justify-center items-center text-[1.5rem] rounded-[10px] bg-[white] text-[#1b140e]">{<FaSearch />}</i>
            </div>
        </div>
    )
}