import { ImageResponse } from '@vercel/og';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

export const prerender = false;

export async function GET({ url }: { url: URL }) {
  const title = url.searchParams.get('title') || 'Untitled Post';
  const author = url.searchParams.get('author') || 'Anonymous';
  const readingTime = url.searchParams.get('readingTime') || '';
  const image = url.searchParams.get('image') || '';

  // Load a font (try to cache it globally)
  const fontPath = path.resolve('./public/fonts/Inter-Regular.ttf');
  const fontData = fs.readFileSync(fontPath);

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: '1200px',
          height: '630px',
          position: 'relative',
          fontFamily: 'Inter',
          color: 'white',
          backgroundColor: '#111827',
        },
        children: [
          image && {
            type: 'img',
            props: {
              src: image,
              style: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.55)',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '60px',
                width: '100%',
                height: '100%',
              },
              children: [
                {
                  type: 'h1',
                  props: {
                    style: {
                      fontSize: '64px',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                      marginBottom: '20px',
                      maxWidth: '1000px',
                      color: 'white',
                    },
                    children: title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      gap: '20px',
                      fontSize: '28px',
                      opacity: 0.9,
                    },
                    children: [
                      { type: 'span', props: { children: `✍️ ${author}` } },
                      readingTime && {
                        type: 'span',
                        props: { children: `⏱ ${readingTime}` },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  // Render SVG → PNG
  const resvg = new Resvg(svg);
  const pngData = resvg.render().asPng();

  return new Response(pngData, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
