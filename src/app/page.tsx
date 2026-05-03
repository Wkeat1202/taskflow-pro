import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TaskFlow Pro</h1>
        <p className="text-lg mb-8">Streamline your team's workflow with real-time collaboration.</p>
        <Button href="/login" className="bg-white text-indigo-600">Get Started</Button>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="flex justify-center space-x-8">
          <Card title="Real-Time Collaboration" description="Work together seamlessly with live updates." />
          <Card title="Task Management" description="Organize and prioritize your tasks efficiently." />
          <Card title="Analytics" description="Gain insights with detailed reports." />
        </div>
      </section>
      <section className="py-16 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to boost your productivity?</h2>
        <Button href="/login" className="bg-indigo-600">Start Your Free Trial</Button>
      </section>
    </Layout>
  );
};

export default HomePage;
