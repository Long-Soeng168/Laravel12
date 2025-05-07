import { CalendarClock } from 'lucide-react'
import React from 'react'

const MyNewPost = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl bg-white px-4 py-16 text-center sm:px-16 ">
               <div className='flex flex-col lg:flex-row  gap-12'>
               <div className="mx-auto flex-1 mb-12 space-y-12">
                    <div className="overflow-hidden border border-gray-200 bg-white shadow-lg hover:cursor-pointer">
                        <img
                            src="assets/demo-images/banner5.jpg"
                            alt="Students studying together"
                            width={400}
                            height={250}
                            className="aspect-video w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-start font-noto-san-extra-light font-bold text-red-700">Liberal Arts Colleges Rankings</h2>
                            <p className="my-6 text-gray-500 text-start">
                                Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts
                                fields of study.
                            </p>
                            <div className="mt-3 flex text-sm text-blue-950">
                                <CalendarClock className="mr-2 h-4 w-4 text-blue-950" />
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden border border-gray-200 bg-white shadow-lg hover:cursor-pointer">
                        <img
                            src="assets/demo-images/banner3.jpg"
                            alt="Students studying together"
                            width={400}
                            height={250}
                            className="aspect-video w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-start font-noto-san-extra-light font-bold text-red-700">Ways Parents and Counselors Can Help Students Earn Scholarships</h2>
                            <p className="my-6 text-gray-500 text-start">
                                Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts
                                fields of study.
                            </p>
                            <div className="mt-3 flex text-sm text-blue-950">
                                <CalendarClock className="mr-2 h-4 w-4 text-blue-950" />
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden border border-gray-200 bg-white shadow-lg hover:cursor-pointer">
                        <img
                            src="assets/demo-images/banner3.jpg"
                            alt="Students studying together"
                            width={400}
                            height={250}
                            className="aspect-video w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-start font-noto-san-extra-light font-bold text-red-700">Ways Parents and Counselors Can Help Students Earn Scholarships</h2>
                            <p className="my-6 text-gray-500 text-start">
                                Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts
                                fields of study.
                            </p>
                            <div className="mt-3 flex text-sm text-blue-950">
                                <CalendarClock className="mr-2 h-4 w-4 text-blue-950" />
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden border border-gray-200 bg-white shadow-lg hover:cursor-pointer">
                        <img
                            src="assets/demo-images/banner4.jpg"
                            alt="Students studying together"
                            width={400}
                            height={250}
                            className="aspect-video w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-start font-noto-san-extra-light font-bold text-red-700">Ways Parents and Counselors Can Help Students Earn Scholarships</h2>
                            <p className="my-6 text-gray-500 text-start">
                                Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts
                                fields of study.
                            </p>
                            <div className="mt-3 flex text-sm text-blue-950">
                                <CalendarClock className="mr-2 h-4 w-4 text-blue-950" />
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden border border-gray-200 bg-white shadow-lg hover:cursor-pointer">
                        <img
                            src="assets/demo-images/banner3.jpg"
                            alt="Students studying together"
                            width={400}
                            height={250}
                            className="aspect-video w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-start font-noto-san-extra-light font-bold text-red-700">Liberal Arts Colleges Rankings</h2>
                            <p className="my-6 text-gray-500 text-start">
                                Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts
                                fields of study.
                            </p>
                            <div className="mt-3 flex text-sm text-blue-950">
                                <CalendarClock className="mr-2 h-4 w-4 text-blue-950" />
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden border border-gray-200 bg-white shadow-lg hover:cursor-pointer">
                        <img
                            src="assets/demo-images/banner3.jpg"
                            alt="Students studying together"
                            width={400}
                            height={250}
                            className="aspect-video w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-start font-noto-san-extra-light font-bold text-red-700">Liberal Arts Colleges Rankings</h2>
                            <p className="my-6 text-gray-500 text-start">
                                Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts
                                fields of study.
                            </p>
                            <div className="mt-3 flex text-sm text-blue-950">
                                <CalendarClock className="mr-2 h-4 w-4 text-blue-950" />
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="rounded-md bg-red-700 px-4 py-2 text-black hover:bg-red-800">
                        Load More 
                    </button>
                    <button className="rounded-md bg-red-700 px-4 py-2 text-black hover:bg-red-800">
                        Load More 
                    </button><button className="rounded-md bg-red-700 px-4 py-2 text-black hover:bg-red-800">
                        Load More 
                    </button>

                    
                    </div>
               </div>
            </div>
  )
}

export default MyNewPost
