import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SiteData } from "../constants";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Home</h1>
        <p>{SiteData.tagLine}</p>
        <p>
            <a href={SiteData.appstoreUrl}>View in the App Store</a>
        </p>
    </Layout>
);

export default IndexPage;
