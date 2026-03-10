'use client'

import React, { useState } from "react"

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import {
  LayoutDashboard,
  Folder,
  Briefcase,
  BookOpen,
  Code2,
  GitBranch,
  Mail,
  Github,
  Linkedin,
  Mail as MailIcon,
  Menu,
} from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}

interface SidebarNavProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="h-4 w-4" />, href: '#overview' },
  { id: 'projects', label: 'Projects', icon: <Folder className="h-4 w-4" />, href: '#projects' },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="h-4 w-4" />, href: '#experience' },
  { id: 'education', label: 'Education', icon: <BookOpen className="h-4 w-4" />, href: '#education' },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Code2 className="h-4 w-4" />, href: '#tech-stack' },
  { id: 'learning', label: 'Learning', icon: <GitBranch className="h-4 w-4" />, href: '#learning' },
  { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" />, href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', icon: <Github className="h-4 w-4" />, href: 'https://github.com/rcastaneda-dev' },
  { label: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/rcastaneda-dev/' },
  { label: 'Email', icon: <MailIcon className="h-4 w-4" />, href: 'mailto:hi@rcastaneda.dev' },
]

function SidebarContent({ activeSection, onSectionChange }: SidebarNavProps) {
  return (
    <>
      {/* Logo / Brand */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-1">
          <div className="relative">
            <img
              src="/gravatar.png"
              alt="Ricardo Castaneda"
              className="w-9 h-9 rounded-lg border border-primary/25 object-cover"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background animate-pulse-glow" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-foreground">SDET</h1>
            <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Quality Eng.</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1">
        <div className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase mb-3 px-3">Navigation</div>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative group',
              activeSection === item.id
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            )}
          >
            {activeSection === item.id && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary rounded-r" />
            )}
            <span className={cn(
              'transition-colors',
              activeSection === item.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
            )}>
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Social Links */}
      <div className="space-y-3 mb-5 pt-5 border-t border-border/30">
        <div className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Connect</div>
        <div className="flex gap-2">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary/40 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-200"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <Button
        onClick={() => onSectionChange('contact')}
        className="w-full gap-2 bg-primary/15 text-primary border border-primary/25 hover:bg-primary/25 hover:border-primary/40 transition-all duration-200"
        variant="outline"
      >
        <MailIcon className="h-4 w-4" />
        Get in Touch
      </Button>
    </>
  )
}

export function SidebarNav({ activeSection, onSectionChange }: SidebarNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleSectionChange = (section: string) => {
    onSectionChange(section)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop Sidebar — hidden below lg */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-secondary/30 border-r border-border/40 flex-col p-6 z-40 backdrop-blur-xl">
        <div className="animate-slide-in-left flex flex-col h-full">
          <SidebarContent activeSection={activeSection} onSectionChange={onSectionChange} />
        </div>
      </aside>

      {/* Mobile Top Bar — visible below lg */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-secondary/30 border-b border-border/40 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/gravatar.png"
                alt="Ricardo Castaneda"
                className="w-8 h-8 rounded-lg border border-primary/25 object-cover"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary border-2 border-background animate-pulse-glow" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-foreground">SDET</h1>
              <p className="text-[9px] text-muted-foreground font-mono tracking-widest uppercase">Quality Eng.</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(true)}
            className="text-muted-foreground hover:text-foreground h-10 w-10"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-64 bg-secondary/30 backdrop-blur-xl border-r border-border/40 p-6 flex flex-col">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SidebarContent activeSection={activeSection} onSectionChange={handleSectionChange} />
        </SheetContent>
      </Sheet>
    </>
  )
}
