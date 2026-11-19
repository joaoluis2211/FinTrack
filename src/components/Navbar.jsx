
export function Navbar() {
    return (
        <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 gap-4">

            <div>
                <h1 className="text-4xl font-bold tracking-tight text-white">
                    Fin<span className="text-yellow-400">Track</span>
                </h1>
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                <a
                    className="px-4 py-3 text-sm font-semibold text-yellow-400 border-b-2 border-yellow-400"
                    href="#"
                >
                    Dashboard
                </a>

                <a
                    className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                    href="#"
                >
                    Transaction
                </a>

                <a
                    className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                    href="#"
                >
                    Budget
                </a>

                <a
                    className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                    href="#"
                >
                    Reports
                </a>

                <a
                    className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                    href="#"
                >
                    Settings
                </a>
            </div>
        </nav>
    )
}
