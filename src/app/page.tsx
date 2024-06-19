
import Helper from '@/components/Helper';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
	return (
	<div>
		<h1 className="text-3xl font-bold underline"></h1>
		<ConnectButton />
		<Helper />
	</div>
	)
}
