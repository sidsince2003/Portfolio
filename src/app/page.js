import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import { ClientParticles, ClientBlogs } from "./components/ClientComponents";


export default function Home() {
  return (
    <main className="min-h-screen bg-background/80 dark:bg-gray-900 backdrop-blur-sm text-gray-900 dark:text-gray-100">
      <Header />
      <ClientParticles />
      <Body />
      <About />
      <Project />
      <Technologies />
      <ClientBlogs />
      <Footer />
    </main>
  );
}