import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useProjects } from '../../hooks/useProjects'
import { useMessages } from '../../hooks/useMessages'
import ProjectList from './ProjectList'
import ProjectForm from './ProjectForm'
import MessageList from './MessageList'
import { LogOut, Plus, BarChart3, FolderOpen, Settings, Mail } from 'lucide-react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects')
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const { user, signOut } = useAuth()
  const { projects, loading } = useProjects()
  const { messages } = useMessages()

  const tabs = [
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const handleEditProject = (project: any) => {
    setEditingProject(project)
    setShowProjectForm(true)
  }

  const handleCloseForm = () => {
    setShowProjectForm(false)
    setEditingProject(null)
  }

  const stats = [
    { label: 'Total Projects', value: projects.length, color: 'bg-blue-500' },
    { label: 'Featured Projects', value: projects.filter(p => p.featured).length, color: 'bg-green-500' },
    { label: 'Unread Messages', value: messages.filter(m => !m.read).length, color: 'bg-orange-500' },
    { label: 'Total Messages', value: messages.length, color: 'bg-purple-500' }
  ]

  const projectStats = [
    { label: 'Categories', value: new Set(projects.map(p => p.category)).size, color: 'bg-purple-500' },
    { label: 'This Month', value: projects.filter(p => {
      const projectDate = new Date(p.created_at)
      const now = new Date()
      return projectDate.getMonth() === now.getMonth() && projectDate.getFullYear() === now.getFullYear()
    }).length, color: 'bg-orange-500' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.email}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowProjectForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </button>
              
              <button
                onClick={signOut}
                className="text-gray-600 hover:text-gray-900 p-2 rounded-lg transition-colors duration-300"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">{stat.value}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 flex items-center ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.label}
                    {tab.id === 'messages' && messages.filter(m => !m.read).length > 0 && (
                      <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                        {messages.filter(m => !m.read).length}
                      </span>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'projects' && (
              <ProjectList 
                projects={projects} 
                loading={loading} 
                onEdit={handleEditProject}
              />
            )}
            
            {activeTab === 'messages' && <MessageList />}
            
            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>
                <p className="text-gray-600">Project analytics and insights will be available here.</p>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <Settings className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Settings</h3>
                <p className="text-gray-600">Admin settings and configuration options.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Form Modal */}
      {showProjectForm && (
        <ProjectForm 
          project={editingProject} 
          onClose={handleCloseForm}
        />
      )}
    </div>
  )
}

export default AdminDashboard