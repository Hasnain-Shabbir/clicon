import { Features, MobileApp } from '@/components';

export default function Home() {
  return (
    <main
      className="flex flex-col"
      // className="flex flex-col gap-2 p-24"
    >
      {/* <MobileApp color="gray" /> */}
      <div className="pt-6"></div>
      <Features />
    </main>
  );
}
