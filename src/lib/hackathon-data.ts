export const EVENT = {
  name: "BLOCKSTORM",
  edition: "'26",
  tagline: "Craft. Break. Build. Repeat.",
  blurb:
    "A 24-hour college hackathon where every idea starts as a single block. Spawn in with an empty inventory, mine your way through the night, and ship something worth putting on the map.",
  dates: "14 - 15 March 2026",
  duration: "24 hours, non-stop",
  venue: "DJ Sanghvi College of Engineering, Mumbai",
  prizePool: "₹1,50,000",
  registerUrl: "https://forms.gle/rrd9eZqXAqgB1GH58",
  seats: "400 builders",
};

export const STATS = [
  { label: "Duration", value: "24 HRS" },
  { label: "Prize pool", value: "₹1.5L" },
  { label: "Builders", value: "400" },
  { label: "Tracks", value: "04" },
];

export const TRACKS = [
  {
    name: "Overworld",
    subtitle: "Open Innovation",
    ore: "grass" as const,
    description:
      "Wide open terrain. Build anything that solves a real problem for real people — the only limit is the render distance.",
  },
  {
    name: "Redstone",
    subtitle: "AI & Automation",
    ore: "redstone" as const,
    description:
      "Wire up the machine. Agents, pipelines, and clever automation that quietly do the boring work for everyone else.",
  },
  {
    name: "Deep Caves",
    subtitle: "Security & Systems",
    ore: "diamond" as const,
    description:
      "Torch in hand, straight down. Infrastructure, privacy, and the unglamorous layers everything else stands on.",
  },
  {
    name: "The End",
    subtitle: "Wildcard / XR",
    ore: "ender" as const,
    description:
      "Leave the dimension entirely. Games, XR, creative tools and anything that makes a judge lean forward.",
  },
];

export const TIMELINE = [
  {
    day: "Day 01",
    time: "09:00",
    title: "World Spawn",
    detail: "Check-in, kit collection and team validation at the main hall.",
    ore: "grass" as const,
  },
  {
    day: "Day 01",
    time: "10:30",
    title: "Seed Reveal",
    detail: "Opening ceremony. Problem statements and track modifiers go live.",
    ore: "gold" as const,
  },
  {
    day: "Day 01",
    time: "11:00",
    title: "First Pickaxe",
    detail: "Hacking begins. 24 hours on the clock, no respawns.",
    ore: "diamond" as const,
  },
  {
    day: "Day 01",
    time: "17:00",
    title: "Mentor Patrol",
    detail: "Round one reviews. Mentors roam the floor for one-on-one debugging.",
    ore: "redstone" as const,
  },
  {
    day: "Day 01",
    time: "23:30",
    title: "Midnight Mining",
    detail: "Nether-themed night rounds, surprise mini-events and endless caffeine.",
    ore: "lava" as const,
  },
  {
    day: "Day 02",
    time: "09:00",
    title: "Final Polish",
    detail: "Code freeze at 11:00. Repos locked, demos loaded.",
    ore: "ender" as const,
  },
  {
    day: "Day 02",
    time: "13:00",
    title: "The Beacon",
    detail: "Final pitches to the judging panel, followed by prize distribution.",
    ore: "gold" as const,
  },
];

export const PRIZES = [
  { rank: "Champion Build", amount: "₹75,000", note: "+ internship interviews", ore: "gold" as const },
  { rank: "Runner-up", amount: "₹40,000", note: "+ sponsor credits", ore: "diamond" as const },
  { rank: "Third Place", amount: "₹20,000", note: "+ hardware kits", ore: "grass" as const },
  { rank: "Track Bounties", amount: "₹15,000", note: "best build per track", ore: "redstone" as const },
];

export const JUDGES = [
  { name: "Ananya Rao", role: "Principal Engineer, Razorpay", tag: "Systems" },
  { name: "Kabir Menon", role: "Founder, Voxel Labs", tag: "Product" },
  { name: "Sneha Iyer", role: "Design Lead, Zomato", tag: "Design" },
  { name: "Dev Sharma", role: "ML Research, Sarvam AI", tag: "AI" },
];

export const MENTORS = [
  { name: "Riya Nair", role: "SDE II, Atlassian" },
  { name: "Aditya Ghosh", role: "DevRel, Supabase" },
  { name: "Meera Kulkarni", role: "Security Engineer, CRED" },
  { name: "Zaid Ansari", role: "Game Dev, Ubisoft Pune" },
];

export const SPONSORS = {
  diamond: ["NETHERSTACK", "CUBECLOUD", "OREFLOW"],
  gold: ["PIXELPAY", "REDSTONE DB", "TORCHLIGHT AI", "BLOCKBASE"],
  iron: ["CHUNK CDN", "ANVIL CI", "CRAFTKIT", "BEDROCK VPS", "ENDER MAIL", "SPAWN LABS"],
};

export const RULES = [
  "Teams of 2 to 4 members. Solo entries are allowed but not recommended.",
  "Open to all undergraduate students with a valid college ID.",
  "All code must be written during the 24-hour window. Boilerplate and open-source libraries are fine.",
  "Pre-trained models, APIs and asset packs are allowed if credited in your README.",
  "One submission per team, pushed to a public GitHub repo before the code freeze.",
  "Any harassment, plagiarism or griefing means instant removal from the server.",
];

export const FAQS = [
  {
    q: "Do I need a team before registering?",
    a: "No. Register solo and we'll run a team-forming session at spawn where you can find people building in your track.",
  },
  {
    q: "Is there a registration fee?",
    a: "Entry is free for all shortlisted teams. Meals, snacks and midnight refuels are on us for the full 24 hours.",
  },
  {
    q: "What if I've never hacked before?",
    a: "Perfect. Roughly a third of our builders are first-timers, and every track has beginner mentors on rotation through the night.",
  },
  {
    q: "What should I bring?",
    a: "Laptop, charger, extension cord, college ID and a sleeping bag if you plan to sleep. Everything else is provided.",
  },
  {
    q: "Can I keep working on an existing project?",
    a: "You can bring an idea, not a codebase. Repos must be initialised at the start of the event and history is reviewed during judging.",
  },
  {
    q: "How is judging done?",
    a: "Live demos to the panel scored on originality, execution, technical depth, design and how well the build fits its track.",
  },
];
