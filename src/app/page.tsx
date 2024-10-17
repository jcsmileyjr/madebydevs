//import Image from 'next/image'
import Header from "./components/Header/Header";
import ToggleContainer from "./components/ToggleContainer/ToggleContainer";
import FileUpload from "./components/FileUpload/FileUpload";
import InputField from "./components/InputField/InputField";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div>
        <h1>Showcasing tech projects</h1>
        <p>Whether you are building in public or demoing the finished product of your passion, let’s show the world how awesome you are.</p>
        <p>Selected projects will be featured in a weekly issue of the Memphis Tech Scenes newsletter and shared via social media. All projects are showcased in a weekly blog post on the Memphis Tech Scene website.</p>
      </div>

      <ToggleContainer title="Project">
        <FileUpload />
        <InputField property="Project Name" />
        <InputField property="Project Description" />
        <InputField property="Tech Stack" />
        <InputField property="Email" />
      </ToggleContainer>

      <ToggleContainer title="Project Links (optional)">
        <InputField property="Website Link" />
        <InputField property="Repository Link" />
      </ToggleContainer>

      <ToggleContainer title="Profile Information (optional)">
        <InputField property="Profile Name" />
        <InputField property="Profile Description" />
      </ToggleContainer>
    </main>
  )
}
