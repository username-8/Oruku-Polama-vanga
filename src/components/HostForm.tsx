import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Home } from "lucide-react";
import { SECURITY_CONFIG, sanitizeInput, rateLimiter, secureApiCall } from "@/config/security";

const hostFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(SECURITY_CONFIG.INPUT_LIMITS.MAX_NAME_LENGTH, "Name is too long")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),
  email: z.string()
    .email("Please enter a valid email")
    .max(SECURITY_CONFIG.INPUT_LIMITS.MAX_EMAIL_LENGTH, "Email is too long"),
  phone: z.string()
    .min(10, "Please enter a valid phone number")
    .max(SECURITY_CONFIG.INPUT_LIMITS.MAX_PHONE_LENGTH, "Phone number is too long")
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, "Please enter a valid phone number"),
  location: z.string()
    .min(2, "Please enter your village/location")
    .max(SECURITY_CONFIG.INPUT_LIMITS.MAX_LOCATION_LENGTH, "Location is too long"),
  message: z.string()
    .max(SECURITY_CONFIG.INPUT_LIMITS.MAX_MESSAGE_LENGTH, "Message is too long")
    .optional(),
});

type HostFormData = z.infer<typeof hostFormSchema>;

export function HostForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<HostFormData>({
    resolver: zodResolver(hostFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },
  });

  const onSubmit = async (data: HostFormData) => {
    setIsSubmitting(true);
    
    try {
      // Rate limiting check
      const userIdentifier = `${data.email}-host`;
      if (!rateLimiter.isAllowed(userIdentifier)) {
        toast({
          title: "Too Many Requests",
          description: "Please wait a moment before submitting again.",
          variant: "destructive",
        });
        return;
      }

      // Input sanitization
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        phone: sanitizeInput(data.phone),
        location: sanitizeInput(data.location),
        message: data.message ? sanitizeInput(data.message) : "",
      };

      const formData = new FormData();
      formData.append("userType", "host");
      formData.append("name", sanitizedData.name);
      formData.append("email", sanitizedData.email);
      formData.append("phone", sanitizedData.phone);
      formData.append("location", sanitizedData.location);
      formData.append("message", sanitizedData.message);
      formData.append("timestamp", new Date().toISOString());

      // Secure API call with timeout
      await secureApiCall(SECURITY_CONFIG.GOOGLE_SCRIPT_URL, formData);

      toast({
        title: "Welcome to Oruku Polama! 🏡",
        description: "You've been added to our host waitlist. We'll contact you soon to discuss opportunities!",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      
      let errorMessage = "There was a problem submitting your information. Please try again.";
      if (error instanceof Error) {
        if (error.message.includes('timeout')) {
          errorMessage = "Request timed out. Please check your connection and try again.";
        } else if (error.message.includes('network')) {
          errorMessage = "Network error. Please check your internet connection.";
        }
      }
      
      toast({
        title: "Submission Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full shadow-lg border-accent/20">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Home className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl font-bold text-primary">For Hosts</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">
          Share your village heritage and earn additional income
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 XXXXX XXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Village/Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Your village, district" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us about your property (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your home, farm activities, or what unique experiences you can offer guests..."
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining Waitlist...
                </>
              ) : (
                "Join as Host"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}