import type { NextApiRequest, NextApiResponse } from 'next';

const createQuoteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { clientId, propertyDetails, additionalNotes, description } = req.body;

      // Validation checks to ensure required fields are present
      if (!clientId || !propertyDetails || !description) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Extract token from Authorization header (Bearer token)
      const token = req.headers['authorization']?.split(' ')[1]; // Extract token from "Bearer <token>"

      if (!token) {
        return res.status(401).json({ error: 'Unauthorized, token is missing' });
      }

      // Prepare data to send to external API
      const quoteData = {
        clientId,
        propertyDetails,
        additionalNotes,
        description,
      };

      // Send data to external API with Authorization header
      const response = await fetch('https://mesh-1-1.onrender.com/mesh/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add token to headers
        },
        body: JSON.stringify(quoteData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Forward error response from external API
        return res.status(response.status).json({ error: data.error || 'Failed to create quote' });
      }

      // Return success response to the frontend
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error during quote creation:', error);
      return res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  } else {
    // Method Not Allowed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default createQuoteHandler;
