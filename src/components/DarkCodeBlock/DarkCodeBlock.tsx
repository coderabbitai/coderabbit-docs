import React, { useState, useMemo } from 'react';
import styles from './DarkCodeBlock.module.css';

interface DarkCodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

const DarkCodeBlock: React.FC<DarkCodeBlockProps> = ({
  children,
  language = 'python',
  title
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const KEYWORDS = useMemo(() => ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'class', 'import', 'from', 'as', 'try', 'except', 'finally', 'with', 'pass', 'break', 'continue', 'and', 'or', 'not', 'in', 'is', 'lambda', 'yield', 'global', 'nonlocal', 'assert', 'del', 'raise', 'True', 'False', 'None'], []);

  const highlightedCode = useMemo(() => {
    const highlightCode = (code: string, lang: string) => {
    const lines = code.trim().split('\n');
    const isShortCode = lines.length <= 3;

    return lines.map((line, index) => {
      if (lang === 'python') {
        const tokens = [];
        let i = 0;
        const text = line;

        while (i < text.length) {
          if (/\s/.test(text[i])) {
            let start = i;
            while (i < text.length && /\s/.test(text[i])) i++;
            tokens.push({ type: 'whitespace', value: text.substring(start, i) });
            continue;
          }

          if (text[i] === '#') {
            const commentText = text.substring(i);
            if (index === 0 && commentText.includes('.py')) {
              tokens.push({ type: 'header', value: commentText });
            } else {
              tokens.push({ type: 'comment', value: commentText });
            }
            break;
          }

          if (text.substring(i, i + 3) === '"""' || text.substring(i, i + 3) === "'''") {
            const quote = text.substring(i, i + 3);
            let end = i + 3;
            while (end < text.length - 2 && text.substring(end, end + 3) !== quote) {
              end++;
            }
            if (end < text.length - 2) end += 3;
            tokens.push({ type: 'string', value: text.substring(i, end) });
            i = end;
            continue;
          }

          if (text[i] === '"' || text[i] === "'") {
            const quote = text[i];
            let end = i + 1;
            while (end < text.length && text[end] !== quote) {
              if (text[end] === '\\') end += 2;
              else end++;
            }
            if (end < text.length) end++;
            tokens.push({ type: 'string', value: text.substring(i, end) });
            i = end;
            continue;
          }

          if (/\d/.test(text[i])) {
            let start = i;
            while (i < text.length && /[\d.]/.test(text[i])) i++;
            tokens.push({ type: 'number', value: text.substring(start, i) });
            continue;
          }

          if (/[a-zA-Z_]/.test(text[i])) {
            let start = i;
            while (i < text.length && /[a-zA-Z0-9_]/.test(text[i])) i++;
            const word = text.substring(start, i);

            if (KEYWORDS.includes(word)) {
              tokens.push({ type: 'keyword', value: word });
            } else {
              const prevKeywordToken = tokens.filter(t => t.type !== 'whitespace').pop();
              if (prevKeywordToken && prevKeywordToken.value === 'def') {
                tokens.push({ type: 'function', value: word });
              } else {
                tokens.push({ type: 'identifier', value: word });
              }
            }
            continue;
          }

          tokens.push({ type: 'operator', value: text[i] });
          i++;
        }

        const htmlParts = tokens.map(token => {
          switch (token.type) {
            case 'keyword':
              return `<span class="keyword">${token.value}</span>`;
            case 'string':
              return `<span class="string">${token.value}</span>`;
            case 'function':
              return `<span class="function">${token.value}</span>`;
            case 'number':
              return `<span class="number">${token.value}</span>`;
            case 'comment':
              return `<span class="comment">${token.value}</span>`;
            case 'header':
              return `<span class="header">${token.value}</span>`;
            case 'whitespace':
            case 'operator':
            case 'identifier':
            default:
              return token.value;
          }
        });

        return (
          <div key={index} className={styles.codeLine}>
            <span dangerouslySetInnerHTML={{ __html: htmlParts.join('') }} />
          </div>
        );
      }

      return (
        <div key={index} className={styles.codeLine}>
          <span>{line}</span>
        </div>
      );
    });
    };

    return highlightCode(children, language);
  }, [children, language, KEYWORDS]);

  const lineCount = children.trim().split('\n').length;
  const isShortCode = lineCount <= 3;

  return (
    <div className={styles.codeBlock}>
      {title && (
        <div className={styles.codeHeader}>
          <span className={styles.codeTitle}>{title}</span>
        </div>
      )}
      <div className={styles.codeContainer}>
        <pre className={`${styles.codeContent} ${isShortCode ? styles.shortCode : ''}`}>
          <code className={`language-${language}`}>
            {highlightedCode}
          </code>
        </pre>
        <div className={styles.copyButtonContainer} onClick={handleCopy}>
          <button
            className={styles.copyButton}
            onClick={handleCopy}
            title="Copy code"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkCodeBlock;
