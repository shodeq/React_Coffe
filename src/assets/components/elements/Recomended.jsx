const Recomended = ({children}) =>{
    return(
        <div className="card w-full lg:w-[30%] flex  items-center border p-[10px] gap-[15px] rounded-[15px] border-[3px] border-[#deca97] shrink-0">
                           {children}
                        </div>
    )
}

const Image = ({images}) =>{
    return(
        <img src={images} alt="" className="h-[90px] rounded-[10px] aspect-square"/>
    )
}

const Deskripsi = ({judul, des, icon, rating}) =>{
    return(
        <div className="tek flex flex-col gap-[5px]">
        <h1 className=" font-extrabold">{judul}</h1>
        <p className="font-semibold text-[#968c82]">{des}</p>
        <p className="text-[0.7rem] font-semibold flex justify-items-end items-center gap-[3px]"><i className="text-orange-600">{icon}</i> {rating}</p>
        </div>
    )
}

Recomended.Image = Image
Recomended.Deskripsi = Deskripsi

export default Recomended