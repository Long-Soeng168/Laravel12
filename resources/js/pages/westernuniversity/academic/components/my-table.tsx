const MyTable = () => {
    return (
        <div className="mx-auto max-w-screen-xl md:mt-16">
            <div className=" overflow-auto bg-white p-8 ">
                <h2 className="mb-4 text-center text-[#3a573a] text-2xl">Classes List</h2>
                <div className="relative overflow-auto">
                    <div className="overflow-x-auto rounded-lg">
                        <table className="bg-[#dee4ed] mb-20 min-w-full border-collapse border border-[#3a573a]">
                            <thead>
                                <tr className="bg-[#3a573a] p-20 text-center text-xs font-thin text-white md:text-sm">
                                    <th className="border-r border-gray-400 p-4">
                                        <span className="block">ID</span>
                                    </th>
                                    <th className="border-r border-gray-400 p-4">
                                        <span className="block">Class Name</span>
                                    </th>
                                    <th className="border-r border-gray-400 p-4">
                                        <span className="block">Level</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center text-xs text-[#3a573a] md:text-sm">
                                    <td className="border border-gray-400 p-2 md:p-4">01</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Class 1</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Beginner</td>
                                </tr>
                                <tr className="text-center text-xs text-[#3a573a] md:text-sm">
                                    <td className="border border-gray-400 p-2 md:p-4">02</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Class 2</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Intermediate</td>
                                </tr>
                                <tr className="text-center text-xs text-[#3a573a] md:text-sm">
                                    <td className="border border-gray-400 p-2 md:p-4">03</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Class 3</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Advanced</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className=" overflow-auto bg-white p-8 ">
                <h2 className="mb-4 text-center text-[#3a573a] text-2xl">Grade 4-12</h2>

                <div className="relative overflow-auto">
                    <div className="overflow-x-auto rounded-lg">
                        <table className="bg-[#dee4ed] mb-20 min-w-full border-collapse border border-[#3a573a]">
                            <thead>
                                <tr className="bg-[#3a573a] p-20 text-center text-xs font-thin text-white md:text-sm">
                                    <th className="border-r border-gray-400 p-4">
                                        <span className="block">ID</span>
                                    </th>
                                    <th className="border-r border-gray-400 p-4">
                                        <span className="block">Class Name</span>
                                    </th>
                                    <th className="border-r border-gray-400 p-4">
                                        <span className="block">Level</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center text-xs text-[#3a573a] md:text-sm">
                                    <td className="border border-gray-400 p-2 md:p-4">01</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Class 1</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Beginner</td>
                                </tr>
                                <tr className="text-center text-xs text-[#3a573a] md:text-sm">
                                    <td className="border border-gray-400 p-2 md:p-4">02</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Class 2</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Intermediate</td>
                                </tr>
                                <tr className="text-center text-xs text-[#3a573a] md:text-sm">
                                    <td className="border border-gray-400 p-2 md:p-4">03</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Class 3</td>
                                    <td className="border border-gray-400 p-2 md:p-4">Advanced</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTable;
