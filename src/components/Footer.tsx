import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-10 py-6 text-sm text-center text-gray-600">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Docalyze</p>
        <div className="flex space-x-4">
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}

