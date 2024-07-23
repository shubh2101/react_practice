'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(10);
  const elements = [];

  const CardElement = () => {
    return (
      <Card className="mb-1">
        <CardHeader>
          <CardTitle>Card {count}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight;
      const scrolledHeight = window.scrollY;
      const visibleHeight = window.innerHeight;

      if (scrolledHeight + visibleHeight >= totalHeight - 1) {
        console.log('at the end reached');
        setCount((prevCount) => prevCount + 10);
        //fetchData()   call the api here
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  for (let i = 0; i <= count; i++) {
    elements.push(<CardElement id="card" key={i} />);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {elements}
    </main>
  );
}
