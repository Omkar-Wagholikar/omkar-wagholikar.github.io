import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

const SYSTEM_FONT_STACK =
    'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
        default: DATA.name,
        template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    openGraph: {
        title: `${DATA.name}`,
        description: DATA.description,
        url: DATA.url,
        siteName: `${DATA.name}`,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: `${DATA.name}`,
        card: "summary_large_image",
    },
    verification: {
        google: "",
        yandex: "",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6"
                )}
                style={{ ["--font-sans" as string]: SYSTEM_FONT_STACK }}
            >
                <ThemeProvider attribute="class" defaultTheme="light">
                    <TooltipProvider delayDuration={0}>
                        {children}
                        <Navbar />
                    </TooltipProvider>
                    <DotPattern
                        className={cn(
                            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
                        )}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
