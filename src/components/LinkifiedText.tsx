import React from 'react';
import Link from 'next/link';

interface LinkifiedTextProps {
  text: string;
  className?: string;
}

export function LinkifiedText({ text, className }: LinkifiedTextProps) {
  // Regex to find URLs (http, https, www, or domain.tld) that are not already in an anchor tag.
  const urlRegex = /((?:https?:\/\/|www\.)[^\s<]+)|(\b[a-zA-Z0-9.-]+\.(?:com|org|net|edu|gov|io)\b)/g;
  
  const parts = text.split(urlRegex);

  return (
    <p className={className}>
      {parts.map((part, index) => {
        if (part && part.match(urlRegex)) {
          // Add https:// if the URL doesn't start with http/https
          let href = part;
          if (!part.startsWith('http') && !part.startsWith('www')) {
            href = `https://${part}`;
          } else if (part.startsWith('www')) {
            href = `https://${part}`;
          }

          return (
            <Link key={index} href={href} className="text-accent underline hover:text-accent/80" target="_blank" rel="noopener noreferrer">
              {part}
            </Link>
          );
        }
        // This check prevents rendering of undefined/null parts which can come from regex capturing groups
        if (part) {
          return part;
        }
        return null;
      })}
    </p>
  );
}
