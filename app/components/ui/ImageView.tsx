import Image from 'next/image';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ZoomIn , ZoomOut } from 'lucide-react';

export default function ImageView({ src, alt, width, height, className }: { src: any; alt: string; width: number; height: number; className: string }) {
  return (
    <PhotoProvider
      toolbarRender={({ onScale, scale }) => {
        return (
          <div className="flex gap-2">
            <ZoomIn onClick={() => onScale(scale + 1)} className="cursor-pointer text-zinc-400 hover:text-white transition-colors duration-150" />
            <ZoomOut onClick={() => onScale(scale - 1)} className="cursor-pointer text-zinc-400 hover:text-white transition-colors duration-150" />
          </div>
        );
      }}
    >
      <PhotoView src={src.src}>
        <Image alt={alt} src={src} width={width} height={height} className={`${className} cursor-zoom-in`} unoptimized />
      </PhotoView>
    </PhotoProvider>
  );
}
