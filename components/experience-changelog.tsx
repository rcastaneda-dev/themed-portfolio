'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { X, GitCompare } from 'lucide-react'

interface ChangelogEntry {
  type: 'ADDED' | 'OPTIMIZED' | 'REFACTORED'
  description: string
}

interface DiffComparison {
  before: string
  after: string
  metric?: string
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
    version: 'v4.2.0',
    year: 'May 2023 - Present',
    title: 'Senior QA Automation',
    company: 'Lumenalta (formerly Clevertech)',
    timestamp: '2023-05-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Built complete E2E automation framework using Cypress/TypeScript with custom data-generation utilities'
      },
      {
        type: 'ADDED',
        description: 'Engineered containerized CI/CD workflow in Azure DevOps with Docker images and parallel execution'
      },
      {
        type: 'OPTIMIZED',
        description: 'Increased test stability by 45% through pipeline failure analysis and continuous improvements'
      }
    ],
    diff: {
      before: 'Manual test execution via local CLI\n2-3 hours for full regression\nFlaky E2E tests (76% pass rate)',
      after: 'Containerized Azure DevOps pipeline\n15 minutes parallel execution\n98% consistent pass rate',
      metric: '12x faster • 22% more stable'
    }
  },
  {
    version: 'v4.1.0',
    year: 'March 2022 - February 2023',
    title: 'Senior QA Automation',
    company: 'Avenue Code',
    timestamp: '2022-03-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Developed E2E/API automation scenarios in Playwright/TestCafe with JavaScript/TypeScript'
      },
      {
        type: 'OPTIMIZED',
        description: 'Optimized GitHub Actions workflows to reduce CI execution time by 35%'
      },
      {
        type: 'REFACTORED',
        description: 'Refactored Jenkins pipeline integration for improved reliability and maintainability'
      }
    ],
    diff: {
      before: 'Jenkins-based CI/CD\n8 minute average build time\nManual test suite selection',
      after: 'GitHub Actions + Jenkins hybrid\n5.2 minute average build time\nAutomated test selection based on changes',
      metric: '35% faster builds • 100% less manual intervention'
    }
  },
  {
    version: 'v3.5.0',
    year: 'November 2019 - March 2022',
    title: 'Mid QA Automation',
    company: 'Encora (formerly Avantica)',
    timestamp: '2019-11-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Developed UI and API automation using JavaScript/TestCafe and Python/PyTest'
      },
      {
        type: 'REFACTORED',
        description: 'Migrated legacy test infrastructure from standalone servers to Docker/Kubernetes'
      },
      {
        type: 'OPTIMIZED',
        description: 'Led bi-weekly production deployments with zero-downtime test strategy'
      }
    ],
    diff: {
      before: 'On-premise test servers\n$5k/month infrastructure cost\nManual environment provisioning',
      after: 'Kubernetes-orchestrated containers\n$2.1k/month cloud cost\nAutomated scaling and provisioning',
      metric: '58% cost reduction • 10x faster setup'
    }
  },
  {
    version: 'v2.1.0',
    year: 'August 2015 - July 2018',
    title: 'QA Automation Engineer',
    company: 'Rulesware LLC',
    timestamp: '2015-08-01',
    changes: [
      {
        type: 'ADDED',
        description: 'Built Selenium WebDriver framework with TestNG and Page Object Model patterns'
      },
      {
        type: 'ADDED',
        description: 'Created reusable utilities for RESTful API endpoint consumption and validation'
      },
      {
        type: 'REFACTORED',
        description: 'Transitioned team from manual regression testing to automated validation'
      }
    ],
    diff: {
      before: '100% manual testing\n3-4 days per regression cycle\nHigh defect escape rate (15%)',
      after: '85% automated coverage\n1 day per regression cycle\nLow defect escape rate (3%)',
      metric: '75% faster testing • 80% fewer production bugs'
    }
  }
]

