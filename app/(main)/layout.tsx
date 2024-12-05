import MobileHead from "@/components/mobilehead";
import SideBar from "@/components/sidebar";

type Props = {
    children:React.ReactNode
}
const MainLayout = ({children}:Props) => {
    return ( 
        <>
        <SideBar className="hidden lg:flex"/>
        <MobileHead />
        <main className="lg:pl-[256px]  h-full pt-[50px] lg:pt-0">
            <div className="max-w-[1056px] h-full mx-auto-pt-6">
                {children}
            </div>
        </main>
        </>
     );
}
 
export default MainLayout;
