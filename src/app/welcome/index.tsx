'use client';

import { useResponsive } from 'antd-style';
import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { genSiteHeadTitle } from '@/utils/genSiteHeadTitle';

import Banner from './features/Banner';
import Footer from './features/Footer';
import Mobile from './layout.mobile';
import Layout from './layout.pc';

const Welcome = memo(() => {
  const { mobile } = useResponsive();
  const { t } = useTranslation('welcome');
  const pageTitle = genSiteHeadTitle(t('header'));

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {mobile ? (
        <Mobile>
          <Banner />
        </Mobile>
      ) : (
        <Layout>
          <Banner />
          <Footer />
        </Layout>
      )}
    </>
  );
});

export default Welcome;
