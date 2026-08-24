import { useState } from 'react';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';

function Page() {
  usePageMeta('FAQ', 'FAQ page');
  const [open, setOpen] = useState(0);
  const items = [{"q": "This Designer Bronzer Has Even Buyers Splurging!", "a": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor."}, {"q": "4 Tips for A Colorful Easter Tablescape", "a": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute."}, {"q": "Hawaii Couples Trip Guide and Spring Break Faves", "a": "Assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic."}, {"q": "If You Struggle To Hit Your Goals, Try This Instead", "a": "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}, {"q": "4 Tips for A Colorful Easter Tablescape", "a": "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}];
  return (
    <>

      <BreadcrumbSection title="Frequently Questions" crumbs={[{text:'Home',to:'/'},{text:'FAQ'}]} />
      <section id="faqs_arae" className="ptb-100"><div className="container"><div className="row"><div className="col-lg-12">
        <div className="faqs_area_wrapper"><div role="tablist" className="accordion">
          {items.map((it,i)=>(
            <div className="card_items_area" key={i}>
              <div role="tab" className="card-header">
                <a href="#" className={open===i?'':'collapsed'} onClick={(e)=>{e.preventDefault(); setOpen(open===i?-1:i);}}>
                  <h5 className="mb-0">{it.q}<i className="fas fa-angle-down rotate-icon"></i></h5>
                </a>
              </div>
              <div id={"accordion-"+i} className="collapse" role="tabpanel" style={{display:open===i?'block':'none'}}>
                <div className="card-body">{it.a}</div>
              </div>
            </div>
          ))}
        </div></div>
      </div></div></div></section>
    </>
  );
}
export default Page;
