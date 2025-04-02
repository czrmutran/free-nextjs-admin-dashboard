import Breadcrumb from "@/components/common/PageBreadCrumb";
import Contact from "@/components/home/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageTitle="Contact Page"
      />

      <Contact />
    </>
  );
};

export default ContactPage;