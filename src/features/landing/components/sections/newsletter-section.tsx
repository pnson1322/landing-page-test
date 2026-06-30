export function NewsletterSection() {
  return (
    <section id="newsletter" className="bg-[#17212b] py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8ddbd7]">
            Nháº­n tin ra máº¯t
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            Nháº­n thĂ´ng bĂ¡o khi AuraHub má»Ÿ Ä‘áº·t trÆ°á»›c.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#c9d3d6]">
            Äá»ƒ láº¡i email, chĂºng tĂ´i sáº½ gá»­i thĂ´ng tin sáº£n pháº©m, báº£ng giĂ¡ vĂ  lá»‹ch
            má»Ÿ bĂ¡n sá»›m nháº¥t.
          </p>
        </div>
        <form
          className="flex flex-col gap-4 rounded-lg border border-white/12 bg-white/8 p-5 sm:p-6 lg:flex-row lg:items-end"
          action="#"
          method="post"
        >
          <label className="grid gap-2 text-sm font-medium text-[#e8f0f0] lg:flex-1">
            Há» vĂ  tĂªn
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Nguyá»…n An"
              className="h-12 rounded-md border border-white/15 bg-white px-4 text-sm text-[#17212b] outline-none transition duration-200 placeholder:text-[#8b969b] hover:border-[#8ddbd7] focus:border-[#8ddbd7] focus:ring-4 focus:ring-[#8ddbd7]/20"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#e8f0f0] lg:flex-1">
            Email
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="an@example.com"
              className="h-12 rounded-md border border-white/15 bg-white px-4 text-sm text-[#17212b] outline-none transition duration-200 placeholder:text-[#8b969b] hover:border-[#8ddbd7] focus:border-[#8ddbd7] focus:ring-4 focus:ring-[#8ddbd7]/20"
            />
          </label>
          <button
            type="submit"
            className="h-12 w-full rounded-md bg-[#f2b36d] px-6 text-sm font-semibold whitespace-nowrap text-[#17212b] shadow-[0_14px_30px_rgba(242,179,109,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f0a85b] hover:shadow-[0_18px_36px_rgba(242,179,109,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2b36d] active:translate-y-0 active:bg-[#df9650] lg:w-40 lg:flex-none"
          >
            Gá»­i Ä‘Äƒng kĂ½
          </button>
        </form>
      </div>
    </section>
  );
}
