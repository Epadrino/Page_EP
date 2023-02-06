import { Layout } from '@/components/layout/Layout';

import { Front } from '@/components/contents/front/Front';
import { Softwares } from '@/components/contents/softwares/Softwares';
import { HistoryPage } from '@/components/contents/history/HistoryPage';
import { Briefcase } from '@/components/contents/briefcase/Briefcase';
import { Contact } from '@/components/contents/contact/Contact';

export default function Home() {
	return (
		<Layout title='PortafolioEP'>
			<Front />
			<HistoryPage />
			<Softwares />
			<Briefcase />
			<Contact />
		</Layout>
	);
}
