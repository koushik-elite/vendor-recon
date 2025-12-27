"use client";

import { useState } from 'react';
import { Input, Button } from "@heroui/react";

export default function AddVendorPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Vendor added:', formData);
    // Here you can add logic to save to backend or state
  };

  return (
    <div className="flex items-center justify-center min-h-full">
      <form onSubmit={handleSubmit} className="w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Add Vendor</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <Input
            label="Vendor Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            size="lg"
          />
          <Input
            label="Contact Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            size="lg"
          />
          <Input
            label="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            size="lg"
            className="col-span-2"
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" color="primary" size="lg" className="px-8">
            Add Vendor
          </Button>
        </div>
      </form>
    </div>
  );
}