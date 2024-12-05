type Props = {
    children:React.ReactNode;
};
const FeedWrapper = ({children}:Props) => {
    return (  
        <div className="flex-1 top-0 relative pb-10">
            {children}
        </div>
    );
}
 
export default FeedWrapper;