'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { GitCompare } from 'lucide-react'

interface ChangelogEntry {
  type: 'ADDED' | 'OPTIMIZED' | 'REFACTORED'
  description: string
}

interface DiffComparison {
  before: string
  after: string
  metric?: string
  impactSummary: string
}

interface ChangelogItem {
  version: string
  year: string
  title: string
  company: string
  timestamp: string
  changes: ChangelogEntry[]
  diff?: DiffComparison
}

const changelogData: ChangelogItem[] = [
  {
    version: 'v5.0.0',
    year: 'May 2023 - December 2025',
    title: 'Senior QA Automation Engineer',
    company: 'Lumenalta (formerly Clevertech)',
    timestamp: '2023-05-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Designed and implemented a robust E2E automation framework from scratch using Cypress/TypeScript , faker.js/Fishery data factories, and advanced plugin integrations'
      },
      {
        type: 'ADDED',
        description: 'Containerized the framework with Docker and enabled parallel execution via Docker Compose, fully integrated into Azure Pipelines with Mochawesome/JUnit reporting'
      },
      {
        type: 'OPTIMIZED',
        description: 'Monitored pipeline executions, analyzed failed builds, identified root causes, and stabilized flaky tests to improve pipeline reliability'
      }
    ],
    diff: {
      before: 'This project started from scratch from development to production, with no existing framework to inherit.',
      after: 'Cypress/TypeScript automation framework.\nPipeline enforcement upon release branch merges.\n200+ tests running on Azure DevOps with Docker images and parallel execution via docker-compose',
      metric: 'Ground transportation & Logistics industry',
      impactSummary: 'Built an E2E automation framework from zero to 200+ end-to-end tests. Created a pipeline definition. Contributed to load testing and performance testing. Mentored full-stack developers to adopt and contribute to the framework.'
    }
  },
  {
    version: 'v4.1.0',
    year: 'March 2022 - February 2023',
    title: 'Senior QA Automation Engineer',
    company: 'Avenue Code',
    timestamp: '2022-03-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Developed automated test cases using Playwright and TestCafe with TypeScript/JavaScript for robust E2E and API testing'
      },
      {
        type: 'REFACTORED',
        description: 'Maintained and refactored existing automated tests within Jenkins pipelines, ensuring quality releases'
      },
      {
        type: 'OPTIMIZED',
        description: 'Reviewed and improved Pull Requests, including optimizing existing GitHub Actions workflows to enhance automation reliability'
      }
    ],
    diff: {
      before: 'Many existing tests were either flaky or skipped.\nTeam had to go through manual testing for the failed tests on every release.',
      after: 'Improved the reliability of the automated tests.\nIntroduced new patterns and data-driven tests.\nIncrease code coverage for E2E tests (TestCafe) and API tests (Playwright)',
      metric: 'E-commerce & Retail industry',
      impactSummary: 'Increased code coverage and reliability of the automated tests and supported multiple release cycles. Proposed the introduction of Contract Testing and Playwright for E2E testing.'
    }
  },
  {
    version: 'v4.0.0',
    year: 'November 2019 - March 2022',
    title: 'QA Automation Engineer',
    company: 'Encora (formerly Avantica)',
    timestamp: '2019-11-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Developed and maintained scalable UI automation using TestCafe with JavaScript/TypeScript, alongside API automation using Python/PyTest and Postman collections'
      },
      {
        type: 'OPTIMIZED',
        description: 'Served as QA Release Captain, leading bi-weekly production releases, coordinating with cross-functional stakeholders, and enforcing quality gates'
      },
      {
        type: 'REFACTORED',
        description: 'Evaluated and adopted Docker/Kubernetes for test environments and monitored CI pipelines in TeamCity for fast, reliable feedback loops'
      }
    ],
    diff: {
      before: 'Manual environment provisioning\nLimited queue monitoring\nOnly Python/PyTest for API testing',
      after: 'Contributed to the introduction of Docker/Kubernetes orchestration\nTestRail test plans management\nTeamCity pipeline monitoring with RabbitMQ event validation',
      metric: 'Cybersecurity industry',
      impactSummary: 'Led bi-weekly production releases as QA Release Captain and contributed to new features automated test using TestCafe for E2E testing and Python/PyTest for API testing'
    }
  },
  {
    version: 'v3.0.0',
    year: 'May 2018 - October 2019',
    title: 'Pega System Architect',
    company: 'Rulesware LLC',
    timestamp: '2018-05-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Translated complex business requirements into functional technical implementations using PegaSystems SmartBPM methodology'
      },
      {
        type: 'OPTIMIZED',
        description: 'Managed technical implementation tasks to ensure on-time and on-budget delivery across the project lifecycle'
      },
      {
        type: 'ADDED',
        description: 'Coded and unit tested using Pega OOTB features based on designs provided by the Lead System Architect'
      }
    ],
    diff: {
      before: 'Complex requirements\nTraditional development cycle',
      after: 'Developer new features using Pega OOTB features\nIntegrated API endpoints to support new features\nFollowed technical lead\'s guidance and implemented new features',
      metric: 'Fraud & Disputes / Fintech industry',
      impactSummary: 'Accelerated delivery of fraud and dispute resolution workflows by translating complex business requirements into SmartBPM-driven automation, ensuring on-time and on-budget implementation.'
    }
  },
  {
    version: 'v2.0.0',
    year: 'August 2015 - July 2018',
    title: 'QA Automation Engineer',
    company: 'Rulesware LLC',
    timestamp: '2015-08-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Developed and maintained automated test suites in Java using Selenium WebDriver and TestNG for Java-based and Pega BPM applications'
      },
      {
        type: 'ADDED',
        description: 'Designed utility classes to consume, parse, and validate RESTful API endpoints, supporting both UI and backend test automation'
      },
      {
        type: 'REFACTORED',
        description: 'Implemented data-driven test scenarios using Excel and TestNG data providers, and refactored POM structures to enhance maintainability'
      }
    ],
    diff: {
      before: 'Manual testing workflows\nNo reusable API test utilities\nHardcoded test data',
      after: 'Selenium WebDriver + TestNG framework\nReusable RESTful API validation utilities\nData-driven scripts with Excel providers',
      metric: 'Disputes & Digital Payments / Fintech industry',
      impactSummary: 'Contributed to the introduction and improvement of a Selenium WebDriver + TestNG framework, introduced reusable API validation utilities, and enabled data-driven test execution across dispute and payment processing flows by refactoring the POM structures to enhance maintainability.'
    }
  },
  {
    version: 'v1.1.0',
    year: 'March 2015 - July 2015',
    title: 'Java Developer',
    company: 'Davivienda',
    timestamp: '2015-03-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Delivered application development services within a SOA-based architecture for banking systems'
      },
      {
        type: 'ADDED',
        description: 'Provided end-to-end development support, including writing and unit testing Java code across multiple environments'
      },
      {
        type: 'OPTIMIZED',
        description: 'Collaborated with team lead and project managers to analyze requirements, create functional mockups, and ensure high-quality features'
      }
    ],
    diff: {
      before: 'Legacy banking workflows for credit card rewards program\nManual requirement analysis',
      after: 'New screens for credit card rewards program with new features\nCollaborative requirements analysis with mockups',
      metric: 'Banking / Financial Services industry',
      impactSummary: 'Refactored & enhanced the credit card rewards program by adding new screens and features, improving the user experience and engagement.'
    }
  },
  {
    version: 'v1.0.0',
    year: 'December 2013 - March 2015',
    title: 'Java Developer',
    company: 'Sherwin-Williams de Centroam\u00e9rica',
    timestamp: '2013-12-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Designed REST web services and developed Java EE5 enterprise beans with MVVM pattern, JPA, and JSF components'
      },
      {
        type: 'ADDED',
        description: 'Developed Java web components including managed beans, XHTML/HTML5 files, and client-side/server-side validations'
      },
      {
        type: 'OPTIMIZED',
        description: 'Worked with Oracle/PL/SQL databases, Glassfish server, and tools including iReport, Knockout.js, and jQuery Mobile'
      }
    ],
    diff: {
      before: 'Manual business processes\nNo centralized web platform\nLimited reporting capabilities',
      after: 'Java EE5 web application\nREST web services with JPA/Oracle\nCustom reporting with iReport',
      metric: 'Enterprise / Manufacturing industry',
      impactSummary: 'Built a centralized Java EE5 web platform with REST services and custom reporting, replacing manual business processes with a unified application backed by Oracle/PL-SQL.'
    }
  }
]

