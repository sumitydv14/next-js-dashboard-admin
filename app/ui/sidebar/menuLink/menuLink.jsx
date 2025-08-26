"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = (i) => {
    const pathName = usePathname();
    return(
        <Link className={`flex items-center gap-2 p-2 ease-in-out duration-150 ${pathName === i.item.path ? 'bg-gray-700 rounded-lg': ''}`} href={i.item.path}>{i.item.icon} {i.item.title}</Link>
    )
}
export default MenuLink;