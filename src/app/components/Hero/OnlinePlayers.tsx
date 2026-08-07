import { status } from "minecraft-server-util";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { config } from "@/config";
import { ArrowUpRight } from "lucide-react";

const getMinecraftStatus = unstable_cache(
  async (host: string, port: number = 25565) => {
    try {
      const result = await status(host, port, {
        timeout: 3000,
        enableSRV: true,
      });

      return {
        online: true,
        playersOnline: result.players.online,
      };
    } catch {
      return {
        online: false,
        playersOnline: 0,
      };
    }
  },
  ["mc-server-status-key"],
  {
    revalidate: 15,
  },
);

export default async function ServerStatusPage() {
  const SERVER_IP = config.serverIP;
  const SERVER_PORT = config.serverPort;
  const data = await getMinecraftStatus(SERVER_IP, SERVER_PORT);

  return (
    <div>
      <Link
        href={`https://discord.endercraft.pl`}
        className="rounded-lg bg-main px-4 py-2 text-fluid-subtle font-semibold transition hover:bg-main-hover active:scale-95 focus-visible:outline-2 focus-visible:outline-blue-500"
      >
        {data.online
          ? `Dołącz do ${data.playersOnline} graczy online`
          : "Dołącz do nas na discorda!"}
        <ArrowUpRight className="ml-2 inline-block h-4 w-4" />
      </Link>
    </div>
  );
}
