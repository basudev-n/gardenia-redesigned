import React from 'react'
import SiteHeader from '../components/site/SiteHeader'
import Footer from '../../src/components/Footer'
import HeroLegacy from '../../src/components/Hero'
import ProjectHighlights from '../../src/components/ProjectHighlights'
import FindYourPerfectHome from '../../src/components/FindYourPerfectHome'
import Amenities from '../../src/components/Amenities'
import Gallery from '../../src/components/Gallery'
import FloorPlans from '../../src/components/FloorPlans'
import Location from '../../src/components/Location'
import Contact from '../../src/components/Contact'
import FloatingCTA from '../../src/components/FloatingCTA'
import { Toaster } from '../../src/components/ui/sonner'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="App">
        <HeroLegacy />
        <ProjectHighlights />
        <FindYourPerfectHome />
        <Amenities />
        <Gallery />
        <FloorPlans />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster />
    </>
  )
}