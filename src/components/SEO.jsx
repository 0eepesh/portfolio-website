import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, keywords }) {
  const { pathname } = useLocation();
  const siteUrl = "https://deepesh.com"; // Default placeholder domain, will resolve dynamically

  useEffect(() => {
    // 1. Update document title
    if (title) {
      document.title = title;
    }

    const currentUrl = siteUrl + pathname;

    // Helper function to update or create meta tags
    const updateMetaTag = (attribute, value, attributeValue, content) => {
      let element = document.querySelector(
        `meta[${attribute}="${attributeValue}"]`,
      );
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attribute, attributeValue);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    // Helper function to update link tags (e.g. canonical)
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (element) {
        element.setAttribute("href", href);
      } else {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        element.setAttribute("href", href);
        document.head.appendChild(element);
      }
    };

    // 2. Description
    if (description) {
      updateMetaTag("name", "description", "description", description);
      updateMetaTag(
        "property",
        "og:description",
        "og:description",
        description,
      );
      updateMetaTag(
        "name",
        "twitter:description",
        "twitter:description",
        description,
      );
    }

    // 3. Keywords
    if (keywords) {
      updateMetaTag("name", "keywords", "keywords", keywords);
    }

    // 4. Titles for Socials
    if (title) {
      updateMetaTag("property", "og:title", "og:title", title);
      updateMetaTag("name", "twitter:title", "twitter:title", title);
    }

    // 5. URLs
    updateMetaTag("property", "og:url", "og:url", currentUrl);
    updateLinkTag("canonical", currentUrl);
  }, [title, description, keywords, pathname]);

  return null;
}
