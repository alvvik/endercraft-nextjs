export default function Footer() {
  return (
    <footer className="mt-auto bg-surface/90 p-6 flex flex-col gap-4 rounded-t-4xl lg:flex-row justify-around items-center">
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
    </footer>
  );
}
