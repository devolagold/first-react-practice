export default function App() {
  return (
    <div className="bg-[#E0E1E7] flex flex-col space-y-4 justify-center items-center w-screen h-screen">
        <div className="md:w-1/2 content bg-white p-6 md:p-8 shadow-sm rounded-lg">
            <h1 className="text-2xl md:text-3xl font-medium">TO-DO LIST APPLICATION</h1>
            <h2 className="pt-3">Add a To-Do</h2>

            <div className="flex justify-between mt-3 space-x-2 w-full">
                <input
                    type='text'
                    placeholder='Enter a TODO'
                    className='w-3/4 bg-transparent rounded-md border border-stroke py-[10px] px-2 text-dark-6 outline-none transition'
                />
                <button class="white w-1/4 font-normal">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_172_1579)">
                            <path d="M6.41699 6.41666V2.91666H7.58366V6.41666H11.0837V7.58332H7.58366V11.0833H6.41699V7.58332H2.91699V6.41666H6.41699Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_172_1579">
                            <rect width="14" height="14" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <em>Add Todo</em>
                    </span>
                </button>
            </div>

            {/* TODO Lists */}
            <div className="grid grid-cols-1 gap-6 my-4 mt-8">
                <div className="flex items-center justify-between space-x-3">
                    <p className="justify-self-start">
                        Go to the Cinemas and enjoy the movie
                    </p>

                    <div className="actions flex space-x-2 justify-self-end">
                        <button className="p-1 w-fit flex space-x-2">
                            <p>Edit</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_173_1587)">
                                <path d="M5 19H6.414L15.728 9.68599L14.314 8.27199L5 17.586V19ZM21 21H3V16.757L16.435 3.32199C16.6225 3.13452 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13452 17.849 3.32199L20.678 6.15099C20.8655 6.33852 20.9708 6.59283 20.9708 6.85799C20.9708 7.12316 20.8655 7.37746 20.678 7.56499L9.243 19H21V21ZM15.728 6.85799L17.142 8.27199L18.556 6.85799L17.142 5.44399L15.728 6.85799V6.85799Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_173_1587">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <button className="p-1 w-fit flex space-x-2 text-[#FF0000]">
                            <p>Delete</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_173_1595)">
                                <path d="M7 4V2H17V4H22V6H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z" fill="red"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_173_1595">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>

                    </div>
                </div>

                <div className="flex items-center justify-between space-x-3">
                    <p className="justify-self-start">
                        Go to the Cinemas and enjoy the movie
                    </p>

                    <div className="actions flex space-x-2 justify-self-end">
                        <button className="p-1 w-fit flex space-x-2">
                            <p>Edit</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_173_1587)">
                                <path d="M5 19H6.414L15.728 9.68599L14.314 8.27199L5 17.586V19ZM21 21H3V16.757L16.435 3.32199C16.6225 3.13452 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13452 17.849 3.32199L20.678 6.15099C20.8655 6.33852 20.9708 6.59283 20.9708 6.85799C20.9708 7.12316 20.8655 7.37746 20.678 7.56499L9.243 19H21V21ZM15.728 6.85799L17.142 8.27199L18.556 6.85799L17.142 5.44399L15.728 6.85799V6.85799Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_173_1587">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <button className="p-1 w-fit flex space-x-2 text-[#FF0000]">
                            <p>Delete</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_173_1595)">
                                <path d="M7 4V2H17V4H22V6H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z" fill="red"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_173_1595">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}