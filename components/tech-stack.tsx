'use client'

import React from "react"

import { CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Braces, TestTubes, Cpu, CheckCircle2, Code2, Layers } from 'lucide-react'

interface TechCategory {
  name: string
  icon: React.ReactNode
  technologies: string[]
  description: string
}

const techStack: TechCategory[] = [
  {
    name: 'Languages & Core',
    icon: <Braces className="h-5 w-5" />,
    description: 'Primary programming languages',
    technologies: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL', 'PL/SQL', 'Bash', 'HTML/CSS']
  },
  {
    name: 'Testing Frameworks',
    icon: <TestTubes className="h-5 w-5" />,
    description: 'E2E, API, and unit testing tools',
    technologies: ['Cypress', 'Playwright', 'TestCafe', 'Selenium WebDriver', 'TestNG', 'PyTest', 'Postman', 'Jest']
  },
  {
    name: 'Software Development',
    icon: <Code2 className="h-5 w-5" />,
    description: 'Backend & enterprise development',
    technologies: ['Java EE', 'REST Web Services', 'PegaSystems BPM', 'Oracle', 'JPA', 'JSF', 'Glassfish', 'SOA']
  },
  {
    name: 'DevOps & Infrastructure',
    icon: <Cpu className="h-5 w-5" />,
    description: 'Pipeline automation & containers',
    technologies: ['Azure DevOps', 'GitHub Actions', 'Jenkins', 'TeamCity', 'Docker', 'Docker Compose', 'Kubernetes']
  },
  {
    name: 'Testing & Quality Tools',
    icon: <CheckCircle2 className="h-5 w-5" />,
    description: 'Reporting, management & analysis',
    technologies: ['Mochawesome', 'JUnit Reports', 'TestRail', 'Databricks', 'JIRA', 'Datadog', 'Splunk']
  },
  {
    name: 'Patterns & Practices',
    icon: <Layers className="h-5 w-5" />,
    description: 'Architecture & design patterns',
    technologies: ['Page Object Model', 'Factory Pattern', 'Dependency Injection', 'MVVM', 'BDD', 'Shift-Left Testing']
  }
]

export function TechStack() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Stack</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Tech Stack</h2>
        <p className="text-muted-foreground">
          Tools and frameworks across quality engineering and software development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techStack.map((category, index) => (
          <div
            key={index}
            className="card-elevated rounded-xl animate-fade-in-up"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <CardContent className="p-5">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/15 text-primary">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
                  <p className="text-[10px] text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {category.technologies.map(tech => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-mono text-[10px] bg-secondary/60 text-muted-foreground hover:text-primary hover:bg-primary/8 hover:border-primary/15 border border-border/30 transition-colors px-2.5 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  )
}
