import React from 'react';
import { PageHeader as PageHeaderType } from '../../types';

export default function PageHeader({ title, description }: PageHeaderType) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}