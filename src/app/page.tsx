//import Image from 'next/image'
import Header from "./components/Header/Header";
import ToggleContainer from "./components/ToggleContainer/ToggleContainer";
import FileUpload from "./components/FileUpload/FileUpload";

/**
 *    Header
 *    - Site Logo 
      - VisitSiteButton component
      Content 
      ToggleContainer component
      - FileUpload component
      - InputField component with object propety
      ToggleContainer component
      ToggleContainer component
      SubmitButton component
 * 
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cyan-100">
      <Header />
      <div>
        <h1>Showcasing tech projects</h1>
        <p>Whether you are building in public or demoing the finished product of your passion, let’s show the world how awesome you are.</p>
        <p>Selected projects will be featured in a weekly issue of the Memphis Tech Scenes newsletter and shared via social media. All projects are showcased in a weekly blog post on the Memphis Tech Scene website.</p>
      </div>

      <ToggleContainer title="Project">
        <FileUpload />
      </ToggleContainer>
    </main>
  )
}
