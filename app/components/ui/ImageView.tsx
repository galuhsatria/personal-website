import Image from 'next/image';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function ImageView({ src, alt, width, height, className }: { src: any; alt: string; width: number; height: number; className: string }) {
  return (
    <PhotoProvider
      toolbarRender={({ onScale, scale }) => {
        return (
          <>
            <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)} />
            <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)} />
          </>
        );
      }}
    >
      <PhotoView src={src.src}>
        <Image alt={alt} src={src} width={width} height={height} className={`${className} cursor-zoom-in`} unoptimized />
      </PhotoView>
    </PhotoProvider>
  );
}