export function ExperienceChangelog() {
  const [selectedDiff, setSelectedDiff] = useState<ChangelogItem | null>(null)

  const getChangeIcon = (type: ChangelogEntry['type']) => {
    switch (type) {
      case 'ADDED':
        return '+'
      case 'OPTIMIZED':
        return '⚡'
      case 'REFACTORED':
        return '♻️'
      default:
        return '•'
    }
  }

  const getChangeColor = (type: ChangelogEntry['type']) => {
    switch (type) {
      case 'ADDED':
        return 'text-green-400'
      case 'OPTIMIZED':
        return 'text-blue-400'
      case 'REFACTORED':
        return 'text-yellow-400'
      default:
        return 'text-primary'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3 animate-slide-in-right">
        <h2 className="text-3xl font-bold text-foreground">System Evolution</h2>
        <p className="text-muted-foreground font-mono text-sm">
          {'// Career Changelog - Quality Engineering Progression'}
        </p>
        <div className="h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
      </div>

      {/* Changelog */}
      <div className="relative space-y-6">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        {changelogData.map((item, index) => (
          <div key={item.version} className="relative pl-20 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Version tag node */}
            <div className="absolute left-0 top-2 w-12 h-12 flex items-center justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-pulse" />
                {/* Main node */}
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-primary/40 border-2 border-primary flex items-center justify-center font-mono text-xs font-bold text-foreground shadow-lg shadow-primary/40">
                  v{item.version.split('.')[1]}
                </div>
              </div>
            </div>

            {/* Card */}
            <Card className="border-border/40 bg-secondary/30 overflow-hidden hover:border-primary/50 transition-all group">
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <span className="text-xs text-muted-foreground">@</span>
                      <span className="text-sm font-semibold text-primary">{item.company}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">
                      TIMESTAMP: {item.timestamp}
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs font-mono border-primary/30">
                    {item.year}
                  </Badge>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-border/50 to-transparent" />

                {/* Changes - Code editor aesthetic */}
                <div className="space-y-2 font-mono text-sm">
                  {item.changes.map((change, i) => (
                    <div key={i} className="flex gap-3 items-start group/item hover:bg-primary/5 p-2 rounded transition-colors">
                      <span className={`font-bold flex-shrink-0 ${getChangeColor(change.type)}`}>
                        [{change.type}]
                      </span>
                      <span className="text-muted-foreground flex-1 leading-relaxed">
                        {change.description}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Diff button */}
                {item.diff && (
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedDiff(item)}
                      className="gap-2 text-primary hover:bg-primary/10 text-xs font-mono"
                    >
                      <GitCompare className="w-3 h-3" />
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
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-mono">
              {selectedDiff?.version} - Before/After Comparison
            </DialogTitle>
          </DialogHeader>

          {selectedDiff && (
            <div className="space-y-6 mt-4">
              {/* Header info */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-mono">
                  {selectedDiff.title} @ {selectedDiff.company}
                </p>
                {selectedDiff.diff?.metric && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                    <span className="text-xs font-mono text-primary">
                      ✨ {selectedDiff.diff.metric}
                    </span>
                  </div>
                )}
              </div>

              {/* Diff comparison */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Before */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 pb-2 border-b border-red-500/30">
                    <span className="text-red-400 font-mono font-bold">BEFORE</span>
                  </div>
                  <div className="bg-secondary/50 border border-red-500/20 rounded p-4 font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {selectedDiff.diff?.before}
                  </div>
                </div>

                {/* After */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 pb-2 border-b border-green-500/30">
                    <span className="text-green-400 font-mono font-bold">AFTER</span>
                  </div>
                  <div className="bg-secondary/50 border border-green-500/20 rounded p-4 font-mono text-xs text-foreground leading-relaxed whitespace-pre-wrap">
                    {selectedDiff.diff?.after}
                  </div>
                </div>
              </div>

              {/* Impact summary */}
              <div className="bg-primary/5 border border-primary/30 rounded p-4 space-y-2">
                <p className="text-xs font-mono text-primary font-bold">IMPACT SUMMARY</p>
                <p className="text-sm text-muted-foreground">
                  The optimization resulted in significant improvements across efficiency, stability, and cost metrics. This change represents a key milestone in the evolution of the QA automation infrastructure.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
