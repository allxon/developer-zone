import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Octo Developer Zone",
  tagline: "Allxon are cool",
  url: "https://developer.allxon.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "allxon", // Usually your GitHub org/user name.
  projectName: "developer-zone", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: "/",
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          lastVersion: "current",
          versions: {
            current: {
              label: "v3.x.x",
            },
          },
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: "./sidebarsOctoSdk.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/allxon/developer-zone/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/allxon/developer-zone",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "allxonApi",
        path: "allxonApi",
        routeBasePath: "allxon-api",
        sidebarPath: "./sidebarsAllxonApi.ts",
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Allxon",
        src: "img/Allxon-Developer-light.png",
        srcDark: "img/Allxon-Developer-dark.png",
        href: "https://allxon.github.io/developer-zone",
      },
      items: [
        {
          type: "doc",
          docId: "Getting Started/Overview",
          position: "left",
          label: "Octo SDK Docs",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "api",
          label: "Octo SDK API",
        },
        {
          docsPluginId: "allxonApi",
          type: "docSidebar",
          position: "left",
          sidebarId: "allxonApiSidebar",
          label: "Allxon API Docs",
        },
        {
          label: "Allxon API SPEC",
          href: "https://gitlab.com/allxon-developer/allxon-api/-/blob/main/openapi.json",
          position: "left",
        },
        {
          href: "https://github.com/allxon/developer-zone",
          className: "header-github-link",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              html: `
              <div class="footer_div">
                  <div class="logo_icons">
                    <a target="_blank" href="https://www.allxon.com/">
                        <img class="footer_logo" src="/img/Allxon_Logo_White-01.png" alt="">
                    </a>
                    <div class="icon_links">
                        <a target="_blank" href="https://github.com/allxon"><img src="/img/github.png" alt=""></a>
                        <a target="_blank" href="https://www.linkedin.com/company/allxoninc/"><img src="/img/linkedin.png" alt=""></a>
                        <a target="_blank" href="https://www.facebook.com/AllxonInc/"><img src="/img/facebook.png" alt=""></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCVyiQzhTiMOZg-XHlL5kFeA"><img src="/img/youtube.png" alt=""></a>
                    </div>
                  </div>
                  <div class="link_links">
                    <a target="_blank" href="https://www.allxon.com/contact-allxon-octo">Contact Us</a>
                    <a target="_blank" href="https://www.allxon.com/privacy-policy?hsLang=en">Privacy Policy</a>
                    <a target="_blank" href="https://www.allxon.com/terms-of-use-developer">Terms</a>
                  </div>
                  <p class="copyright">© ${(new Date()).getFullYear()} Allxon. All rights reserved.</p>
              </div>
               `,
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "batch", "powershell", "json"],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
