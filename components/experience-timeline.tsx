'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  highlights: string[]
}

const experiences: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Senior SDET',
    company: 'Tech Innovators Inc.',
    description: 'Leading quality engineering initiatives for high-scale microservices architecture',
    highlights: [
      'Architected end-to-end testing framework for 50+ services',
      'Reduced test execution time by 60% through parallelization',
      'Implemented AI-powered test analytics and flake detection'
    ]
  },
  {
    year: '2021 - 2023',
    title: 'SDET',
    company: 'CloudScale Systems',
    description: 'Developed comprehensive test automation and CI/CD infrastructure',
    highlights: [
      'Built Playwright automation framework with 1000+ test cases',
      'Established DevOps practices reducing deployment friction by 80%',
      'Mentored team of 5 junior SDETs'
    ]
  },
  {
    year: '2019 - 2021',
    title: 'QA Automation Engineer',
    company: 'Digital Solutions LLC',
    description: 'Implemented test automation from scratch for agile teams',
    highlights: [
      'Created Selenium WebDriver framework for web applications',
      'Integrated tests into CI/CD pipeline with GitHub Actions',
      'Achieved 95% code coverage across critical features'
    ]
  },
  {
    year: '2017 - 2019',
    title: 'Junior QA Engineer',
    company: 'StartUp Ventures',
    description: 'Started career in quality assurance with manual and automated testing',
    highlights: [
      'Transitioned from manual testing to automation',
      'Learned programming fundamentals in JavaScript and Python',
      'Contributed to mobile app testing efforts'
    ]
  }
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Career Journey</h2>
        <p className="text-muted-foreground">
          Progression through quality engineering from Junior QA to Senior SDET
        </p>
      </div>

      <div className="relative space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6">
            {/* Timeline connector */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              {index !== experiences.length - 1 && (
                <div className="w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </div>

            {/* Content */}
            <Card className="flex-1 border-border/50 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs whitespace-nowrap">
                    {exp.year}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <span className="text-primary font-bold flex-shrink-0">→</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
