											// ॥ श्री गणेशाय नमः ॥ 

import { useContext } from "react";
import { AppContext } from "../context/AppContext";


function Pagination(){

    const{page, handlePageChange, totalPages} = useContext(AppContext);

    return(
        <div className="w-full flex justify-center items-center border-[2px] fixed bottom-0 bg-white">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">
                <div className="flex gap-x-2">
                    { (page > 1) &&
                        (<button 
                            className="rounded-md border px-4 py-1"
                            onClick={() => handlePageChange(page - 1)}>Previous</button>)
                    }
                    { (page < totalPages) &&
                        (<button 
                            className="rounded-md border px-4 py-1"
                            onClick={() => handlePageChange(page + 1)}>Next</button>)
                    }
                </div>
                
            </div>

            <p className="font-bold text-sm">Page {page} of {totalPages}</p>
        </div>
    )
}


export default Pagination;