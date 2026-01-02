"use client"

import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/context/useAuth"
import { list } from "@/lib/api/crud"
import { Users, MessageSquare, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"

interface DashboardStats {
  contacts: {
    total: number
    new: number
    read: number
    responded: number
  }
  applications: {
    total: number
    pending: number
    reviewed: number
    accepted: number
    rejected: number
  }
  summary: {
    totalContacts: number
    totalApplications: number
    pendingItems: number
  }
}

export default function AdminDashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await list('ADMIN_STATS')
        setStats(response)
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="p-6">
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Loading...</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {user?.firstName || user?.first_name || 'Admin'}</p>
      </div>

      <div className="grid gap-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.summary.totalContacts || 0}</div>
              <p className="text-xs text-muted-foreground">
                {stats?.contacts.new || 0} new messages
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DSA Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.summary.totalApplications || 0}</div>
              <p className="text-xs text-muted-foreground">
                {stats?.applications.pending || 0} pending review
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Items</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.summary.pendingItems || 0}</div>
              <p className="text-xs text-muted-foreground">
                Requires attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats?.contacts.total ?
                  Math.round((stats.contacts.responded / stats.contacts.total) * 100) : 0}%
              </div>
              <p className="text-xs text-muted-foreground">
                Contact responses
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">New Messages</p>
                  <p className="text-2xl font-bold text-blue-600">{stats?.contacts.new || 0}</p>
                </div>
                <Badge variant={stats?.contacts.new ? "destructive" : "secondary"}>
                  {stats?.contacts.new || 0} pending
                </Badge>
              </div>
              <Button asChild className="w-full">
                <Link href="/admin/contacts">Manage Contacts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DSA Recruitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Pending Applications</p>
                  <p className="text-2xl font-bold text-green-600">{stats?.applications.pending || 0}</p>
                </div>
                <Badge variant={stats?.applications.pending ? "default" : "secondary"}>
                  {stats?.applications.pending || 0} to review
                </Badge>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/applications">Review Applications</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}