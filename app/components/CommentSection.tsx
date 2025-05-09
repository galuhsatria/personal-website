'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function CommentSection() {
  const { theme } = useTheme();
  return (
    <div>
      <Giscus
        id="comments"
        repo="galuhsatria/personal-website"
        repoId="R_kgDOKKHOfQ"
        category="General"
        categoryId="DIC_kwDOKKHOfc4Cp8eh"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
