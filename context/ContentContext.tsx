import React, { createContext, useContext, useState, ReactNode } from "react";
import { ContentState, ContentContextType } from "../types";

const defaultContent: ContentState = {
  hero: {
    title: "At the first step of your next chapter.",
    subtitle: "Residential and commercial inspections with practical insight, clear reporting, and the information you need to move forward with confidence.",
    cta: "Book Inspection",
  },
  about: {
    title: "Your New Chapter Starts on Solid Ground",
    story: "At New Chapter Inspection & Consulting, we believe buying a property is more than a transaction. It often marks the beginning of a new chapter — whether that means moving into a home, making an investment, or taking the next step in your business. Our goal is to support that decision with clear, reliable information at one of the most important stages of the process: the inspection.\n\nNew Chapter Inspection & Consulting is led by Jake Choi, a BC licensed inspector, Red Seal carpenter, and former general contractor with more than 10 years of experience in construction. His background includes hands-on work in how buildings are assembled, finished, repaired, and evaluated in the real world. His experience in the field brings practical depth to each inspection, helping identify visible deficiencies, recognize commonly observed construction and maintenance concerns, and provide clients with meaningful context around the property’s condition.\n\nWith a focus on careful observation, clear reporting, and straightforward communication, Jake provides an inspection process designed to help clients better understand the property as it stands today and make informed decisions about what comes next.",
  },
  contact: {
    email: "info@newchapterinspectbc.com",
    phone: "1.672.533.0062",
    address: "Vancouver, BC",
  },
};

const ContentContext = createContext<ContentContextType | null>(null);

interface ContentProviderProps {
  children?: ReactNode;
}

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [content, setContent] = useState<ContentState>(defaultContent);

  const updateContent = (section: keyof ContentState, key: string, value: string) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const updateNestedContent = (section: keyof ContentState, nestedKey: string, key: string, value: string) => {
     setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        // @ts-ignore
        [nestedKey]: {
             // @ts-ignore
             ...prev[section][nestedKey],
             [key]: value
        }
      },
    }));
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, updateNestedContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};