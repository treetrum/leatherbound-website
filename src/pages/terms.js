import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactMarkdown from "react-markdown";
import TermsConditionContent from "../content/terms-conditions";

const IndexPage = () => (
    <Layout>
        <SEO title="Terms of Use" />
        <ReactMarkdown>{TermsConditionContent}</ReactMarkdown>
    </Layout>
);

export default IndexPage;
