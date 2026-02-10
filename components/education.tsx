'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, BookOpen } from 'lucide-react'

interface EducationItem {
  type: 'degree' | 'certification'
  title: string
  institution: string
  year: string
  description?: string
}

const education: EducationItem[] = [
  {
    type: 'degree',
    title: 'Bachelor of Science in Computer Science',
    institution: 'State University',
    year: '2016',
    description: 'Focus on software engineering and quality assurance practices'
  },
  {
    type: 'certification',
    title: 'Certified Automation Tester (CAT)',
    institution: 'International Software Testing Qualifications Board',
    year: '2022',
    description: 'Advanced certification in test automation technologies'
  },
  {
    type: 'certification',
    title: 'AWS Certified Solutions Architect',
    institution: 'Amazon Web Services',
    year: '2023',
    description: 'Professional-level cloud architecture and deployment expertise'
  },
  {
    type: 'certification',
    title: 'Kubernetes Application Developer (CKAD)',
    institution: 'Cloud Native Computing Foundation',
    year: '2022',
    description: 'Certified expertise in containerized application development'
  }
]

export function Education() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Education & Certifications</h2>
        <p className="text-muted-foreground">
          Formal education and professional certifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((item, index) => (
          <Card key={index} className="border-border/50">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  {item.type === 'degree' ? (
                    <BookOpen className="h-5 w-5" />
                  ) : (
                    <Award className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              {item.description && (
                <p className="text-sm text-muted-foreground">{item.description}</p>
              )}
              <Badge variant="outline" className="w-fit text-xs">
                {item.year}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
