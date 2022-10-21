import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>George Smerin</title>
        <meta name="description" content="Frontend development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container>
        <Content>
          <p>I love building beautiful and user friendly websites and apps</p>
          <ul>
            <li>Blog 1</li>
            <li>Blog 2</li>
            <li>Blog 3</li>
          </ul>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

const Content = styled.main`
  padding: 4rem 0;
`;

export default Home;
