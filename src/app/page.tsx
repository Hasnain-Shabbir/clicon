import { AppLink, Badge } from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-24">
      <AppLink href="#" color="primary">
        Browse All Product
      </AppLink>
      <AppLink href="#" color="secondary">
        Browse All Product
      </AppLink>
      <AppLink href="#" color="success">
        Browse All Product
      </AppLink>
      <AppLink href="#" color="danger">
        Browse All Product
      </AppLink>
      <AppLink href="#" color="warning">
        Browse All Product
      </AppLink>
    </main>
  );
}
