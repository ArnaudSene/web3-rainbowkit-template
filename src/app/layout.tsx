import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Web3Provider } from "./provider"
import "./globals.css"
import '@rainbow-me/rainbowkit/styles.css';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${inter.className} dark:bg-gray-950 bg-gray-50 dark:text-gray-50 text-gray-950`}>
				<Web3Provider>
					{children}
				</Web3Provider>
			</body>
		</html>
	)
}
