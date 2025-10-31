// Simple markdown parser for basic formatting
export const parseMarkdown = (content: string, basePath: string = ""): string => {
  let html = content;

  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-200">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-6 text-slate-900 dark:text-slate-100">$1</h1>');

  // Convert bold text
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-slate-800 dark:text-slate-200">$1</strong>');

  // Convert italic text
  html = html.replace(/\*(.*?)\*/gim, '<em class="italic text-slate-700 dark:text-slate-300">$1</em>');

  // Convert code blocks
  html = html.replace(/```([\s\S]*?)```/gim, '<pre class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm text-slate-800 dark:text-slate-200">$1</code></pre>');

  // Convert inline code
  html = html.replace(/`(.*?)`/gim, '<code class="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm text-slate-800 dark:text-slate-200">$1</code>');

  // Convert images with proper path resolution (MUST be before links!)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, (_, alt, src) => {
    // Handle relative paths starting with ./
    let imageSrc = src;
    if (src.startsWith('./')) {
      // Remove ./ and prepend the base path
      imageSrc = basePath + src.substring(2);
    } else if (!src.startsWith('http') && !src.startsWith('/')) {
      // If it's a relative path without ./, prepend base path
      imageSrc = basePath + src;
    }
    return `<img src="/${imageSrc}" alt="${alt}" class="max-w-full h-auto my-4 rounded-lg shadow-md mx-auto block" />`;
  });

  // Convert links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // Convert horizontal rules
  html = html.replace(/^---$/gim, '<hr class="border-t-2 border-slate-200 dark:border-slate-700 my-6" />');

  // Convert line breaks
  html = html.replace(/\n\n/g, '</p><p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">');
  html = html.replace(/\n/g, '<br />');

  // Wrap in paragraph tags
  html = '<p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">' + html + '</p>';

  return html;
};