
import type { NextApiRequest, NextApiResponse } from 'next';

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://mesh-1-1.onrender.com/mesh/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body), // Forward the request body to the external API
      });

      const data = await response.json();

      if (!response.ok) {
        // Forward error response from external API
        return res.status(response.status).json({ error: data.error || 'Registration failed' });
      }

      // Return success response to the frontend
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error during registration:', error);
      return res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  } else {
    // Method Not Allowed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default registerHandler;
