const navItems = ["Inicio", "Ubicaciones", "Menú Completo", "Catering", "Instagram"];

const featured = [
  { title: "Plato Nashville Picante", image: "/images/nashville-hot-plate.png" },
  {
    title: "Combo de Tenders Crujientes",
    image: "/images/crispy-tenders-combo.png",
  },
  { title: "Alitas del Sur", image: "/images/southern-wings.png" },
];

const menuColumns = [
  {
    heading: "Sándwiches de Hot Chicken",
    items: [
      "Sándwich Hot Chicken de la Casa",
      "Sándwich Clásico de Hot Chicken",
      "Ensalada de col + pepinillos",
    ],
  },
  {
    heading: "Bebidas",
    items: ["Agua", "Refrescos", "Té dulce"],
  },
];

export default function App() {
  return (
    <div className="bg-brandBlack font-body text-softWhite">
      <header
        className="relative min-h-[88vh] overflow-hidden rounded-b-[2.5rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-main.png')" }}
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col px-6 pb-16 pt-6 md:px-8">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-bold tracking-tight text-white">
                VICIO
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:gap-6">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`transition hover:text-brandRed ${
                    index === 2
                      ? "border border-brandRed bg-brandRed/10 px-2 py-1 text-brandRed"
                      : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-auto max-w-xl">
            <p className="mb-4 inline-block bg-brandRed px-3 py-1 text-sm font-semibold text-white">
              Marinado en suero de leche con fuego de Manta, Ecuador
            </p>
            <h1 className="font-display text-5xl leading-none tracking-tight text-white sm:text-6xl">
              Dan&apos;s Darn
              <br />
              Hot Chicken
            </h1>
            <p className="mt-5 max-w-lg text-sm text-white/90 sm:text-base">
              Nuestra receta secreta de Hot Chicken viene de generaciones y
              llega fresca a tu mesa todos los días: crujiente, intensa y hecha
              al momento.
            </p>
          </div>
        </div>
      </header>

      <main className="bg-white text-brandBlack">
        <section className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            Tu <span className="text-brandRed">Hot Chicken</span> Favorito
            <br />
            Fresco Cada Día
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-black/70 sm:text-base">
            Ingredientes locales y auténtico picante del sur hacen cada bocado
            inolvidable. Ven a almorzar o cenar y descubre por qué somos de los
            favoritos de la ciudad.
          </p>
          <button className="mt-6 bg-brandRed px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brandRed focus:ring-offset-2">
            Ver Menú Completo
          </button>
        </section>

        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 pb-16 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-card"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-display text-xl">{item.title}</h3>
              </div>
            </article>
          ))}
        </section>

        <section id="locations" className="mx-auto max-w-6xl px-6 py-16">
          <p className="mx-auto inline-block bg-brandRed px-3 py-1 text-sm font-semibold text-white">
            Ven a Comer con Nosotros
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold">Ubicanos</h2>
          <div
            className="mt-8 mr-auto overflow-hidden rounded-2xl border border-black/10 shadow-card"
            style={{ width: "calc(100% - 60px)", maxWidth: "calc(40rem - 100px)" }}
          >
            <iframe
              title="Google Maps - ULEAM Manta, Ecuador"
              src="https://maps.google.com/maps?q=Universidad+Laica+Eloy+Alfaro+de+Manabi+Manta+Ecuador&t=k&z=17&ie=UTF8&iwloc=&output=embed"
              className="aspect-square w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-black/10 p-5">
              <h3 className="font-display text-2xl">Universidad Laica Eloy Alfaro de Manabi</h3>
              <p className="mt-2 text-black/70">Manta, Ecuador</p>
            </div>
            <div className="rounded-xl border border-black/10 p-5">
              <h3 className="font-display text-2xl">
                FACCI - Facultad de Ciencias de la Computación
              </h3>
              <p className="mt-2 text-black/70">Manta, Ecuador</p>
            </div>
          </div>
        </section>

        <section className="mt-6 bg-brandBlack py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="inline-block bg-brandRed px-3 py-1 text-sm font-semibold">
                Tu Favorito Todo el Año
              </p>
              <h2 className="mt-4 inline-block bg-brandRed px-4 py-3 font-display text-4xl font-bold sm:text-5xl">
                Descubre el Menú Completo
              </h2>
              <p className="mt-5 max-w-md text-white/80">
                Desde sándwiches picantes hasta papas cargadas y bebidas
                artesanales, cada plato está hecho para impactar y satisfacer.
              </p>
            </div>
            <img
              src="/images/featured-menu-burger.png"
              alt="Hamburguesa destacada del menú"
              className="h-80 w-full rounded-2xl object-cover object-[center_65%] shadow-card"
            />
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 px-6 sm:grid-cols-2">
            {menuColumns.map((column) => (
              <div key={column.heading}>
                <h3 className="font-display text-4xl">{column.heading}</h3>
                <ul className="mt-4 space-y-2 text-white/85">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-brandRed py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-5xl leading-tight">
                Conoce al
                <br />
                Genio
                <br />
                Chef Dan
              </h2>
              <p className="mt-4 max-w-md text-white/90">
                Nuestra cocina funciona con técnica, picante y consistencia.
                Cada orden sale fresca con sazón de la casa y atención total al
                sabor.
              </p>
            </div>
            <div className="rounded-3xl border-4 border-white/90 bg-white/20 p-3">
              <img
                src="/images/chef-dan.png"
                alt="Imagen de la sección del chef"
                className="h-64 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brandBlack px-6 py-8 text-sm text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Derechos reservados © 2026 Johandry Viles</p>
          <p>Dan&apos;s Darn Hot Chicken</p>
          <p>Abierto todos los días · 11:00 AM - 10:00 PM · @danshotchicken</p>
        </div>
      </footer>
    </div>
  );
}
