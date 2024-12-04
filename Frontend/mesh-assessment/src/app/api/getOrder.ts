import type { NextApiRequest, NextApiResponse } from 'next';

const getOrderHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // Extract token from Authorization header
      const token = req.headers['authorization']?.split(' ')[1]; // Extract token from "Bearer <token>"

      if (!token) {
        return res.status(401).json({ error: 'Unauthorized, token is missing' });
      }

      // Fetch bills from external API
      const response = await fetch('https://mesh-1-1.onrender.com/mesh/api/orders', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Add token to headers
        },
      });

      const data = await response.json();

      if (!response.ok) {
        // Forward error response from external API
        return res.status(response.status).json({ error: data.error || 'Failed to fetch bills' });
      }

      // Return success response to the frontend
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error during fetching bills:', error);
      return res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  } else {
    // Method Not Allowed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default getOrderHandler;
