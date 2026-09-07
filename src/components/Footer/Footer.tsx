import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-auto bg-surface/90 p-6 ">
      <div className="flex flex-col gap-4 rounded-t-4xl lg:flex-row justify-around items-center">
        <div>
          <p className="text-fluid-subtle text-text-muted text-center">
            EnderCraft &copy; {new Date().getFullYear()} | Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
        <div>
          <p className="text-fluid-subtle text-text-muted text-center">
            &quot;Minecraft&quot; is a trademark of Mojang. This site is not
            affiliated with Mojang or Microsoft.
          </p>
        </div>
      </div>
      <div
        className="
      flex justify-center flex-col items-center text-fluid-subtle"
      >
        <p>Przydatne linki</p>
        <ul className="text-center list-disc ">
          <li>
            <Link href={"/policy"}>Polityka prywatnosci</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
