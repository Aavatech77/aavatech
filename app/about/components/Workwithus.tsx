import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
export default function Workwithus() {
    const features = [
        {
            badge: "Lorem ipsum",
            title: "Lorem Ipsum",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            badge: "Lorem ipsum",
            title: "Lorem Ipsum",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            badge: "Lorem ipsum",
            title: "Lorem Ipsum",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
    ]

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

                                <Badge className="text-[#4874AE]" variant="outline">{feature.badge}</Badge>


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
    )
}