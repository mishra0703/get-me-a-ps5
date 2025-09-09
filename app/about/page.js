import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Heart,
  Users,
  Zap,
  Shield,
  Globe,
  Rocket,
  Star,
  Gift,
  CreditCard,
  MessageCircle,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9c27b0]/20 via-transparent to-blue-600/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#9c27b0]/20 border border-[#9c27b0]/30 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-[#9c27b0]" />
            <span className="text-sm text-[#9c27b0] font-medium">
              Empowering Creators Worldwide
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-gradient-to-r from-[#9c27b0] to-blue-600 bg-clip-text">
              Get me a PS5
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The platform that connects passionate creators with generous
            supporters, making dreams achievable one contribution at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={"/login"}>
              <Button
                size="lg"
                className="bg-[#9c27b0] hover:bg-[#9c27b0]/0 border border-[#9c27b0] text-white cursor-pointer transition-all duration-300 ease-in-out"
              >
                Start Creating
              </Button>
            </Link>
            <Link href={"/login"}>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent cursor-pointer transition-all duration-300 ease-in-out"
              >
                Support Creators
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe every creator deserves support, and every supporter
              deserves to make a meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-[#9c27b0] transition-all duration-300 ease-in-out group">
              <CardHeader>
                <div className="w-12 h-12 bg-[#9c27b0]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9c27b0]/30 transition-colors">
                  <Heart className="w-6 h-6 text-[#9c27b0]" />
                </div>
                <CardTitle className="text-white">Empower Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Give creators the financial freedom to focus on what they love
                  most - creating amazing content and experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-blue-600 transition-all duration-300 ease-in-out group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-white">Build Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Foster meaningful connections between creators and their
                  supporters, building lasting communities around shared
                  passions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-green-600 transition-all duration-300 ease-in-out group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <CardTitle className="text-white">Make Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Enable supporters to make a real difference in creators;
                  lives, turning small contributions into big dreams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, secure, and designed for both creators and supporters to
              have the best experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Creators */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-[#9c27b0]">
                For Creators
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#9c27b0] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      Create Your Profile
                    </h4>
                    <p className="text-gray-300">
                      Set up your creator page with your story, goals, and what you&apos;re working towards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#9c27b0] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      Share Your Link
                    </h4>
                    <p className="text-gray-300">
                      Spread the word across social media, your website, or
                      anywhere your audience hangs out.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#9c27b0] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      Receive Support
                    </h4>
                    <p className="text-gray-300">
                      Get contributions from supporters and watch your dreams
                      become reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Supporters */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-blue-600">
                For Supporters
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      Discover Creators
                    </h4>
                    <p className="text-gray-300">
                      Browse amazing creators or visit your favorite creator&apos;s
                      page directly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      Choose Your Support
                    </h4>
                    <p className="text-gray-300">
                      Pick an amount that feels right for you - every
                      contribution makes a difference.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      Make an Impact
                    </h4>
                    <p className="text-gray-300">
                      Send your support with an optional message and be part of
                      their journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with creators and supporters in mind, offering the best
              tools and experience in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-[#9c27b0]/50 transition-all duration-300 ease-in-out group">
              <CardHeader>
                <Shield className="w-8 h-8 text-[#9c27b0] mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Secure & Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Bank-level security with encrypted transactions and fraud
                  protection for peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-blue-600/50 transition-all duration-300 ease-in-out group">
              <CardHeader>
                <Globe className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Support creators from anywhere in the world with multiple
                  currencies and payment methods.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-green-500/50 transition-all duration-300 ease-in-out group">
              <CardHeader>
                <CreditCard className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Low Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Industry-leading low fees mean more money goes directly to the
                  creators you support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-yellow-500/50 transition-all duration-300 ease-in-out group">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Personal Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Send encouraging messages with your support to build
                  meaningful connections.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-purple-500/50 transition-all duration-300 ease-in-out group">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Detailed insights and analytics to help creators understand
                  and grow their support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-pink-500/50 transition-all duration-300 ease-in-out group">
              <CardHeader>
                <Gift className="w-8 h-8 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white">Custom Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Set and track progress towards specific goals, from equipment
                  to dream projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Growing Community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of creators and supporters who are making dreams
              come true every day.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#9c27b0] mb-2">
                5K+
              </div>
              <p className="text-gray-300">Active Creators</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                200k+
              </div>
              <p className="text-gray-300">Supporters</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                ₹25L+
              </div>
              <p className="text-gray-300">Total Raised</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                2+
              </div>
              <p className="text-gray-300">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#9c27b0]/10 via-transparent to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you&apos;re a creator with big dreams or someone who loves
            supporting amazing projects, your journey starts here.
          </p>
          
          <Separator className="my-12 bg-gray-800" />

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-white mb-2">Quick Setup</h4>
              <p className="text-gray-300 text-sm">
                Get your creator page live in under 5 minutes with our simple
                setup process.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">24/7 Support</h4>
              <p className="text-gray-300 text-sm">
                Our dedicated support team is here to help you succeed every
                step of the way.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">No Hidden Fees</h4>
              <p className="text-gray-300 text-sm">
                Transparent pricing with no surprise charges - what you see is
                what you get.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

export async function generateMetadata() {
  return {
    title: "About - Get me a PS5",
    description:
      "Learn about Get me a PS5, the platform that connects passionate creators with generous supporters, making dreams achievable one contribution at a time.",
  };
}
