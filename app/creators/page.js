import React from 'react';
import CreatorsPage from './Creator';

// This generates metadata based on search params
export async function generateMetadata({ searchParams }) {
  const search = searchParams.search;
  
  if (search) {
    return {
      title: `Search Results for "${search}"`,
      description: `Find creators matching "${search}" on Get me a PS5. Support your favorite creators and help them reach their goals.`,
      keywords: `${search}, creators, fundraising, support, donate`,
    };
  }

  return {
    title: 'Find Creators - Get me a PS5',
    description: 'Discover amazing creators on Get me a PS5. Search and support creators to help them achieve their goals.',
    keywords: 'creators, fundraising, support, donate, search',
  };
}

const Page = ({searchParams}) => {
  return <CreatorsPage searchParams={searchParams} />;
};

export default Page;