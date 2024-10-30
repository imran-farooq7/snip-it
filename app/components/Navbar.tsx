import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
				<div className="relative flex h-16 justify-between">
					<div className="flex flex-1 items-stretch justify-start">
						<Link href={"/"} className="flex flex-shrink-0 items-center">
							<Image
								alt="logo"
								className="block"
								width={48}
								height={48}
								src="https://www.svgrepo.com/show/524460/code.svg"
							/>
						</Link>
					</div>
					{/* <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
						<Link
							href={"#"}
							className="text-gray-700 hover:text-indigo-700 text-sm
							font-medium"
						>
							Login
						</Link>
						<Link
							href={"#"}
							className="text-white bg-emerald-500 hover:bg-emerald-700 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
						>
							Sign up
						</Link>
					</div> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
