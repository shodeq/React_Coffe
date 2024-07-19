import Navbar from "../../fragments/Navbar"

export default function DashboardMainLayout({children}) {
    return(
        <section className="w-full p-[20px] bg-[#1b140e] text-white flex flex-col gap-[20px] reltive items-center pb-[80px] lg:pb-[10px]">
        <Navbar/>
        <div className="isi w-full flex flex-col gap-[20px]">
        {children}
        </div>
        </section>
    )
}