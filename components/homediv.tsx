import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Homediv = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-muted h-screen py-12 md:py-24 lg:py-32">
        <div className="container mx-auto mt-40 px-4 md:px-6 text-center space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Event Management
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Elevate Your Events
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our event management platform helps you create unforgettable
            experiences for your guests.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Trending Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <img
                  src="https://placehold.co/400"
                  alt="Event Image"
                  className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  width="300"
                  height="200"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Annual Gala Dinner
                  </h3>
                  <p className="text-muted-foreground">
                    Join us for our annual gala dinner, featuring a delicious
                    menu and live entertainment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="https://placehold.co/400"
                  alt="Event Image"
                  className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  width="300"
                  height="200"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Tech Conference
                  </h3>
                  <p className="text-muted-foreground">
                    Explore the latest trends and innovations in the tech
                    industry at our annual conference.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Event</h2>
            <Card className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="https://placehold.co/400"
                alt="Event Image"
                className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover w-full aspect-[3/2]"
                width="450"
                height="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Music Festival</h3>
                <p className="text-muted-foreground">
                  Experience the best of live music at our annual music
                  festival, featuring a lineup of talented artists.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <h2 className="text-2xl font-bold">Our Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <img
              src="https://placehold.co/400"
              width="140"
              height="70"
              alt="Partner Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <img
              src="https://placehold.co/400"
              width="140"
              height="70"
              alt="Partner Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <img
              src="https://placehold.co/400"
              width="140"
              height="70"
              alt="Partner Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <img
              src="https://placehold.co/400"
              width="140"
              height="70"
              alt="Partner Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <img
              src="https://placehold.co/400"
              width="140"
              height="70"
              alt="Partner Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <img
              src="https://placehold.co/400"
              width="140"
              height="70"
              alt="Partner Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homediv;
