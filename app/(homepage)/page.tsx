import JobCategory from "@/components/job-category";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="space-y-4 md:w-6/12">
            <h1 className="h1 font-light">
              Temukan pekerjaan melalui komunitas
            </h1>
          </div>

          {/* Col */}
          <div className="md:w-5/12">
            <Image
              src="/hero.svg"
              alt="Image"
              width={720}
              height={720}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
      {/* ./ Hero */}

      {/* Find Your jobs */}
      <section className="bg-slate-100 px-4 py-16">
        <div className="container flex flex-col gap-6 md:flex-row md:justify-between">
          {/* Col */}
          <div className="space-y-4 md:w-5/12">
            <h2 className="h2 font-light">
              Temukan pekerjaan atau posisi magang yang tepat untuk Anda
            </h2>
          </div>

          {/* Col */}
          <div className="space-y-4 md:w-6/12">
            <span className="text-sm font-medium uppercase opacity-60">
              Saran Pencarian
            </span>
            <JobCategory />
          </div>
        </div>
      </section>

      {/* Start Postings */}
      <section className="bg-[#F1ECE5] px-4 py-16">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="h2 font-light md:w-3/5">
            Posting pekerjaan Anda agar dilihat jutaan orang
          </h2>

          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
                className: "w-max rounded-full px-6",
              }),
            )}
          >
            Buat posting pekerjaan
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-12">
        <div className="container flex flex-col gap-16 md:flex-row md:justify-between">
          {/* Col */}
          <div className="space-y-4 md:w-5/12">
            <Image
              src="/img-3.svg"
              alt="Image"
              width={312}
              height={312}
              className="h-36 w-auto md:h-64"
            />

            <h2 className="h2 font-light">
              Terhubung dengan orang yang dapat membantu
            </h2>

            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "w-max rounded-full px-6",
                }),
              )}
            >
              Temukan orang yang Anda kenal
            </Link>
          </div>

          {/* Col */}
          <div className="space-y-4 md:w-6/12">
            <Image
              src="/img-4.svg"
              alt="Image"
              width={312}
              height={312}
              className="h-36 w-auto md:h-64"
            />

            <h2 className="h2 font-light">
              Pelajari keahlian untuk mencapai kesuksesan
            </h2>

            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "w-max rounded-full px-6",
                }),
              )}
            >
              Pilih topik untuk dipelajari
            </Link>
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="overflow-hidden bg-gradient-to-b from-slate-100 from-60% to-transparent to-60% px-4 py-16 md:bg-gradient-to-r">
        <div className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-0">
          {/* Col */}
          <div className="space-y-4 md:w-6/12">
            <h2 className="h2 font-light">
              Siapa yang bisa menggunakan LinkedIn?
            </h2>
            <p className="text-lg font-light text-muted-foreground md:text-2xl">
              Siapa saja yang ingin mengembangkan kariernya.
            </p>

            <div className="flex flex-col gap-2 pt-2 md:w-9/12">
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "sm",
                    className: "justify-between gap-2",
                  }),
                )}
              >
                Cari rekan kerja atau teman sekolah
                <ChevronRight className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "sm",
                    className: "justify-between gap-2",
                  }),
                )}
              >
                Cari pekerjaan baru
                <ChevronRight className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "sm",
                    className: "justify-between gap-2",
                  }),
                )}
              >
                Cari kursus atau pelatihan
                <ChevronRight className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Col */}
          <div className="flex items-center justify-center md:w-6/12">
            <Image
              src="/292yd0en6qdvkbezeuj71yu4y.png"
              alt="Image"
              width={840}
              height={840}
              className="-mr-[50%] h-full w-auto rounded-full md:-mr-[75%]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[75vh] bg-[url(/bg-1.png)] bg-cover bg-top bg-no-repeat px-4 py-12 md:h-[90vh]">
        <div className="container flex flex-col gap-4">
          <h2 className="h2 font-light">
            Bergabung bersama kolega, teman kuliah, dan teman Anda di LinkedIn.
          </h2>

          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
                className: "w-max rounded-full px-6",
              }),
            )}
          >
            Mulai
          </Link>
        </div>
      </section>
    </>
  );
}
