import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function Workwithus() {
  const features = [
    {
      badge: "Innovative Solutions",
      title: "Innovative Solutions",
      description:
        "We design and develop customized technological solutions tailored to your unique challenges. Whether it's software, hardware, or integrated systems, AAVA Tech ensures seamless performance and maximum impact.",
    },
    {
      badge: "Proven Expertise",
      title: "Proven Expertise",
      description:
        "Our team consists of top-tier professionals with extensive experience in delivering innovative and reliable solutions across multiple industries.",
    },
    {
      badge: "Tailored Solutions",
      title: "Tailored Solutions",
      description:
        "We understand that every business is unique. Our solutions are customized to meet your specific needs and objectives.",
    },
    {
      badge: "Continuous Support",
      title: "Continuous Support",
      description:
        "Our relationship doesn’t end after implementation. We provide ongoing support and optimization to ensure your technology evolves with your needs.",
    },
    {
      badge: "Enduring Partnerships",
      title: "Enduring Partnerships",
      description:
        "We forge lasting relationships with industry leaders and innovative businesses, offering seamless support from consultation to execution. Together, we drive results that redefine success.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="font-bold tracking-tighter text-3xl">
          Why work <span className="text-[#4874AE]">with us</span>
        </h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-card shadow-lg">
              <CardHeader>
                <Badge className="text-[#4874AE]" variant="outline">
                  {feature.badge}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
