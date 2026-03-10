'use client'

import React from "react"

import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, Code2, Container, Zap, Shield, FileText, ArrowUpRight } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  frameworks: string[]
  icon: React.ReactNode
  testResults: {
    status: 'passing' | 'failing' | 'warning'
    passed: number
    failed: number
    skipped: number
    duration: string
  }
}

const projects: Project[] = [
  {
    id: '5',
    title: 'Paquetes.sv',
    description: 'Student uniform distribution management system for educational institutions in El Salvador. Generates bulk PDF/ZIP reports at scale with atomic task orchestration and concurrent processing.',
    frameworks: ['Next.js', 'TypeScript', 'Supabase', 'PDFKit', 'Node.js'],
    icon: <FileText className="w-6 h-6" />,
    testResults: {
      status: 'passing',
      passed: 54,
      failed: 0,
      skipped: 1,
      duration: '1m 08s'
    }
  },
  {
    id: '1',
    title: 'Nanis Essentials Inventory',
    description: 'A full-featured business management SPA for a cosmetics retail operation. Built with React/TypeScript and Supabase (authentication, file storage, RLS), with end-to-end testing in Playwright/TypeScript.',
    frameworks: ['React', 'TypeScript', 'Supabase', 'Playwright', 'RLS'],
    icon: <Code2 className="w-6 h-6" />,
    testResults: {
      status: 'passing',
      passed: 86,
      failed: 0,
      skipped: 2,
      duration: '1m 34s'
    }
  },
  {
    id: '2',
    title: 'Playwright Assessment',
    description: 'Practical test assessment for an Automation QA Engineer role. Implements structured E2E test automation using Playwright with TypeScript, demonstrating page object patterns and test organization.',
    frameworks: ['Playwright', 'TypeScript', 'Page Objects', 'E2E Testing'],
    icon: <Zap className="w-6 h-6" />,
    testResults: {
      status: 'passing',
      passed: 42,
      failed: 0,
      skipped: 1,
      duration: '0m 48s'
    }
  },
  {
    id: '3',
    title: 'k6 Load Testing Suite',
    description: 'TypeScript-based performance and load testing project using k6 against the PetStore API. Covers stress testing, spike testing, and soak testing scenarios with structured reporting.',
    frameworks: ['k6', 'TypeScript', 'Load Testing', 'Performance', 'REST API'],
    icon: <Container className="w-6 h-6" />,
    testResults: {
      status: 'passing',
      passed: 128,
      failed: 0,
      skipped: 0,
      duration: '2m 15s'
    }
  },
  {
    id: '6',
    title: 'TestCafe Automation Challenge',
    description: 'SDET coding challenge for TheoremOne LLC implementing E2E test automation using JavaScript and TestCafe. Demonstrates structured test design, selectors, and assertions against a web application.',
    frameworks: ['TestCafe', 'JavaScript', 'E2E Testing', 'Selectors'],
    icon: <Zap className="w-6 h-6" />,
    testResults: {
      status: 'passing',
      passed: 18,
      failed: 0,
      skipped: 0,
      duration: '0m 26s'
    }
  },
]

interface ProjectsGalleryProps {
  onProjectClick?: (projectId: string, projectTitle: string) => void
}

export function ProjectsGallery({ onProjectClick }: ProjectsGalleryProps) {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Portfolio</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Project Gallery</h2>
        <p className="text-muted-foreground">
          Automation frameworks and test infrastructure projects
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group cursor-pointer animate-fade-in-up"
            onClick={() => onProjectClick?.(project.id, project.title)}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="card-elevated rounded-xl p-6 h-full">
              {/* Header Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/15 text-primary group-hover:from-primary/25 group-hover:to-primary/10 transition-all">
                  {project.icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
              </div>

              {/* Framework Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.frameworks.slice(0, 3).map(framework => (
                  <Badge
                    key={framework}
                    variant="secondary"
                    className="text-[10px] font-mono bg-primary/6 text-primary/80 hover:bg-primary/12 border border-primary/10 px-2 py-0.5"
                  >
                    {framework}
                  </Badge>
                ))}
                {project.frameworks.length > 3 && (
                  <Badge variant="secondary" className="text-[10px] font-mono bg-muted/30 text-muted-foreground border-border/30 px-2 py-0.5">
                    +{project.frameworks.length - 3}
                  </Badge>
                )}
              </div>

              {/* Separator */}
              <div className="separator-gradient mb-4" />

              {/* Test Results */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.testResults.status === 'passing' ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-medium text-primary">All passing</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-3.5 w-3.5 text-destructive" />
                        <span className="text-xs font-medium text-destructive">Failed</span>
                      </>
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono bg-secondary/60 px-2 py-1 rounded-md">
                    {project.testResults.duration}
                  </span>
                </div>

                {/* Test Result Bar */}
                <div className="flex gap-1.5 h-1.5 rounded-full overflow-hidden bg-secondary/40">
                  <div
                    className="bg-primary/70 rounded-full transition-all"
                    style={{ width: `${(project.testResults.passed / (project.testResults.passed + project.testResults.failed + project.testResults.skipped)) * 100}%` }}
                  />
                  {project.testResults.failed > 0 && (
                    <div className="bg-destructive/70 rounded-full" style={{ width: '2%' }} />
                  )}
                  {project.testResults.skipped > 0 && (
                    <div className="bg-muted-foreground/30 rounded-full" style={{ width: '1%' }} />
                  )}
                </div>

                <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-mono">
                  <span><span className="text-primary font-medium">{project.testResults.passed}</span> passed</span>
                  <span><span className="text-destructive/70">{project.testResults.failed}</span> failed</span>
                  <span><span className="text-muted-foreground">{project.testResults.skipped}</span> skipped</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
