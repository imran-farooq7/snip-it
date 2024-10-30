import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { experimental__simple } from "@clerk/themes";

const poppins = Poppins({
	weight: ["300", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Snip it",
	description: "Place all your code snippets in one place",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className}  antialiased`}>
				<ClerkProvider
					appearance={{
						baseTheme: experimental__simple,
						elements: {
							formButtonPrimary:
								"bg-emerald-500 border-none text-white py-3 hover:bg-emerald-700",
							buttonArrowIcon: "hidden",
						},
					}}
				>
					<Navbar />
					{children}
				</ClerkProvider>
			</body>
		</html>
	);
}
