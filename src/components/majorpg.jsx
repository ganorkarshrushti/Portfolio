import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center bg-background">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <span className="sr-only">Shrushti Ganorkar's Portfolio</span>
        </Link>
        
      </header>
      <main className="flex-1">
  <section className="w-full py-4 md:py-15 lg:py-20 bg-secondary">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4 text-secondary-foreground">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Shrushti Ganorkar
            </h1>
            <p className="max-w-[600px] text-secondary-foreground md:text-xl">
              Computer Engineer | Web Developer | MERN
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-secondary-foreground px-8 text-sm font-medium text-secondary shadow transition-colors hover:bg-secondary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Portfolio
            </Link>
            <Link
              href="/ShrushtiGanorkar_Resume.pdf"
              className="inline-flex h-10 items-center justify-center rounded-md bg-secondary-foreground px-8 text-sm font-medium text-secondary shadow transition-colors hover:bg-secondary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Resume
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/myProfPic.png"
            alt="Shrushti Ganorkar"
             className="rounded-full w-26 h-26 object-cover shadow-md border-2 border-gray-300"
          />
        </div>
      </div>
    </div>
  </section>


        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am a B.Tech. student in Computer Engineering specializing in MERN stack web development, with strong hands-on experience in frontend development. My focus is on creating seamless, user-friendly websites. With strong leadership and communication skills, I thrive in collaborative environments. I am eager to contribute my skills and continue growing through new opportunities in the tech industry.
          </p>
        </div>

        {/* Buttons for Get in Touch and View Resume */}
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get in Touch
          </Link>
          <Link
            href="/ShrushtiGanorkar_Resume.pdf"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-dark-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Resume
          </Link>
        </div>

        {/* Social Media Icons for GitHub and LinkedIn */}
        <div className="flex gap-4 mt-4">
          <Link href="https://github.com/ganorkarshrushti" prefetch={false}>
            <img
              src="/github.png"
              alt="GitHub"
              className="w-8 h-8 text-secondary-foreground hover:opacity-75 transition-opacity duration-300"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/shrushti-ganorkar-711a9522b/" prefetch={false}>
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8 text-secondary-foreground hover:opacity-75 transition-opacity duration-300"
            />
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore a curated collection of my projects, reflecting my technical expertise and passion for innovation.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl">
                <Link href="https://new-inner-balance.vercel.app/" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  src="/mental.png"
                  width="550"
                  height="310"
                  alt="Inner Balance"
                  className="object-cover w-full h-64 transition-all duration-300 ease-in-out group-hover:scale-105"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-secondary-foreground">Inner Balance</h3>
                    <p className="text-sm text-secondary-foreground mt-2">
                      A comprehensive mental health app providing tools for self-care and well-being.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold text-secondary-foreground">Project-1</h4>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl">
                <Link href="https://jira-kanban-board.vercel.app/" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  src="checkjira.png"
                  width="550"
                  height="310"
                  alt="Kanban Board"
                  className="object-cover w-full h-64 transition-all duration-300 ease-in-out group-hover:scale-105"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-secondary-foreground">Kanban Board</h3>
                    <p className="text-sm text-secondary-foreground mt-2">
                      A task management tool to organize and prioritize tasks using Kanban methodology.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold text-secondary-foreground">Project-2</h4>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl">
                <Link href="https://example.com" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  src="medicine.png"
                  width="550"
                  height="310"
                  alt="Example Project"
                  className="object-cover w-full h-64 transition-all duration-300 ease-in-out group-hover:scale-105"
                  style={{ aspectRatio: "550/310", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-secondary-foreground">WellPharma</h3>
                    <p className="text-sm text-secondary-foreground mt-2">
                    An online medical shop providing a secure e-commerce platform for users to browse and purchase products.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold text-secondary-foreground">Project-3</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free to reach out for any queries, collaborations, or just to say hi!
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <form action="#" method="POST" className="space-y-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-secondary-foreground text-secondary hover:bg-secondary-foreground/80"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-muted text-center">
  <div className="container px-4 md:px-6">
    <div className="flex justify-center gap-6 mb-4">
      <Link href="https://github.com/ganorkarshrushti" prefetch={false}>
        <img
          src="/github.png"
          alt="GitHub"
          className="w-8 h-8 text-secondary-foreground hover:opacity-75 transition-opacity duration-300"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/shrushti-ganorkar-711a9522b/" prefetch={false}>
        <img
          src="/linkedin.png"
          alt="LinkedIn"
          className="w-8 h-8 text-secondary-foreground hover:opacity-75 transition-opacity duration-300"
        />
      </Link>
    </div>
    <p className="text-sm font-medium text-secondary-foreground">
      &copy; {new Date().getFullYear()} Shrushti Ganorkar. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
}
