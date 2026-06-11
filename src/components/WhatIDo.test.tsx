import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WhatIDo from "./WhatIDo";

describe("WhatIDo", () => {
  it("includes the new AI/agentic and tooling skills alongside existing ones", () => {
    render(<WhatIDo />);

    ["Python", "React"].forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });

    ["LangChain", "smolagents", "ragprobe", "MCP Tooling", "Base44"].forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
