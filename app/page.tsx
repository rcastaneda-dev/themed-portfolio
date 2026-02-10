'use client'

import { useState } from 'react'
import { SidebarNav } from '@/components/sidebar-nav'
import { PipelineSimulator } from '@/components/pipeline-simulator'
import { ProjectsGallery } from '@/components/projects-gallery'
import { ProjectDetail } from '@/components/project-detail'
import { ExperienceChangelog } from '@/components/experience-changelog'
import { Education } from '@/components/education'
import { TechStack } from '@/components/tech-stack'
import { ContactForm } from '@/components/contact-form'
import { Toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

type Section = 'overview' | 'projects' | 'experience' | 'education' | 'tech-stack' | 'contact' | 'project-detail'

interface ProjectDetailState {
  projectId: string
  projectTitle: string
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('overview')
  const [selectedProject, setSelectedProject] = useState<ProjectDetailState | null>(null)

  const handleProjectClick = (projectId: string, projectTitle: string) => {
    setSelectedProject({ projectId, projectTitle })
    setActiveSection('project-detail')
  }

  const handleBackToProjects = () => {
    setSelectedProject(null)
    setActiveSection('projects')
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <PipelineSimulator />
      case 'projects':
        return <ProjectsGallery onProjectClick={handleProjectClick} />
      case 'project-detail':
        return selectedProject ? (
          <div className="space-y-4">
            <Button
              variant="ghost"
              onClick={handleBackToProjects}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
            <ProjectDetail projectId={selectedProject.projectId} projectTitle={selectedProject.projectTitle} />
          </div>
        ) : null
      case 'experience':
        return <ExperienceChangelog />
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
