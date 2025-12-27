"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";

export default function VendorListPage() {
  // Sample vendor data for demonstration
  const vendors = [
    { id: 1, name: 'Vendor A', email: 'vendorA@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Vendor B', email: 'vendorB@example.com', phone: '098-765-4321' },
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vendors</h1>
        <Button as="a" href="/vendor/add" color="primary">
          Add Vendor
        </Button>
      </div>

      {vendors.length === 0 ? (
        <Card className="max-w-md mx-auto">
          <CardBody>
            <p className="text-center">No vendors yet. Click "Add Vendor" to get started.</p>
          </CardBody>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <Card key={vendor.id}>
              <CardHeader>
                <h3 className="text-lg font-semibold">{vendor.name}</h3>
              </CardHeader>
              <CardBody>
                <p><strong>Email:</strong> {vendor.email}</p>
                <p><strong>Phone:</strong> {vendor.phone}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}