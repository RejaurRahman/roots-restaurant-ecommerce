import { FC } from "react"

import Accordion from "../../components/Accordion/Accordion.component"
import AccordionItem from "../../components/Accordion/AccordionItem/AccordionItem.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

import "./Documents.styles.scss"

const Faq: FC = () => {
  return (
    <>
      <PageBanner label="FAQ" />
      <Breadcrumbs label="FAQ" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <Accordion className="documents-accordion">
              <AccordionItem
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index={0}
                isList={false}
                title="Is there a minimum spend?"
              >
                <p>No, minimum order.</p>
              </AccordionItem>
              <AccordionItem
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index={2}
                isList={false}
                title="How and when do I pay?"
              >
                <p>We acknowledge all significant credit and check cards. Your card will be charged when you submit a request before the request is chipped away at.</p>
              </AccordionItem>
              <AccordionItem
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index={3}
                isList={false}
                title="What happens if something I ordered isn&apos;t available?"
              >
                <p>More often than not, your request will show up true to form - however there can be times where an item or ingredients isn&apos;t available, we&apos;ll generally recommened the closest selective product. For example, replacement for a type of soup product. When something is inaccessible or we&apos;ve made a replacement, we will be in touch to tell you and give the important remuneration. In case you&apos;re discontent with the replacement, just let us know and we can give a discount to the first thing.</p>
              </AccordionItem>
              <AccordionItem
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index={7}
                isList={false}
                title="What is your refunds policy?"
              >
                <p>We have a no bandy discount strategy, so if a piece of your request is missing, harmed, low quality or not what you requested, we truly need to think about it. Criticism is significant for us to improve, and pictures of marks or low quality things assist us with indicating our makers or pressing group what turned out badly, so kindly incorporate them in the event that you can. We would then be able to discount you immediately, or give you a voucher to take care of the expense of the thing.</p>
              </AccordionItem>
              <AccordionItem
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index={8}
                isList={false}
                title="How do I reset my password?"
              >
                <p>If you need another secret key, there is a &apos;Failed to remember secret key?&apos; interface on the sign-in page. Snap on this, enter your email address, and afterward adhere to the directions in the reset email.</p>
              </AccordionItem>
              <AccordionItem
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index={9}
                isList={false}
                title="I think I&apos;ve found a problem with the website; what should I do?"
              >
                <p>Please email us the details, ideally sending a screenshot as well to <a aria-label="Roots Restaurat Mail To" href="mailto:info@rootsrestaurant.com">info@rootsrestaurant.com</a>. Thanks for your help!</p>
              </AccordionItem>
              <AccordionItem
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index={10}
                isList={false}
                title="How do I give feedback on the website?"
              >
                <p>Kindly email us at: <a aria-label="Roots Restaurat Mail To" href="mailto:info@rootsrestaurant.com">info@rootsrestaurant.com</a>. We truly appreciate your criticism on our sites and application. It&apos;s a splendid path for us to get some answers concerning what we&apos;re doing well, and furthermore what we actually need to take a gander at!</p>
              </AccordionItem>
              <AccordionItem
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index={11}
                isList={false}
                title="Can I suggest a product?"
              >
                <p>Our Producer Team are consistently on the chase for new and intriguing nourishments, so on the off chance that there&apos;s something you&apos;d prefer to see on the site, at that point kindly let us know by means of our <a aria-label="Contact" href="/contact">Contact Page</a></p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
