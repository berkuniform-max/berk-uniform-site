export default function App() {
  const productCategories = [
    {
      title: "Okul Üniformaları",
      items: ["Tişört", "Gömlek", "Pantolon", "Etek", "Eşofman Takımı", "Ceket / Hırka"],
    },
    {
      title: "İş Üniformaları",
      items: ["Restoran / Kafe", "Otel", "Temizlik Personeli", "Güvenlik", "Fabrika / İşçi Kıyafetleri"],
    },
    {
      title: "Sağlık Üniformaları",
      items: ["Doktor Önlüğü", "Hemşire Forması", "Scrubs"],
    },
    {
      title: "Kurumsal Kıyafetler",
      items: ["Polo Yaka Tişört", "Gömlek", "Softshell Mont", "Yelek", "Şapka"],
    },
  ];

  const galleryItems = [
    {
      title: "Okul Üniforması",
      image: "/school-uniform-1.png",
      fallback: "Okul ürün görseli",
    },
    {
      title: "İş Üniforması",
      image: "/work-uniform-1.png",
      fallback: "İş kıyafetleri",
    },
    {
      title: "Sağlık Üniforması",
      image: "/health-uniform-1.png",
      fallback: "Sağlık üniformaları",
    },
    {
      title: "Kurumsal Kıyafet",
      image: "/corporate-wear-1.png",
      fallback: "Kurumsal kıyafetler",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-red-100 bg-white p-1 shadow-sm">
              <img src="/logo.png" alt="Berk Uniform Logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-red-600">Berk Uniform</h1>
              <p className="text-sm text-zinc-500">Kurumsal Üniforma Çözümleri</p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#anasayfa" className="transition hover:text-red-600">Ana Sayfa</a>
            <a href="#hakkimizda" className="transition hover:text-red-600">Hakkımızda</a>
            <a href="#urunler" className="transition hover:text-red-600">Ürünler</a>
            <a href="#galeri" className="transition hover:text-red-600">Galeri</a>
            <a href="#iletisim" className="transition hover:text-red-600">İletişim</a>
          </nav>

          <div className="flex w-full items-center justify-center gap-3 md:w-auto md:justify-end">
            <a
              href="https://wa.me/9647505756175"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              WhatsApp
            </a>
            <a
              href="#iletisim"
              className="rounded-2xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
            >
              Teklif Al
            </a>
          </div>
        </div>
      </header>

      <section id="anasayfa" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-sm font-medium text-red-600">
              Profesyonel • Güvenilir • Kaliteli
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              <span className="text-red-600">Modern</span> ve kaliteli üniforma çözümleri
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              Berk Uniform, tişört, mont, iş kıyafeti ve özel üretim üniforma çözümleriyle kurumsal kimliğinizi en güçlü şekilde yansıtır.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#urunler"
                className="rounded-2xl bg-red-600 px-6 py-3 text-center font-semibold text-white shadow-md transition hover:scale-[1.02]"
              >
                Ürünleri İncele
              </a>
              <a
                href="#hakkimizda"
                className="rounded-2xl border border-zinc-300 px-6 py-3 text-center font-semibold text-zinc-800 transition hover:border-red-300 hover:text-red-600"
              >
                Bizi Tanıyın
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-red-600">100+</div>
                <div className="text-sm text-zinc-500">Tasarım Seçeneği</div>
              </div>
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-red-600">Kaliteli</div>
                <div className="text-sm text-zinc-500">Kumaş ve Dikiş</div>
              </div>
              <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-red-600">Hızlı</div>
                <div className="text-sm text-zinc-500">Üretim Süreci</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-red-100 bg-white p-4 shadow-xl">
              <div className="flex min-h-[280px] items-center justify-center rounded-[24px] bg-gradient-to-br from-red-600 to-red-400 p-6 text-center text-white sm:min-h-[360px] md:h-[420px] md:p-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-red-100">Berk Uniform</div>
                  <div className="mt-4 text-3xl font-bold md:text-4xl">Her Dikişte Kalite, Her Detayda Güven</div>
                  <div className="mt-4 text-base text-red-50">
                    Kurumlara özel üniforma, dış giyim ve profesyonel üretim çözümleri
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Hakkımızda</p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">Kurumsal çizgiyi kaliteyle birleştiriyoruz</h3>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Berk Uniform, kurumlara yönelik şık, dayanıklı ve uzun ömürlü üniforma üretimi sunar. Tasarım aşamasından üretime kadar her adımda kalite odaklı çalışır, profesyonel çözümler geliştirir.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Amacımız yalnızca ürün sunmak değil; kurumsal kimliği yansıtan, güven veren ve günlük kullanımda rahatlık sağlayan üniformalar üretmektir.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-red-100 bg-red-50 p-6">
              <h4 className="text-xl font-bold text-red-600">Neden Berk Uniform?</h4>
              <ul className="mt-4 space-y-3 text-zinc-700">
                <li>• Kaliteli kumaş ve güçlü dikiş yapısı</li>
                <li>• Logo ve renk uygulamaları</li>
                <li>• Modern, temiz ve kurumsal tasarım anlayışı</li>
                <li>• Hızlı üretim ve güvenilir teslimat yaklaşımı</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-bold">Kurumsal Yaklaşım</h4>
              <p className="mt-3 text-zinc-600">
                Kalite, konfor ve profesyonelliği bir araya getirerek kurumlara özel üniforma çözümleri sunuyoruz. Her sektöre uygun tasarım anlayışımız, özenli üretimimiz ve zamanında teslimat prensibimizle, kurumsal kimliğinizi en iyi şekilde yansıtan ürünler hazırlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="urunler" className="bg-red-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Ürünler</p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">Farklı sektörlere özel ürün gruplarımız</h3>
            <p className="mt-4 text-lg text-zinc-600">
              Berk Uniform, okuldan sağlığa, restorandan kurumsal giyime kadar farklı ihtiyaçlara uygun profesyonel üretim çözümleri sunar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">
                  {category.title}
                </div>
                <ul className="space-y-3 text-zinc-700">
                  {category.items.map((item) => (
                    <li key={item} className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeri" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Galeri</p>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">Çalışmalarımızdan örnekler</h3>
          <p className="mt-4 text-lg text-zinc-600">
            Ürün sunumları, katalog çekimleri ve kurumsal üniforma uygulamalarından seçmeler.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden rounded-3xl bg-zinc-100 sm:h-72">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50 px-6 text-center text-lg font-semibold text-zinc-600">
                  {item.fallback}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 z-30 rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 shadow">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="iletisim" className="bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">İletişim</p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">Bizimle iletişime geçin</h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Kurumunuza özel üniforma üretimi, fiyat teklifi ve detaylı bilgi için bizimle iletişime geçebilirsiniz.
            </p>

            <div className="mt-8 space-y-4 text-zinc-300">
              <p>
                <span className="font-semibold text-white">Telefon:</span>{" "}
                <a href="tel:+9647505756175" className="hover:text-red-400">
                  +964 750 575 6175
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">E-posta:</span>{" "}
                <a href="mailto:berkuniform@gmail.com" className="hover:text-red-400">
                  berkuniform@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Adres:</span> Iraq - Erbil - 100m, near to Erbil International Terminal
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Konum</div>
                <div className="mt-2 text-lg font-semibold text-white">36°12′19″ K, 44°3′6″ D</div>
                <a
                  href="https://maps.google.com/?q=36.205278,44.051667"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm text-zinc-300 transition hover:text-red-400"
                >
                  Google Maps'te Aç
                </a>
              </div>

              <iframe
                title="Berk Uniform Location"
                src="https://maps.google.com/maps?q=36.205278,44.051667&z=15&output=embed"
                className="h-64 w-full border-0 sm:h-56"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <form action="https://formspree.io/f/xyknpokd" method="post" className="grid gap-4">
                <input type="hidden" name="_subject" value="Berk Uniform web sitesinden yeni mesaj" />
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-zinc-400"
                  placeholder="Ad Soyad"
                />
                <input
                  type="tel"
                  name="phone"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-zinc-400"
                  placeholder="Telefon"
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-zinc-400"
                  placeholder="E-posta"
                />
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-zinc-400"
                  placeholder="Mesajınız"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/9647505756175"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-[1.03] sm:bottom-6 sm:right-6 sm:px-5"
      >
        WhatsApp ile Yaz
      </a>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-3">
          <div>
            <div className="inline-flex rounded-2xl bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-sm">
              Berk Uniform
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
              Kurumlara özel üniforma, iş kıyafeti, sağlık formaları ve kurumsal tekstil çözümleri sunuyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-zinc-900">Hızlı Menü</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-600">
              <a href="#anasayfa" className="transition hover:text-red-600">Ana Sayfa</a>
              <a href="#hakkimizda" className="transition hover:text-red-600">Hakkımızda</a>
              <a href="#urunler" className="transition hover:text-red-600">Ürünler</a>
              <a href="#galeri" className="transition hover:text-red-600">Galeri</a>
              <a href="#iletisim" className="transition hover:text-red-600">İletişim</a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-zinc-900">İletişim</h4>
            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <p>
                <span className="font-semibold text-zinc-900">Telefon:</span>{" "}
                <a href="tel:+9647505756175" className="transition hover:text-red-600">
                  +964 750 575 6175
                </a>
              </p>
              <p>
                <span className="font-semibold text-zinc-900">E-posta:</span>{" "}
                <a href="mailto:berkuniform@gmail.com" className="transition hover:text-red-600">
                  berkuniform@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-zinc-900">Adres:</span> Iraq - Erbil - 100m, near to Erbil International Terminal
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Berk Uniform. Tüm hakları saklıdır.</p>
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/berk_uniform/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-red-600"
              >
                Instagram
              </a>
              <a href="https://wa.me/9647505756175" className="transition hover:text-red-600">
                WhatsApp
              </a>
              <a href="mailto:berkuniform@gmail.com" className="transition hover:text-red-600">
                E-posta
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
