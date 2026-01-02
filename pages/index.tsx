'use client';
import { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import ItemReview from '../components/ItemReview';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Home() {
  const [receipts, setReceipts] = useState<any[]>([]);
  const [selectedReceipt, setSelectedReceipt] = useState<any>(null);

  useEffect(() => {
    async function loadReceipts() {
      const snap = await getDocs(collection(db, 'receipts'));
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setReceipts(data);
    }
    loadReceipts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Grocery Tracker</h1>
      <Dashboard receipts={receipts} onSelect={setSelectedReceipt} />
      {selectedReceipt && (
        <ItemReview receiptId={selectedReceipt.id} items={selectedReceipt.items} />
      )}
    </div>
  );
}
