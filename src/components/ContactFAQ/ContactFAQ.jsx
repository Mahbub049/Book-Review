import React from 'react';

const ContactFAQ = () => {
    return (
        <div>
            <div className="py-[50px] bg-gray-100 mb-5 rounded-xl"><h2 className="text-[40px] font-bold text-center">Frequently Asked Questions</h2></div>
            <div className='px-[10%]'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" id="faq-accordion-1" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    How do I add a book to my reading list?
                    </div>
                    <div className="collapse-content">
                    <p>To add a book to your reading list, simply navigate to the book's details page and click the "Add to Reading List" button.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" id="faq-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How can I search for specific genres or authors?
                    </div>
                    <div className="collapse-content">
                    <p>You can search for specific genres or authors using the search bar located at the top of the website. Simply type in the desired genre or author's name, and relevant results will be displayed.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" id="faq-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Are there any membership fees or charges for using BookHub?
                    </div>
                    <div className="collapse-content">
                    <p>No, BookHub is completely free to use. There are no membership fees or charges associated with accessing our website or its features.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" id="faq-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How do I participate in discussions or leave comments on blog posts?
                    </div>
                    <div className="collapse-content">
                    <p>To participate in discussions or leave comments on blog posts, you need to be logged in to your BookHub account. Once logged in, you can scroll to the bottom of the blog post and find the comment section where you can share your thoughts.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" id="faq-accordion-5" />
                    <div className="collapse-title text-xl font-medium">
                    Can I suggest a book to be added to the BookHub collection?
                    </div>
                    <div className="collapse-content">
                    <p>Yes, we welcome suggestions for books to be added to our collection! Please use the "Contact Us" page to submit your book suggestions, and our team will review them.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" id="faq-accordion-6" />
                    <div className="collapse-title text-xl font-medium">
                    How do I reset my password if I forget it?
                    </div>
                    <div className="collapse-content">
                    <p>If you forget your password, you can reset it by clicking the "Forgot Password" link on the login page. You will be prompted to enter your email address, and instructions for resetting your password will be sent to you.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" id="faq-accordion-7" />
                    <div className="collapse-title text-xl font-medium">
                    What should I do if I encounter an issue or technical problem on the website?
                    </div>
                    <div className="collapse-content">
                    <p>If you encounter any issues or technical problems while using the website, please reach out to our support team via the "Contact Us" page. Provide as much detail as possible about the problem you're experiencing, and our team will assist you as soon as possible.</p>
                    </div>
                </div>

            </div>
            <div className="mt-[100px] py-[50px] bg-gray-100 mb-5 rounded-xl"><h2 className="text-[40px] font-bold text-center">Contact Us</h2>
            <p className='text-center'>Please take a moment to get in touch, we will get back to you shortly.</p>
            <div className='flex gap-3 mt-[100px]'>
                <div className='flex-1'>
                    <div className='flex flex-col gap-3 mb-8 text-lg'>
                        <p>Your Name</p>
                        <input className='py-2 px-3' type="text" placeholder='Your Name' />
                    </div>
                    <div className='flex flex-col gap-3 mb-8 text-lg'>
                        <p>Email Address</p>
                        <input className='py-2 px-3' type="email" placeholder='Email Address' />
                    </div>
                    <div className='flex flex-col gap-3 mb-8 text-lg'>
                        <p>Phone Number</p>
                        <input className='py-2 px-3' type="email" placeholder='Phone Number' />
                    </div>
                    <div className='flex flex-col gap-3 mb-8 text-lg'>
                        <p>How can we help you?</p>
                        <select name="" id="" className='text-gray-500'>
                            <option value="Bug">Select one of the option</option>
                            <option value="Bug">Bug in the Website</option>
                            <option value="Access">Accessibility Issue</option>
                            <option value="Access">Book Related Issue</option>
                        </select>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <p>Message</p>
                    <textarea name="" id="" cols="80" rows="15" className='p-2' placeholder='Your Message Here'></textarea>
                    <input type="submit" value="Submit" className='bg-[#22be0ac4] py-5 px-10 w-full rounded-lg text-lg font-bold text-white hover:bg-[#23BE0A] cursor-pointer' />
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactFAQ;