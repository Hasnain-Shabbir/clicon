'use client';
import { Button } from '@/components';
import { ArrowRight, Circle } from '@/icons';

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-24">
      <Button
        color="primary"
        variant="contained"
        endIcon={<ArrowRight />}
        startIcon={<Circle />}
        largeSize
        href="https://github.com/"
        fullWidth
        disabled
      >
        Get Started
      </Button>
    </main>
  );
}
