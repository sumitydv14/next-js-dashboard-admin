import Image from "next/image"
import logo from '../../assets/nextjs-icon-dark-background.png';
import { MdAttachMoney, MdDashboard, MdShoppingBag, MdSupervisedUserCircle } from "react-icons/md";
import MenuLink from "./menuLink/menuLink";




const Sidebar = () => {

    const menuItems = [
        {
            title: "User",
            lists: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />
                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle />
                },
                {
                    title: "Products",
                    path: '/dashboard/products',
                    icon: <MdShoppingBag />
                },
                {
                    title: "Transitions",
                    path: '/dashboard/transitions',
                    icon:  <MdAttachMoney/>
                }
            ]
        }
    ]

    return (
        <section className="min-w-xs bg-gray-900 p-5 min-h-dvh">
            <div className="flex items-center gap-[14px] mb-5">
               <Image src={logo} alt="logo" width={50} height={50} />
               <div className="text-md leading-[16px] font-bold  uppercase">
                  <span>Hello </span><br/><span>world</span>
               </div>
            </div>
            <ul className="flex flex-col">
                {
                    menuItems.map((menu, index) => (
                            <li key={index}> 
                               <span>{menu.title}</span>
                                {
                                    menu.lists.map((list, index) =>  (
                                        <MenuLink item={list} key={list.title} />
                                    ))
                                }
                            </li>  
                    ))
                }
                
            </ul>
        </section>
    )
}
export default Sidebar