import { config } from "@/config";
import Link from "next/link";
export default function SuccessPage() {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col gap-4 mx-auto px-4 py-8">
      <h1 className="text-fluid-h1 font-bold text-center ">
        Dziękujemy za zakup!
      </h1>
      <p className=" text-center">
        Twoja płatność została pomyślnie zrealizowana. Otrzymasz e-mail z
        potwierdzeniem.
      </p>
      <Link
        href="/"
        className="inline-block bg-main text-text-secondary font-semibold px-6 py-2 rounded-lg hover:bg-main-hover transition"
      >
        Wróć do strony głównej
      </Link>
      <p>
        <Link
          href={config.discordInvite}
          className="text-blue-600 hover:text-blue-800 text-fluid-subtle hover:underline"
        >
          W razie problemów skontaktuj się z naszym supportem.
        </Link>
      </p>
    </main>
  );
}
