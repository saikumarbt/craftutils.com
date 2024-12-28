export function StatsSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">1M+</h3>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">10M+</h3>
            <p className="text-muted-foreground">Files Processed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground">Online Tools</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
            <p className="text-muted-foreground">Free Forever</p>
          </div>
        </div>
      </div>
    </section>
  )
}
