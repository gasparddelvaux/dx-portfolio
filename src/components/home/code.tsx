"use client";
import { Code } from "@/types/ui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";

type CodeBlockProps = {
  code: Code;
  animated: boolean;
};

type ColorMap = {
  dark: {
    [key: string]: string;
  };
  light: {
    [key: string]: string;
  };
};

const colorsMap: ColorMap = {
  dark: {
    rose: "#ddb3ff",
    orange: "#ffb38c",
    cyan: "#9cd6ff",
    blue: "#209fff",
    yellow: "#ffd71b",
    green: "#5fc095",
  },
  light: {
    rose: "#a331ff",
    orange: "#ff6515",
    cyan: "#21a3ff",
    blue: "#0072c9",
    yellow: "#c5a300",
    green: "#399069",
  },
};

export default function CodeBlock({ code, animated }: CodeBlockProps) {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setCurrentTheme(resolvedTheme === "dark" ? "dark" : "light");
  }, [resolvedTheme]);

  function getColors(value: string | string[] | boolean | number | object) {
    if (typeof value === "string") {
      return (
        <p>
          <span style={{ color: colorsMap[currentTheme]["green"] }}>
            "{value}"
          </span>
          ,
        </p>
      );
    }
    if (typeof value === "number") {
      return (
        <p>
          <span style={{ color: colorsMap[currentTheme]["green"] }}>
            {value}
          </span>
          ,
        </p>
      );
    }
    if (Array.isArray(value)) {
      return (
        <p>
          <span style={{ color: colorsMap[currentTheme]["blue"] }}>[</span>
          {value.map((item, index) => (
            <span key={index}>
              <span style={{ color: colorsMap[currentTheme]["green"] }}>
                "{item}"
              </span>
              {index < value.length - 1 && <span>, </span>}
            </span>
          ))}
          <span style={{ color: colorsMap[currentTheme]["blue"] }}>]</span>,
        </p>
      );
    }
    if (typeof value === "boolean") {
      return (
        <p>
          <span style={{ color: colorsMap[currentTheme]["orange"] }}>
            {value.toString()}
          </span>
          ,
        </p>
      );
    }
    if (typeof value === "object" && value !== null) {
      return (
        <div className="ms-8">
          {Object.entries(value).map(([key, val]) => (
            <div key={key} className="flex gap-1">
              <p style={{ color: colorsMap[currentTheme]["cyan"] }}>{key}:</p>
              {getColors(val)}
            </div>
          ))}
        </div>
      );
    }
  }
  function getAlignment(
    value: string | string[] | boolean | number | object,
    key: any
  ) {
    if (typeof value === "object" && !Array.isArray(value)) {
      return (
        <div key={key} className="ms-8 flex flex-col">
          <p style={{ color: colorsMap[currentTheme]["cyan"] }}>
            {key}:{" "}
            <span
              style={{ color: colorsMap[currentTheme]["yellow"] }}
            >{`{`}</span>
          </p>
          {getColors(value)}
          <p>
            <span
              style={{ color: colorsMap[currentTheme]["yellow"] }}
            >{`}`}</span>
            ,
          </p>
        </div>
      );
    } else {
      return (
        <div key={key} className="ms-8 flex gap-1">
          <p style={{ color: colorsMap[currentTheme]["cyan"] }}>{key}:</p>
          {getColors(value)}
        </div>
      );
    }
  }
  return (
    <Card className={animated ? "animated-border relative" : "h-full"}>
      <div className="border-b p-6 flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      {code && (
        <div className="p-6">
          <div className="flex items-center gap-1">
            <p style={{ color: colorsMap[currentTheme]["rose"] }}>const</p>
            <p>
              <span style={{ color: colorsMap[currentTheme]["orange"] }}>
                {code.variableName}
              </span>
              :
            </p>

            <p style={{ color: colorsMap[currentTheme]["orange"] }}>
              {code.type}
            </p>
            <p>=</p>
            <p style={{ color: colorsMap[currentTheme]["yellow"] }}>{`{`}</p>
          </div>
          {Object.entries(code.content).map(([key, value]) =>
            getAlignment(value, key)
          )}
          <p>
            <span
              style={{ color: colorsMap[currentTheme]["yellow"] }}
            >{`}`}</span>
            ;
          </p>
        </div>
      )}
    </Card>
  );
}
