export function Navbar() {
    return (
        <nav className="flex w-full h-28 items-center">
            <div className="w-1/2">
                <h1 className="ml-6 text-5xl font-bold"><span className="text-green-500">Fin</span>Track</h1>
            </div>
            <div className="flex w-full gap-11 items-center h-full">
                <a className="flex h-full items-center focus:border-b-4 px-4 focus:border-green-500 focus:text-green-500
             text-lg text-gray-600" href="#">Dashboard</a>
                <a className="flex h-full items-center focus:border-b-4 px-4 focus:border-green-500 focus:text-green-500
             text-lg text-gray-600" href="#">Transaction</a>
                <a className="flex h-full items-center focus:border-b-4 px-4 focus:border-green-500 focus:text-green-500
             text-lg text-gray-600" href="#">Budget</a>
                <a className="flex h-full items-center focus:border-b-4 px-4 focus:border-green-500 focus:text-green-500
             text-lg text-gray-600" href="#">Reports</a>
                <a className="flex h-full items-center focus:border-b-4 px-4 focus:border-green-500 focus:text-green-500
             text-lg text-gray-600" href="#">Settings</a>
            </div>
        </nav>
    )
}