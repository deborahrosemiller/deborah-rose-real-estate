import type { FaqItem } from '@/components/FAQList'

/**
 * Brett's layout rule, live review 2026-09-18: no answer runs past three
 * full lines on desktop. The FAQ column is about 590 pixels wide at 16px,
 * roughly 85 characters a line, so every answer here stays under about
 * 240 characters. Trim, never wrap.
 *
 * Closing speed is always a possibility, never a promise ("can close",
 * "can include"). Deborah, 2026-09-18: "it says it CAN, it doesn't
 * guarantee that it will." Hold that framing everywhere it appears.
 */
export const homeFaq: FaqItem[] = [
  {
    question: 'Which areas do you cover?',
    answer:
      'Kingwood and Humble in the Lake Houston area, and Porter, Conroe and Magnolia in Montgomery County. I also work the towns in between, from Atascocita to Stagecoach, when a client needs me there.',
  },
  {
    question: 'Do you work with buyers, sellers, or both?',
    answer:
      'Both, and often both at once for the same client. Selling one home to buy the next is one coordinated project with two closings, and I plan it that way from the first call.',
  },
  {
    question: 'How quickly can a financed purchase close?',
    answer:
      'Many factors go into it, starting with the lender and your own financial picture. That is why we start there first, so the expectation is clear from the outset. With the right lender, a close can come in ten days to three weeks.',
  },
  {
    question: 'Can you help if I am self-employed?',
    answer:
      'Yes, I have been self-employed all of my adult life. I know which lenders understand a self-employed borrower and how to present your income so the file moves, and that conversation happens before we look at a single house.',
  },
  {
    question: 'What does a first conversation look like?',
    answer:
      'A phone call, usually twenty minutes. You tell me what you are trying to do and when. I tell you what is realistic in your part of the market right now and what I would do first. There is no obligation on either side.',
  },
  {
    question: 'Who is your broker?',
    answer:
      'I hold a Texas real estate broker license, number 622917. Deborah Rose Real Estate Group is powered by eXp Realty LLC, and every transaction runs through that brokerage.',
  },
]

export const buyersFaq: FaqItem[] = [
  {
    question: 'Should I talk to a lender before we look at homes?',
    answer:
      'Yes, and I would like to be part of it. Your lender decides how fast you can close and how strong your offer looks to a seller. I can introduce you to lenders who can close in ten days to three weeks and who understand a self-employed borrower.',
  },
  {
    question: 'I am buying from out of state. How does that work?',
    answer:
      'I have closed purchases for buyers who never walked the house before contract. You get video walkthroughs, same-day photos of anything you ask about, and I attend the inspection in person and report room by room.',
  },
  {
    question: 'Do I need an inspection on new construction?',
    answer:
      'It is in your best interest, and I highly recommend it. A builder finishes homes on a schedule, and the punch list an inspector finds before closing is the builder’s to fix. After closing it is yours.',
  },
  {
    question: 'What if I owe more on my current home than it is worth?',
    answer:
      'It rules out the standard playbook. It does not rule out the move. I have brought in an investor so a client could break even on the old house and still buy the one they wanted. The first step is a look at the numbers on both sides.',
  },
]

export const sellersFaq: FaqItem[] = [
  {
    question: 'How do you decide on a list price?',
    answer:
      'The number we choose is a strategy, and I will explain that strategy. Closed sales and current market activity in your area are the beginning of the conversation, and the strategy is where we go from there.',
  },
  {
    question: 'Should I wait for a better season to list?',
    answer:
      'The calendar matters less than the market. I told one couple to list in spring instead of waiting for December, and by December the market had turned. Ask me what I am seeing now before you lock in a date.',
  },
  {
    question: 'Can you sell my home if I have already moved out of state?',
    answer:
      'Yes. I have sold homes for owners who were hundreds of miles away for the whole transaction. I confirm repairs in person, walk rooms on video, and keep your questions answered the same day across time zones.',
  },
  {
    question: 'I bought new construction recently and need to sell. Will I lose money?',
    answer:
      'Not necessarily. A recent purchase leaves a thin equity window, so the price has to account for what the builder is still offering nearby and what you have put in since closing. I have gotten sellers out of homes they had owned for a year.',
  },
]
