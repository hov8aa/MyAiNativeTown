// Journal posts for myainativetown.com/journal.
// Pinned posts always render first; the rest follow, newest first.
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  label: string;      // shown above the title
  date: string;       // ISO date, used for sorting and <time>
  dateLabel: string;  // human-readable date
  pinned?: boolean;
}

export const posts: Post[] = [
  {
    slug: "manifesto",
    title: "MyAINativeTown.com: the Manifesto",
    excerpt:
      "An AI-native town is not a smart city with AI bolted on. The system does not wait for AI-native users. The system is the thing that makes them AI-native.",
    label: "Experiment #015.0.4",
    date: "2026-10-17",
    dateLabel: "Updated 17 October 2026",
    pinned: true,
  },
];

export const ordered = [...posts].sort((a, b) => {
  if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
  return b.date.localeCompare(a.date);
});
