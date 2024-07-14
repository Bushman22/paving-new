import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Footer from '@/components/Footer'
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Thomson Paving" }],
  keywords: [
    "Paving Company", 
    "Paving Services", 
    "Asphalt Paving", 
    "Concrete Paving", 
    "Driveway Paving", 
    "Parking Lot Paving", 
    "Residential Paving", 
    "Commercial Paving", 
    "Paving Contractors", 
    "Local Paving Company", 
    "Asphalt Repair", 
    "Sealcoating", 
    "Pothole Repair", 
    "Road Paving", 
    "Sidewalk Paving", 
    "Patio Paving", 
    "Pavement Maintenance", 
    "Pavement Resurfacing", 
    "Pavement Striping", 
    "Gravel Driveways", 
    "City Paving Company", 
    "City Asphalt Paving", 
    "City Concrete Paving", 
    "City Driveway Paving", 
    "City Parking Lot Paving", 
    "Professional Paving Services", 
    "Reliable Paving Contractors", 
    "Quality Paving Solutions", 
    "Affordable Paving Services", 
    "Experienced Paving Company", 
    "Best Paving Company", 
    "Trusted Paving Company", 
    "Custom Paving Solutions", 
    "Eco-Friendly Paving", 
    "Durable Paving Materials", 
    "Paving Cost Estimate", 
    "Paving Company Reviews", 
    "Licensed Paving Contractors", 
    "Insured Paving Services", 
    "Free Paving Consultation", 
    "Paving Installation", 
    "Paving Design Services"
  ],
  openGraph: {
    url: "https://www.thomsonpaving.co.za",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "https://www.thomsonpaving.co.za/images/About/Cladding/six.jpeg",
        alt: "Open Graph Image",
      },
    ],
    siteName: siteConfig.name,
    locale: "en_ZA",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-10 px-6 flex-grow">
              {children}
              <Footer />
            </main>

          </div>
        </Providers>
      </body>
    </html>
  );
}