export function ExperienceChangelog() {
  const [selectedDiff, setSelectedDiff] = useState<ChangelogItem | null>(null)

  const getChangeColor = (type: ChangelogEntry['type']) => {
    switch (type) {
      case 'ADDED': return 'text-emerald-400'
      case 'OPTIMIZED': return 'text-sky-400'
      case 'REFACTORED': return 'text-amber-400'
      default: return 'text-primary'
    }
  }

  const getChangeBg = (type: ChangelogEntry['type']) => {
    switch (type) {
      case 'ADDED': return 'bg-emerald-500/8 border-emerald-500/15'
      case 'OPTIMIZED': return 'bg-sky-500/8 border-sky-500/15'
      case 'REFACTORED': return 'bg-amber-500/8 border-amber-500/15'
      default: return 'bg-primary/8 border-primary/15'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Changelog</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Technical Growth</h2>
        <p className="text-muted-foreground font-mono text-sm">
          Career progression through quality engineering milestones
        </p>
      </div>

      {/* Versioning Rules */}
      <div className="animate-fade-in-up rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm p-4" style={{ animationDelay: '0.05s' }}>
        <p className="text-[10px] font-mono text-muted-foreground/60 tracking-widest uppercase mb-3">Semantic Versioning</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-primary">MAJOR</span>
            <span className="text-xs text-muted-foreground">Career track shift or new era</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-primary/60">MINOR</span>
            <span className="text-xs text-muted-foreground">Progression within the same track</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative space-y-6">
        {/* Vertical Spine */}
        <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent" />

        {changelogData.map((item, index) => (
          <div key={item.version} className="relative pl-12 sm:pl-16 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Timeline Node */}
            <div className="absolute left-0 top-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/15 blur-md scale-150" />
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-card to-secondary border-2 border-primary/40 flex items-center justify-center shadow-lg shadow-primary/10">
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold text-primary tracking-tight">
                    {item.version}
                  </span>
                </div>
              </div>
            </div>

            {/* Card */}
            <Card className="border-border/30 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/25 transition-all duration-300 group">
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <span className="text-xs text-muted-foreground/60">@</span>
                      <span className="text-sm font-medium text-primary">{item.company}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-mono tracking-wider">
                      {item.timestamp}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit text-[10px] font-mono border-border/40 text-muted-foreground shrink-0">
                    {item.year}
                  </Badge>
                </div>

                {/* Separator */}
                <div className="separator-gradient" />

                {/* Changes */}
                <div className="space-y-2">
                  {item.changes.map((change, i) => (
                    <div key={i} className={`flex gap-3 items-start p-2.5 rounded-lg border transition-colors ${getChangeBg(change.type)}`}>
                      <span className={`text-[10px] font-mono font-bold shrink-0 mt-0.5 ${getChangeColor(change.type)}`}>
                        [{change.type}]
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {change.description}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Diff Button */}
                {item.diff && (
                  <div className="pt-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedDiff(item)}
                      className="gap-2 text-primary/70 hover:text-primary hover:bg-primary/8 text-xs font-mono"
                    >
                      <GitCompare className="w-3.5 h-3.5" />
                      View Before/After Diff
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Diff Modal */}
      <Dialog open={!!selectedDiff} onOpenChange={() => setSelectedDiff(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[80vh] overflow-y-auto bg-card border-border/40">
          <DialogHeader>
            <DialogTitle className="font-mono text-base">
              {selectedDiff?.version} — Impact Analysis
            </DialogTitle>
          </DialogHeader>

          {selectedDiff && (
            <div className="space-y-6 mt-4">
              {/* Context */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-mono">
                  {selectedDiff.title} @ {selectedDiff.company}
                </p>
                {selectedDiff.diff?.metric && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/8 border border-primary/15">
                    <span className="text-xs font-mono text-primary font-medium">
                      {selectedDiff.diff.metric}
                    </span>
                  </div>
                )}
              </div>

              {/* Diff Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Before */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 pb-2 border-b border-red-500/20">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <span className="text-red-400 font-mono text-xs font-bold tracking-wider">BEFORE</span>
                  </div>
                  <div className="bg-red-500/3 border border-red-500/10 rounded-lg p-4 font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {selectedDiff.diff?.before}
                  </div>
                </div>

                {/* After */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 pb-2 border-b border-emerald-500/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                    <span className="text-emerald-400 font-mono text-xs font-bold tracking-wider">AFTER</span>
                  </div>
                  <div className="bg-emerald-500/3 border border-emerald-500/10 rounded-lg p-4 font-mono text-xs text-foreground leading-relaxed whitespace-pre-wrap">
                    {selectedDiff.diff?.after}
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-primary/4 border border-primary/15 rounded-lg p-4 space-y-2">
                <p className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">Impact Summary</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedDiff.diff?.impactSummary}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
