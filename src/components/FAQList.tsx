import { business } from '@/lib/site'

export type FaqItem = { question: string; answer: string }

/**
 * Every answer visible in the initial HTML, so a reader, a crawler and
 * the FAQPage schema all read the same text with nothing to click first.
 */
export function FAQList({ items }: { items: FaqItem[] }) {
  return (
    <div>
      <p className="max-w-2xl text-base/7 text-ink-soft">
        Have a different question? Call or text{' '}
        <a href={`tel:${business.phoneE164}`} className="tap font-semibold text-ink underline decoration-rule underline-offset-4 hover:decoration-ink figure">
          {business.phone}
        </a>{' '}
        and I will answer it.
      </p>
      <dl className="mt-14 space-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-8 sm:gap-y-14 lg:gap-x-12">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-display text-xl text-ink">{item.question}</dt>
            <dd className="mt-3 text-base/7 text-ink-soft">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
