'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { Play, CheckCircle2, AlertCircle, Clock, Zap } from 'lucide-react'

interface TestRun {
  timestamp: string
  duration: string
  status: 'passed' | 'failed' | 'warning'
  tests: { passed: number; failed: number; skipped: number }
}

interface ProjectDetailProps {
  projectId: string
  projectTitle: string
}

const chartData = [
  { name: 'Passed', value: 98, fill: '#00ffc8' },
  { name: 'Failed', value: 1, fill: '#ff4444' },
  { name: 'Skipped', value: 1, fill: '#888888' }
]

const chartConfig = {
  passed: {
    label: 'Passed',
    color: 'hsl(186, 100%, 38%)'
  },
  failed: {
    label: 'Failed',
    color: 'hsl(0, 100%, 50%)'
  },
  skipped: {
    label: 'Skipped',
    color: 'hsl(0, 0%, 53%)'
  }
}

const recentTestRuns: TestRun[] = [
  {
    timestamp: '2024-02-09 14:32:15',
    duration: '5m 12s',
    status: 'passed',
    tests: { passed: 1456, failed: 0, skipped: 8 }
  },
  {
    timestamp: '2024-02-09 11:47:43',
    duration: '5m 8s',
    status: 'passed',
    tests: { passed: 1455, failed: 0, skipped: 9 }
  },
  {
    timestamp: '2024-02-08 18:21:09',
    duration: '5m 15s',
    status: 'passed',
    tests: { passed: 1456, failed: 0, skipped: 8 }
  },
  {
    timestamp: '2024-02-08 15:09:28',
    duration: '5m 10s',
    status: 'passed',
    tests: { passed: 1454, failed: 0, skipped: 10 }
  },
  {
    timestamp: '2024-02-08 09:45:33',
    duration: '5m 14s',
    status: 'passed',
    tests: { passed: 1456, failed: 0, skipped: 8 }
  },
  {
    timestamp: '2024-02-07 22:15:47',
    duration: '5m 11s',
    status: 'passed',
    tests: { passed: 1455, failed: 0, skipped: 9 }
  }
]

const frameworkSpecs = [
  { label: 'Strategy', value: 'Atomic Testing & Page Object Model' },
  { label: 'E2E Framework', value: 'Cypress + TypeScript' },
  { label: 'API Testing', value: 'Jest + SuperTest' },
  { label: 'CI/CD', value: 'Azure DevOps with Docker' },
  { label: 'Parallelization', value: '8 workers, 60% faster execution' },
  { label: 'Data Management', value: 'Custom data-generation utilities' },
  { label: 'Reporting', value: 'Allure Reports + Custom dashboards' },
  { label: 'Test Isolation', value: 'Database snapshots per suite' }
]

