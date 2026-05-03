import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-slate-900 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">TaskFlow Pro</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-slate-900 text-white p-4 text-center">
        <p>&copy; 2023 TaskFlow Pro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
