import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/jp.svg" alt="Japan" height={32} width={40}
                    className="mr-4 rounded-md"/>
                    Nhật
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/KR - Korea (South).svg" alt="Korean" height={32} width={40}
                    className="mr-4 rounded-md"/>
                    Hàn
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/CN - China.svg" alt="China" height={32} width={40}
                    className="mr-4 rounded-md"/>
                    Trung
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/fr.svg" alt="France" height={32} width={40}
                    className="mr-4 rounded-md"/>
                    Pháp
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/EN - English.svg" alt="English" height={32} width={40}
                    className="mr-4 rounded-md"/>
                    Anh
                </Button>
            </div>
        </footer>
     );
}
export default Footer;