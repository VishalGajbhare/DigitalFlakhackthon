import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Login from './pages/Login';
import DataTable from './components/DataTable';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/data-table" element={<DataTable />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
