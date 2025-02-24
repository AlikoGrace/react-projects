const HomePage = () => {
  return (
    <main className="h-[calc(100vh-5rem)] m-5 p-10 md:p-20 bg-[linear-gradient(to_bottom,rgba(36,42,46,0.8),rgba(36,42,46,0.8)),url('./assets/images/bg.jpg')] bg-cover bg-center">
      <section className="flex flex-col h-[85%] items-center justify-center gap-10 text-center">
        <h1 className="text-5xl leading-snug text-[var(--color-light--1)] ">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures
        </h1>
        <h2 className="w-[90%] mb-10 text-xl text-[var(--color-light--1)]">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
      </section>
    </main>
  );
};

export default HomePage;
