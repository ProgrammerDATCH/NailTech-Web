/* eslint-disable @typescript-eslint/no-unused-vars */
// app/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from '@/hooks/use-toast'
import {
  Code2,
  Cloud,
  Mail,
  Phone,
  MapPin,
  Globe,
  Container,
  Server,
  Settings,
  Layout,
  Laptop,
  Network
} from 'lucide-react'
import { applicationSchema, type ApplicationForm } from "@/lib/validations/apply"
import Image from 'next/image'
import { useScrollToSection } from '@/hooks/useScrollToSection'

const TechStack = () => (
  <div className="flex flex-wrap justify-center items-center gap-12 text-gray-600">
    {[
      { icon: <Code2 size={24} />, name: "Next.js" },
      { icon: <Layout size={24} />, name: "React" },
      { icon: <Server size={24} />, name: "Node.js" },
      { icon: <Settings size={24} />, name: "TypeScript" },
      { icon: <Container size={24} />, name: "Docker" },
      { icon: <Cloud size={24} />, name: "AWS" },
    ].map((tech, i) => (
      <div key={i} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
        {tech.icon}
        <span className="font-semibold">{tech.name}</span>
      </div>
    ))}
  </div>
)

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const { toast } = useToast()

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      github: "",
      skills: "",
      message: ""
    }
  })

  const onSubmit = async (data: ApplicationForm) => {
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully",
          description: "We'll get back to you soon!",
        })
        setDialogOpen(false)
        form.reset()
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      })
    }
  }

  const scrollToSection = useScrollToSection()

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.webp"
                  alt="Nail Tech Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <span className="font-bold text-gray-900">Nail Tech</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: 'Services', id: 'services' },
                // { name: 'Expertise', id: 'expertise' },
                { name: 'Join Us', id: 'careers' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-600 hover:text-pink-500 transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <a
                href="tel:+250781733332"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+250 781 733 332</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+250781733332">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-500/[0.025] -z-10" />
        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Logo with better aspect ratio */}
            <div className="relative w-[200px] h-[100px] mb-8">
              <Image
                src="/logo.webp"
                alt="Nail Tech Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="drop-shadow-lg"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-geist-sans leading-tight">
              We don&apos;t just code,
              <span className="text-pink-500"> we nail it.</span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              We transform complex business challenges into elegant digital solutions.
              Specializing in enterprise-grade software development, cloud architecture,
              and cutting-edge web applications that drive real business growth.
            </p>


            {/* CEO Section */}
            <div className="flex items-center justify-center gap-8 mt-8 bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-gray-100">
              <div className="relative w-32 h-32">
                <Image
                  src="/david.jpg"
                  alt="Mr. David - CEO"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-8"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. David</h3>
                <p className="text-gray-600 mb-2">Founder & CEO</p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://programmerdatch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    programmerdatch.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Network className="w-8 h-8" />,
                title: 'Full Stack Development',
                description: 'End-to-end solutions using Next.js, React, and Node.js with TypeScript for robust, scalable applications.',
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: 'DevOps & Cloud',
                description: 'Seamless deployment and scaling with Docker and AWS, ensuring high availability and performance.',
              },
              {
                icon: <Laptop className="w-8 h-8" />,
                title: 'Technical Consulting',
                description: 'Expert guidance on architecture, tech stack selection, and digital transformation strategies.',
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="careers" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-gray-600 mb-8">
              We&apos;re looking for passionate developers to join our internship program.
              Work on cutting-edge projects and learn from industry experts.
            </p>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg">Apply Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Internship Application</DialogTitle>
                  <DialogDescription>
                    Join our team of innovators shaping the future of technology.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="col-span-2 md:col-span-1">
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="col-span-2 md:col-span-1">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="col-span-2 md:col-span-1">
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input {...field} type="tel" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="github"
                      render={({ field }) => (
                        <FormItem className="col-span-2 md:col-span-1">
                          <FormLabel>GitHub Profile</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="https://github.com/username" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>Technical Skills</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g., React, Node.js, TypeScript" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>Why do you want to join us?</FormLabel>
                          <FormControl>
                            <Textarea {...field} className="h-24" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="col-span-2" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <Mail className="text-blue-600" />
              <a href="mailto:nailtechrw@gmail.com" className="hover:text-blue-600">
                nailtechrw@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-blue-600" />
              <a href="tel:+250781733332" className="hover:text-blue-600">
                +250 781 733 332
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-600" />
              <span>Norrsken, Kigali-Rwanda</span>
            </div>
            <Button size="lg" className="mt-4" asChild>
              <a href="mailto:nailtechrw@gmail.com">
                Contact us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}