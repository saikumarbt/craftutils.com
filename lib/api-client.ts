const API_BASE_URL = '/api'

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  details?: string
}

export const apiClient = {
  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'API request failed')
      }

      return result
    } catch (error) {
      return {
        success: false,
        error: (error as Error).message,
      }
    }
  },

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'API request failed')
      }

      return result
    } catch (error) {
      return {
        success: false,
        error: (error as Error).message,
      }
    }
  }
}
