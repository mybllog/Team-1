import React from "react";

const QuoteDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch data on the server
  let quote = null;
  try {
    const response = await fetch(
      `https://nest-mesh.onrender.com/mesh/api/quotes/details/${id}`,
      { cache: "no-store" } // Ensures fresh data is fetched for every request
    );

    if (!response.ok) {
      throw new Error("Quote not found");
    }

    quote = await response.json();
  } catch (error) {
    console.error("Failed to fetch quote:", error);
  }

  if (!quote) {
    return <p>Quote not found or an error occurred.</p>;
  }

  return (
    <div>
      <h1>{quote.title}</h1>
      <p>{quote.description}</p>
      <p>Price: {quote.price}</p>
    </div>
  );
};

export default QuoteDetail;
