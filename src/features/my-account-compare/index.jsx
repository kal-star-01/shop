import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import CompareTable from './compare-table.jsx';

function Page() {
  usePageMeta('Compare', 'Compare page');
  return (
    <>

      <BreadcrumbSection title="Compare" crumbs={[{text:'Home',to:'/'},{text:'Compare'}]} />
      <CompareTable />
    </>
  );
}
export default Page;
