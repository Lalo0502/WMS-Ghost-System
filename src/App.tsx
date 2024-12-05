import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import PickListMonitor from './pages/PickListMonitor';
import DeparturesMonitor from './pages/DeparturesMonitor';
import Reports from './pages/Reports';
import Transload from './pages/Transload';
import Catalogs from './pages/catalogs';
import FloorMap from './pages/FloorMap';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/floor-map" element={<FloorMap />} />
          <Route path="/pick-list" element={<PickListMonitor />} />
          <Route path="/departures" element={<DeparturesMonitor />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/transload" element={<Transload />} />
          <Route path="/catalogs/*" element={<Catalogs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;