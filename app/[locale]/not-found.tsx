import { Link } from '@/lib/navigation';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-neutral-50 px-4">
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-bold text-primary-600">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-neutral-600">
          The page you are looking for might have been moved or doesn&apos;t exist.
          Try browsing our health calculators below.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            <Home className="h-4 w-4" />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
