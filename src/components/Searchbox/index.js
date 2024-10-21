
import { IoSearch } from "react-icons/io5";
const Searchbox = () =>{
    return (
        <div className="searchbox position-relative d-flex align-items-center">
            <IoSearch className="mr-2"/>
            <input type="text" placeholder="Quick finding..."/>
        </div>
    )
}

export default Searchbox;