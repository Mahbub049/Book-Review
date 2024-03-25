import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const ListedBooks = () => {
    return (
        <div>
            <h2 className="pb-[64px] text-[28px] font-bold text-center">Books</h2>

            <div className="dropdown dropdown-bottom flex justify-center mb-14">
                <div tabIndex={0} role="button" className="btn m-1 text-lg font-semibold bg-[#23BE0A] text-white">Sort By <RiArrowDropDownLine /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg" aria-label="Tab 1" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">
                    <div className="p-6 flex gap-6">
                        <div className="py-7 px-12">
                            <img className="w-[130px] h-[172px]" src="https://i.ibb.co/tKJQQYM/2.jpg" alt="" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-bold mb-4">The Catcher in the Rye</h3>
                            <p className="font-medium">By : Awlad Hossain</p>
                            <div className="flex  py-3 items-center gap-4">
                                <div className="flex gap-6 items-center">
                                    <p className="font-bold">Tag</p>
                                    <p className="py-2 px-4 text-[#23BE0A] font-medium">Young</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaLocationDot />
                                    <p>Year of Publishing: 1924</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-3">
                                    <HiOutlineUsers />
                                    <p className="text-gray-500">Publisher: Scribner</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdOutlineRequestPage />
                                    <p className="text-gray-500">Page 192</p>
                                </div>
                            </div>
                            <hr className="border my-4 max-w-full"/>
                            <div className="flex gap-3">
                                <p className="px-5 py-3 bg-[#328EFF26] text-[#FFAC33] rounded-[30px]">Category: Classic</p>
                                <p className="px-5 py-3 bg-[#FFAC3326] text-[#FFAC33] rounded-[30px]">Rating: 4.5</p>
                                <button className="btn text-xl font-bold text-white bg-[#23BE0A] w-auto rounded-full">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg" aria-label="Tab 2"/>
                <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">Tab content 2</div>
            </div>
        </div>
    );
};

export default ListedBooks;