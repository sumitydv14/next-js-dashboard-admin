import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";
const layout = ({children}) => {
    return(
        <section className="flex w-full items-start gap-3">
            <Sidebar />
            <div className="w-full flex flex-col gap-3 pr-5 max-h-dvh overflow-hidden">
            <Navbar/>
            {children}
            </div>

        </section>
    )
}
export default layout;