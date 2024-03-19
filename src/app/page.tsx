import { Badge } from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-24">
      <Badge color="danger" title="Hot" />
      <Badge color="warning" title="25% off" />
      <Badge color="success" title="sale" />
      <Badge color="primary" title="best deals" />
      <Badge color="gray" title="sold out" />
      <Badge color="secondary" title="Hot" />
    </main>
  );
}
