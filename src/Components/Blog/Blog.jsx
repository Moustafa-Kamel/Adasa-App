import postsData from '../../data/posts.json'
import HeroBlogSection from "./HeroBlogSection";
import BlogFilter from "./BlogFilter";
import BlogGrid from "./BlogGrid";
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';

export default function Blog() {
  const { posts } = postsData
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'الكل';

  const handleSelectCategory = (category) => {
    if (category === 'الكل') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'الكل' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLocaleLowerCase().trim());

    return matchesCategory && matchesSearch;
  })

  const handleResetFilters = () => {
    setSearchParams({}); // تفريغ الـ URL Params
    setSearchQuery('');
  };


  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <HeroBlogSection />
      <BlogFilter
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}

      />
      <BlogGrid
        posts={filteredPosts}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onResetFilters={handleResetFilters}
        hasActiveFilters={activeCategory !== 'الكل' || searchQuery.trim() !== ''}
      />
    </div>
  )
}
