'use client'

import { useState } from 'react'
import { SidebarNav } from '@/components/sidebar-nav'
import { PipelineSimulator } from '@/components/pipeline-simulator'
import { ProjectsGallery } from '@/components/projects-gallery'
import { ProjectDetail } from '@/components/project-detail'
import { ExperienceChangelog } from '@/components/experience-changelog'
import { Education } from '@/components/education'
import { TechStack } from '@/components/tech-stack'
import { CurrentLearning } from '@/components/current-learning'
import { ContactForm } from '@/components/contact-form'
import { Toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

type Section = 'overview' | 'projects' | 'experience' | 'education' | 'tech-stack' | 'learning' | 'contact' | 'project-detail'

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
              className="gap-2 text-muted-foreground hover:text-foreground"
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
      case 'learning':
        return <CurrentLearning />
      case 'contact':
        return <ContactForm />
      default:
        return <PipelineSimulator />
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 60% 0%, hsl(172 66% 50% / 0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 60%, hsl(38 92% 58% / 0.02) 0%, transparent 70%)'
      }} />

      {/* Sidebar */}
      <SidebarNav activeSection={activeSection} onSectionChange={(s) => setActiveSection(s as Section)} />

      {/* Main Content */}
      <main className="flex-1 pt-20 lg:pt-8 lg:ml-64 px-4 pb-4 md:px-6 md:pb-6 lg:px-10 lg:pb-10 overflow-y-auto relative">
        <div className="max-w-6xl">
          {renderSection()}
        </div>
      </main>

      {/* Toast notifications */}
      <Toaster />
    </div>
  )
}
