"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { post } from "@/lib/api/crud"
import { toast } from "sonner"
import { Upload, User, Mail, Phone, MapPin, Briefcase, FileText } from "lucide-react"

interface ApplicationForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  experience: string
  motivation: string
  resume?: File
}

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ApplicationForm>()

  const onSubmit = async (data: ApplicationForm) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      formData.append('firstName', data.firstName)
      formData.append('lastName', data.lastName)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('location', data.location)
      formData.append('experience', data.experience)
      formData.append('motivation', data.motivation)

      if (resumeFile) {
        formData.append('resume', resumeFile)
      }

      await post('RECRUITMENT', formData)

      toast.success("Application submitted successfully! We'll be in touch soon.")
      reset()
      setResumeFile(null)
    } catch (error) {
      console.error('Failed to submit application:', error)
      toast.error("Failed to submit application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB")
        return
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload a PDF or Word document")
        return
      }

      setResumeFile(file)
      setValue('resume', file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our DSA Team
          </h1>
          <p className="text-lg text-gray-600">
            Become a Direct Selling Agent and be part of our growing network.
            Help customers discover amazing products while building your own business.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              DSA Application Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    {...register("firstName", { required: "First name is required" })}
                    className="mt-1"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    {...register("lastName", { required: "Last name is required" })}
                    className="mt-1"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    {...register("phone", { required: "Phone number is required" })}
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Location and Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location" className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Location *
                  </Label>
                  <Input
                    id="location"
                    placeholder="City, State/Country"
                    {...register("location", { required: "Location is required" })}
                    className="mt-1"
                  />
                  {errors.location && (
                    <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="experience" className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    Sales Experience *
                  </Label>
                  <Select onValueChange={(value) => setValue("experience", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No experience</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experience && (
                    <p className="text-sm text-red-600 mt-1">{errors.experience.message}</p>
                  )}
                </div>
              </div>

              {/* Motivation */}
              <div>
                <Label htmlFor="motivation">Why do you want to become a DSA? *</Label>
                <Textarea
                  id="motivation"
                  placeholder="Tell us about your motivation, goals, and what you hope to achieve..."
                  {...register("motivation", {
                    required: "Please tell us about your motivation",
                    minLength: {
                      value: 50,
                      message: "Please provide at least 50 characters"
                    }
                  })}
                  className="mt-1"
                  rows={4}
                />
                {errors.motivation && (
                  <p className="text-sm text-red-600 mt-1">{errors.motivation.message}</p>
                )}
              </div>

              {/* Resume Upload */}
              <div>
                <Label htmlFor="resume" className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  Resume/CV (Optional)
                </Label>
                <div className="mt-1">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Label
                    htmlFor="resume"
                    className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {resumeFile ? resumeFile.name : "Click to upload resume (PDF, DOC, DOCX)"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Max 5MB</p>
                    </div>
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            By submitting this application, you agree to our terms and conditions.
            We'll review your application and get back to you within 3-5 business days.
          </p>
        </div>
      </div>
    </div>
  )
}