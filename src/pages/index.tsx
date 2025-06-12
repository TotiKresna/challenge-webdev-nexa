import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Coffee,
  Store,
  BadgeDollarSign,
  Handshake,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";

export default function Home() {
  const { data: coffees = [], isLoading } = api.coffee.all.useQuery();

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              HOME
            </a>
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              SHOP
            </a>
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              BLOG
            </a>
            <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              PAGES
            </a>
          </nav>

          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Image src="/logo.svg" alt="Beanie Coffee" width={120} height={120} className="h-10 w-auto" />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="search"
                placeholder="Search here..."
                className="w-40 h-8 pl-3 pr-8 rounded-full border-neutral-200 focus:border-neutral-300 focus:ring-0"
              />
              <Search className="absolute right-2.5 top-1.5 h-4 w-4 text-neutral-400" />
            </div>
            <button className="p-1.5">
              <Heart className="h-5 w-5 text-neutral-700" />
            </button>
            <button className="p-1.5 relative">
              <ShoppingBag className="h-5 w-5 text-neutral-700" />
              <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] flex items-center justify-center bg-neutral-900 text-white rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-white border-b">
          <div className="container mx-auto grid md:grid-cols-2 gap-2  md:py-0 px-0 mt-14 mb-24 bg-gray-200">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1597088268824-3b850315a41c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Specialty Coffee Bag"
                width={600}
                height={400}
                className="rounded-l-lg object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="font-[Playfair-Display] text-3xl md:text-4xl lg:text-5xl font-light mb-6">
                <span className="text-neutral-800 ">SPECIAL </span>
                <span className="text-amber-700">COFFEE</span>
              </h1>
              <p className="text-neutral-600 mb-8 max-w-md leading-relaxed">
                Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean
                enim. Laoreet odio adipiscing auctor scelerisque phasellus nisl faucibus.
              </p>
              <div>
                <Button className="rounded-full bg-transparent text-neutral-800 border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 px-8 py-2">
                  ORDER NOW
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonial below hero */}
          <div className="container mx-auto px-4 pb-12 md:pb-24">
            <div className="text-center max-w-2xl mx-auto">
              <p className="italic text-neutral-500 text-lg leading-relaxed">
                Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean
                enim. Laoreet odio adipiscing auctor scelerisque phasellus nisl faucibus.
              </p>
            </div>
          </div>
        </section>

        {/* Shop Best Coffee Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-800">SHOP BEST COFFEE</h2>
            <div className="flex items-center space-x-2">
              <a href="#" className="text-sm text-neutral-700 hover:underline">
                VIEW ALL
              </a>
              <div className="flex space-x-2">
                <button className="h-8 w-8 flex items-center justify-center rounded-full border border-neutral-300 bg-white">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 flex items-center justify-center rounded-full border border-neutral-300 bg-neutral-900 text-white">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coffees.map((coffee) => (
                <div key={coffee.id} className="group">
                  <div className="mb-3 bg-white p-3 rounded-lg">
                    <Image
                      src={coffee.imageUrl}
                      alt={coffee.name}
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover aspect-square rounded-lg"
                    />
                  </div>
                  <div className="px-4">
                  <h3 className="text-lg font-medium text-neutral-800 uppercase">{coffee.name}</h3>
                  <p className="text-amber-700">
                    {coffee.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Two Column Layout */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* New Arrivals */}
            <div>
              <h2 className="text-xl font-medium mb-6">NEW ARRIVALS</h2>
              <div className="space-y-4">
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  coffees.slice(0, 5).map((coffee) => (
                    <div key={coffee.id} className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-white rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={coffee.imageUrl}
                          alt={coffee.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{coffee.name}</h3>
                        <p className="text-amber-700 text-sm">
                          {coffee.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-6">
                <a href="#" className="text-sm text-neutral-700 hover:underline">
                  VIEW ALL
                </a>
              </div>
            </div>

            {/* Best Selling */}
            <div>
              <h2 className="text-xl font-medium mb-6">BEST SELLING</h2>
              <div className="space-y-4">
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  coffees.slice(-5).map((coffee) => (
                    <div key={coffee.id} className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-white rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={coffee.imageUrl}
                          alt={coffee.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{coffee.name}</h3>
                        <p className="text-amber-700 text-sm">
                          {coffee.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-6">
                <a href="#" className="text-sm text-neutral-700 hover:underline">
                  VIEW ALL
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light mb-6">SUBSCRIBE US</h2>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-l-full border-r-0 focus:ring-0"
                />
                <Button className="rounded-r-full bg-neutral-200 border hover:bg-neutral-300">SUBSCRIBE</Button>
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="h-8 w-8 rounded-full border border-neutral-300 flex items-center justify-center">
                  <Facebook className="h-4 w-4 text-neutral-600" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full border border-neutral-300 flex items-center justify-center">
                  <Twitter className="h-4 w-4 text-neutral-600" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full border border-neutral-300 flex items-center justify-center">
                  <Instagram className="h-4 w-4 text-neutral-600" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full border border-neutral-300 flex items-center justify-center">
                  <Youtube className="h-4 w-4 text-neutral-600" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto grid items-center grid-cols-2 md:grid-cols-4 gap-4 px-4 ">
            <div className="text-center p-4">
              <Coffee className="mx-auto h-15 w-15 text-neutral-600"/>
              <h3 className="text-sm font-medium mb-2">QUICK DELIVERY</h3>
              <p className="text-xs text-neutral-600">Within 24-48 hours</p>
            </div>
            <div className="text-center p-4">
              <Store className="mx-auto h-15 w-15 text-neutral-600"/>
              <h3 className="text-sm font-medium mb-2">PICKUP IN STORE</h3>
              <p className="text-xs text-neutral-600">Ready in 2 hours</p>
            </div>
            <div className="text-center p-4">
              <BadgeDollarSign className="mx-auto h-15 w-15 text-neutral-600"/>
              <h3 className="text-sm font-medium mb-2">NO SHIPPING CHARGE</h3>
              <p className="text-xs text-neutral-600">For orders over $50</p>
            </div>
            <div className="text-center p-4">
              <Handshake className="mx-auto h-15 w-15 text-neutral-600"/>
              <h3 className="text-sm font-medium mb-2">FRESHLY GROUND</h3>
              <p className="text-xs text-neutral-600">Per your preference</p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light">READ OUR BLOGS</h2>
              <a href="#" className="text-sm text-neutral-700 hover:underline">
                READ ALL POSTS
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Blog Post 1 */}
              <div>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1644975243576-27cf4e66b974?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">WHAT IS THE BEST COFFEE?</h3>
                <p className="text-sm text-neutral-600 mb-2">
                  Discover the world&apos;s finest coffee beans and brewing methods.
                </p>
                <a href="#" className="text-xs text-amber-700 hover:underline">
                  READ MORE
                </a>
              </div>

              {/* Blog Post 2 */}
              <div>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1601317848953-057aa886867b?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">HOW COFFEE WORKS FOR YOUR BODY</h3>
                <p className="text-sm text-neutral-600 mb-2">Learn about the health benefits of your daily cup.</p>
                <a href="#" className="text-xs text-amber-700 hover:underline">
                  READ MORE
                </a>
              </div>

              {/* Blog Post 3 */}
              <div>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1722945699417-cbaeefe5f703?q=80&w=1569&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Blog Post"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">CUP OF LOVE FOR YOUR MORNINGS</h3>
                <p className="text-sm text-neutral-600 mb-2">Start your day right with these morning coffee rituals.</p>
                <a href="#" className="text-xs text-amber-700 hover:underline">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light text-center mb-8">FOLLOW OUR INSTAGRAM @BEANIE</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                "https://images.unsplash.com/photo-1587491439149-bd2ff295d450?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1708264020148-151855ca6de6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1705843065610-f344526cb001?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1678712505461-2128db037693?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1619970291284-56d9b4de6472?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1661951931903-6e081f801afe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ].map((url, idx) => (
                <div key={idx} className="aspect-square overflow-hidden">
                  <Image
                    src={url}
                    alt={`Instagram Post ${idx +1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">SHOP</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Sale Items
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">HELP</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Store Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Payment Methods
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">ABOUT</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-neutral-600 hover:text-neutral-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">CONTACT</h3>
              <ul className="space-y-2">
                <li className="text-xs text-neutral-600">123 Coffee Street</li>
                <li className="text-xs text-neutral-600">Bean City, BC 10001</li>
                <li className="text-xs text-neutral-600">info@beanie.com</li>
                <li className="text-xs text-neutral-600">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t text-center">
            <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Beanie Coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}