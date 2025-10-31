import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  ArrowLeft, 
  ExternalLink,
  FileText 
} from "lucide-react";
import { marked } from "marked";

import _blogs from "./profile_info/blogs.json";

const blogs = _blogs.blogs;

interface Blog {
  title: string;
  file_path: string;
  tags: string[];
  date: string;
}

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [blogContent, setBlogContent] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Configure marked options
  useEffect(() => {
    marked.setOptions({
      breaks: false,
      gfm: true,
    });
  }, []);

  const loadBlogContent = async (blog: Blog) => {
    setLoading(true);
    console.log('Loading blog:', blog.title, 'from path:', blog.file_path);
    try {
      // Use the file_path directly since it's now relative to public
      const response = await fetch(`/${blog.file_path}`);
      console.log('Fetch response:', response.status, response.ok);
      if (response.ok) {
        let content = await response.text();
        console.log('Blog content loaded, length:', content.length);
        
        // Process image paths in markdown before parsing
        content = content.replace(/!\[([^\]]*)\]\(\.\/([^)]+)\)/g, (_, alt, src) => {
          return `![${alt}](/assets/blogs/${src})`;
        });
        
        // Parse markdown to HTML using marked
        const html = await marked.parse(content);
        setBlogContent(html);
        setSelectedBlog(blog);
      } else {
        console.error('Failed to load blog content, status:', response.status);
        setBlogContent("Blog content could not be loaded. Please check the file path.");
        setSelectedBlog(blog);
      }
    } catch (error) {
      console.error('Error loading blog:', error);
      setBlogContent("Error loading blog content.");
      setSelectedBlog(blog);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const BlogList = () => (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 w-full">
      {blogs.map((blog, index) => (
        <Card 
          key={blog.title} 
          className="border-2 border-slate-200/60 dark:border-slate-700/60 shadow-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 cursor-pointer group w-full transform hover:scale-[1.02]"
          onClick={() => loadBlogContent(blog)}
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <CardHeader className="px-4 sm:px-6 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-3">
                  {blog.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{formatDate(blog.date)}</span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors flex-shrink-0" />
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pt-0">
            <div className="flex flex-wrap gap-2 sm:gap-2 mb-4 sm:mb-6">
              {blog.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="text-xs sm:text-sm transition-all duration-300 hover:scale-110 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 border border-purple-300 dark:border-purple-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <Button
              variant="outline"
              size="lg"
              className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-300 py-3 text-sm sm:text-base border-2 hover:border-blue-400 dark:hover:border-purple-400 hover:shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                loadBlogContent(blog);
              }}
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Read Full Article
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const BlogViewer = () => (
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          onClick={() => setSelectedBlog(null)}
          className="transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 border-2 hover:border-blue-400 dark:hover:border-purple-400 hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Button>
      </div>

      {selectedBlog && (
        <Card className="border-2 border-slate-200/60 dark:border-slate-700/60 shadow-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl w-full hover:shadow-purple-500/20 transition-all duration-500">
          <CardHeader className="px-4 sm:px-6 pb-4">
            <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              {selectedBlog.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(selectedBlog.date)}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedBlog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div 
                className="prose prose-lg prose-slate dark:prose-invert max-w-none
                  prose-headings:text-slate-900 dark:prose-headings:text-slate-100
                  prose-p:text-slate-700 dark:prose-p:text-slate-300
                  prose-a:text-blue-600 dark:prose-a:text-blue-400
                  prose-strong:text-slate-900 dark:prose-strong:text-slate-100
                  prose-code:text-slate-900 dark:prose-code:text-slate-100
                  prose-code:bg-slate-100 dark:prose-code:bg-slate-800
                  prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-code:before:content-[''] prose-code:after:content-['']
                  prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950
                  prose-pre:text-slate-100
                  prose-li:text-slate-700 dark:prose-li:text-slate-300
                  prose-hr:border-slate-300 dark:prose-hr:border-slate-700
                "
                dangerouslySetInnerHTML={{ __html: blogContent }}
              />
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6 transition-all duration-500">
      {selectedBlog ? (
        <BlogViewer />
      ) : (
        <BlogList />
      )}
    </div>
  );
};

export default Blogs;