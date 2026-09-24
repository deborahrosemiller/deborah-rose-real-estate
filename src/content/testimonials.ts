/**
 * Client testimonials, from her Client Experience Rating on the Houston
 * Association of REALTORS. Brett and Deborah sent them on 2026-09-24.
 * Every one is a real client's own writing about a real transaction.
 *
 * The attribution is the one HAR itself uses, a first name and a last
 * initial, and it never becomes a full name here. Nothing else from the
 * HAR entry travels with the quote: no address, no date, no rating.
 * Entries that carried a rating and no writing are not here, because
 * there is nothing of theirs to publish.
 *
 * Two clients wrote twice, about two separate transactions. Both of
 * each are here, ordered so the same name never sits beside itself.
 *
 * Two edits, and only these two. Jessica H. set an aside in em dashes,
 * which the site does not use, so it is set in commas; her words are
 * unchanged. Markus F. wrote "Debra," and it is her name, so it is
 * spelled the way she spells it.
 */
export type Testimonial = {
  /** Stable key. The name plus an index where a client wrote twice. */
  id: string
  /** First name and last initial, as HAR publishes it. */
  name: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'kelly-c',
    name: 'Kelly C.',
    quote:
      'Deborah is the most knowledgeable real estate agent I have worked with for the 11 homes I have purchased/sold over the past 37 years. She has an outstanding knowledge of market conditions and helped me set a listing price that allowed for a quick sale. Deborah is a great communicator and provided me prompt updates throughout the home sale process. She quickly addressed inspection issues to my satisfaction. I highly recommend utilizing Deborah as your realtor.',
  },
  {
    id: 'shelly-m',
    name: 'Shelly M.',
    quote:
      'She was everything I wanted/needed in a Realtor. She gave me solid advice without any flowery language. She encouraged but didn’t push. The best thing I can tell you about Deborah is that she had absolutely no problem calling the other members of my team and asking what was the holdup. She truly was a team leader.',
  },
  {
    id: 'yvonne-w-1',
    name: 'Yvonne W.',
    quote:
      'Deborah helped us determine the best sales price and strategy for marketing. She did excellent negotiation with the agent for the buyer. Always on top of details and any concerns we had. Always responded to us quickly. She was the best we could have asked for.',
  },
  {
    id: 'nick-w',
    name: 'Nick W.',
    quote: 'Deborah was amazing. We will for sure be using her when we look for a house.',
  },
  {
    id: 'evelyn-a',
    name: 'Evelyn A.',
    quote:
      'I must rate my real estate experience… as above and beyond a 5 star rating. The service was magnificent with expeditious delivery. My sincere thanks to Real Estate Agent Deborah Rose Miller.',
  },
  {
    id: 'victor-s-1',
    name: 'Victor S.',
    quote: 'Deborah is the best I have ever used for all of my investment properties.',
  },
  {
    id: 'jessica-h',
    name: 'Jessica H.',
    quote:
      'Deborah was amazing. Her knowledge, communication, and work was beyond what we could have asked for. Even with some bumps in the road, not anything from our end, she worked hard and got our house within budget and quick closing.',
  },
  {
    id: 'gladys',
    name: 'Gladys',
    quote:
      'I like to work with her, she is very knowledgeable in real estate and I recommended her to my friends and family to work with her.',
  },
  {
    id: 'yvonne-w-2',
    name: 'Yvonne W.',
    quote:
      'Deborah marketed our property well. The buyer was a challenge in regards to their contingency. Deborah was able to help them with some creative aspects. Because of their contingency, it took over 6 months for it to close and she worked hard for our benefit as well as the buyers.',
  },
  {
    id: 'markus-f',
    name: 'Markus F.',
    quote:
      'Deborah was wonderful and professional. Working towards and closing on the house sale was an overall enjoyable experience.',
  },
  {
    id: 'victor-s-2',
    name: 'Victor S.',
    quote:
      'Deborah has been my personal real estate agent for years and has helped me with many of my houses and I would and have recommend her to anyone.',
  },
]
