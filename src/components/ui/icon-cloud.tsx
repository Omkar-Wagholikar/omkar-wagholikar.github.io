"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import {
    Cloud,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud";
import iconData from "@/data/icon-cloud.json";

export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
        // dragControl: false,
    },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: any) => e.preventDefault(),
        },
    });
};

export type DynamicCloudProps = {
    iconSlugs: readonly string[];
};

// Icon data is bundled (generated from simple-icons 14.0.0) instead of fetched at
// runtime, so the cloud renders immediately and in color even when the CDN is slow
// or blocked.
const icons = iconData as Record<string, Omit<SimpleIcon, "slug">>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const { theme } = useTheme();

    const renderedIcons = useMemo(
        () =>
            iconSlugs
                .filter((slug) => slug in icons)
                .map((slug) =>
                    renderCustomIcon({ slug, ...icons[slug] }, theme || "light")
                ),
        [iconSlugs, theme]
    );

    return (
        // @ts-ignore
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    );
}
