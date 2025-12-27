"use client";

import { useState } from 'react';
import { Input, Button, Card, CardBody, CardHeader } from "@heroui/react";

export default function AddVendorPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vendor added:', formData);
    // Here you can add logic to save to backend or state
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <h2 className="text-xl font-bold">Add Vendor</h2>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Vendor Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <Input
            label="Contact Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <Input
            label="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <Button type="submit" color="primary">Add Vendor</Button>
        </form>
      </CardBody>
    </Card>
  );
}