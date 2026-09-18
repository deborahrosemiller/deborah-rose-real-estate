import Image from 'next/image'
import Link from 'next/link'

import { formatDate, type Story } from '@/lib/stories'

/**
 * A story in a list. The photograph is the link's surface and the only
 * thing that moves on hover. Metadata is set as type under the image,
 * never as a badge on it.
 */
export function StoryCard({ story, priority = false }: { story: Story; priority?: boolean }) {
  const href = `/stories/${story.slug}/`
  return (
    <article className="group">
      <Link href={href} className="block focus-visible:outline-none">
        <div className="tile aspect-[3/2] bg-paper">
          {story.image ? (
            <Image src={story.image} alt={story.alt ?? ''} width={1600} height={1067} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" priority={priority} />
          ) : (
            <div className="flex h-full items-end p-6">
              <span className="font-display text-2xl text-ink-faint">{story.city}, Texas</span>
            </div>
          )}
        </div>
        <p className="mt-5 text-[13px] font-semibold tracking-[0.08em] uppercase text-rose">
          {story.role} <span className="text-ink-faint">&middot;</span> {story.city}
        </p>
        <h3 className="mt-2 font-display text-[1.375rem]/[1.25] text-ink group-hover:underline group-hover:decoration-ink/30 group-hover:underline-offset-4">
          {story.title}
        </h3>
        <p className="mt-3 text-base/7 text-ink-soft">{story.summary}</p>
        <p className="mt-3 text-sm text-ink-faint">
          <time dateTime={story.date}>{formatDate(story.date)}</time> <span aria-hidden="true">&middot;</span> {story.readMinutes} min read
        </p>
      </Link>
    </article>
  )
}
