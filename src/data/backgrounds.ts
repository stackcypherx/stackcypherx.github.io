/**
 * Background slots. Each page (and each learning-plan tile) names one slot; the
 * site paints that slot full-bleed behind the content, blurred and darkened.
 *
 * To fill a slot, drop a photo into src/assets/backgrounds/ named after the
 * slot (e.g. field.jpg). Any of .jpg .jpeg .png .webp .avif works. Until a photo
 * exists, the slot uses its fallback: a dark gradient in the site's slate-blue
 * family, so missing photos never look like a broken page.
 */

export type BgKey = 'field' | 'lab' | 'security' | 'work' | 'writing';

type Credit = { by: string; source: 'Pexels' | 'Unsplash'; url: string };

export const backgrounds: Record<BgKey, { photo: string; fallback: string; credit?: Credit }> = {
  field: {
    photo: 'Field work: fibre runs, towers, sites in eastern Indonesia',
    fallback: 'radial-gradient(120% 90% at 20% 10%, #1d3550 0%, #0b1220 55%, #06080e 100%)',
    credit: { by: 'Furkan İnce', source: 'Pexels', url: 'https://www.pexels.com/photo/silhouette-of-telecommunications-tower-under-night-sky-4249270/' },
  },
  lab: {
    photo: 'A network rack or home lab',
    fallback: 'radial-gradient(110% 90% at 80% 15%, #1b2f4a 0%, #0a111d 55%, #06080e 100%)',
    credit: { by: 'Brett Sayles', source: 'Pexels', url: 'https://www.pexels.com/photo/cables-connected-on-server-2881229/' },
  },
  security: {
    photo: 'Security work: SOC screens, a capture, a CTF desk',
    fallback: 'radial-gradient(120% 90% at 50% 0%, #182a45 0%, #0a1019 55%, #06080e 100%)',
    credit: { by: 'Bernd Dittrich', source: 'Unsplash', url: 'https://unsplash.com/photos/computer-code-displayed-on-a-dark-screen--PZhcbjJxdI' },
  },
  work: {
    photo: 'A screenshot of software you built',
    fallback: 'radial-gradient(120% 90% at 85% 80%, #1c3150 0%, #0b1220 55%, #06080e 100%)',
    credit: { by: 'Luke Chesser', source: 'Unsplash', url: 'https://unsplash.com/photos/graphs-of-performance-analytics-on-a-laptop-screen-JKUTrJ4vK00' },
  },
  writing: {
    photo: 'A desk with notes, a notebook, a terminal',
    fallback: 'radial-gradient(120% 90% at 15% 85%, #1a2d47 0%, #0a111c 55%, #06080e 100%)',
    credit: { by: 'Yen Vu', source: 'Unsplash', url: 'https://unsplash.com/photos/desk-with-open-book-laptop-and-study-materials-HNjWq8WPyoY' },
  },
};

// Stock photos currently in place (free licences; credited in the footer anyway).
// Remove a slot's credit when you replace its photo with your own.
export const bgKeys = Object.keys(backgrounds) as BgKey[];
