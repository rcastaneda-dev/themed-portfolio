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
    title: 'Bachelor of Science in Computer Engineering',
    institution: 'Universidad Centroamericana José Simeón Cañas (UCA)',
    year: '2015',
    description: 'Comprehensive computer engineering education with software development focus'
  },
  {
    type: 'certification',
    title: 'Continuous Learning in QA Automation',
    institution: 'Udemy & Professional Courses',
    year: '2020 - Present',
    description: 'Ongoing professional development in test automation frameworks and DevOps practices'
  },
  {
    type: 'certification',
    title: 'Advanced Testing & Automation Workshop',
    institution: 'Industry Training Programs',
    year: '2022',
    description: 'Specialized training in modern automation frameworks and CI/CD best practices'
  },
  {
    type: 'certification',
    title: 'Full-Stack Development & Cloud Architecture',
    institution: 'Professional Development',
    year: '2023 - Present',
    description: 'Expanding skills in full-stack development and cloud-native testing infrastructure'
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
