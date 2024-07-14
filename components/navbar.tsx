"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiMail } from "react-icons/ci";


export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMobile} onMenuOpenChange={setIsMobile}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="" href="/">
            <Image
              removeWrapper
              className="h-14 rounded-none"
              alt=""
              src="/logo.png"
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="sm:flex gap-2">
          <Tooltip content="Whatsapp">
            <Link isExternal aria-label="Whatsapp" href={siteConfig.links.whatsapp}>
              <FaWhatsapp className="text-default-500 w-6 h-6" />
            </Link>
          </Tooltip>
          <Tooltip content="Facebook">
            <Link isExternal aria-label="Facebook" href={siteConfig.links.facebook}>
              <AiOutlineFacebook className="text-default-500 w-6 h-6" />
            </Link>
          </Tooltip>
          <Tooltip content="Mail">
            <Link isExternal aria-label="Mail" href={siteConfig.links.mail}>
              <CiMail className="text-default-500 w-6 h-6" />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem className="md:flex">
          <Button
            showAnchorIcon
            as={Link}
            className="text-sm font-normal text-white bg-red-500"
            href="/contact"
            variant="solid"
          >
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 " justify="end">
        <NavbarItem className="flex gap-2 mr-2">
          <Tooltip content="Whatsapp">
            <Link isExternal aria-label="Whatsapp" href={siteConfig.links.whatsapp}>
              <FaWhatsapp className="text-default-500 w-6 h-6" />
            </Link>
          </Tooltip>
          <Tooltip content="Facebook">
            <Link isExternal aria-label="Facebook" href={siteConfig.links.facebook}>
              <AiOutlineFacebook className="text-default-500 w-6 h-6" />
            </Link>
          </Tooltip>
          <Tooltip content="Mail">
            <Link isExternal aria-label="Mail" href={siteConfig.links.mail}>
              <CiMail className="text-default-500 w-6 h-6" />
            </Link>
          </Tooltip>
        </NavbarItem>

        <NavbarMenuToggle onClick={() => setIsMobile(isMobile)} />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4 divide-y divide-default-500">
          {siteConfig.navMenuItems.map((item, index) => (
            <Link
              key={`${item}-${index}`}
              onClick={() => setIsMobile(!isMobile)}
              href={item.href}
              color="foreground"

            >
              <NavbarMenuItem className="pt-4" >
                <span className="text-2xl">{item.label}</span>
              </NavbarMenuItem>
            </Link>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
