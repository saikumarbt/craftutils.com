"use client"

import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function AuthButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if (error) {
      console.error('Error:', error.message)
    }
    setLoading(false)
  }

  return (
    <Button 
      onClick={handleLogin} 
      disabled={loading}
      className="w-full sm:w-auto"
    >
      {loading ? "Loading..." : "Sign in with Google"}
    </Button>
  )
}
