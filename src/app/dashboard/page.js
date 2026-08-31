import DashboardAdmin from '@/components/DashboardAdmin';
import ContactInfoDisplay from '@/components/ContactInfoDisplay';
import EditSiteInfo from '@/components/EditSiteInfo';

export default function DashboardPage() {
  return (
    <div>
      <DashboardAdmin />
      <ContactInfoDisplay />
      <EditSiteInfo />
    </div>
  );
}