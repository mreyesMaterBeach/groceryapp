import type { NextApiRequest, NextApiResponse } from 'next';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { items, date, store } = req.body;
    try {
      await addDoc(collection(db, 'receipts'), { items, date, store });
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(500).json({ success: false, error: e });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
