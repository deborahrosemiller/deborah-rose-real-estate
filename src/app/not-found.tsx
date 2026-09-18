import { PageIntro } from '@/components/PageIntro'
import { ClosingAsk } from '@/components/ClosingAsk'

export default function NotFound() {
  return (
    <>
      <PageIntro eyebrow="Page not found" title="That page has moved or never existed.">
        <p>Use the menu above, or start from the stories and areas.</p>
      </PageIntro>
      <ClosingAsk heading="Looking for something specific?" secondaryHref="/areas/" secondaryLabel="Browse the areas" />
    </>
  )
}
