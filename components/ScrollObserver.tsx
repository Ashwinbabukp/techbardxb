"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const selector = ".reveal-on-scroll, [data-reveal]";
    
    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    // Handle dynamically mounted or updated elements
    const mutationObserver = new MutationObserver(() => {
      const currentElements = document.querySelectorAll(selector);
      currentElements.forEach((el) => {
        if (!el.classList.contains("animate-in")) {
          observer.observe(el);
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
