import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PrivacyPolicyContent from "../content/privacy-policy";

const IndexPage = () => (
    <Layout>
        <SEO title="Privacy Policy" />
        <ReactMarkdown>{PrivacyPolicyContent}</ReactMarkdown>
    </Layout>
);

export default IndexPage;
