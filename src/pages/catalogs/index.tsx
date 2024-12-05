import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customers from './Customers';
import Consignees from './Consignees';
import PartNumber from './PartNumber';
import Carriers from './Carriers';
import BundleTypes from './BundleTypes';
import Warehouse from './Warehouse';
import Users from './Users';

export default function Catalogs() {
  return (
    <Routes>
      <Route path="/customers" element={<Customers />} />
      <Route path="/consignees" element={<Consignees />} />
      <Route path="/part-number" element={<PartNumber />} />
      <Route path="/carriers" element={<Carriers />} />
      <Route path="/bundle-types" element={<BundleTypes />} />
      <Route path="/warehouse" element={<Warehouse />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}