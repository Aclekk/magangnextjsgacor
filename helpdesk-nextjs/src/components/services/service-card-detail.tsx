"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Service, categories } from "@/data/service";
import { cn } from "@/lib/utils";

interface ServiceCardDetailProps {
  service: Service;
}

export function ServiceCardDetail({ service }: ServiceCardDetailProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
  const category = categories.find((cat) => cat.id === service.category);

  return (
    <Link href={service.route}>
      <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-blue-500 cursor-pointer">
        {/* Status Badge (if available) */}
        {service.id === "tanda-tangan-elektronik" && (
          <div className="absolute right-4 top-4 z-10">
            <Badge className="bg-green-100 text-green-700 border-green-300">
              <span className="mr-1 h-2 w-2 rounded-full bg-green-500 inline-block"></span>
              Tersedia
            </Badge>
          </div>
        )}

        <CardHeader className="pb-4">
          {/* Icon with animated background */}
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-3">
            {IconComponent && <IconComponent className="h-8 w-8" />}
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
            {service.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-3 text-sm text-gray-600">
            {service.description}
          </p>
        </CardHeader>

        <CardContent>
          {/* CTA Link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all group-hover:gap-3">
            Selengkapnya
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>

          {/* Bottom colored bar */}
          <div
            className={cn(
              "absolute bottom-0 left-0 h-1 w-full transition-all duration-300 group-hover:h-2",
              category?.color || "bg-blue-500",
            )}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
