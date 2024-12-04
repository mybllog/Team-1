import React from 'react';

const QuoteDetail = ({ quote }) => {
  if (!quote) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{quote.title}</h1>
      <p>{quote.description}</p>
      <p>Price: {quote.price}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    // Fetch the quote details using the id from the API
    const response = await fetch(`https://nest-mesh.onrender.com/mesh/api/quotes/details/${id}`);
    
    if (!response.ok) {
      throw new Error('Quote not found');
    }
    
    const quote = await response.json();
    
    return {
      props: { quote }, // Passing the quote data to the component
    };
  } catch (error) {
    console.error(error);
    return {
      props: { quote: null }, // In case of error, return null
    };
  }
}

export default QuoteDetail;
