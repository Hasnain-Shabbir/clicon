'use client';
import { Button } from '@/components';
import { ArrowRight, Circle } from '@/icons';

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-24">
      <div className="flex gap-2">
        <Button
          color="primary"
          variant="contained"
          endIcon={<ArrowRight />}
          // startIcon={<Circle />}
          largeSize
          href="https://github.com/"
          fullWidth
          // disabled
        >
          Get Started
        </Button>
        <Button
          color="secondary"
          variant="contained"
          // endIcon={<ArrowRight />}
          startIcon={<Circle />}
          largeSize
          disabled
        >
          label
        </Button>
        <Button
          color="success"
          variant="contained"
          // endIcon={<ArrowRight />}
          startIcon={<Circle />}
          largeSize
          // disabled
        >
          label
        </Button>
        <Button
          color="warning"
          variant="contained"
          // endIcon={<ArrowRight />}
          startIcon={<Circle />}
          largeSize
          // disabled
        >
          label
        </Button>
        <Button
          color="danger"
          variant="contained"
          endIcon={<ArrowRight />}
          startIcon={<Circle />}
          largeSize
          // disabled
        >
          label
        </Button>
      </div>
      <div className="mt-6 flex gap-2">
        <Button
          color="primary"
          variant="outlined"
          endIcon={<ArrowRight />}
          // startIcon={<Circle />}
          largeSize
          // href="https://github.com/"
          // fullWidth
          // disabled
        >
          Get Started
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          // endIcon={<ArrowRight />}
          startIcon={<Circle />}
          largeSize
          // disabled
        >
          label
        </Button>
        <Button
          color="success"
          variant="outlined"
          // endIcon={<ArrowRight />}
          startIcon={<Circle />}
          largeSize
          // disabled
        >
          label
        </Button>
        <Button
          color="warning"
          variant="outlined"
          // endIcon={<ArrowRight />}
          startIcon={<Circle />}
          largeSize
          // disabled
        >
          label
        </Button>
        <Button
          color="danger"
          variant="outlined"
          endIcon={<ArrowRight />}
          startIcon={<Circle />}
          largeSize
          // disabled
        >
          label
        </Button>
      </div>
    </main>
  );
}
