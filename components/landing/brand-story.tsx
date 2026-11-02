'use client'

import Image from 'next/image'
import { useLanguage } from './content-context'

function StoryFoliage({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M420 -20 C320 60, 240 160, 180 260 C150 310, 120 370, 90 420"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path d="M330 65 C300 40, 260 50, 240 75 C250 100, 290 100, 330 65Z" fill="currentColor" />
      <path d="M290 105 C250 90, 215 110, 205 140 C225 155, 265 145, 290 105Z" fill="currentColor" />
      <path d="M250 155 C210 135, 175 160, 170 190 C190 205, 225 190, 250 155Z" fill="currentColor" />
      <path d="M220 205 C180 190, 150 220, 145 250 C165 260, 195 240, 220 205Z" fill="currentColor" />
      <path d="M180 260 C145 250, 120 280, 115 310 C135 320, 160 300, 180 260Z" fill="currentColor" />
    </svg>
  )
}

export function BrandStory() {
  const { t } = useLanguage()
  const s = t.craftStory

  return (
    <section id="story" className="relative overflow-hidden scroll-mt-16 bg-[#FBF8F2] px-4 py-20 text-[#35291F] md:px-6 md:py-28">
      {/* Background Organic Leaf Silhouette */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 z-0 h-[360px] w-[360px] text-[#713B19]/5 animate-foliage md:h-[480px] md:w-[480px]"
        aria-hidden="true"
      >
        <StoryFoliage className="size-full rotate-180" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header Block */}
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19]">
            {s.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-2xl font-extrabold tracking-tight text-[#35291F] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.18]">
            {s.title}
          </h2>
          <p className="mt-4 font-serif text-lg italic text-[#713B19] md:text-xl">
            {s.subtitle}
          </p>
        </div>

        {/* Narrative & Visual Documentary Grid */}
        <div className="mt-14 grid items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Story Narratives */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-7">
            <div className="flex flex-col gap-8">
              {/* Intro Lead */}
              <p className="text-base leading-relaxed text-[#5A483B] md:text-lg">
                {s.intro}
              </p>

              {/* Part 1: Vẻ đẹp đằng sau từng đường đan */}
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-xl font-bold text-[#35291F] md:text-2xl">
                  {s.sec1Title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B5849] md:text-base">
                  {s.sec1Body}
                </p>
              </div>

              {/* Part 2: Đưa giá trị truyền thống vào không gian sống hiện đại */}
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-xl font-bold text-[#35291F] md:text-2xl">
                  {s.sec2Title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-[#35291F] md:text-base">
                  {s.missionText}
                </p>
                <p className="text-sm leading-relaxed text-[#6B5849] md:text-base">
                  {s.sec2Body}
                </p>
              </div>
            </div>

            {/* Gifting Callout Card */}
            <div className="rounded-3xl bg-[#EDE1D1]/60 p-6 sm:p-7">
              <h4 className="font-serif text-lg font-bold text-[#35291F] md:text-xl">
                {s.giftingTitle}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#6B5849] md:text-base">
                {s.giftingBody}
              </p>
            </div>
          </div>

          {/* Right Column: Documentary Photography */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            {/* Photo 1: Artisan Couple weaving circular coasters */}
            <div className="group overflow-hidden rounded-3xl bg-white p-3 ring-1 ring-[#E3D5C4]/60 transition-colors duration-500 hover:ring-[#713B19]/30">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#EDE1D1]/30">
                <Image
                  src="/images/maytredan/artisan-couple.jpg"
                  alt="Nghệ nhân Việt Nam đan tay từng chiếc lót ly mây tròn theo kỹ thuật truyền thống"
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                />
              </div>
              <p className="mt-2.5 px-2 text-xs leading-relaxed text-[#6B5849]">
                {s.img1Caption}
              </p>
            </div>

            {/* Photo 2: Craftswomen workshop */}
            <div className="group overflow-hidden rounded-3xl bg-white p-3 ring-1 ring-[#E3D5C4]/60 transition-colors duration-500 hover:ring-[#713B19]/30">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#EDE1D1]/30">
                <Image
                  src="/images/maytredan/artisan-workshop.jpg"
                  alt="Không gian làng nghề mây tre đan truyền thống Việt Nam nơi nghệ nhân đan lát tỉ mỉ"
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                />
              </div>
              <p className="mt-2.5 px-2 text-xs leading-relaxed text-[#6B5849]">
                {s.img2Caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
