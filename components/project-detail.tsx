'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { PieChart, Pie, Cell, Legend } from 'recharts'
import { ExternalLink, Github, CheckCircle2, AlertCircle, Clock } from 'lucide-react'

interface TestRun {
  timestamp: string
  duration: string
  status: 'passed' | 'failed' | 'warning'
  tests: { passed: number; failed: number; skipped: number }
}

interface Spec {
  label: string
  value: string
}

interface ProjectData {
  specs: Spec[]
  testStats: { passed: number; failed: number; skipped: number }
  recentRuns: TestRun[]
  challenge: { challenge: string; strategy: string; implementation: string; impact: string; tags: string[] }
  demoUrl?: string
  repoUrl?: string
}

interface ProjectDetailProps {
  projectId: string
  projectTitle: string
}

const projectDataMap: Record<string, ProjectData> = {
  '5': {
    specs: [
      { label: 'Architecture', value: 'Next.js App Router with server actions and API routes' },
      { label: 'Database', value: 'Supabase Postgres with RLS policies and edge functions' },
      { label: 'PDF Engine', value: 'PDFKit with custom templates and bulk ZIP generation' },
      { label: 'Task System', value: 'Atomic task orchestration with concurrent processing' },
      { label: 'Auth', value: 'Supabase Auth with role-based access control' },
      { label: 'Testing', value: 'Vitest unit tests + Playwright E2E' },
      { label: 'Deployment', value: 'Vercel with Supabase hosted backend' },
      { label: 'Reporting', value: 'Real-time progress tracking with server-sent events' },
    ],
    testStats: { passed: 54, failed: 0, skipped: 1 },
    recentRuns: [
      { timestamp: '2025-01-15 09:12:33', duration: '1m 08s', status: 'passed', tests: { passed: 54, failed: 0, skipped: 1 } },
      { timestamp: '2025-01-14 16:45:21', duration: '1m 05s', status: 'passed', tests: { passed: 54, failed: 0, skipped: 1 } },
      { timestamp: '2025-01-14 11:30:09', duration: '1m 12s', status: 'passed', tests: { passed: 53, failed: 1, skipped: 1 } },
      { timestamp: '2025-01-13 14:22:47', duration: '1m 06s', status: 'passed', tests: { passed: 54, failed: 0, skipped: 1 } },
      { timestamp: '2025-01-12 20:18:55', duration: '1m 10s', status: 'passed', tests: { passed: 54, failed: 0, skipped: 1 } },
      { timestamp: '2025-01-12 08:45:12', duration: '1m 09s', status: 'passed', tests: { passed: 52, failed: 0, skipped: 3 } },
    ],
    challenge: {
      challenge: 'Report generation was handled manually using Excel. Employees were expected to process records day by day over a two-month period, making the workflow repetitive, slow, and prone to human error.\n\nAn initial iteration that I was able to put together worked under controlled conditions but struggled under real workloads. Generating hundreds of PDFs and bundling them into ZIP files caused memory spikes on Vercel and serverless timeouts on Supabase. Sequential processing of 20,000+ student records regularly exceeded the 10-second execution limit, leaving bulk operations incomplete.',
      strategy: 'Redesign the workflow to support high-volume report generation within serverless constraints by minimizing memory usage and parallelizing workloads. The goal was to process large datasets reliably without exceeding execution limits while eliminating the need for manual Excel processing.',
      implementation: 'Built an atomic task orchestration system that splits bulk jobs into smaller concurrent batches. Each batch generates PDFs in parallel using worker threads, streams them directly into a ZIP archive (avoiding intermediate disk writes), and reports progress through server-sent events for real-time feedback.',
      impact: 'Reduced bulk generation time from over 25 minutes to under 60 seconds for 1000 records and enabled reliable processing of tens of thousands of student records. The automation eliminated a manual workflow that would have required employees to process data daily in Excel for two months, saving at least two hours of labor per day for administrative staff.',
      tags: ['Concurrent Processing', 'Stream-Based PDF', 'Atomic Tasks'],
    },
    demoUrl: 'https://paquetes-sv.vercel.app/',
    repoUrl: 'https://github.com/rcastaneda-dev/paquetes.sv',
  },
  '1': {
    specs: [
      { label: 'Architecture', value: 'React SPA with component-driven design' },
      { label: 'Backend', value: 'Supabase with Auth, Storage, and Row-Level Security' },
      { label: 'E2E Framework', value: 'Playwright + TypeScript with POM pattern' },
      { label: 'Data Strategy', value: 'Supabase seeding scripts + Faker.js factories' },
      { label: 'Auth Flow', value: 'Email/password with session persistence and RLS' },
      { label: 'File Storage', value: 'Supabase Storage with signed URLs and access policies' },
      { label: 'State Mgmt', value: 'React Context + custom hooks for global state' },
      { label: 'CI/CD', value: 'GitHub Actions with Playwright containerized runs' },
    ],
    testStats: { passed: 86, failed: 0, skipped: 2 },
    recentRuns: [
      { timestamp: '2025-02-01 14:32:15', duration: '1m 34s', status: 'passed', tests: { passed: 86, failed: 0, skipped: 2 } },
      { timestamp: '2025-01-31 11:47:43', duration: '1m 30s', status: 'passed', tests: { passed: 86, failed: 0, skipped: 2 } },
      { timestamp: '2025-01-30 18:21:09', duration: '1m 38s', status: 'passed', tests: { passed: 85, failed: 1, skipped: 2 } },
      { timestamp: '2025-01-30 15:09:28', duration: '1m 32s', status: 'passed', tests: { passed: 86, failed: 0, skipped: 2 } },
      { timestamp: '2025-01-29 09:45:33', duration: '1m 36s', status: 'passed', tests: { passed: 86, failed: 0, skipped: 2 } },
      { timestamp: '2025-01-28 22:15:47', duration: '1m 33s', status: 'passed', tests: { passed: 84, failed: 0, skipped: 4 } },
    ],
    challenge: {
      challenge: `A small e-commerce side business initially had no system to track inventory or transactions. Product availability, revenue, and sales were managed informally, making it difficult for the owner to understand stock levels, track income, or monitor overall business performance.
      A custom backend was built from scratch using Supabase to manage inventory updates, product records, and transaction history. As the system evolved, Supabase Row-Level Security (RLS) policies and data relationships introduced architectural considerations around how different actors (admins, internal dashboards, and future storefront integrations) would securely access and modify inventory data.`,
      strategy: `Design a lightweight but scalable backend that could provide real-time visibility into inventory and sales while remaining flexible enough to support a future headless Shopify storefront. The goal was to centralize operational data while allowing the frontend layer to evolve independently.`,
      implementation: `Built an inventory and transaction management system powered by Supabase Postgres. Implemented Row-Level Security policies to enforce access control for administrative operations and internal dashboards. Developed APIs to handle stock updates, product catalog management, and transaction recording. Structured the data model so the backend can later integrate with Shopify's Storefront and Admin APIs, enabling a headless architecture while retaining Supabase for operational data, analytics, and internal tooling.`,  
      impact: `Provided the business with its first reliable system for tracking inventory, sales, and revenue in real time. The platform replaced informal manual tracking with a centralized data model and created a scalable foundation that can integrate with Shopify while continuing to leverage Supabase for backend services.`,
      tags: ['Inventory System', 'Supabase Backend', 'Headless Commerce'],
    },
    repoUrl: 'https://github.com/rcastaneda-dev/nanis-essentials-inventory',
    demoUrl: 'https://nanisessentials-inventory.vercel.app/',
  },
  '2': {
    specs: [
      { label: 'Architecture', value: 'Page Object Model with base page abstractions' },
      { label: 'E2E Framework', value: 'Playwright + TypeScript' },
      { label: 'Pattern', value: 'Page Objects with composition over inheritance' },
      { label: 'Assertions', value: 'Playwright expect with custom matchers' },
      { label: 'Test Data', value: 'Inline fixtures with typed factory helpers' },
      { label: 'Selectors', value: 'Data-testid attributes with role-based fallbacks' },
      { label: 'Reporting', value: 'Playwright HTML reporter with trace on failure' },
      { label: 'Config', value: 'Multi-browser matrix (Chromium, Firefox, WebKit)' },
    ],
    testStats: { passed: 42, failed: 0, skipped: 1 },
    recentRuns: [
      { timestamp: '2025-01-20 10:15:22', duration: '0m 48s', status: 'passed', tests: { passed: 42, failed: 0, skipped: 1 } },
      { timestamp: '2025-01-19 16:30:11', duration: '0m 45s', status: 'passed', tests: { passed: 42, failed: 0, skipped: 1 } },
      { timestamp: '2025-01-18 14:22:08', duration: '0m 52s', status: 'passed', tests: { passed: 41, failed: 1, skipped: 1 } },
      { timestamp: '2025-01-18 09:10:44', duration: '0m 47s', status: 'passed', tests: { passed: 42, failed: 0, skipped: 1 } },
      { timestamp: '2025-01-17 20:05:33', duration: '0m 50s', status: 'passed', tests: { passed: 42, failed: 0, skipped: 1 } },
      { timestamp: '2025-01-17 11:42:19', duration: '0m 46s', status: 'passed', tests: { passed: 42, failed: 0, skipped: 1 } },
    ],
    challenge: {
      challenge: 'The assessment required testing a dynamic web application with elements that loaded asynchronously and had non-deterministic rendering order. Standard selectors broke frequently as the DOM structure changed between page loads, causing false test failures.',
      strategy: 'Build a selector approach that prioritizes stable attributes over DOM structure, combined with intelligent wait mechanisms that adapt to actual element readiness rather than arbitrary timeouts.',
      implementation: 'Built a resilient Page Object layer using data-testid selectors as primary locators with role-based ARIA fallbacks. Added smart wait utilities that poll for element stability rather than relying on fixed timeouts. Implemented trace-on-failure configuration to capture full browser traces for debugging flaky interactions.',
      impact: 'Achieved 100% selector stability across all three browser engines (Chromium, Firefox, WebKit). Trace-on-failure reduced debugging time for flaky tests from hours to minutes by providing full interaction recordings.',
      tags: ['Resilient Selectors', 'Smart Waits', 'Trace Debugging'],
    },
    repoUrl: 'https://github.com/rcastaneda-dev/playwright-assessment',
  },
  '3': {
    specs: [
      { label: 'Architecture', value: 'Modular k6 scripts with shared utility libraries' },
      { label: 'Framework', value: 'k6 with TypeScript via webpack bundler' },
      { label: 'Test Types', value: 'Stress, spike, soak, and breakpoint testing' },
      { label: 'Target API', value: 'PetStore REST API with CRUD operations' },
      { label: 'Thresholds', value: 'p95 < 500ms, error rate < 1%, req/s > 100' },
      { label: 'Scenarios', value: 'Ramping VUs with staged execution profiles' },
      { label: 'Reporting', value: 'k6 Cloud dashboard + JSON summary output' },
      { label: 'Data', value: 'Parameterized payloads from CSV data files' },
    ],
    testStats: { passed: 128, failed: 0, skipped: 0 },
    recentRuns: [
      { timestamp: '2025-01-25 08:00:12', duration: '2m 15s', status: 'passed', tests: { passed: 128, failed: 0, skipped: 0 } },
      { timestamp: '2025-01-24 15:30:45', duration: '2m 20s', status: 'passed', tests: { passed: 128, failed: 0, skipped: 0 } },
      { timestamp: '2025-01-23 22:10:33', duration: '2m 12s', status: 'passed', tests: { passed: 127, failed: 1, skipped: 0 } },
      { timestamp: '2025-01-23 10:45:18', duration: '2m 18s', status: 'passed', tests: { passed: 128, failed: 0, skipped: 0 } },
      { timestamp: '2025-01-22 17:22:09', duration: '2m 14s', status: 'passed', tests: { passed: 128, failed: 0, skipped: 0 } },
      { timestamp: '2025-01-22 09:15:55', duration: '2m 22s', status: 'passed', tests: { passed: 126, failed: 2, skipped: 0 } },
    ],
    challenge: {
      challenge: 'The PetStore API exhibited inconsistent response times under load, with p99 latencies spiking to 3-5 seconds during sustained traffic. Existing tests used fixed thresholds that passed locally but failed in CI due to shared infrastructure resource contention.',
      strategy: 'Replace rigid pass/fail thresholds with environment-aware profiles, and design load scenarios that progressively identify breaking points rather than testing at a single fixed concurrency level.',
      implementation: 'Designed adaptive threshold profiles based on environment context (local vs CI). Implemented staged ramping scenarios that gradually increase virtual users to identify the exact breaking point. Added custom k6 metrics for tracking connection pool saturation and response time percentile drift.',
      impact: 'Enabled precise performance regression detection with zero false positives in CI. Identified the API\'s breaking point at 850 concurrent users and a connection pool saturation bottleneck that was invisible under previous fixed-load tests.',
      tags: ['Adaptive Thresholds', 'Staged Ramping', 'Custom Metrics'],
    },
    repoUrl: 'https://github.com/rcastaneda-dev/k6-typescript-portfolio',
  },
  '6': {
    specs: [
      { label: 'Architecture', value: 'TestCafe with role-based test organization' },
      { label: 'Framework', value: 'TestCafe + JavaScript (ES6+)' },
      { label: 'Selectors', value: 'TestCafe Selector API with CSS and filtering' },
      { label: 'Assertions', value: 'TestCafe built-in assertions with smart waits' },
      { label: 'Test Data', value: 'Inline test data with randomized inputs' },
      { label: 'Browsers', value: 'Chrome, Firefox, headless Chrome in CI' },
      { label: 'Reporting', value: 'Console reporter with screenshot on failure' },
      { label: 'CI/CD', value: 'GitHub Actions with headless browser execution' },
    ],
    testStats: { passed: 18, failed: 0, skipped: 0 },
    recentRuns: [
      { timestamp: '2025-01-10 13:45:22', duration: '0m 26s', status: 'passed', tests: { passed: 18, failed: 0, skipped: 0 } },
      { timestamp: '2025-01-09 17:30:11', duration: '0m 24s', status: 'passed', tests: { passed: 18, failed: 0, skipped: 0 } },
      { timestamp: '2025-01-09 10:12:08', duration: '0m 28s', status: 'passed', tests: { passed: 17, failed: 1, skipped: 0 } },
      { timestamp: '2025-01-08 15:55:44', duration: '0m 25s', status: 'passed', tests: { passed: 18, failed: 0, skipped: 0 } },
      { timestamp: '2025-01-08 09:20:33', duration: '0m 27s', status: 'passed', tests: { passed: 18, failed: 0, skipped: 0 } },
      { timestamp: '2025-01-07 21:10:19', duration: '0m 26s', status: 'passed', tests: { passed: 18, failed: 0, skipped: 0 } },
    ],
    challenge: {
      challenge: 'The target web application used dynamically generated CSS class names and deeply nested DOM elements, making traditional CSS selectors brittle. Several form elements relied on custom JavaScript-rendered dropdowns that TestCafe\'s default interaction model couldn\'t handle.',
      strategy: 'Develop a selector approach that relies on content and visibility rather than volatile class names, and create reusable interaction helpers for non-standard UI components.',
      implementation: 'Implemented a selector strategy combining TestCafe\'s filter and nth-child capabilities with explicit visible/content-based filtering. Created helper functions for interacting with custom dropdown components by triggering click sequences and waiting for option visibility. Added screenshot-on-failure for rapid debugging.',
      impact: 'Achieved zero selector-related false failures across all test runs. The custom dropdown helpers became reusable across the entire suite, reducing new test authoring time by roughly 40%.',
      tags: ['Dynamic Selectors', 'Custom Interactions', 'Screenshot Debugging'],
    },
    repoUrl: 'https://github.com/rcastaneda-dev/AutomationPractice-Theorem',
  }
}

