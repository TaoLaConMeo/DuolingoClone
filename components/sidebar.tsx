import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SideBarItem from "./sidebaritem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className:string;
};
const SideBar = ({className}:Props) => {
    return ( 
        <div className={cn(
            "lg:fixed bg-white h-full lg:w-[256px] flex left-0 top-0 px-4 border-r-2 flex-col",
            className,
        )}>
            <Link href="/home">
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
                    <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
                        Dolin
                    </h1>
            </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SideBarItem label="Học" href="/home" iconSrc="/home.svg"/>
                <SideBarItem label="Nhiệm Vụ" href="/quests" iconSrc="/quest.svg"/>
                <SideBarItem label="Cửa Hàng" href="/shop" iconSrc="/shop.svg"/>
                <SideBarItem label="Bảng Xếp Hạng" href="/leaderboard" iconSrc="/laderboard.svg"/>
                <SideBarItem label="Dịch" href="/translate" iconSrc="/Google_Translate_logo.svg"/>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
            </div>
        </div>
     );
}
 
export default SideBar;
