import express, { Request, Response, NextFunction } from 'express';
import { sendEmail } from '@/actions/sendEmail';

const app = express();

// Middleware to enable CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.vaishalicodes.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Endpoint for sending emails
app.post('/send-email', async (req: Request, res: Response) => {
  try {
    const formData = req.body; // Assuming you're sending form data in the request body
    const result = await sendEmail(formData);
    if (result.error) {
      res.status(500).json({ error: result.error });
    } else {
      res.json({ success: true });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email.' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
