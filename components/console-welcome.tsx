"use client";

import { useEffect } from "react";

export function ConsoleWelcome() {
  useEffect(() => {
    const styles = [
      "font-size: 12px",
      "font-family: monospace",
      "background: white",
      "display: inline-block",
      "color: black",
      "padding: 8px 19px",
      "border: 1px dashed;",
    ].join(";");

    console.log(
`%cYo you got deeper, welcome to the matrix...
If you're looking at this, you're probably a dev or a really technical recruiter. Check out my GitHub or say hi at ilhamwibawaa@gmail.com!`,
      styles
    );

    console.log("%c if you find a bug, just pretend it's a feature, okay?", styles);
  }, []);

  return null;
}
