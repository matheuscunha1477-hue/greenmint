import {
  Search,
  ShoppingBag,
  Heart,
  Bell,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Menu,
  Plus,
} from 'lucide-react'

const nfts = [
  {
    id: 1,
    name: 'Cyber Ape #2849',
    collection: 'The Cyber Apes',
    price: '2.45 ETH',
    image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=700',
    likes: 124,
  },
  {
    id: 2,
    name: 'Golden Monkey #091',
    collection: 'Golden Creatures',
    price: '1.82 ETH',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=700',
    likes: 98,
  },
  {
    id: 3,
    name: 'Neon Dreams #012',
    collection: 'Digital Dreams',
    price: '3.20 ETH',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700',
    likes: 215,
  },
  {
    id: 4,
    name: 'Abstract Soul #771',
    collection: 'Abstract World',
    price: '0.95 ETH',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=700',
    likes: 76,
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#100b08] text-[#f5eee8]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#100b08]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-5 lg:px-10">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d98236] text-xl font-black text-[#100b08]">
              G
            </div>
            <span className="text-xl font-black tracking-tight">
              Green<span className="text-[#d98236]">Mint.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a href="#home" className="text-[#d98236]">Discover</a>
            <a href="#collections" className="transition hover:text-white">Collections</a>
            <a href="#marketplace" className="transition hover:text-white">Marketplace</a>
            <a href="#about" className="transition hover:text-white">About</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button aria-label="Notifications" className="rounded-xl border border-white/10 p-3 hover:bg-white/5">
              <Bell size={19} />
            </button>
            <button aria-label="Favorites" className="rounded-xl border border-white/10 p-3 hover:bg-white/5">
              <Heart size={19} />
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-[#d98236] px-5 py-3 text-sm font-bold text-[#160e08] transition hover:bg-[#ee9b50]">
              <ShoppingBag size={17} />
              Connect Wallet
            </button>
          </div>

          <button aria-label="Open menu" className="rounded-lg border border-white/10 p-2 md:hidden">
            <Menu />
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10">
        <section id="home" className="grid items-center gap-10 overflow-hidden rounded-3xl border border-[#d98236]/20 bg-gradient-to-br from-[#2a190f] via-[#1b100b] to-[#100b08] p-7 md:grid-cols-2 md:p-12 lg:p-16">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d98236]/30 bg-[#d98236]/10 px-4 py-2 text-xs font-semibold text-[#e9a15e]">
              <Sparkles size={15} />
              THE FUTURE OF DIGITAL ART
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.12] tracking-tight md:text-6xl">
              Discover, collect
              <br />
              and sell <span className="text-[#d98236]">NFTs.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55 md:text-base">
              Explore unique digital creations from talented artists around
              the world. Find your next collectible at GreenMint.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#marketplace" className="flex items-center gap-2 rounded-xl bg-[#d98236] px-6 py-4 text-sm font-bold text-[#160e08] transition hover:bg-[#ee9b50]">
                Explore NFTs <ArrowUpRight size={18} />
              </a>
              <a href="#collections" className="rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold transition hover:bg-white/5">
                View collections
              </a>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <p className="text-2xl font-black">12.8K+</p>
                <p className="mt-1 text-xs text-white/45">Artworks</p>
              </div>
              <div>
                <p className="text-2xl font-black">8.4K+</p>
                <p className="mt-1 text-xs text-white/45">Artists</p>
              </div>
              <div>
                <p className="text-2xl font-black">24K+</p>
                <p className="mt-1 text-xs text-white/45">Collectors</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-[#d98236]/15 blur-3xl" />
            <div className="relative rotate-2 overflow-hidden rounded-3xl border border-[#d98236]/30 bg-[#21140e] p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900"
                alt="Arte digital abstrata em tons vibrantes"
                className="h-[300px] w-full rounded-2xl object-cover md:h-[390px]"
              />
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="font-bold">Abstract Dimension</p>
                  <p className="mt-1 text-xs text-white/45">Featured artwork</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/45">Current price</p>
                  <p className="mt-1 font-bold text-[#e99a50]">4.25 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="marketplace" className="py-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#d98236]">
                Explore marketplace
              </p>
              <h2 className="text-3xl font-black md:text-4xl">
                Trending <span className="text-[#d98236]">NFTs</span>
              </h2>
              <p className="mt-3 text-sm text-white/45">
                Discover the most popular digital collectibles.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <Search size={18} className="text-white/40" />
                <input
                  type="search"
                  placeholder="Search NFTs..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-white/35 sm:w-48"
                />
              </label>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm">
                All categories <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {['All NFTs', 'Art', 'Gaming', 'Music', 'Photography', 'Collectibles'].map((category, index) => (
              <button
                key={category}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  index === 0
                    ? 'bg-[#d98236] text-[#160e08]'
                    : 'border border-white/10 text-white/55 hover:border-[#d98236]/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nfts.map((nft) => (
              <article
                key={nft.id}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1b120d] transition duration-300 hover:-translate-y-1 hover:border-[#d98236]/50"
              >
                <div className="relative overflow-hidden p-3">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="h-60 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                  />
                  <button
                    aria-label={`Favorite ${nft.name}`}
                    className="absolute right-6 top-6 rounded-full bg-black/60 p-2.5 backdrop-blur transition hover:bg-[#d98236]"
                  >
                    <Heart size={17} />
                  </button>
                </div>

                <div className="px-5 pb-5">
                  <p className="text-xs text-[#d98236]">{nft.collection}</p>
                  <h3 className="mt-2 text-lg font-bold">{nft.name}</h3>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <p className="text-xs text-white/40">Current price</p>
                      <p className="mt-1 font-bold">{nft.price}</p>
                    </div>
                    <button
                      aria-label={`View ${nft.name}`}
                      className="rounded-xl bg-[#d98236]/10 p-3 text-[#d98236] transition hover:bg-[#d98236] hover:text-[#160e08]"
                    >
                      <ArrowUpRight size={19} />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/40">
                    <Heart size={13} /> {nft.likes} favorites
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="flex items-center gap-2 rounded-xl border border-[#d98236]/40 px-7 py-3.5 text-sm font-bold text-[#e99a50] transition hover:bg-[#d98236] hover:text-[#160e08]">
              <Plus size={17} /> Explore all NFTs
            </button>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-xs text-white/35">
          © 2026 GreenMint. Discover the future of digital art.
        </footer>
      </div>
    </main>
  )
}

export default App