import Image from "next/image";
import CopyIp from "./CopyIp";
import OnlinePlayers from "./OnlinePlayers";

export default function Hero() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-text-secondary">
      <Image
        src="/bg-body.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center blur-xs scale-105"
      />

      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-fluid-hero font-bold text-inherit">
          EnterCraft.pl
        </h1>
        <p className="text-fluid-subtitle font-medium">
          Twój ulubiony serwer minecraft!
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <OnlinePlayers />
        <CopyIp />
      </div>
    </main>
  );
}
