import { GuestForm } from "@/components/GuestForm";
import { HostForm } from "@/components/HostForm";

export function WaitlistForm() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Join Our Waitlist</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Be the first to experience authentic Tamil Nadu village life or share your heritage with travelers
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <GuestForm />
        <HostForm />
      </div>
    </div>
  );
}