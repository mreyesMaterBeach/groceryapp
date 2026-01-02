'use client';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function ItemReview({ receiptId, items }: any) {
  const [localItems, setLocalItems] = useState(items);

  const handleCategoryChange = async (index: number, category: string) => {
    const newItems = [...localItems];
    newItems[index].category = category;
    setLocalItems(newItems);
    await updateDoc(doc(db, 'receipts', receiptId), { items: newItems });
  };

  return (
    <div className="bg-gray-100 rounded-xl p-4 mt-4">
      <h3 className="font-semibold mb-2">Review Items</h3>
      {localItems.map((item: any, idx: number) => (
        <div key={idx} className="flex justify-between items-center mb-2">
          <div>{item.name} - ${item.price.toFixed(2)}</div>
          <input
            type="text"
            value={item.category}
            onChange={(e) => handleCategoryChange(idx, e.target.value)}
            className="border p-1 rounded"
          />
        </div>
      ))}
    </div>
  );
}
