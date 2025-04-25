import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  // Add this projects array right here
  const projects = [
    {
      title: "Inner Balance",
      description: "A comprehensive mental health app providing tools for self-care and well-being.",
      image: "/mental.png",
      link: "https://new-inner-balance.vercel.app/",
    },
    {
      title: "Kanban Board",
      description: "A task management tool to organize and prioritize tasks using Kanban methodology.",
      image: "/checkjira.png",
      link: "https://github.com/ganorkarshrushti/TodoBoardF",
    },
    {
      title: "Fit-Track",
      description: "A computer vision-based workout tracking system using MediaPipe and OpenCV.",
      image: "/gym.jpg",
      link: "https://fit-track-theta.vercel.app/",
    },
    {
      title: "Well-Pharma",
      description:
        "An online medical shop which provides a secure e-commerce platform where users can conveniently browse, purchase product orders.",
      image: "/medicine.png",
      link: "https://github.com/ganorkarshrushti/WellPharmaProject",
    },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm shadow-sm">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <span className="font-bold text-lg">SG</span>
          <span className="sr-only">Shrushti Ganorkar's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 pt-0">
        <section className="w-full pt-16 pb-12 md:pb-16 lg:pb-20 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative group mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  src="/hi.jpg"
                  alt="Shrushti Ganorkar"
                  width={200}
                  height={200}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="space-y-4 max-w-2xl">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Shrushti Ganorkar
                  </h1>
                  <p className="text-secondary-foreground/90 md:text-xl">Computer Engineer | Full-Stack Developer | MERN</p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  <Link
                    href="#projects"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-secondary-foreground px-6 text-sm font-medium text-secondary shadow transition-colors hover:bg-secondary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Portfolio
                  </Link>
                  <Link
                    href="/ShrushtiGanorkarResume (2).pdf"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-secondary-foreground/20 bg-secondary/50 px-6 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Resume
                  </Link>
                </div>
                <div className="flex gap-4 justify-center mt-4">
                  <Link
                    href="https://github.com/ganorkarshrushti"
                    className="transition-transform hover:scale-110"
                    prefetch={false}
                  >
                    <img src="/github.png" alt="GitHub" className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/shrushti-ganorkar-711a9522b/"
                    className="transition-transform hover:scale-110"
                    prefetch={false}
                  >
                    <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Journey</h2>
                <p className="text-muted-foreground md:text-lg">
                  I am a dedicated web developer with extensive hands-on experience in frontend technologies, including
                  React.js and Tailwind CSS, with a strong focus on crafting seamless, user-friendly websites. During my
                  internship at Swashamtaa Foundation, I developed an online mental health platform using the MERN
                  stack, leveraging React.js, Node.js, Express, and MongoDB to deliver seamless functionality and a
                  user-friendly experience and gained valuable experience working with advanced AI technologies.
                  Leveraging my leadership and communication skills, I excel in collaborative environments and am eager
                  to apply my expertise while continuously growing through new opportunities in the tech industry.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/_Shrushti_Ganorkar_Resume.pdf"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Resume
                  </Link>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
                <div className="relative p-6 md:p-8 bg-card/80 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>React.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>MongoDB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Express</span>
                    </div>
                  
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>HTML/CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>AppScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Bootstrap</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Github</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>BitBucket</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section with enhanced styling */}
        <section id="experience" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-2">Experience</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Work Experience</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                My professional journey in the tech industry, showcasing my roles and achievements.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/30 to-primary/80"></div>
              
              <div className="space-y-12">
                {/* Experience Card 1 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  
                  {/* Content card */}
                  <div className="ml-8 md:ml-0 md:w-5/12 md:mr-auto md:pr-8">
                    <div className="bg-background rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-1 group">
                      {/* Card header with gradient */}
                      <div className="h-2 bg-gradient-to-r from-primary/70 to-primary/40"></div>
                      
                      <div className="p-6">
                        <div className="flex flex-col justify-between mb-4">
                          <div className="mb-2">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">TeamOB Solutions Pvt. Ltd.</h3>
                            <p className="text-primary font-medium">React.js Intern</p>
                          </div>
                          <div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              January 2025 - Current
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                            <p className="text-sm md:text-base">Building and deploying scalable React.js projects within the MERN stack, focusing on functionality and user experience.</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                            <p className="text-sm md:text-base">Collaborating with the team to implement and enhance features effectively.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Experience Card 2 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  
                  {/* Content card - alternating pattern */}
                  <div className="ml-8 md:ml-auto md:w-5/12 md:pl-8">
                    <div className="bg-background rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-1 group">
                      {/* Card header with gradient */}
                      <div className="h-2 bg-gradient-to-r from-primary/40 to-primary/70"></div>
                      
                      <div className="p-6">
                        <div className="flex flex-col justify-between mb-4">
                          <div className="mb-2">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Swashamtaa Foundation</h3>
                            <p className="text-primary font-medium">Intern</p>
                          </div>
                          <div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              July 2024 - September 2024
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                            <p className="text-sm md:text-base">Created an online mental health platform using the MERN stack, featuring 50+ expert-curated articles on mental well-being, personalized self-care tools, and AI-driven recommendations.</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                            <p className="text-sm md:text-base">This platform boosted user engagement by 30% and enhanced accessibility to mental health resources.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-2">Portfolio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">My Projects</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                Explore a curated collection of my projects, reflecting my technical expertise and passion for
                innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-md bg-background hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden max-h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      prefetch={false}
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary-foreground/10 px-3 py-1 text-sm text-secondary-foreground">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary-foreground">
                  Get in Touch
                </h2>
                <p className="text-secondary-foreground/80 md:text-lg">
                  Feel free to reach out for any queries, collaborations, or just to say hi! I'm always open to
                  discussing new projects and opportunities.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-secondary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-secondary-foreground">shrushtiganorkar@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-secondary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-secondary-foreground">Pune, Maharashtra, India</span>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-xl shadow-lg p-6">
                <form action="#" method="POST" className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" type="text" name="name" placeholder="Your Name" className="w-full" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      className="w-full"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Shrushti Ganorkar. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/ganorkarshrushti"
                className="transition-transform hover:scale-110"
                prefetch={false}
              >
                <img src="/github.png" alt="GitHub" className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shrushti-ganorkar-711a9522b/"
                className="transition-transform hover:scale-110"
                prefetch={false}
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}