import DashboardMainLayout from "../components/layout/dashboard/DashboardMainLayout"
import Product from "../components/elements/Product"
import Recomended from "../components/elements/Recomended"
import kopisaset from "../image/kopisaset.jpg"
import { IoIosStar } from "react-icons/io"
import tigakopi from "../image/3kopi.jpg"
import { FaShoppingBag } from "react-icons/fa"
import kendi from "../image/kendi.png"
import off from "../image/30off.png"

export default function app(){
    return(
        <DashboardMainLayout>
            <div className="card w-full flex items-center p-[20px] rounded-[20px] bg-[#ffddb8]">
                <div className="kiri w-[70%] flex flex-col gap-[10px] items-start">
                    <h1 className="lg:text-[5rem] w-[80%] text-[1.5rem] lg:w-[70%] font-extrabold text-[#1b140e]">STAR <u className="no-underline text-[#c6865b]">YOUR DAY</u> WITH COFFE</h1>
                    {/* <P className="lg:w-[30%] text-[#1b140e] font-normal text-[0.9rem] w-[80%]">The best grai, the finest, roast the most powerful flafour</P> */}
                    <button className="w-[70%] lg:w-[20%] bg-[#1b140e] py-[5px] lg:py-[10px] rounded-[20px]">Order Now</button>
                </div>
                <div className="kanan w-[30%] flex justify-center">
                    <div className="hooh lg:w-[70%] lg:w-[70%]">
                        <div className="mbar w-full">
                            <img src={kendi} alt="" className=""/>
                            <img src={off} alt="" className="w-[50%] mt-[-70px] ml-[-15px] lg:mt-[-150px] lg:ml-[-50px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rekom w-full flex flex-col gap-[20px]">
                <div className="atas w-full">
                    <ul className="w-full flex justify-between items-center gap-[10px] overflow-x-auto lg:py-[0]">
                        <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">popular</li>
                        <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">newest</li>
                        <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]"> reccomended</li>
                        <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">range</li>
                        <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">popular</li>
                        <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">newest</li>
                        <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]"> reccomended</li>
                        <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">range</li>
                    </ul>
                </div>
                <div className="bawah w-full justify-between lg:justify-around flex gap-[30px] overflow-x-auto py-[20px] lg:py-[0]">
                    <Product>
                        <Product.Image image={tigakopi}/>
                        <Product.Deskripsi judul="Indonesian Beans" des="Beans Coffe" harga="$335" icon={<FaShoppingBag />} />
                    </Product>
                </div>
            </div>
            <div className="lain w-full flex flex-col gap-[10px]">
                <div className="w-full flex flex-col gap-[10px]">
                    <div className="atas w-full flex justify-between items-center">
                        <h1 className="text-[1.5rem] font-extrabold">Recomended</h1>
                        <p className="text-[1rem] font-semibold text-rose-800">view all</p>
                    </div>
                    <div className="duk w-full flex gap-[30px] overflow-x-auto py-[20px] lg:py-[0] lg:justify-around">
                        <Recomended>
                            <Recomended.Image images={kopisaset}/>
                            <Recomended.Deskripsi judul="Indonesian Beans" des="Beans Coffe" icon={<IoIosStar />} rating="4.9/5"/>
                        </Recomended>
                    </div>
                </div>
                
                <div className="w-full flex flex-col lg:hidden gap-[10px]">
                    <div className="atas w-full flex justify-between items-center">
                        <h1 className="text-[1.5rem] font-extrabold">Popular</h1>
                        <p className="text-[1rem] font-semibold text-rose-800">view all</p>
                    </div>
                    <div className="duk w-full flex gap-[30px] overflow-x-auto py-[20px] lg:py-[0] lg:justify-around">
                        <div className="card w-full lg:w-[30%] flex  items-center border p-[10px] gap-[15px] rounded-[15px] border-[3px] border-[#deca97] shrink-0">
                            <img src="./public/assets/image/kopisaset.jpg" alt="" className="h-[90px] rounded-[10px] aspect-square"/>
                            <div className="tek flex flex-col gap-[5px]">
                                <h1 className=" font-extrabold">Indonesian Beans</h1>
                                <p className="font-semibold text-[#968c82]">foffe beans</p>
                                <p className="text-[0.7rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat.</p>
                            </div>
                        </div>
                        <div className="card w-full lg:w-[30%] flex  items-center border p-[10px] gap-[15px] rounded-[15px] border-[3px] border-[#deca97] shrink-0">
                            <img src="./public/assets/image/kopisaset.jpg" alt="" className="h-[90px] rounded-[10px] aspect-square"/>
                            <div className="tek flex flex-col gap-[5px]">
                                <h1 className=" font-extrabold">Indonesian Beans</h1>
                                <p className="font-semibold text-[#968c82]">foffe beans</p>
                                <p className="text-[0.7rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat.</p>
                            </div>
                        </div>
                        <div className="card w-full lg:w-[30%] flex  items-center border p-[10px] gap-[15px] rounded-[15px] border-[3px] border-[#deca97] shrink-0">
                            <img src="./public/assets/image/kopisaset.jpg" alt="" className="h-[90px] rounded-[10px] aspect-square"/>
                            <div className="tek flex flex-col gap-[5px]">
                                <h1 className=" font-extrabold">Indonesian Beans</h1>
                                <p className="font-semibold text-[#968c82]">foffe beans</p>
                                <p className="text-[0.7rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:hidden gap-[10px]">
                    <div className="atas w-full flex justify-between items-'center">
                        <h1 className="text-[1.5rem] font-extrabold">Newest</h1>
                        <p className="text-[1rem] font-semibold text-rose-800">view all</p>
                    </div>
                    <div className="duk w-full flex gap-[30px] overflow-x-auto py-[20px] lg:py-[0] lg:justify-around">
                        <div className="card w-full lg:w-[30%] flex  items-center border p-[10px] gap-[15px] rounded-[15px] border-[3px] border-[#deca97] shrink-0">
                            <img src="./public/assets/image/kopisaset.jpg" alt="" className="h-[90px] rounded-[10px] aspect-square"/>
                            <div className="tek flex flex-col gap-[5px]">
                                <h1 className=" font-extrabold">Indonesian Beans</h1>
                                <p className="font-semibold text-[#968c82]">foffe beans</p>
                                <p className="text-[0.7rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat.</p>
                            </div>
                        </div>
                        <div className="card w-full lg:w-[30%] flex  items-center border p-[10px] gap-[15px] rounded-[15px] border-[3px] border-[#deca97] shrink-0">
                            <img src="./public/assets/image/kopisaset.jpg" alt="" className="h-[90px] rounded-[10px] aspect-square"/>
                            <div className="tek flex flex-col gap-[5px]">
                                <h1 className=" font-extrabold">Indonesian Beans</h1>
                                <p className="font-semibold text-[#968c82]">foffe beans</p>
                                <p className="text-[0.7rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat.</p>
                            </div>
                        </div>
                        <div className="card w-full lg:w-[30%] flex  items-center border p-[10px] gap-[15px] rounded-[15px] border-[3px] border-[#deca97] shrink-0">
                            <img src="./public/assets/image/kopisaset.jpg" alt="" className="h-[90px] rounded-[10px] aspect-square"/>
                            <div className="tek flex flex-col gap-[5px]">
                                <h1 className=" font-extrabold">Indonesian Beans</h1>
                                <p className="font-semibold text-[#968c82]">foffe beans</p>
                                <p className="text-[0.7rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bawahl lg:hidden w-[90%] fixed bottom-[0px] bg-[#1b140e] py-[15px] border-t-4 border-[white]">
            <div className="tengah w-full flex">
                <ul className="w-full flex justify-around">
                    <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                        <i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </li>
                    <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                        <i className="fa-regular fa-heart"></i>
                        <p>Favourite</p>
                    </li>
                    <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                        <i className="fa-regular fa-envelope"></i>
                        <p>Inbox</p>
                    </li>
                    <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                        <i className="fa-regular fa-comment-dots"></i>
                        <p>Order</p>
                    </li>
                    <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <p>Bag</p>
                    </li>
                </ul>
            </div>
        </div>
        </DashboardMainLayout>
        
    )
}