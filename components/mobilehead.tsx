import MobileSideBar from "./mobilesidebar";

const MobileHead = () => {
    return ( 
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b top-0 z-50 fixed w-full">
            <MobileSideBar />
        </nav>
     );
}
 
export default MobileHead;