import { useState, useEffect } from 'react'
import { supabase, Message } from '../lib/supabase'

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMessages(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addMessage = async (message: Omit<Message, 'id' | 'created_at' | 'read'>) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .insert([{ ...message, read: false }])
        .select()
        .single()

      if (error) throw error
      setMessages(prev => [data, ...prev])
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      setError(error)
      return { data: null, error }
    }
  }

  const markAsRead = async (id: number) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .update({ read: true })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      setMessages(prev => prev.map(m => m.id === id ? data : m))
      return { data, error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      setError(error)
      return { data: null, error }
    }
  }

  const deleteMessage = async (id: number) => {
    try {
      const { error } = await supabase
        .from('messages')
        .delete()
        .eq('id', id)

      if (error) throw error
      setMessages(prev => prev.filter(m => m.id !== id))
      return { error: null }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred'
      setError(error)
      return { error }
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return {
    messages,
    loading,
    error,
    addMessage,
    markAsRead,
    deleteMessage,
    refetch: fetchMessages
  }
}