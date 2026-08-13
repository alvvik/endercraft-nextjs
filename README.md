# EnderCraft.pl

Website for a fictional Minecraft server with integrated item shop and Stripe payments

## About the project

EnderCraft.pl is a modern landing page integrated with:

- **Payment system** (Stripe, BLIK)
- **Real-time Minecraft server status**
- **Discord integration**
- **Shop with ranks and tokens**

## Tech Stack

- **Framework:** Next.js 16.3.0 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **UI Components:** Headless UI
- **Fonts:** Next.js Font (Geist Sans, Geist Mono)
- **Minecraft integration:** minecraft-server-util
- **Payments:** Stripe

## Installation

1. Clone the repository:

```bash
git clone https://github.com/alvvik/endercraft-nextjs.git
cd endercraft-nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp env.example .env.local
```

Edit `.env.local` and set:

```env
NEXT_PUBLIC_SERVER_IP=your-server-ip
NEXT_PUBLIC_SERVER_PORT=25565
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/your-server
STRIPE_SECRET_KEY=your-stripe-key
```

## Running

### Development

```bash
npm run dev
```

Open [http://localhost:2877](http://localhost:2877) in your browser.

### Production build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Configuration

### Server IP

Edit `src/config.ts`:

```typescript
export const config = {
  serverIP: "your-server.pl",
  serverPort: 25565,
  discordInvite: "https://discord.gg/your-server",
};
```

### Shop products

Edit `src/data/products.ts`:

```typescript
export const products = [
  {
    id: "vip",
    name: "VIP",
    price: 15.0,
    image: "/products/vip.png",
  },
  // ...
];
```