const chartConfig = {
  passed: { label: 'Passed', color: 'hsl(172, 66%, 50%)' },
  failed: { label: 'Failed', color: 'hsl(0, 72%, 55%)' },
  skipped: { label: 'Skipped', color: 'hsl(220, 12%, 40%)' },
}

function getChartData(stats: { passed: number; failed: number; skipped: number }) {
  const total = stats.passed + stats.failed + stats.skipped
  return [
    { name: 'Passed', value: Math.round((stats.passed / total) * 100), fill: 'hsl(172, 66%, 50%)' },
    { name: 'Failed', value: Math.max(Math.round((stats.failed / total) * 100), stats.failed > 0 ? 1 : 0), fill: 'hsl(0, 72%, 55%)' },
    { name: 'Skipped', value: Math.max(Math.round((stats.skipped / total) * 100), stats.skipped > 0 ? 1 : 0), fill: 'hsl(220, 12%, 40%)' },
  ]
}

export function ProjectDetail({ projectId, projectTitle }: ProjectDetailProps) {
  const data = projectDataMap[projectId]
  if (!data) return null

  const chartData = getChartData(data.testStats)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Project</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-2">{projectTitle}</h2>
      </div>

      {/* Challenge & Approach */}
      <Card className="border-primary/15 bg-gradient-to-br from-primary/3 to-primary/6 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Challenge & Approach</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-foreground font-mono tracking-wider uppercase">Challenge</h4>
            <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{data.challenge.challenge}</p>
          </div>

          <div className="separator-gradient" />

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-foreground font-mono tracking-wider uppercase">Strategy</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">{data.challenge.strategy}</p>
          </div>

          <div className="separator-gradient" />

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-foreground font-mono tracking-wider uppercase">Implementation</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">{data.challenge.implementation}</p>
          </div>

          <div className="separator-gradient" />

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-foreground font-mono tracking-wider uppercase">Results</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">{data.challenge.impact}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {data.challenge.tags.map(tag => (
              <Badge key={tag} className="bg-primary/10 text-primary border border-primary/15 text-[10px]">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Two Column Layout */}
      <p className="text-muted-foreground text-sm">Technical specifications and recent test metrics</p>
      <div className="grid lg:grid-cols-2 gap-5">
        
        {/* Left: Framework Specs */}
        <Card className="border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Framework Specs</CardTitle>
            <CardDescription className="text-xs">Technical decisions & architecture</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.specs.map((spec, index) => (
              <div
                key={index}
                className="flex items-start gap-3 py-2.5 border-b border-border/15 last:border-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 + index * 0.04}s` }}
              >
                <Badge variant="secondary" className="text-[10px] bg-primary/8 text-primary/80 border-primary/15 shrink-0 mt-0.5">
                  {spec.label}
                </Badge>
                <p className="text-xs text-foreground/80 leading-relaxed">{spec.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Right: Test Report */}
        <Card className="border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Test Report</CardTitle>
            <CardDescription className="text-xs">Latest execution metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Chart */}
            <div className="flex justify-center">
              <ChartContainer config={chartConfig} className="w-full h-56">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                    strokeWidth={0}
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-primary/5 border border-primary/15 rounded-lg p-2.5 text-center">
                <div className="font-bold text-primary text-sm">{data.testStats.passed}</div>
                <div className="text-[10px] text-muted-foreground">Passed</div>
              </div>
              <div className="bg-destructive/5 border border-destructive/15 rounded-lg p-2.5 text-center">
                <div className="font-bold text-destructive text-sm">{data.testStats.failed}</div>
                <div className="text-[10px] text-muted-foreground">Failed</div>
              </div>
              <div className="bg-secondary/40 border border-border/20 rounded-lg p-2.5 text-center">
                <div className="font-bold text-muted-foreground text-sm">{data.testStats.skipped}</div>
                <div className="text-[10px] text-muted-foreground">Skipped</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Test Runs */}
      <Card className="border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Recent Test Runs</CardTitle>
          <CardDescription className="text-xs">Last {data.recentRuns.length} pipeline executions</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-56">
            <div className="space-y-1.5 pr-4">
              {data.recentRuns.map((run, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-border/15 bg-background/30 hover:bg-background/50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${0.25 + index * 0.04}s` }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {run.status === 'passed' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono text-muted-foreground">{run.timestamp}</div>
                      <div className="text-[10px] text-foreground/80">
                        {run.tests.passed} passed · {run.tests.failed} failed · {run.tests.skipped} skipped
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono flex-shrink-0">
                    <Clock className="w-3 h-3" />
                    {run.duration}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      {(data.demoUrl || data.repoUrl) && (
        <div className="flex justify-center gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {data.demoUrl && (
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
              asChild
            >
              <a href={data.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                See Live Demo
              </a>
            </Button>
          )}
          {data.repoUrl && (
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border/40 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all"
              asChild
            >
              <a href={data.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                View Source
              </a>
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
