import React, { useState } from 'react'
import { useMessages } from '../../hooks/useMessages'
import { Mail, MailOpen, Trash2, Phone, Calendar, Search, Filter } from 'lucide-react'
import { Message } from '../../lib/supabase'

const MessageList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const { messages, loading, markAsRead, deleteMessage } = useMessages()

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'unread' && !message.read) ||
                         (filterStatus === 'read' && message.read)
    return matchesSearch && matchesStatus
  })

  const handleMessageClick = async (message: Message) => {
    setSelectedMessage(message)
    if (!message.read) {
      await markAsRead(message.id)
    }
  }

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      await deleteMessage(id)
      if (selectedMessage?.id === id) {
        setSelectedMessage(null)
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading messages...</p>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6 h-full">
      {/* Messages List */}
      <div className="lg:col-span-1 bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Messages ({messages.filter(m => !m.read).length} unread)
          </h3>
        </div>

        {/* Search and Filter */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredMessages.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No messages found.</p>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => handleMessageClick(message)}
                className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                  selectedMessage?.id === message.id
                    ? 'bg-blue-100 border-blue-300'
                    : message.read
                    ? 'bg-white hover:bg-gray-50'
                    : 'bg-blue-50 hover:bg-blue-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    {message.read ? (
                      <MailOpen className="h-4 w-4 text-gray-400 mr-2" />
                    ) : (
                      <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    )}
                    <span className={`font-medium text-sm ${message.read ? 'text-gray-700' : 'text-gray-900'}`}>
                      {message.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatDate(message.created_at)}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{message.email}</p>
                <p className="text-sm text-gray-500 line-clamp-2">{message.message}</p>
                
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    {message.service}
                  </span>
                  {!message.read && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Message Detail */}
      <div className="lg:col-span-2">
        {selectedMessage ? (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {selectedMessage.name}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    {selectedMessage.email}
                  </span>
                  {selectedMessage.phone && (
                    <span className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      {selectedMessage.phone}
                    </span>
                  )}
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(selectedMessage.created_at)}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => handleDelete(selectedMessage.id)}
                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-300"
                title="Delete message"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Service: {selectedMessage.service}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Message:</h4>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {selectedMessage.message}
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              <a
                href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.service}&body=Hi ${selectedMessage.name},%0D%0A%0D%0AThank you for contacting Jones Tech & Media.%0D%0A%0D%0A`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Reply via Email
              </a>
              
              {selectedMessage.phone && (
                <a
                  href={`tel:${selectedMessage.phone}`}
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Mail className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Message</h3>
            <p className="text-gray-600">Choose a message from the list to view its details.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageList