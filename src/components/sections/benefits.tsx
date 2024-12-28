import { Shield, Zap, Star } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Built for speed with modern technologies. Process your data instantly.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your data never leaves your browser. We prioritize your privacy.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Star className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Forever</h3>
            <p className="text-muted-foreground">
              All core features are free to use. No hidden costs or subscriptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
