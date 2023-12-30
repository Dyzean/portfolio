<template>
  <div un-flex="~ col md:row">
    <Navigation />

    <main
      h-screen w-full scroll-smooth
      un-p="x-12 y-6 lg:x-24 lg:y-12"
      un-overflow="x-hidden y-auto"
      un-scrollbar="~ thin track-color-secondary thumb-color-accent-10"
    >
      <section id="home" relative h-full flex items-center>
        <div justify-center un-flex="~ col">
          <div
            absolute inset-y-20 right-20 w-16 animate-pulse rounded-full from-accent-20 via-accent-10 to-primary bg-gradient-to-b blur-2xl
            un-z="-10"
            un-rotate="-45"
            aria-hidden="true"
          />

          <span font-display font-semibold tracking-wide un-text="lg foreground/80">Hi! My name is</span>
          <h1 font-display font-bold tracking-tight un-text="6xl foreground lg:7xl">
            <span text-accent-10>Rahadian</span>
            Fahri F<span text-accent-10>.</span>
          </h1>
          <p un-text="lg foreground/80">
            I'm a 10th grade student at SMKN 1 Ciomas who loves programming and tech.
          </p>

          <Button
            link="https://example.com"
            icon="i-carbon-document-download"
            icon-position="left"
            button-text="Download CV"
            mt-4
          />

          <div
            absolute bottom-0 items-center text-accent-10
            un-translate-x="-1/2"
            un-left="1/2"
            un-flex="~ col"
          >
            <div i-carbon-caret-down h-8 w-8 animate-bounce />
            <span font-display text-xs font-bold>Scroll Down</span>
          </div>
        </div>
      </section>

      <section id="skills" mt-24 pt-24>
        <Heading
          text="Skills"
        />

        <div gap-4 un-grid="~ cols-1 lg:cols-2">
          <SkillsCard />
        </div>
      </section>

      <section id="projects" mt-24 pt-24>
        <Heading
          text="Projects"
        />

        <div un-grid="~ cols-1 lg:cols-2 xl:cols-1" gap-6>
          <ProjectsCard />
        </div>

        <Button
          link="https://github.com/Dyzean"
          icon="i-carbon-logo-github"
          icon-position="right"
          button-text="View More"
          un-m="x-auto t-10"
          un-p="x-5 y-2"
          text-sm
        />
      </section>

      <section id="contact" mt-24 pt-24>
        <Heading
          text="Contact"
        />

        <div un-gap="16 lg:8" un-grid="~ cols-1 lg:cols-2">
          <div gap-4 un-flex="~ col">
            <p un-text="lg foreground">
              Feel free to reach out to me via email or social media. I am always open to new opportunies and collaborations.
            </p>

            <div flex items-center gap-4>
              <div class="h-px w-6 bg-foreground" />
              <p class="text-foreground">
                Email for phone contact
              </p>
            </div>
            <div flex items-center gap-4>
              <div class="h-px w-6 bg-foreground" />
              <a class="text-foreground" href="mailto:ashtrath@pm.me">ashtrath@pm.me</a>
            </div>
            <div flex items-center gap-4>
              <div class="h-px w-6 bg-foreground" />
              <p class="text-foreground">
                West Java, Indonesia
              </p>
            </div>

            <div mt-8 flex gap-4 text-foreground>
              <a transition-color duration-200 hover:text-accent-10 href="https://github.com/Dyzean">
                <div i-carbon-logo-github h-6 w-6 />
              </a>
              <a transition-color duration-200 hover:text-accent-10 href="https://discord.com/users/354831939099688962">
                <div i-carbon-logo-discord h-6 w-6 />
              </a>
              <a transition-color duration-200 hover:text-accent-10 href="https://www.instagram.com/r.ashtrath">
                <div i-carbon-logo-instagram h-6 w-6 />
              </a>
            </div>
          </div>

          <form gap-4 un-flex="~ col" action="" method="POST">
            <div flex gap-2>
              <input id="name" type="text" placeholder="Your Name" name="name" required input-text>
              <input id="email" type="text" placeholder="Your Email" name="email" required input-text>
            </div>
            <textarea id="message" name="message" placeholder="Message" cols="30" rows="10" required input-text />
            <button
              text-sm btn
              un-p="x-5 y-2"
              type="submit"
            >
              <span font-bold>Submit</span>
              <i i-carbon-send-alt h-6 w-6 />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  </div>
</template>
