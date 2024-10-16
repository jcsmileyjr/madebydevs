//import Image from 'next/image'
import Header from "./components/Header/Header"

/**
 *    Header
 *    - Site Logo 
      - VisitSiteButton component
      Content 
      ToggleContainer component
      - FileUpload components
      - InputField component with object propety
      ToggleContainer component
      ToggleContainer component
      SubmitButton component
 * 
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cyan-100">
      <Header />

    </main>
  )
}
