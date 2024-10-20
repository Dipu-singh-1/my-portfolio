import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-yellow-500 font-bold text-xl">Harshit</div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-white hover:text-yellow-500">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-yellow-500">
            About
          </Link>
          <Link href="#" className="text-white hover:text-yellow-500">
            Resume
          </Link>
          <Link href="#" className="text-white hover:text-yellow-500">
            Portfolio
          </Link>
          <Link href="#" className="text-white hover:text-yellow-500">
            Blog
          </Link>
          <Link href="#" className="text-white hover:text-yellow-500">
            Contact
          </Link>
        </nav>
        <div className="text-yellow-500">+1 123 456 7890</div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I'm
            <br />
            <span className="text-yellow-500">Harshit Raj</span>
          </h1>
          <p className="text-xl mb-8">Sofware Developer</p>
          <a href="mailto:harshit.cse.21@nitap.ac.in?subject=Job%20Application&body=Hello,%20I%20am%20interested%20in%20your%20job%20posting.">
          <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-full">
            Hire me
          </Button>
          </a>
          
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/images/robot.png"
            alt="Edward Davis"
            width={500}
            height={500}
            className="rounded-full w-80 h-80"
          />
        </div>
      </section>

      {/* <div className="flex justify-between items-center w-1/6 mx-auto my-4">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div> */}

      {/* About Me Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center">
            About Me
            <div className="w-40 h-1 bg-gray-500 mx-auto rounded-full relative">
              <div
                className="absolute inset-0 w-full h-1 bg-yellow-500 rounded-full mx-auto"
                style={{
                  maxWidth: "100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/images/robo.png"
                alt="Edward Davis Profile"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">
                Hi There! I'm Harshit Raj
              </h3>
              <p className="mb-4">Software Developer</p>
              <p className="mb-4">
                I am a visual designer with a strong passion for creating
                beautiful and functional designs. With years of experience in
                the field, I specialize in crafting unique visual identities and
                user experiences that leave a lasting impression.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>
                    <span className="font-bold">Birthday:</span> May 10, 1990
                  </p>
                  <p>
                    <span className="font-bold">Phone:</span> +1 123 456 7890
                  </p>
                  <p>
                    <span className="font-bold">City:</span> New York, USA
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold">Age:</span> 33
                  </p>
                  <p>
                    <span className="font-bold">Degree:</span> Master
                  </p>
                  <p>
                    <span className="font-bold">Email:</span> edward@example.com
                  </p>
                </div>
              </div>
              <a href="/cv.pdf" download="MY_CV">
              <Button className="mt-8 bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-full">
                Download CV
              </Button>
              </a>
              
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center w-1/6 mx-auto my-4">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center">
            My Skills
            <div className="w-40 h-1 bg-gray-500 mx-auto rounded-full relative">
              <div
                className="absolute inset-0 w-full h-1 bg-yellow-500 rounded-full mx-auto"
                style={{
                  maxWidth: "100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">HTML</h3>
              <div className="relative w-full bg-gray-700 h-1 rounded">
                <div
                  className="absolute top-0 left-0 h-1 bg-yellow-500 rounded"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-1 inline-block">
                95%
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">CSS</h3>
              <div className="relative w-full bg-gray-700 h-1 rounded">
                <div
                  className="absolute top-0 left-0 h-1 bg-yellow-500 rounded"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-1 inline-block">
                95%
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">React</h3>
              <div className="relative w-full bg-gray-700 h-1 rounded">
                <div
                  className="absolute top-0 left-0 h-1 bg-yellow-500 rounded"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-1 inline-block">
                95%
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Javascript</h3>
              <div className="relative w-full bg-gray-700 h-1 rounded">
                <div
                  className="absolute top-0 left-0 h-1 bg-yellow-500 rounded"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-1 inline-block">
                75%
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">SQL</h3>
              <div className="relative w-full bg-gray-700 h-1 rounded">
                <div
                  className="absolute top-0 left-0 h-1 bg-yellow-500 rounded"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-1 inline-block">
                85%
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Node.js</h3>
              <div className="relative w-full bg-gray-700 h-1 rounded">
                <div
                  className="absolute top-0 left-0 h-1 bg-yellow-500 rounded"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-1 inline-block">
                85%
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center w-1/6 mx-auto my-4">
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      </div>

      {/* Resume Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center">
            Resume
            <div className="w-40 h-1 bg-gray-500 mx-auto rounded-full relative">
              <div
                className="absolute inset-0 w-full h-1 bg-yellow-500 rounded-full mx-auto"
                style={{
                  maxWidth: "100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          </h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              Education
            </h3>
            <div className="relative pl-8 mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-yellow-500"></div>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-yellow-500">
                  Master of Computer Science
                </h4>
                <p className="text-gray-400">2015 - 2016</p>
                <p className="font-bold">University of XYZ</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ligula nulla, tincidunt id faucibus sed, suscipit eu turpis.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-yellow-500">
                  Bachelor of Computer Science
                </h4>
                <p className="text-gray-400">2010 - 2014</p>
                <p className="font-bold">University of ABC</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ligula nulla, tincidunt id faucibus sed, suscipit eu turpis.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500">
                  Diploma in Computer Science
                </h4>
                <p className="text-gray-400">2006 - 2010</p>
                <p className="font-bold">Institute of Technology</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ligula nulla, tincidunt id faucibus sed, suscipit eu turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center w-1/6 mx-auto my-4">
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      </div>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center rounded-full">
            Projects
            <div className="w-40 h-1 bg-gray-500 mx-auto rounded-full relative">
              <div
                className="absolute inset-0 w-full h-1 bg-yellow-500 rounded-full mx-auto"
                style={{
                  maxWidth: "100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add project cards here */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/images/robot.png"
                alt="Project 1"
                width={400}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p>Description of Project 1</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/images/robot.png"
                alt="Project 2"
                width={400}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p>Description of Project 2</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/images/robot.png"
                alt="Project 3"
                width={400}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p>Description of Project 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center w-1/6 mx-auto my-4">
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      </div>

      {/* Experience Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center">
            Experience
            <div className="w-40 h-1 bg-gray-500 mx-auto rounded-full relative">
              <div
                className="absolute inset-0 w-full h-1 bg-yellow-500 rounded-full mx-auto"
                style={{
                  maxWidth: "100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-yellow-500"></div>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-yellow-500">
                  Senior Visual Designer
                </h4>
                <p className="text-gray-400">2018 - Present</p>
                <p className="font-bold">Design Studio XYZ</p>
                <p>
                  Led a team of designers in creating innovative visual
                  solutions for various clients across different industries.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-yellow-500">
                  Visual Designer
                </h4>
                <p className="text-gray-400">2014 - 2018</p>
                <p className="font-bold">Creative Agency ABC</p>
                <p>
                  Collaborated with cross-functional teams to deliver
                  high-quality design projects for both print and digital media.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500">
                  Junior Designer
                </h4>
                <p className="text-gray-400">2010 - 2014</p>
                <p className="font-bold">Design Firm 123</p>
                <p>
                  Assisted senior designers in creating visual assets and gained
                  valuable experience in various design software and techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center">
          <p className="text-yellow-500">&copy; 2024 Harshit Raj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