const SmokTestBrowser = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  React.useEffect(() => {
    if (!isRunning) return

    const steps = [
      { url: 'https://app.example.com', action: 'Navigate to Application' },
      { url: 'https://app.example.com/login', action: 'Clicking Login Button' },
      { url: 'https://app.example.com/dashboard', action: 'Verifying Dashboard Load' },
      { url: 'https://app.example.com/dashboard', action: '✓ All Assertions Passed' }
    ]

    if (step < steps.length) {
      const timer = setTimeout(() => setStep(step + 1), 1500)
      return () => clearTimeout(timer)
    } else {
      setIsRunning(false)
    }
  }, [step, isRunning])

  const steps = [
    { url: 'https://app.example.com', action: 'Navigate to Application' },
    { url: 'https://app.example.com/login', action: 'Clicking Login Button' },
    { url: 'https://app.example.com/dashboard', action: 'Verifying Dashboard Load' },
    { url: 'https://app.example.com/dashboard', action: '✓ All Assertions Passed' }
  ]

  const currentStep = steps[step] || steps[steps.length - 1]
  const progress = ((step + 1) / steps.length) * 100

  return (
    <DialogContent className="max-w-2xl max-h-[80vh]">
      <DialogHeader>
        <DialogTitle>Smoke Test Browser Simulation</DialogTitle>
      </DialogHeader>

      <div className="space-y-4">
        {/* Browser Frame */}
        <div className="border border-border/50 rounded-lg overflow-hidden bg-secondary/30">
          {/* Browser Chrome */}
          <div className="bg-secondary/60 border-b border-border/50 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <input
              type="text"
              value={currentStep.url}
              readOnly
              className="flex-1 ml-4 bg-background/50 border border-border/30 rounded px-3 py-1 text-xs text-foreground"
            />
          </div>

          {/* Browser Content */}
          <div className="h-64 bg-gradient-to-br from-background to-secondary/50 p-8 flex flex-col items-center justify-center gap-4">
            <div className="text-center space-y-2 animate-fade-in-up">
              <div className="text-sm text-muted-foreground font-mono">{currentStep.action}</div>
              <div className="text-foreground font-medium">{currentStep.url}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Test Progress</span>
            <span className="text-foreground font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Test Steps */}
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 p-2 rounded text-xs transition-all ${
                i < step
                  ? 'bg-primary/10 text-foreground'
                  : i === step
                    ? 'bg-primary/20 text-primary'
                    : 'bg-secondary/50 text-muted-foreground'
              }`}
            >
              {i < step ? (
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              ) : i === step ? (
                <Zap className="w-4 h-4 text-primary flex-shrink-0 animate-pulse" />
              ) : (
                <div className="w-4 h-4 rounded-full border border-border/50 flex-shrink-0" />
              )}
              <span className="font-mono">{s.action}</span>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <Button onClick={onClose} className="w-full">
          Close
        </Button>
      </div>
    </DialogContent>
  )
}

export function ProjectDetail({ projectId, projectTitle }: ProjectDetailProps) {
  const [showSmokTest, setShowSmokTest] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">{projectTitle}</h2>
        <p className="text-muted-foreground">Technical specifications and recent test metrics</p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column: Framework Specs */}
        <Card className="border-border/50 bg-secondary/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Framework Specs</CardTitle>
            <CardDescription>Technical decisions & architecture</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {frameworkSpecs.map((spec, index) => (
              <div
                key={index}
                className="flex items-start gap-3 pb-3 border-b border-border/30 last:border-0 last:pb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-20 flex-shrink-0">
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30">
                    {spec.label}
                  </Badge>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{spec.value}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Right Column: Mini Allure Report */}
        <Card className="border-border/50 bg-secondary/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Test Report</CardTitle>
            <CardDescription>Latest execution metrics (Allure style)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Donut Chart */}
            <div className="flex justify-center">
              <ChartContainer config={chartConfig} className="w-full h-64">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ChartContainer>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-primary/10 border border-primary/30 rounded p-2 text-center">
                <div className="font-bold text-primary text-sm">1456</div>
                <div className="text-muted-foreground">Passed</div>
              </div>
              <div className="bg-destructive/10 border border-destructive/30 rounded p-2 text-center">
                <div className="font-bold text-destructive text-sm">14</div>
                <div className="text-muted-foreground">Failed</div>
              </div>
              <div className="bg-muted/50 border border-border/30 rounded p-2 text-center">
                <div className="font-bold text-muted-foreground text-sm">8</div>
                <div className="text-muted-foreground">Skipped</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Test Runs */}
      <Card className="border-border/50 bg-secondary/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">Recent Test Runs</CardTitle>
          <CardDescription>Last 6 pipeline executions</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <div className="space-y-2 pr-4">
              {recentTestRuns.map((run, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded border border-border/30 bg-background/50 hover:bg-background/70 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {run.status === 'passed' ? (
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-mono text-muted-foreground">{run.timestamp}</div>
                      <div className="text-xs text-foreground">
                        {run.tests.passed} passed • {run.tests.failed} failed • {run.tests.skipped} skipped
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
                    <Clock className="w-3 h-3" />
                    {run.duration}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Challenge & Solution Section */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">The Challenge & Solution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">The Problem</h4>
            <p className="text-sm text-foreground/90 leading-relaxed">
              During peak load testing, the framework experienced intermittent failures due to race conditions in database
              state synchronization. When running 50+ tests in parallel, transaction rollbacks weren't completing before
              dependent tests initiated, causing 3-5% of the test suite to fail unpredictably. This made the CI/CD pipeline
              unreliable and required manual intervention to rerun failed tests.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">The Solution</h4>
            <p className="text-sm text-foreground/90 leading-relaxed">
              Implemented database snapshot isolation strategy combined with a custom lock manager. Each test suite gets a
              dedicated transaction ID and waits on a distributed lock before data setup. Added deterministic transaction
              sequencing with explicit commit barriers, reducing flakiness to &lt;0.1%. Also introduced retry logic with
              exponential backoff for environment-specific timing issues, achieving 99.9% test stability.
            </p>
          </div>

          <div className="flex gap-2 pt-2">
            <Badge className="bg-primary/20 text-primary border-primary/30">Database Synchronization</Badge>
            <Badge className="bg-primary/20 text-primary border-primary/30">Distributed Locks</Badge>
            <Badge className="bg-primary/20 text-primary border-primary/30">Flaky Test Elimination</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Smoke Test Button */}
      <div className="flex justify-center pt-4">
        <Button
          onClick={() => setShowSmokTest(true)}
          size="lg"
          className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          <Play className="w-4 h-4" />
          Run Smoke Test
        </Button>
      </div>

      {/* Smoke Test Dialog */}
      {showSmokTest && <SmokTestBrowser onClose={() => setShowSmokTest(false)} />}
    </div>
  )
}
