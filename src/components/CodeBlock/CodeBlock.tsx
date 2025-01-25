import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative bg-black p-4 text-white rounded w-full max-w-[85%] overflow-auto border border-neutral-2 font-mono text-sm">
      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-neutral-2 hover:bg-grey21 text-white text-xs px-2 py-1 rounded transition"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>

      <code className="whitespace-pre-wrap break-words block">{code}</code>
    </div>
  );
};
