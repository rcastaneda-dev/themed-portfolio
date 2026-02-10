'use client'

import { useState } from 'react'
import { SidebarNav } from '@/components/sidebar-nav'
import { PipelineSimulator } from '@/components/pipeline-simulator'
import { ProjectsGallery } from '@/components/projects-gallery'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { Education } from '@/components/education'
import { TechStack } from '@/components/tech-stack'
import { ContactForm } from '@/components/contact-form'
import { Toaster } from '@/components/ui/toaster'

type Section = 'overview' | 'projects' | 'experience' | 'education' | 'tech-stack' | 'contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('overview')

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <PipelineSimulator />
      case 'projects':
        return <ProjectsGallery />
      case 'experience':
        return <ExperienceTimeline />
      case 'education':
        return <Education />
      case 'tech-stack':
        return <TechStack />
      case 'contact':
        return <ContactForm />
      default:
        return <PipelineSimulator />
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <SidebarNav activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-6xl">
          {renderSection()}
        </div>
      </main>

      {/* Toast notifications */}
      <Toaster />
    </div>
  )
}
